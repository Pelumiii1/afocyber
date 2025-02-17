import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`${className} border rounded-[24px] px-5 text-[12px] lg:text-[16px] font-[400] text-white hover:text-black hover:bg-white transaition-bg duration-700`}
    >
      {children}
    </button>
  );
};

export default Button;
