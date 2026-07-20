// src/components/RightContent.jsx
import React from 'react';

const RightContent = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full min-h-screen pt-8 md:pt-12 pl-4 md:pl-6">
      <h1 className="text-[94px] font-bold leading-none tracking-normal text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
        SOFTWARE
      </h1>
      <h1 className="text-[94px] font-bold leading-none tracking-normal text-[rgba(182,180,189,0.2)]" style={{ fontFamily: 'Poppins, sans-serif' }}>
        ENGINEER
      </h1>
      
      {/* Description */}
      <p className="text-[18px] font-normal leading-relaxed mt-4 max-w-md" style={{ 
        color: '#998F8F', 
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400
      }}>
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </p>
    </div>
  );
};

export default RightContent;