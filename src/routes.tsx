/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, useParams } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/blog"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function BlogsRedirect() {
  return <Navigate to="/blog" replace />;
}

function BlogsSlugRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/blog/${slug ?? ""}`} replace />;
}

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },

  // dynamic project route
  { path: "/projects/:slug", element: <ProjectDetails /> },

  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <BlogPage /> },
  { path: "/blogs", element: <BlogsRedirect /> },
  { path: "/blogs/:slug", element: <BlogsSlugRedirect /> },

  // ALWAYS LAST
  { path: "*", element: <NotFound /> },
];
