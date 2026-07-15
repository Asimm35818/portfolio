import { useEffect } from "react";
import BlogArticle from "../components/BlogArticle";
import { blogs } from "../data/blogs";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-2">
        <h1 className="text-3xl sm:text-4xl mb-3">Blog</h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights on software development
        </p>
      </div>
      {blogs.map((blog) => (
        <BlogArticle key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}
