import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";

export default function Test() {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  return <ProjectDetails></ProjectDetails>;
}
