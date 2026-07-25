// src/components/RightContent.jsx
import React from 'react';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import ProjectsSection from './sections/ProjectsSection';

const RightContent = () => {
  return (
    <div className="flex flex-col justify-start items-start h-full min-h-screen pt-8 md:pt-12 pl-4 md:pl-6">
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      {/* Certifications Section */}
      <CertificationsSection />
      {/* Projects Section */}
      <div className="mt-14 w-full">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default RightContent;