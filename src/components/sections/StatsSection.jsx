// src/components/sections/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-8 md:gap-12 mt-8 w-full">
      <div>
        <div className="text-[70px] font-bold leading-none text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          +5
        </div>
        <div className="text-[14px] font-normal leading-relaxed mt-1" style={{ 
          color: '#998F8F', 
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400
        }}>
          PROJECTS<br />COMPLETED
        </div>
      </div>
      <div>
        <div className="text-[70px] font-bold leading-none text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          +5
        </div>
        <div className="text-[14px] font-normal leading-relaxed mt-1" style={{ 
          color: '#998F8F', 
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400
        }}>
          CERTIFICATIONS<br />EARNED
        </div>
      </div>
      <div>
        <div className="text-[70px] font-bold leading-none text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          +3
        </div>
        <div className="text-[14px] font-normal leading-relaxed mt-1" style={{ 
          color: '#998F8F', 
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400
        }}>
          YEARS OF<br />LEARNING
        </div>
      </div>
    </div>
  );
};

export default StatsSection;