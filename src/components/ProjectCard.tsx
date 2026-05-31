import React from "react";
import PlaceholderImage from "../assets/image.svg";
import RoundedLabel from "./RoundedLabel";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  /**
   * The unique identifier of the project to display.
   * It matches the `id` field exported from `projects.ts`.
   */
  projectId: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;
  if (project.hidden == true) return null;

  return (
    <Link key={project.id} to={`/projects/${project.slug}`}>
      <div
        className={`bg-white dark:bg-[#24283b] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 group flex flex-col cursor-pointer hover:shadow-xl h-full w-full`}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            className="h-full w-full object-cover blur-sm transition-all duration-300 group-hover:blur-none"
            src={project.image ?? PlaceholderImage}
            alt={project.title}
          />
          {project.isWIP && project.nextProject && (
            <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden pointer-events-none">
              <div className="absolute -right-11 top-5 w-36 rotate-45 bg-pink-500 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 shadow-md dark:bg-pink-400">
                Up Next
              </div>
            </div>
          )}
          {project.isWIP && project.nextProject === false && (
            <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden pointer-events-none">
              <div className="absolute -right-11 top-5 w-36 rotate-45 bg-amber-500 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 shadow-md dark:bg-amber-400">
                WIP
              </div>
            </div>
          )}
        </div>

        <div className="m-4 flex flex-1 flex-col">
          <h2 className="mb-3 text-xl text-gray-600 transition-colors hover:text-gray-400 dark:text-gray-300">
            {project.title}
          </h2>
          <p className="mb-4 text-base text-gray-600 wrap-anywhere dark:text-gray-300">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <RoundedLabel key={tech} className="mx-1" text={tech} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
