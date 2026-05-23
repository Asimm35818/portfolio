import React, { useEffect } from "react";
import WorkInProgress from "../components/WorkInProgress";
interface PageProps {
  title?: string;
}

const Projects: React.FC<PageProps> = ({ title = "Projects" }) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return <WorkInProgress></WorkInProgress>;
};

export default Projects;
