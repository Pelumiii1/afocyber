// components/Marquee.tsx
import React from "react";
import "@/styles/marquee.css"; // Adjust the path as needed

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, className }) => {
  return (
    <div className={`${className} marquee-container`}>
      <div className="marquee">{children}</div>
    </div>
  );
};

export default Marquee;
