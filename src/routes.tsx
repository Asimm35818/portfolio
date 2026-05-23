/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import ProjectDetails from "./components/ProjectDetails";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Test = lazy(() => import("./pages/test"));

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },

  // dynamic project route
  { path: "/projects/:slug", element: <ProjectDetails /> },

  { path: "/blog", element: <Blog /> },
  { path: "/test", element: <Test /> },

  // ALWAYS LAST
  { path: "*", element: <NotFound /> },
];
