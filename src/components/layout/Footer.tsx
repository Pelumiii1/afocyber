import Image from "next/image";
import React from "react";
import logo from "../../../public/afoLogo.svg";
import Link from "next/link";
import securityIcon from "../../../public/3D-security.svg";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import afoCyberSec from "../../../public/AfoCyberSec.svg";

const Footer = () => {
  return (
    <div className="relative bg-[#1B043A] text-white p-5 px-1 md:px-[4rem] font-[family-name:var(--font-manrope)]">
      <div
        className="bg-[#4F3EE7B2] rounded-l-full  h-[500px] w-[20vw] blur-[400.33px] absolute w-full top-[-10%] right-0"
        style={{ zIndex: 1 }}
      />

      <div className="z-40">
        <div className="md:flex justify-between items-center">
          <Image src={logo} alt="Afo Cyber Sec" />
          <div className="md:flex items-center gap-4">
            <p className="text-xl text-semibold">Subscribe to our Newsletter</p>
            <div
              className="border border-[#FAFAFA] rounded-xl"
              style={{ zIndex: 10 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent placeholder:text-[#FAFAFA4D] font-medium pl-4 py-2 w-[71vw] md:w-[30vw] outline-none"
              />
              <button className="bg-white px-5 py-2 rounded-r-lg text-black text-medium text-[18px] ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-start mt-1 md:mt-10 ">
          <div className="space-y-5 md:space-y-10 pt-[2rem] md:pt-[5rem]">
            <h2 className="font-semibold text-[26px]">Navigations</h2>
            <ul className="flex flex-col gap-5 md:gap-10 text-[#FAFAFA80] font-medium text-[16px]">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/"}>Our Services</Link>
              <Link href={"/"}>Solutions</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Contact Us</Link>
            </ul>
            <div className="hidden md:flex gap-10 items-center pt-[6rem]">
              <div className="bg-white p-3 rounded-full w-fit">
                <BsTwitterX color="black" />
              </div>
              <div className="bg-white p-3 rounded-full w-fit">
                <FaLinkedinIn color="black" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex z-10">
            <Image src={securityIcon} alt="Internet Security" height={780} />
          </div>
          <div
            className="space-y-5 md:space-y-10 md:text-right pt-[5rem]"
            style={{ zIndex: 10 }}
          >
            <h2 className="font-semibold text-[26px]">Services</h2>
            <ul
              className="flex flex-col gap-5 md:gap-10 text-[#FAFAFA80] font-medium text-[16px]"
              style={{ zIndex: 10 }}
            >
              <Link href={"/"}>SOC as a service</Link>
              <Link href={"/"}>Managed Threat Detection</Link>
              <Link href={"/"}>Vunerability Management</Link>
              <Link href={"/"}>Audit & Compliance</Link>
              <Link href={"/"}>Network Security</Link>
              <Link href={"/"}>Incident Response & Forensics</Link>
            </ul>
            <div className="hidden md:flex gap-10 items-center pt-[6rem] justify-end">
              <div className="bg-white p-2 rounded-full w-fit">
                <TiSocialInstagram color="black" size="25px" />
              </div>
              <FaFacebook size="40px" />
            </div>
          </div>
        </div>
        <div className="mt-[1rem] md:mt-[-5rem] z-1">
          <Image
            src={afoCyberSec}
            alt="Afo Cyber Sec Solution"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
