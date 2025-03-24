import Image from "next/image";
import React from "react";
import Button from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface PreviewCardProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}

const PreviewCard = ({ image, title, desc, link }: PreviewCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="img-container hidden lg:flex">
        <Image
          src={image}
          alt={title}
          className="h-[30vh]"
          width={400}
          height={400}
        />
      </div>
      <div className="flex lg:hidden">
        <Image
          src={image}
          alt={title}
          className="rounded-xl h-[30vh]"
          width={400}
          height={30}
        />
      </div>
      <Image
        src="/Polygon.svg"
        alt=""
        className="my-4"
        width={15}
        height={15}
      />

      <div className="flex flex-col justify-between p-5 bg-[#FFFFFF0D] lg:h-[240px] rounded-[20px] text-center lg:w-[25vw]">
        <div>
          <div className="border-b pb-2">
            <p className="text-[20px] xl:text-[26px] font-[600]">{title}</p>
          </div>
          <p className="text-[#808080] font-[600] text-[12px] md:text-[13px] xl:text-[16px] my-3 line-clamp-3">
            {desc}
          </p>
        </div>

        <Button>
          <Link
            href={link}
            className="flex items-center justify-center gap-2 py-3 "
          >
            <p>Read More</p>
            <BsArrowRight size="20px" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PreviewCard;
