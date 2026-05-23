import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="mb-6 text-4xl font-bold sm:mb-8 sm:text-6xl lg:text-8xl">
        404 - Page Not Found
      </h1>
      <h2 className="mb-8 text-lg text-gray-600 dark:text-gray-300 sm:mb-10 sm:text-2xl">
        Sorry, the page you are looking for does not exist.
      </h2>
      <NavLink
        to="/"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-lg text-white transition-colors hover:bg-blue-700 dark:bg-[#7aa2f7] dark:text-[#1a1b26] dark:hover:bg-[#89b4fa] sm:px-8 sm:py-5 sm:text-xl"
      >
        Return to Home
      </NavLink>
    </div>
  );
}
