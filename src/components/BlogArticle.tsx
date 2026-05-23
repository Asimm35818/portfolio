import { blogs } from "../data/blogs";
import RoundedLabel from "./RoundedLabel";
import { Link } from "react-router-dom";

interface BlogArticleProps {
  /**
   * The unique identifier of the project to display.
   * It matches the `id` field exported from `projects.ts`.
   */
  blogID: number;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ blogID }) => {
  const blog = blogs.find((b) => b.id === blogID);
  if (!blog) return null;

  return (
    <Link key={blog.id} to={`/blogs/${blog.shortTitle}`}>
      <article className="mt-10 mb-5 cursor-pointer rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-[#24283b] sm:p-6">
        <h2 className="mb-3 text-xl sm:text-2xl transition-colors hover:text-blue-600 dark:hover:text-[#7aa2f7]">
          {blog.title}
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          {blog.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
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
              className="lucide lucide-calendar h-4 w-4"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            {blog.date.toDateString()}
          </div>
          <div className="flex items-center gap-1">
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
              className="lucide lucide-clock h-4 w-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {blog.readtime} min read
          </div>
        </div>
        {blog.tech?.length ? (
          <div className="flex flex-wrap items-center gap-2">
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
              className="h-5 w-5 text-gray-400 dark:text-gray-500"
            >
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
            </svg>

            <div className="flex flex-wrap gap-2">
              {blog.tech.map((tech) => (
                <RoundedLabel key={tech} className="scale-95" text={tech} />
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </Link>
  );
};
export default BlogArticle;
