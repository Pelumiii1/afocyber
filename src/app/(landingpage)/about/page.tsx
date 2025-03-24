import HeroSection from "@/components/landingpage/AboutComponents/HeroSection";
import OurTeam from "@/components/landingpage/AboutComponents/OurTeam";
import Slider from "@/components/Slider";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#1B043A] font-[family-name:var(--font-manrope)]">
      <HeroSection />
      <Slider />
      <OurTeam />
    </div>
  );
};

export default About;
