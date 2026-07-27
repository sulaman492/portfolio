// src/components/LeftPanel.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFire } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const LeftPanel = () => {
  return (
    <div className="flex justify-center items-start h-full w-full">
      {/* White Card */}
      <div className="bg-white text-black rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-gray-100 relative overflow-visible">
        {/* Picture */}
        <div className="w-full aspect-[4/5] rounded-xl bg-gray-200 mb-4 overflow-hidden">
          <img
            src="/port.png"
            alt="Sulaman Shahzad"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name - Centered */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-center">
          Sulaman Shahzad
        </h1>

        {/* Dashed Arc with Fire Badge pointing to Name */}
        <div className="relative w-full h-12 my-1 overflow-visible">
          <svg 
            className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none" 
            viewBox="0 0 300 50" 
            fill="none"
          >
            <path 
              d="M -32 48 Q 30 48, 102 18" 
              stroke="#FF6B35" 
              strokeWidth="3.5" 
              strokeDasharray="6 6" 
              strokeLinecap="round" 
            />
          </svg>

          {/* Solid Orange Circle Badge with White Flame Icon */}
          <div 
            className="absolute left-[92px] top-[-2px] w-9 h-9 rounded-full bg-[#FF6B35] flex items-center justify-center shadow-md z-10 hover:scale-110 transition-transform duration-200"
          >
            <FaFire className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Description - Centered with center text */}
        <p className="text-gray-600 text-sm md:text-base mb-4 text-center">
          Software Engineer who builds <br className="hidden sm:block" />
          exceptional digital experiences.
        </p>

        {/* Social Icons - Orange theme to match picture */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href="https://github.com/sulaman492"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#E55A2B] transition-colors duration-200 hover:scale-110 transform"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sulaman-shahzad-149820324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#E55A2B] transition-colors duration-200 hover:scale-110 transform"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#E55A2B] transition-colors duration-200 hover:scale-110 transform"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6B35] hover:text-[#E55A2B] transition-colors duration-200 hover:scale-110 transform"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center">
          <a
            href="/SulamanShahzadWebDeveloperResume.pdf"
            download="SulamanShahzad_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] text-white font-medium rounded-xl hover:bg-[#E55A2B] transition-colors duration-200 hover:scale-105 transform"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;