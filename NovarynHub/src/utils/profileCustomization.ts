export type ThemeId = "default" | "ocean" | "sunset" | "forest";

export type ProfileCustomization = {
  avatarUrl?: string;
  theme?: ThemeId;
};

export const HUB_THEMES: Array<{ id: ThemeId; label: string }> = [
  { id: "default", label: "Default" },
  { id: "ocean", label: "Ocean" },
  { id: "sunset", label: "Sunset" },
  { id: "forest", label: "Forest" },
];

const STORAGE_KEY = "novaryn.profile.customization.v1";
const EVENT_NAME = "novaryn-profile-customization";

type ProfileCustomizationMap = Record<string, ProfileCustomization>;

function readAll(): ProfileCustomizationMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProfileCustomizationMap;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed;
  } catch {
    return {};
  }
}

function writeAll(data: ProfileCustomizationMap): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getProfileCustomization(userId: string): ProfileCustomization {
  const all = readAll();
  return all[userId] ?? {};
}

export function setProfileCustomization(userId: string, customization: ProfileCustomization): void {
  const all = readAll();
  all[userId] = {
    ...all[userId],
    ...customization,
  };
  writeAll(all);
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { userId } }));
}

export function subscribeProfileCustomization(
  userId: string,
  onChange: (next: ProfileCustomization) => void,
): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key && event.key !== STORAGE_KEY) return;
    onChange(getProfileCustomization(userId));
  };

  const onCustom = (event: Event) => {
    const customEvent = event as CustomEvent<{ userId?: string }>;
    if (customEvent.detail?.userId && customEvent.detail.userId !== userId) return;
    onChange(getProfileCustomization(userId));
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT_NAME, onCustom);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT_NAME, onCustom);
  };
}
