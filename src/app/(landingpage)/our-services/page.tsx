import PreviewCard from "@/components/PreviewCard";
import { ourServices } from "@/data/our-services";

const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1 className="light-gradient-text font-extrabold text-[64px] text-center">
        Our Services
      </h1>
      <p className="lg:w-[70%] text-center text-[20px]">
        At AFO Cyber-Sec Solutions, our unwavering commitment is to offer a
        range of services designed not just to secure your digital assets, but
        also protect sensitive data and ensure regulatory compliance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-[3rem]">
        {/* IT Audit  */}
        {ourServices.map((service, index) => (
          <PreviewCard
            key={index}
            title={service.title}
            image={service.image}
            desc={service.desc}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
