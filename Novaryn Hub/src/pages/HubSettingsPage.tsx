import { useEffect, useRef, useState } from "react";
import { api } from "../api";
import { useAuth } from "../contexts/AuthContext";
import { getProfileCustomization, HUB_THEMES, setProfileCustomization, type ThemeId } from "../utils/profileCustomization";

type SettingsSubPage = "account" | "customization" | "security";

export default function HubSettingsPage() {
  const { user: currentUser, refreshUser } = useAuth();
  const [subPage, setSubPage] = useState<SettingsSubPage>("account");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Account fields
  const [name, setName] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [nameMessage, setNameMessage] = useState("");

  const [username, setUsername] = useState("");
  const [savingUsername, setSavingUsername] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState("");

  const [phone, setPhone] = useState("");
  const [savingPhone, setSavingPhone] = useState(false);
  const [phoneMessage, setPhoneMessage] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [savingAvatar, setSavingAvatar] = useState(false);
  const [avatarMessage, setAvatarMessage] = useState("");

  // Image upload modal state
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadingImage, setUploadingImage] = useState<string | null>(null);
  const [imageZoom, setImageZoom] = useState(1);
  const [imagePan, setImagePan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Customization fields
  const [theme, setTheme] = useState<ThemeId>("default");
  const [savingTheme, setSavingTheme] = useState(false);
  const [themeMessage, setThemeMessage] = useState("");

  // Security fields
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [savingSecurity, setSavingSecurity] = useState(false);
  const [securityMessage, setSecurityMessage] = useState("");

  // Password fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    setName(currentUser?.name ?? "");
    setUsername(currentUser?.username ?? "");
    setPhone(currentUser?.phone ?? "");

    if (currentUser) {
      // Use avatar from database first, then fall back to localStorage
      const dbAvatarUrl = (currentUser as any).avatarUrl;
      setAvatarUrl(dbAvatarUrl ?? getProfileCustomization(currentUser.id).avatarUrl ?? "");
      
      const customization = getProfileCustomization(currentUser.id);
      setTheme(customization.theme ?? "default");
    } else {
      setAvatarUrl("");
      setTheme("default");
    }

    setTwoFactorEnabled(currentUser?.twoFactorEnabled ?? false);
    clearMessages();
  }, [currentUser]);

  function clearMessages() {
    setNameMessage("");
    setUsernameMessage("");
    setPhoneMessage("");
    setAvatarMessage("");
    setThemeMessage("");
    setSecurityMessage("");
    setPasswordMessage("");
    setError("");
  }

  function handleAvatarClick() {
    fileInputRef.current?.click();
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target?.result as string;
      setUploadingImage(imageData);
      setImageZoom(1);
      setImagePan({ x: 0, y: 0 });
      setUploadModalOpen(true);
    };
    reader.readAsDataURL(file);

    // Reset file input
    e.target.value = "";
  }

  function handleImageWheel(e: React.WheelEvent<HTMLDivElement>) {
    e.preventDefault();
    const newZoom = Math.min(Math.max(imageZoom + (e.deltaY > 0 ? -0.1 : 0.1), 1), 3);
    setImageZoom(newZoom);
  }

  function handlePanStart(e: React.MouseEvent<HTMLDivElement>) {
    setIsDragging(true);
    setDragStart({ x: e.clientX - imagePan.x, y: e.clientY - imagePan.y });
  }

  function handlePanMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging) return;
    setImagePan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  }

  function handlePanEnd() {
    setIsDragging(false);
  }

  async function saveCroppedImage() {
    if (!uploadingImage || !currentUser) return;

    setSavingAvatar(true);
    setError("");
    setAvatarMessage("");

    try {
      // Create canvas with the cropped image
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Failed to get canvas context");

      const frameSize = 200; // Size of the square frame in pixels
      canvas.width = frameSize;
      canvas.height = frameSize;

      // Draw background fill (no clipping for square)
      ctx.fillStyle = "#1f2937";
      ctx.fillRect(0, 0, frameSize, frameSize);

      // Load and draw image with zoom and pan applied
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      // Use Promise wrapper to properly await image load
      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          try {
            // Get the original image's aspect ratio
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            
            // Calculate the visible area dimensions on the main canvas
            const mainCanvasSize = 400; // The editing canvas display size
            const scaleFactor = frameSize / mainCanvasSize;
            
            // Apply pan and zoom to the image position
            const x = (frameSize / 2) + (imagePan.x * scaleFactor);
            const y = (frameSize / 2) + (imagePan.y * scaleFactor);
            
            // Scale based on zoom while maintaining aspect ratio
            const baseSize = frameSize * imageZoom;
            let width: number;
            let height: number;
            
            if (aspectRatio > 1) {
              // Landscape: fit width to frame, scale height
              width = baseSize;
              height = baseSize / aspectRatio;
            } else {
              // Portrait or square: fit height to frame, scale width
              width = baseSize * aspectRatio;
              height = baseSize;
            }

            ctx.drawImage(img, x - width / 2, y - height / 2, width, height);

            // Use JPEG with 0.8 quality for better compression than PNG
            // This reduces 200x200 image from ~100KB+ to ~15-20KB
            const croppedImageData = canvas.toDataURL("image/jpeg", 0.8);
            console.log("Cropped image created (JPEG):", croppedImageData.length, "bytes");
            
            // Save to database
            api.profile.update({ avatarUrl: croppedImageData })
              .then(() => {
                console.log("API response received, refreshing user...");
                return refreshUser();
              })
              .then(() => {
                console.log("User refreshed, updating state...");
                setProfileCustomization(currentUser.id, {
                  avatarUrl: croppedImageData,
                  theme,
                });
                setAvatarUrl(croppedImageData);
                setAvatarMessage("Profile picture saved.");
                setUploadingImage(null);
                setUploadModalOpen(false);
                resolve();
              })
              .catch((err) => {
                console.error("Save failed:", err);
                reject(err);
              });
          } catch (err) {
            reject(err);
          }
        };

        img.onerror = () => {
          reject(new Error("Failed to load image"));
        };
        
        img.src = uploadingImage;
      });
    } catch (err) {
      console.error("Save image error:", err);
      setError((err as Error).message);
      setUploadModalOpen(true);
    } finally {
      setSavingAvatar(false);
    }
  }

  async function saveName() {
    if (!currentUser) return;

    setSavingName(true);
    setError("");
    setNameMessage("");

    try {
      const trimmedName = name.trim();
      if (!trimmedName) throw new Error("Name is required.");

      await api.profile.update({ name: trimmedName });
      await refreshUser();
      setNameMessage("Name saved.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingName(false);
    }
  }

  async function saveUsername() {
    if (!currentUser) return;

    setSavingUsername(true);
    setError("");
    setUsernameMessage("");

    try {
      const trimmedUsername = username.trim();
      if (trimmedUsername && !/^[a-zA-Z0-9_]{3,32}$/.test(trimmedUsername)) {
        throw new Error("Username must be 3-32 chars and use letters, numbers, or underscore.");
      }

      await api.profile.update({ username: trimmedUsername || undefined });
      await refreshUser();
      setUsernameMessage("Username saved.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingUsername(false);
    }
  }

  async function savePhone() {
    if (!currentUser) return;

    setSavingPhone(true);
    setError("");
    setPhoneMessage("");

    try {
      const trimmedPhone = phone.trim();
      if (trimmedPhone && trimmedPhone.length < 7) {
        throw new Error("Phone number should be at least 7 characters.");
      }

      await api.profile.update({ phone: trimmedPhone || undefined });
      await refreshUser();
      setPhoneMessage("Phone saved.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingPhone(false);
    }
  }

  async function saveTheme() {
    if (!currentUser) return;

    setSavingTheme(true);
    setError("");
    setThemeMessage("");

    try {
      setProfileCustomization(currentUser.id, {
        avatarUrl: avatarUrl.trim() || undefined,
        theme,
      });

      setThemeMessage("Theme saved.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingTheme(false);
    }
  }

  async function saveSecurity() {
    setSavingSecurity(true);
    setError("");
    setSecurityMessage("");
    try {
      await api.profile.update({ twoFactorEnabled, twoFactorMethod: "email" });
      await refreshUser();
      setSecurityMessage(twoFactorEnabled ? "Two-factor authentication is now ON." : "Two-factor authentication is now OFF.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingSecurity(false);
    }
  }

  async function savePassword() {
    setSavingPassword(true);
    setError("");
    setPasswordMessage("");

    try {
      if (!currentPassword) throw new Error("Current password is required.");
      if (!newPassword || newPassword.length < 8) throw new Error("New password must be at least 8 characters.");
      if (newPassword !== confirmPassword) throw new Error("New password and confirmation do not match.");

      await api.profile.update({ currentPassword, newPassword });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPasswordMessage("Password updated successfully.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSavingPassword(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Hub Settings</h1>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {([
          { id: "account", label: "Account" },
          { id: "customization", label: "Customization" },
          { id: "security", label: "Security" },
        ] as Array<{ id: SettingsSubPage; label: string }>).map((item) => (
          <button
            key={item.id}
            onClick={() => setSubPage(item.id)}
            className={`px-3 py-1.5 text-xs rounded border transition-colors ${
              subPage === item.id
                ? "bg-indigo-900/40 border-indigo-700 text-indigo-300"
                : "bg-gray-900 border-gray-700 text-gray-400 hover:text-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {subPage === "account" && (
        <section className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-300 mb-4">Account</h2>
          <div className="space-y-4">
            {/* Profile picture - At the top */}
            <div className="flex flex-col items-center gap-3 pb-4 border-b border-gray-800">
              <button
                onClick={handleAvatarClick}
                disabled={savingAvatar}
                className="w-24 h-24 rounded-lg overflow-hidden bg-gray-800 border-2 border-gray-700 hover:border-indigo-500 disabled:opacity-50 flex items-center justify-center cursor-pointer transition-colors"
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold text-white uppercase">{(currentUser?.name ?? "?")[0]}</span>
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-1">Click to upload profile picture</p>
                {avatarMessage && <p className="text-xs text-green-400">{avatarMessage}</p>}
              </div>
            </div>

            {/* Display name */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs text-gray-400">Display name</label>
              </div>
              <div className="flex gap-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={saveName}
                  disabled={savingName}
                  className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded font-medium whitespace-nowrap"
                >
                  {savingName ? "Saving…" : "Save"}
                </button>
              </div>
              {nameMessage && <p className="text-xs text-green-400 mt-1">{nameMessage}</p>}
            </div>

            {/* Username */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs text-gray-400">Username</label>
              </div>
              <div className="flex gap-2">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={saveUsername}
                  disabled={savingUsername}
                  className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded font-medium whitespace-nowrap"
                >
                  {savingUsername ? "Saving…" : "Save"}
                </button>
              </div>
              {usernameMessage && <p className="text-xs text-green-400 mt-1">{usernameMessage}</p>}
              <p className="text-xs text-gray-600 mt-1">3-32 characters, letters, numbers, or underscore</p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs text-gray-400">Phone</label>
              </div>
              <div className="flex gap-2">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={savePhone}
                  disabled={savingPhone}
                  className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded font-medium whitespace-nowrap"
                >
                  {savingPhone ? "Saving…" : "Save"}
                </button>
              </div>
              {phoneMessage && <p className="text-xs text-green-400 mt-1">{phoneMessage}</p>}
            </div>
          </div>

          {/* Image Adjustment Modal */}
          {uploadModalOpen && uploadingImage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Adjust your profile picture</h3>
                {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Image adjustment area */}
                  <div className="md:col-span-2">
                    <div
                      className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden border border-gray-700 cursor-move select-none"
                      onWheel={handleImageWheel}
                      onMouseDown={handlePanStart}
                      onMouseMove={handlePanMove}
                      onMouseUp={handlePanEnd}
                      onMouseLeave={handlePanEnd}
                    >
                      {/* Background for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

                      {/* Circular crop mask - only shows what will be saved */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Square frame overlay */}
                        <div className="absolute w-40 h-40 rounded-lg border-3 border-indigo-500 shadow-lg" />
                      </div>

                      {/* Image with smooth zoom and pan */}
                      <img
                        src={uploadingImage}
                        alt="Adjusting"
                        className="absolute select-none"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${imagePan.x}px), calc(-50% + ${imagePan.y}px)) scale(${imageZoom})`,
                          transformOrigin: "center",
                          cursor: isDragging ? "grabbing" : "grab",
                          transition: isDragging ? "none" : "transform 0.1s ease-out",
                          maxWidth: "none",
                          maxHeight: "none",
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* Help text */}
                    <div className="mt-4 space-y-2 text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-400 font-semibold">Scroll</span> to zoom in/out
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-400 font-semibold">Drag</span> to move the image
                      </div>
                    </div>
                  </div>

                  {/* Preview and controls */}
                  <div className="flex flex-col gap-4">
                    {/* Square preview - exactly matches the crop above */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Preview</p>
                      <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-800 border-2 border-indigo-500 shadow-lg flex items-center justify-center relative">
                        {/* Scale factor: preview is 128px, final crop is 200px, so 128/200 = 0.64 */}
                        <img
                          src={uploadingImage}
                          alt="Preview"
                          style={{
                            transform: `translate(calc(-50% + ${imagePan.x * 0.64}px), calc(-50% + ${imagePan.y * 0.64}px)) scale(${imageZoom * 0.64})`,
                            left: "50%",
                            top: "50%",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          className="absolute"
                        />
                      </div>
                    </div>

                    {/* Zoom control */}
                    <div className="bg-gray-800 rounded-lg p-3">
                      <p className="text-xs font-medium text-gray-400 mb-2">Zoom: {(imageZoom * 100).toFixed(0)}%</p>
                      <input
                        type="range"
                        min="1"
                        max="300"
                        value={imageZoom * 100}
                        onChange={(e) => setImageZoom(parseInt(e.target.value) / 100)}
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>100%</span>
                        <span>300%</span>
                      </div>
                    </div>

                    {/* Reset button */}
                    <button
                      onClick={() => {
                        setImageZoom(1);
                        setImagePan({ x: 0, y: 0 });
                      }}
                      className="w-full text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded font-medium transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-6 border-t border-gray-800">
                  <button
                    onClick={() => {
                      setUploadModalOpen(false);
                      setUploadingImage(null);
                    }}
                    className="flex-1 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveCroppedImage}
                    disabled={savingAvatar}
                    className="flex-1 text-sm bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded font-medium transition-colors"
                  >
                    {savingAvatar ? "Saving…" : "Save picture"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {subPage === "customization" && (
        <section className="border border-gray-800 bg-gray-900 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-300 mb-4">Customization</h2>
          <div className="space-y-4">
            {/* Theme */}
            <div>
              <label className="block text-xs text-gray-400 mb-2">Theme</label>
              <div className="flex gap-2 items-start">
                <div className="flex-1">
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value as ThemeId)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                  >
                    {HUB_THEMES.map((themeOption) => (
                      <option key={themeOption.id} value={themeOption.id}>{themeOption.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-600 mt-1">Pick a personal color theme for your Hub workspace.</p>
                </div>
                <button
                  onClick={saveTheme}
                  disabled={savingTheme}
                  className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded font-medium whitespace-nowrap h-fit mt-0.5"
                >
                  {savingTheme ? "Saving…" : "Save"}
                </button>
              </div>
              {themeMessage && <p className="text-xs text-green-400 mt-2">{themeMessage}</p>}
            </div>
          </div>
        </section>
      )}

      {subPage === "security" && (
        <>
          <section className="border border-gray-800 bg-gray-900 rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-300 mb-4">Two-factor authentication</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <input
                      id="twoFactorEnabled"
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                    />
                    <label htmlFor="twoFactorEnabled" className="text-sm text-gray-300">Enable two-factor authentication</label>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">Verification and recovery codes are sent by email only.</p>
                </div>
                <button
                  onClick={saveSecurity}
                  disabled={savingSecurity || twoFactorEnabled === (currentUser?.twoFactorEnabled ?? false)}
                  className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded font-medium whitespace-nowrap"
                >
                  {savingSecurity ? "Saving…" : "Save"}
                </button>
              </div>
              {securityMessage && <p className="text-xs text-green-400">{securityMessage}</p>}
            </div>
          </section>

          <section className="border border-gray-800 bg-gray-900 rounded-lg p-4 mt-6">
            <h2 className="text-sm font-medium text-gray-300 mb-4">Password</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-2">Current password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">New password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Confirm new password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              {passwordMessage && <p className="text-xs text-green-400 mb-2">{passwordMessage}</p>}
              <button
                onClick={savePassword}
                disabled={savingPassword}
                className="text-xs bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3 py-2 rounded font-medium"
              >
                {savingPassword ? "Updating…" : "Update password"}
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
