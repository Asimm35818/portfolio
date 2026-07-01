import type { BlogPost } from "../data/blogs";
import { Link } from "react-router-dom";
import RoundedLabel from "./RoundedLabel";

interface BlogArticleProps {
  blog: BlogPost;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <article className="mt-10 mb-5 cursor-pointer rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-[#24283b] sm:p-6">
        <h2 className="mb-3 text-xl sm:text-2xl transition-colors hover:text-blue-600 dark:hover:text-[#7aa2f7]">
          {blog.title}
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          {blog.description}
        </p>
        {blog.tech && blog.tech.length > 0 ? (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400">
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
                className="h-4 w-4"
              >
                <path d="M20.59 13.41 12 22l-10-10V2h10z"></path>
                <circle cx="7" cy="7" r="1"></circle>
              </svg>
            </div>
            {blog.tech.map((item) => (
              <RoundedLabel
                key={item}
                text={item}
                className="px-3 py-1 text-xs"
              />
            ))}
          </div>
        ) : null}
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
      </article>
    </Link>
  );
};
export default BlogArticle;
