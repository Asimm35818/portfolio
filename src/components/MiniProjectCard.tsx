import React from "react";
import RoundedLabel from "./RoundedLabel";
import { projects } from "../data/projects";

interface MiniProjectCardProps {
  /**
   * The unique identifier of the project to display.
   * It matches the `id` field exported from `projects.ts`.
   */
  projectId: number;
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;
  if (project.hidden == true) return null;

  return (
    <div className="bg-white dark:bg-[#24283b] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      {" "}
      <a
        className="p-6 flex-1"
        href={`/projects/${project.slug}`}
        data-discover="true"
      >
        <h3 className="text-xl mb-3 hover:text-blue-600 dark:hover:text-[#7aa2f7] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 max-h-20 overflow-y-auto">
          {project.tech.map((tech) => (
            <RoundedLabel key={tech} className="mx-1" text={tech} />
          ))}
        </div>
      </a>
      <div className="flex gap-4 px-6 pb-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-github w-5 h-5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          Code
        </a>
        <a
          href={project.demo!}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <svg
            xmlns={project.image}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-external-link w-5 h-5"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          Demo
        </a>
      </div>
    </div>
  );
};

export default MiniProjectCard;
