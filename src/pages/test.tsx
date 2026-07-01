import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import BlogPage from "../components/BlogPage";

export default function Test() {
  useEffect(() => {
    document.title = "Blog";
  }, []);
}
