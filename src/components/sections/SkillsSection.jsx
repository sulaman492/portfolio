// src/components/sections/SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full pr-4 md:pr-8">
      {/* Orange Square Card */}
      <div className="relative w-full sm:w-64 h-64 rounded-[24px] shadow-lg flex-shrink-0 overflow-hidden flex flex-col justify-between p-6 md:p-7 select-none">
        <img 
          src="/orange.png" 
          alt="Dynamic Animation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="relative z-10">
          <svg width="42" height="42" viewBox="0 0 40 40" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 5L32 11L20 17L8 11Z" />
            <path d="M8 16L20 22L32 16" />
            <path d="M8 21L20 27L32 21" />
            <path d="M8 26L20 32L32 26" />
          </svg>
        </div>

        <div className="relative z-10 flex items-end justify-between w-full">
          <h2 
            className="font-bold leading-[1.15] tracking-tight uppercase"
            style={{
              color: '#FFFFFF',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
              fontSize: '24px'
            }}
          >
            DYNAMIC<br />
            ANIMATION,<br />
            MOTION DESIGN
          </h2>
          
          <div className="w-10 h-10 rounded-[12px] border border-[#FFFFFF] flex items-center justify-center flex-shrink-0 ml-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Green Rectangle Card */}
      <div className="relative h-64 rounded-[24px] shadow-lg w-full overflow-hidden flex flex-col justify-between p-6 md:p-7 select-none">
        <img 
          src="/green.png" 
          alt="Tech Stack"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="relative z-10">
          <svg width="42" height="42" viewBox="0 0 40 40" fill="none" stroke="#151312" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="5" width="30" height="30" rx="7" />
            <path d="M5 16H35" />
            <path d="M16 16V35" />
          </svg>
        </div>

        <div className="relative z-10 flex items-end justify-between w-full">
          <h2 
            className="font-bold leading-[1.15] tracking-tight uppercase"
            style={{
              color: '#151312',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              fontFamily: 'Poppins, "Poppins Placeholder", sans-serif',
              fontSize: '24px'
            }}
          >
            FRAMER, FIGMA, WORDPRESS,<br />
            REACTJS
          </h2>
          
          <div className="w-10 h-10 rounded-[12px] border border-[#151312] flex items-center justify-center flex-shrink-0 ml-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#151312" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;