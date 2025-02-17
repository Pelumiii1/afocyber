import Image from "next/image";
import React from "react";
import logo from "../../../public/afoLogo.svg";
import NavLinks from "./NavLinks";
import searchIcon from "../../../public/searchIcon.svg";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center fixed top-0 w-full h-[15vh] bg-[#1B043A] p-5 px-[1rem] md:px-[4rem] font-[family-name:var(--font-manrope)] z-[100]"
      style={{ zIndex: 1000 }}
    >
      <Image src={logo} alt="Afo Cyber Sec" />
      <div className="hidden md:flex ">
        <NavLinks />
      </div>
      <div className="border border-white rounded-xl px-2 hidden xl:flex gap-2">
        <Image src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-white text-white outline-none bg-transparent py-2"
          style={{ zIndex: 1000 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
