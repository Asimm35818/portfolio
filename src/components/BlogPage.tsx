import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import NotFound from "../pages/NotFound";
import { formatBlogDate, getBlogBySlug } from "../data/blogs";

const markdownComponents = {
  h1: ({ children }: React.PropsWithChildren) => (
    <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }: React.PropsWithChildren) => (
    <h2 className="mb-3 mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h2>
  ),
  h3: ({ children }: React.PropsWithChildren) => (
    <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h3>
  ),
  p: ({ children }: React.PropsWithChildren) => (
    <p className="mb-4 leading-7 text-gray-600 dark:text-gray-300">
      {children}
    </p>
  ),
  ul: ({ children }: React.PropsWithChildren) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children }: React.PropsWithChildren) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-600 dark:text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }: React.PropsWithChildren) => <li>{children}</li>,
  code: ({
    children,
    className,
  }: React.PropsWithChildren<{ className?: string }>) => (
    <code
      className={`rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-900 dark:bg-[#1a1b26] dark:text-[#c0caf5] ${className ?? ""}`}
    >
      {children}
    </code>
  ),
  pre: ({ children }: React.PropsWithChildren) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 dark:bg-black">
      {children}
    </pre>
  ),
  a: ({ children, href }: React.PropsWithChildren<{ href?: string }>) => (
    <a
      href={href}
      className="text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-700 dark:text-[#7aa2f7] dark:decoration-[#7aa2f7]"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }: React.PropsWithChildren) => (
    <blockquote className="mb-4 border-l-4 border-blue-500 pl-4 italic text-gray-500 dark:text-gray-400">
      {children}
    </blockquote>
  ),
  img: ({
    src,
    alt,
    width,
    height,
  }: React.PropsWithChildren<{
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
  }>) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="my-6 rounded-lg object-cover"
      style={{
        maxWidth: typeof width === "number" || typeof width === "string" ? "100%" : "720px",
      }}
    />
  ),
};

function resolveBlogImage(image?: string) {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  if (image.startsWith("/")) return image;
  return `/blogimages/${image}`;
}

const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const blog = slug ? getBlogBySlug(slug) : undefined;
  const [imageFailed, setImageFailed] = useState(false);
  const resolvedImage = resolveBlogImage(blog?.image);

  useEffect(() => {
    document.title = blog ? blog.title : "Blog";
  }, [blog]);

  useEffect(() => {
    setImageFailed(false);
  }, [resolvedImage]);

  if (!blog) {
    return (
      <div className="p-6 text-center sm:p-10">
        <NotFound />
      </div>
    );
  }

  return (
    <main className="flex-1">
      <div className="py-10 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:mb-8 sm:text-base"
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
              className="lucide lucide-arrow-left h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Blog
          </Link>

          <article className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                {blog.title}
              </h1>
              <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span>{formatBlogDate(blog.date)}</span>
                <span>{blog.readtime} min read</span>
              </div>
              <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                {blog.description}
              </p>
            </div>

            {resolvedImage && !imageFailed ? (
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-[#24283b]">
                <img
                  src={resolvedImage}
                  alt={blog.title}
                  className="aspect-[16/9] w-full object-cover"
                  onError={() => setImageFailed(true)}
                />
              </div>
            ) : (
              <div className="overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-[#24283b]">
                <div className="flex aspect-[16/9] items-center justify-center px-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                  Image placeholder
                </div>
              </div>
            )}

            <div className="prose max-w-none dark:prose-invert prose-headings:scroll-mt-24">
              <ReactMarkdown components={markdownComponents} rehypePlugins={[rehypeRaw]}>
                {blog.body}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
