import React from "react";

const Projects = () => {
  const sess = null;
  if (!sess) throw new Error("Session has been expired!");
  return (
    <div className="container mx-auto p-8  md:p-4 flex justify-between">
      <h1>Projects</h1>
      <h2>Eight</h2>
    </div>
  );
};

export default Projects;
