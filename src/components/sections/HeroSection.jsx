// src/components/sections/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[94px] font-bold leading-none tracking-tight text-white block" style={{ fontFamily: 'Poppins, sans-serif' }}>
        SOFTWARE
      </h1>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[94px] font-bold leading-none tracking-tight text-[rgba(182,180,189,0.2)] mt-1 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
        ENGINEER
      </h1>
      
      <p className="text-[15px] sm:text-base md:text-[18px] font-normal leading-relaxed mt-4 max-w-md text-center lg:text-left" style={{ 
        color: '#998F8F', 
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400
      }}>
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </p>
    </div>
  );
};

export default HeroSection;