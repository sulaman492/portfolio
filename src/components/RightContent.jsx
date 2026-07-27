// src/components/RightContent.jsx
import React from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import ProjectsSection from './sections/ProjectsSection';
import WorkTogetherSection from './sections/WorkTogetherSection';
import ToolsTechSection from './sections/ToolsTechSection';

const RightContent = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full min-h-screen pt-4 md:pt-12 px-4 sm:px-6 lg:pl-6 lg:pr-0">
      <div id="home" className="w-full scroll-mt-24">
        <HeroSection />
      </div>
      <StatsSection />
      <SkillsSection />
      <div id="projects" className="mt-8 w-full scroll-mt-24">
        <ProjectsSection />
      </div>
      {/* Certifications Section */}
      <div id="certifications" className="mt-8 w-full scroll-mt-24">
        <CertificationsSection />
      </div>
      {/* Tools Section */}
      <div id="tools" className="mt-8 w-full scroll-mt-24">
        <ToolsTechSection />
      </div>
      <div id="thoughts" className="mt-8 w-full scroll-mt-24">
        <WorkTogetherSection />
      </div>
    </div>
  );
};

export default RightContent;