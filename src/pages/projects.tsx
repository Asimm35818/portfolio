import React, { useEffect } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import MiniProjectCard from "../components/MiniProjectCard";
interface PageProps {
  title?: string;
}

const Projects: React.FC<PageProps> = ({ title = "Projects" }) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return (
    <main className="flex-1">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl mb-4">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A selection of projects I've worked on recently
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <MiniProjectCard key={project.id} projectId={project.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
