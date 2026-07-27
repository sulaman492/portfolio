// src/components/sections/ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'FairGig',
      description: 'A gig worker platform for earnings logging, screenshot verification, and anomaly detection – built for SOFTEC 2026 hackathon.',
      image: '/fairgig.png',
      url: 'https://fairgig.vercel.app',
    },
    {
      name: 'SPYLT',
      description: 'Animated can website featuring scroll-triggered animations and interactive product display for a protein milk brand.',
      image: '/SPYLT.png',
      url: 'https://canfusion.vercel.app',
    },
  ];

  return (
    <div className="mt-24 w-full">
      <h1 
        className="font-bold leading-none tracking-normal text-white text-6xl sm:text-7xl md:text-[90px]"
        style={{
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
        }}
      >
        RECENT
      </h1>
      <h1 
        className="font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)] text-6xl sm:text-7xl md:text-[90px]"
        style={{
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
        }}
      >
        PROJECTS
      </h1>

      {/* Project Cards */}
      <div className="flex flex-col gap-5 mt-10 w-full pr-4 md:pr-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-5 rounded-2xl bg-[#151312] hover:bg-[#1E1C1A] border border-[#22201E] hover:border-[#353230] transition-colors duration-300 cursor-pointer no-underline"
          >
            {/* Project Thumbnail */}
            <div className="w-[160px] h-[120px] rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <h3
                className="text-white text-2xl font-bold tracking-tight leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {project.name}
              </h3>
              <p
                className="text-[#8E8C95] text-[15px] font-normal mt-1.5 leading-relaxed max-w-xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {project.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="text-[#F85B2B] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;