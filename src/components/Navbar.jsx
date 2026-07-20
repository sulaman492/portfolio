// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const navItems = [
    { id: 'home', label: 'Home', svg: '/Home.svg' },
    { id: 'projects', label: 'Projects', svg: '/projects.svg' },
    { id: 'certifications', label: 'Certifications', svg: '/certification.svg' },
    { id: 'tools', label: 'Tools', svg: '/tools.svg' },
    { id: 'thoughts', label: 'Thoughts', svg: '/thoughts.svg' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <div className="relative">
        {/* Main Navbar Container */}
        <div className="bg-[#1C1A19] rounded-2xl px-2 py-2 flex items-center gap-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-300 relative group cursor-pointer bg-transparent hover:bg-transparent"
            >
              <img 
                src={item.svg} 
                alt={item.label} 
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Dropdown / Tooltip */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
                <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-[#2C2A29] whitespace-nowrap shadow-md block">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;