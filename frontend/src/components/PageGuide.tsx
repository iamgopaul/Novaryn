import { useState } from "react";

export interface GuideStep {
  step: string;
  title: string;
  desc: string;
}

interface PageGuideProps {
  id: string; // unique key for localStorage dismiss state
  title: string;
  subtitle?: string;
  steps: GuideStep[];
}

export default function PageGuide({ id, title, subtitle, steps }: PageGuideProps) {
  const storageKey = `guide_dismissed_${id}`;
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(storageKey) === "1");
  const [open, setOpen] = useState(!dismissed);

  function dismiss() {
    localStorage.setItem(storageKey, "1");
    setDismissed(true);
  }

  if (dismissed) {
    return (
      <button
        onClick={() => { localStorage.removeItem(storageKey); setDismissed(false); setOpen(true); }}
        className="mb-5 text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
      >
        Show guide ↓
      </button>
    );
  }

  return (
    <div className="mb-6 border border-indigo-900 bg-indigo-950/40 rounded-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-indigo-950/60 transition-colors"
      >
        <div>
          <span className="text-sm font-semibold text-indigo-300">{title}</span>
          {subtitle && <span className="ml-2 text-xs text-indigo-500">{subtitle}</span>}
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-xs text-indigo-500">{open ? "Hide" : "Show"}</span>
          <span className="text-indigo-500 text-xs">{open ? "▲" : "▼"}</span>
        </div>
      </button>

      {/* Steps */}
      {open && (
        <div className="px-4 pb-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-3 bg-gray-900/60 border border-indigo-900/50 rounded-lg p-3">
                <div className="w-5 h-5 shrink-0 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {s.step}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-200 mb-0.5">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-end">
            <button
              onClick={dismiss}
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Don't show again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
