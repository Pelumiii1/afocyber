import React from "react";
import Image from "next/image";

const AboutCards = () => {
  return (
    <div className="hidden md:flex">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-5 mb-10 px-[1rem] md:px-[4rem] w-full">
        <div className="img">
          <Image
            src="/image1.svg"
            alt="IT Risk Management"
            width={400}
            height={400}
          />
        </div>
        <div className="img">
          <Image
            src="/image2.svg"
            alt="IT Risk Management"
            width={400}
            height={400}
          />
        </div>
        <div className="img">
          <Image
            src="/image3.svg"
            alt="IT Risk Management"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
