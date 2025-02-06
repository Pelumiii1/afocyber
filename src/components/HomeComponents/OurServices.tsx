import { BsArrowRight } from "react-icons/bs";
import Button from "../ui/button";
import Image from "next/image";
import soc from "../../../public/soc.svg";
import riskManagement from "../../../public/riskManagement.svg";
import audit from "../../../public/audit.svg";
import polygon from "../../../public/Polygon.svg";

const OurServices = () => {
  return (
    <div className="hidden md:grid grid-cols-3 pt-10 gap-5 px-[4rem] font-[family-name:var(--font-manrope)] text-white py-5 z-40">
      <div className="flex flex-col items-center">
        <div className="img-container">
          <Image src={soc} alt="SOC as a service" />
        </div>
        <Image src={polygon} alt="" className="my-4" width={15} />

        <div className="flex flex-col justify-between w-fit p-5 bg-[#FFFFFF0D] h-[240px] rounded-[20px] text-center w-[350px]">
          <div>
            <div className="border-b pb-2">
              <p className="text-[26px] font-[600]">SOC as a service</p>
            </div>
            <p className="text-[#808080] font-[600] text-[16px] my-3">
              AFO Solution is dedicated to ensuring organizations proactively
              manage IT risks without exceeding…
            </p>
          </div>

          <Button>
            <div className="flex items-center justify-center gap-2 py-3 ">
              <p>Read More</p>
              <BsArrowRight size="20px" />
            </div>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="text-center leading-[60px]">
          <h1 className="light-gradient-text font-extrabold text-[64px] tracking-[-2px]">
            Our Services
          </h1>
          <p className="text-[#808080] font-semibold text-[16px]">
            We offer Professional Security Solutions
          </p>
          <Button>
            <div className="flex items-center gap-2">
              <p>Explore our Services</p>
              <BsArrowRight size="20px" />
            </div>
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <div className="img">
            <Image src={riskManagement} alt="IT Risk Management" />
          </div>
          <Image src={polygon} alt="" className="my-4" width={15} />
          <div className="flex flex-col justify-between w-fit p-5 bg-[#FFFFFF0D] h-[240px] rounded-[20px] text-center">
            <div>
              <div className="border-b pb-2">
                <p className="text-[26px] font-[600]">IT Risk Management</p>
              </div>
              <p className="text-[#808080] font-[600] text-[16px] my-3">
                AFO Solution is dedicated to ensuring organizations proactively
                manage IT risks without exceeding…
              </p>
            </div>

            <Button>
              <div className="flex items-center justify-center gap-2 py-3 w-full">
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="img-container">
          <Image src={audit} alt="IT Audit" />
        </div>
        <Image src={polygon} alt="" className="my-4" width={15} />

        <div className="flex flex-col justify-between w-fit p-5 bg-[#FFFFFF0D] h-[240px] rounded-[20px] text-center w-[350px]">
          <div>
            <div className="border-b pb-2">
              <p className="text-[26px] font-[600]">IT Audit</p>
            </div>
            <p className="text-[#808080] font-[600] text-[16px] my-3">
              AFO Solution has a team of dedicated IT auditors with vast
              experience in…
            </p>
          </div>

          <Button>
            <div className="flex items-center justify-center gap-2 py-3 ">
              <p>Read More</p>
              <BsArrowRight size="20px" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
