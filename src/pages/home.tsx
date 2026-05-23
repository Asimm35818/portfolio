import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

export default function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center bg-white dark:bg-[#1a1b26] transition-colors duration-300 text-lg">
        <div className="max-w-screen-2xl mx-auto text-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 sm:mb-10 font-bold leading-tight tracking-tight">
              Hi, I'm a Full Stack Developer
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl">
              I build modern web applications with React, Node.js, and cloud
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              <Link
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl bg-blue-600 dark:bg-[#7aa2f7] text-white dark:text-[#1a1b26] rounded-lg hover:bg-blue-700 dark:hover:bg-[#89b4fa] transition-colors"
                to="/projects"
              >
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-9 h-9"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-5 text-lg sm:text-xl border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-[#24283b] transition-colors"
                to="/about"
              >
                About Me
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <a
                href="https://github.com/Asimm35818"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 transform duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github w-12 h-12"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/asimm35818/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 transform duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-12 h-12"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:asimm35818@gmail.com"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 transform duration-300 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail w-12 h-12"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1b26] transition-colors duration-300">
        <div className="mx-auto w-full max-w-screen-2xl">
          <h2 className="text-3xl mb-4">Featured Projects:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} projectId={project.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
