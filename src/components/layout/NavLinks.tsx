"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-start gap-5">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-white border-b" : "text-[#FAFAFA80]"
        }  pb-2 px-4 `}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "text-white border-b " : "text-[#FAFAFA80]"
        }  pb-2 px-4 `}
      >
        About Us
      </Link>
      <Link href={"/"} className="text-[#FAFAFA80] pb-2 px-4">
        Our Services
      </Link>
      <Link href={"/"} className="text-[#FAFAFA80] pb-2 px-4">
        Solution
      </Link>
      <Link href={"/"} className="text-[#FAFAFA80] pb-2 px-4">
        Blogs
      </Link>
      <Link href={"/"} className="text-[#FAFAFA80] pb-2 px-4">
        Contact Us
      </Link>
    </ul>
  );
};

export default NavLinks;
