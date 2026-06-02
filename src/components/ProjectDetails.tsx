import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import RoundedLabel from "./RoundedLabel";
import NotFound from "../pages/NotFound";

const ProjectDetails: React.FC = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-6 text-center sm:p-10">
        <NotFound></NotFound>
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="py-10 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:text-base mb-6 sm:mb-8"
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
              className="lucide lucide-arrow-left w-4 h-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Projects
          </Link>

          <div className="mb-8">
            <div className="mb-6 overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="mb-4 text-3xl sm:text-4xl">{project.title}</h1>

            <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
              {project.tech.map((tech) => (
                <RoundedLabel key={tech} className="mx-1" text={tech} />
              ))}
            </div>

            <div className="mb-10 flex flex-wrap gap-3 sm:mb-12 sm:gap-4 ">
              <div className="mb-10 flex flex-wrap gap-3 sm:mb-12 sm:gap-4 bg-blue-600 dark:bg-[#7aa2f7]">
                <a
                  href={project.github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                inline-flex items-center gap-2
                rounded-lg border border-(--background)
                bg-(--background)
                px-4 py-2
                text-sm font-medium text-(--text)
                transition-opacity hover:opacity-90
                sm:text-base
              "
                >
                  View Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github w-6 h-6 -mr-1.25"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </div>
              <div className="mb-10 flex flex-wrap gap-3 sm:mb-12 sm:gap-4 bg-blue-600 dark:bg-[#7aa2f7]">
                {" "}
                <a
                  href={project.demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                inline-flex items-center gap-2
                rounded-lg border border-(--background)
                bg-(--background)
                px-4 py-2
                text-sm font-medium text-(--text)
                transition-opacity hover:opacity-90
                sm:text-base
              "
                >
                  View Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="mb-4 text-2xl">About This Project</h2>

              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
