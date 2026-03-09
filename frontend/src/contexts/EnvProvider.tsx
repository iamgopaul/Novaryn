import { useEffect, useState, type ReactNode } from "react";
import { api, type Environment, type Project } from "../api";
import { EnvContext } from "./EnvContext";

export default function EnvProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedEnv, setSelectedEnv] = useState<Environment | null>(null);

  function load() {
    Promise.all([api.projects.list(), api.environments.list()]).then(([projs, envs]) => {
      setProjects(projs);
      setEnvironments(envs);
      setSelectedProject((prev) => prev ?? projs[0] ?? null);
      setSelectedEnv((prev) => {
        if (prev) return prev;
        const firstProj = projs[0];
        if (!firstProj) return null;
        return envs.find((e) => e.projectId === firstProj.id) ?? null;
      });
    });
  }

  useEffect(() => { load(); }, []);

  function handleSetProject(p: Project) {
    setSelectedProject(p);
    const firstEnv = environments.find((e) => e.projectId === p.id);
    setSelectedEnv(firstEnv ?? null);
  }

  const envsForProject = environments.filter((e) => e.projectId === selectedProject?.id);

  return (
    <EnvContext.Provider value={{
      projects, environments, selectedProject, selectedEnv,
      setSelectedProject: handleSetProject, setSelectedEnv,
      envsForProject, reload: load,
    }}>
      {children}
    </EnvContext.Provider>
  );
}
