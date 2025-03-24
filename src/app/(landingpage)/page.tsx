import AboutCards from "@/components/landingpage/HomeComponents/AboutCards";
import AboutUs from "@/components/landingpage/HomeComponents/AboutUs";
import ChooseUs from "@/components/landingpage/HomeComponents/ChooseUs";
import HeroSection from "@/components/landingpage/HomeComponents/HeroSection";
import OurServices from "@/components/landingpage/HomeComponents/OurServices";
import Portfolio from "@/components/landingpage/HomeComponents/Portfolio";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="bg-[#1B043A] relative">
      <HeroSection />
      <Slider />
      <AboutUs />
      <AboutCards />
      <Slider />
      <div className="mb-10" />
      <OurServices />
      <div className="mb-10" />
      <Slider />
      <ChooseUs />
      <Slider />
      <div className="pt-10 my-5" />
      <Portfolio />
      <Slider />
      <div className="pb-10" />
    </div>
  );
}
