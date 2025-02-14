import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../ui/button";
import Image from "next/image";
import target from "../../../public/target.svg";
import print from "../../../public/printSecurity.svg";

const HeroSection = () => {
  return (
    <div className="z-40 px-[1rem] md:px-[4rem] font-[family-name:var(--font-manrope)] h-[75vh] flex flex-col justify-center items-center relative">
      <div className="bg-[#D359FF] rounded-r-full h-[200px] w-[300px] blur-[435.33px]  absolute top-[20%] left-0 z-0" />

      <div className="hidden md:flex absolute left-[10rem] top-[11rem]">
        <Image src={target} alt="Target" />
      </div>
      <div className="hidden md:flex absolute right-[1rem] top-[1rem] z-5">
        <Image src={print} alt="Fingerpint Security" />
      </div>
      <h1 className="light-gradient-text font-extrabold text-[64px] tracking-[-2px] lg:w-[50%] text-center leading-[80px] z-10">
        Empowering Secure Growth
      </h1>
      <p className="text-[#808080] text-center font-semibold text-[16px] mb-[2rem] md:mb-[6rem] z-10">
        Comprehensive Cybersecurity Solutions from Compliance to Continuous
        Threat Monitoring.
      </p>
      <Button>
        <div className="flex items-center gap-2 py-3 px-5">
          <p>Get Started</p>
          <BsArrowRight size="20px" />
        </div>
      </Button>
    </div>
  );
};

export default HeroSection;
