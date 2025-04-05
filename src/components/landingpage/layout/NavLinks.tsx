"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-3 text-[10px] md:text-[14px]">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-white border-b" : "text-[#FAFAFA80]"
        }  pb-2 px-1 lg:px-4 `}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "text-white border-b " : "text-[#FAFAFA80]"
        }  pb-2 px-1 lg:px-4 `}
      >
        About Us
      </Link>
      <Link
        href={"/our-services"}
        className={`${
          pathname.includes("our-services")
            ? "text-white border-b "
            : "text-[#FAFAFA80]"
        }  pb-2 px-1 lg:px-4 `}
      >
        Our Services
      </Link>
      <Link href={"/#portfolio"} className="text-[#FAFAFA80] pb-2 px-1 lg:px-4">
        Solution
      </Link>
      <Link href={"/blogs"} className="text-[#FAFAFA80] pb-2 px-1 lg:px-4">
        Blogs
      </Link>
      <Link href={"/contact-us"} className="text-[#FAFAFA80] pb-2 px-1 lg:px-4">
        Contact Us
      </Link>
      {/*<Link*/}
      {/*  href={"/login"}*/}
      {/*  className="text-white px-7 py-1 mb-2 border rounded-xl lg:ml-20"*/}
      {/*>*/}
      {/*  Login*/}
      {/*</Link>*/}
    </ul>
  );
};

export default NavLinks;
