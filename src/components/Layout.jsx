// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#151312] text-white">
      <Navbar />
      
      <div className="flex flex-col lg:flex-row pt-16 md:pt-20">
        {/* LEFT COLUMN */}
        <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[40%] xl:w-[35%] flex items-center">
          <LeftPanel />
        </aside>

        {/* RIGHT COLUMN */}
        <main className="lg:ml-[40%] xl:ml-[35%] w-full lg:w-[60%] xl:w-[65%] min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;