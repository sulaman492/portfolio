// src/components/Layout.jsx
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';

const Layout = ({ children }) => {
  const leftContentRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleSyncScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (!leftContentRef.current) return;

        // Synchronized scrolling applies to desktop layouts (lg breakpoint >= 1024px)
        if (window.innerWidth < 1024) {
          leftContentRef.current.style.transform = 'none';
          return;
        }

        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const cardHeight = leftContentRef.current.offsetHeight;
        
        // Initial top position of card (pt-24 md:pt-28 = ~96px)
        const initialTop = 96; 
        const bottomPadding = 32;
        
        // Calculate max translateY needed so bottom of card is fully visible when scrolled
        const totalNeeded = initialTop + cardHeight + bottomPadding;
        const maxTranslateY = Math.max(0, totalNeeded - viewportHeight);

        if (maxTranslateY > 0) {
          // 1:1 scroll speed without overflow clipping
          const translateY = Math.min(scrollY, maxTranslateY);
          leftContentRef.current.style.transform = `translateY(-${translateY}px)`;
        } else {
          leftContentRef.current.style.transform = 'translateY(0px)';
        }
      });
    };

    window.addEventListener('scroll', handleSyncScroll, { passive: true });
    window.addEventListener('resize', handleSyncScroll, { passive: true });

    // Initial calculation after render
    handleSyncScroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', handleSyncScroll);
      window.removeEventListener('resize', handleSyncScroll);
    };
  }, []);

  // Forward mouse wheel events over Left Panel to window scroll so scrolling anywhere works as a single screen
  const handleLeftWheel = (e) => {
    if (window.innerWidth >= 1024) {
      window.scrollBy({
        top: e.deltaY,
        behavior: 'instant',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#151312] text-white">
      <Navbar />
      
      <div className="flex flex-col lg:flex-row pt-16 md:pt-20">
        {/* LEFT COLUMN */}
        <aside 
          onWheel={handleLeftWheel}
          className="w-full lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[40%] xl:w-[35%] pt-20 lg:pt-24 md:pt-28 px-4 z-10 select-none flex justify-center items-start"
        >
          <div 
            ref={leftContentRef} 
            className="w-full flex justify-center transition-transform duration-75 ease-out"
          >
            <LeftPanel />
          </div>
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