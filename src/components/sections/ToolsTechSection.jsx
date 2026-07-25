// src/components/sections/ToolsTechSection.jsx
import React from 'react';

const ToolsTechSection = () => {
  const technologies = [
    'React.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Python',
    'SQL',
    'MongoDB',
    'Next.js',
    'Express.js',
    'Git & GitHub',
    'Figma',
  ];

  return (
    <div className="mt-16 w-full">
      {/* Headline - Same styling as RECENT PROJECTS */}
      <h1 
        className="font-bold leading-none tracking-normal text-white"
        style={{
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
          fontSize: '90px'
        }}
      >
        TOOLS & 
      </h1>
      <h1 
        className="font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)]"
        style={{
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
          fontSize: '90px'
        }}
      >
        TECH
      </h1>

      {/* Technologies Grid */}
      <div className="flex flex-wrap gap-3 mt-8 w-full pr-4 md:pr-8">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="bg-[#1C1A19] text-white px-5 py-2.5 rounded-full border border-gray-800 text-sm hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolsTechSection;