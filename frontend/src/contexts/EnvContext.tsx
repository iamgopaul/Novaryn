import { createContext, useContext } from "react";
import { type Environment, type Project } from "../api";

export type EnvContextValue = {
  projects: Project[];
  environments: Environment[];
  selectedProject: Project | null;
  selectedEnv: Environment | null;
  setSelectedProject: (p: Project) => void;
  setSelectedEnv: (e: Environment) => void;
  envsForProject: Environment[];
  reload: () => void;
};

export const EnvContext = createContext<EnvContextValue | null>(null);

export function useEnv() {
  const ctx = useContext(EnvContext);
  if (!ctx) throw new Error("useEnv must be used within EnvProvider");
  return ctx;
}

export function envColor(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("prod")) return "text-red-400 bg-red-900/30 border-red-800";
  if (n.includes("stag")) return "text-yellow-400 bg-yellow-900/30 border-yellow-800";
  if (n.includes("dev")) return "text-green-400 bg-green-900/30 border-green-800";
  return "text-blue-400 bg-blue-900/30 border-blue-800";
}
