// src/components/sections/ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  return (
    <div className="mt-24 w-full">
      <h1 
        className="font-bold leading-none tracking-normal text-white"
        style={{
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
          fontSize: '90px'
        }}
      >
        RECENT
      </h1>
      <h1 
        className="font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)]"
        style={{
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
          fontSize: '90px'
        }}
      >
        PROJECTS
      </h1>
    </div>
  );
};

export default ProjectsSection;