import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  message: string;
};

export default class PageErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message || "Something went wrong" };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Tab render error:", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="max-w-3xl border border-red-800 bg-red-950/30 rounded-lg p-4">
        <h1 className="text-lg font-semibold text-red-300 mb-2">This tab failed to load</h1>
        <p className="text-sm text-red-200/90 mb-3">{this.state.message}</p>
        <button
          onClick={() => {
            window.history.pushState({}, "", "/novaryn");
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
          className="text-xs bg-red-700 hover:bg-red-600 text-white px-3 py-1.5 rounded"
        >
          Go Home
        </button>
      </div>
    );
  }
}