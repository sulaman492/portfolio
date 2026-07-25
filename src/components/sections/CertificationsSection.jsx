// src/components/sections/CertificationsSection.jsx
import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'SQL Advance',
      description: 'Demonstrated advanced proficiency in complex query optimization, relational database modeling, index optimization, recursive queries, window functions, and data pivoting.',
      date: '5 May, 2025',
      link: 'https://www.hackerrank.com/certificates/60b9fd7a2283',
    },
    {
      id: 2,
      title: 'JavaScript Intermediate',
      description: 'Mastered intermediate to advanced JavaScript concepts including closures, prototypes, asynchronous control flow with promises and async/await, event loop mechanics, and ES6+ standards.',
      date: '14 July, 2026',
      link: 'https://www.hackerrank.com/certificates/60b9fd7a2283',
    },
    {
      id: 3,
      title: 'React Basic',
      description: 'Proven capability in building interactive UI components, managing application state and side effects, implementing React Router navigation, event handling, and form validation.',
      date: '12 Aug, 2025',
      link: 'https://www.hackerrank.com/certificates/f1b99b144d1c',
    },
  ];

  return (
    <div className="mt-16 w-full">
      {/* Headline */}
      <h1 
        className="font-bold leading-none tracking-normal text-white"
        style={{
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
          fontSize: '75px'
        }}
      >
        EARNED
      </h1>
      <h1 
        className="font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)]"
        style={{
          fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
          fontSize: '75px'
        }}
      >
        CERTIFICATES
      </h1>

      {/* Certification Cards */}
      <div className="flex flex-col gap-5 mt-8 w-full pr-4 md:pr-8">
        {certifications.map((cert) => (
          <a 
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#151312] hover:bg-[#1C1A19] rounded-2xl p-4 md:p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer block text-left no-underline"
          >
            {/* Top Row: Title & Top-Right Diagonal Arrow */}
            <div className="flex items-start justify-between w-full">
              <h3 
                className="text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {cert.title}
              </h3>

              {/* Top-Right Arrow */}
              <div className="text-[#F85B2B] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 flex-shrink-0 ml-4">
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
            </div>

            {/* Description */}
            <p 
              className="text-[15px] text-[#998F8F] mt-3 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cert.description}
            </p>

            {/* Date Footer */}
            <span 
              className="text-sm text-[#998F8F]/80 mt-5 block font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cert.date}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;