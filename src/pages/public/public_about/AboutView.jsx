import React from "react";
import {
  AboutHeroSection,
  GameChangerSection,
  AboutMissionSection,
  WhatWeDoSection,
  HowItWorksSection,
  WhoWeHelpSection,
  WhatWeDontDoSection,
  AboutCtaSection,
} from "./components";

const AboutView = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800">
      <AboutHeroSection />
      <GameChangerSection />
      <AboutMissionSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <WhoWeHelpSection />
      <WhatWeDontDoSection />
      <AboutCtaSection />
    </div>
  );
};

export default AboutView;
