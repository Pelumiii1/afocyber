import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../ui/button";
import Link from "next/link";

const OurServices = () => {
  return (
    <div id="services">
      {/* Mobile Version  */}
      <div className="p-5 lg:hidden flex flex-col justify-center items-center text-center leading-[60px]">
        <h1 className="light-gradient-text font-extrabold text-[64px] tracking-[-2px]">
          Our Services
        </h1>
        <p className="text-[#808080] font-semibold text-[16px]">
          We offer Professional Security Solutions
        </p>
        <Button className="w-fit">
          <Link href="/our-services" className="flex items-center gap-2">
            <p>Explore our Services</p>
            <BsArrowRight size="20px" />
          </Link>
        </Button>
      </div>

      {/* Tablet and laptop version  */}
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-[5rem] font-[family-name:var(--font-manrope)] text-white py-5 z-40">
        {/* SOC AS A SERVICE  */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image
              src="/soc.svg"
              alt="SOC as a service"
              width={400}
              height={400}
            />
          </div>
          <Image
            src="/Polygon.svg"
            alt=""
            className="my-4 hidden lg:flex"
            width={15}
            height={15}
          />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] lg:h-[240px] rounded-[20px] text-center lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] lg:text-[26px] font-[600]">
                  SOC as a service
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] lg:text-[16px] my-3 line-clamp-3">
                Enhance your security with our SOC as a Service—24/7 threat
                monitoring, real-time incident response, and advanced threat
                intelligence. We protect your business from cyber threats,
                ensuring compliance and resilience.
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/SOC"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>

        {/* IT RISK MANAGEMENT  */}
        <div className="flex flex-col items-center justify-between">
          <div className="hidden lg:flex flex-col justify-center items-center text-center leading-[60px] lg:space-y-5">
            <h1 className="light-gradient-text font-extrabold text-[50px] xl:text-[64px] tracking-[-2px]">
              Our Services
            </h1>
            <p className="text-[#808080] font-semibold text-[16px] leading-loose">
              We offer Professional Security Solutions
            </p>
            <Button className="">
              <Link
                href="/our-services"
                className="text-center flex items-center gap-2 text-[12px] xl:text-[14px] cursor-pointer"
              >
                <p>Explore our Services</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <div className="hidden lg:flex img justify-center items-center">
              <Image
                src="/riskManagement.svg"
                alt="IT Risk Management"
                width={400}
                height={400}
              />
            </div>
            <Image
              src="/Polygon.svg"
              alt=""
              className="my-4 hidden lg:flex"
              width={15}
              height={15}
            />
            <div className="flex flex-col justify-between w-fit p-5 bg-[#FFFFFF0D] lg:h-[240px] lg:w-[30vw] rounded-[20px] text-center">
              <div>
                <div className="border-b pb-2">
                  <p className="text-[20px] lg:text-[26px] font-[600]">
                    IT Risk Management
                  </p>
                </div>
                <p className="text-[#808080] font-[600] text-[12px] lg:text-[16px] my-3 line-clamp-3">
                  AFO Solution is dedicated to ensuring organizations
                  proactively manage IT risks without exceeding…
                </p>
              </div>

              <Button>
                <Link
                  href="/our-services/IT-risk-management"
                  className="flex items-center justify-center gap-2 py-3 w-full"
                >
                  <p>Read More</p>
                  <BsArrowRight size="20px" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* IT AUDIT  */}
        <div className="flex flex-col items-center">
          <div className="img-container hidden lg:flex">
            <Image src="/audit.svg" alt="IT Audit" width={400} height={400} />
          </div>
          <Image
            src="/Polygon.svg"
            alt=""
            className="my-4 hidden lg:flex"
            width={15}
            height={15}
          />

          <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] lg:h-[240px] rounded-[20px] text-center w-full lg:w-[25vw]">
            <div>
              <div className="border-b pb-2">
                <p className="text-[20px] lg:text-[26px] font-[600]">
                  IT Audit
                </p>
              </div>
              <p className="text-[#808080] font-[600] text-[12px] lg:text-[16px] my-3">
                AFO Solution has a team of dedicated IT auditors with vast
                experience in…
              </p>
            </div>

            <Button>
              <Link
                href="/our-services/IT-Audit"
                className="flex items-center justify-center gap-2 py-3 "
              >
                <p>Read More</p>
                <BsArrowRight size="20px" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
