// src/components/sections/ToolsTechSection.jsx
import React from 'react';

const ToolsTechSection = () => {
  const tools = [
    {
      name: 'React',
      category: 'UI Library',
      icon: '/react.svg',
      url: 'https://react.dev/',
    },
    {
      name: 'Next.js',
      category: 'React framework',
      icon: '/nextjs.svg',
      url: 'https://nextjs.org/docs',
    },
    {
      name: 'Node.js',
      category: 'JavaScript Runtime',
      icon: '/node.svg',
      url: 'https://nodejs.org/en/docs',
    },
    {
      name: 'Express.js',
      category: 'Web Framework',
      icon: '/express.svg',
      url: 'https://expressjs.com/',
    },
    {
      name: 'PostgreSQL',
      category: 'Relational Database',
      icon: '/postgresql.svg',
      url: 'https://www.postgresql.org/docs/',
    },
    {
      name: 'Tailwind CSS',
      category: 'CSS Framework',
      icon: '/tailwind.svg',
      url: 'https://tailwindcss.com/docs',
    },
    {
      name: 'Git',
      category: 'Version Control',
      icon: '/git.svg',
      url: 'https://git-scm.com/doc',
    },
    {
      name: 'Vercel',
      category: 'Deployment Platform',
      icon: '/vercel.svg',
      url: 'https://vercel.com/docs',
    },
  ];

  return (
    <div className="mt-16 w-full">
      {/* Headline - Matching Portfolio Typography */}
      <h1 
        className="font-bold leading-none tracking-normal text-white text-5xl sm:text-7xl md:text-[90px]"
        style={{
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
        }}
      >
        TOOLS & 
      </h1>
      <h1 
        className="font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)] text-5xl sm:text-7xl md:text-[90px]"
        style={{
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
        }}
      >
        TECH
      </h1>

      {/* Tools & Tech Grid - Aligned exactly with headline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-10 w-full pr-4 md:pr-8">
        {tools.map((tool, index) => (
          <a 
            key={index} 
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-3.5 rounded-lg bg-[#151312] hover:bg-[#FFFFFF08] transition-colors duration-300 cursor-pointer no-underline group"
          >
            {/* Squircle White Icon Container */}
            <div className="w-[72px] h-[72px] bg-white rounded-[22px] flex items-center justify-center flex-shrink-0 shadow-md p-3">
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-10 h-10 object-contain" 
              />
            </div>

            {/* Tool Name & Category Description */}
            <div className="flex flex-col justify-center">
              <h3 
                className="text-white text-2xl font-bold tracking-tight leading-tight group-hover:text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {tool.name}
              </h3>
              <p 
                className="text-[#8E8C95] text-base font-normal mt-0.5 tracking-tight group-hover:text-[#A8A5B2] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {tool.category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolsTechSection;