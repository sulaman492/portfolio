// src/components/LeftPanel.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const LeftPanel = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {/* White Card */}
      <div className="bg-white text-black rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-gray-100">
        
        {/* Picture */}
        <div className="w-full aspect-square rounded-xl bg-gray-200 mb-4 overflow-hidden">
          <img 
            src="/portfolio2 img.png" 
            alt="Sulaman Shahzad"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name - Centered */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-center">
          Sulaman Shahzad
        </h1>

        {/* Description - Centered with center text */}
        <p className="text-gray-600 text-sm md:text-base mb-4 text-center">
          Software Engineer who builds <br className="hidden sm:block" />
          exceptional digital experiences.
        </p>

        {/* Social Icons - Centered with proper spacing */}
        <div className="flex justify-center items-center gap-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;