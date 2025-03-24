"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    {
      name: "All Posts",
      href: "/dashboard",
      icon: <LuHouse size={18} />,
    },
    {
      name: "New Post",
      href: "/new-post",
      icon: <FaPlus />,
    },
    // {
    //   name: "Settings",
    //   href: "/dashboard/settings",
    //   icon: <MdOutlineSettings size={18} />,
    // },
  ];

  return (
    <div className="flex lg:hidden">
      <button
        className="p-2 text-gray-700  dark:text-white bg-gray-50 w-full flex justify-end "
        onClick={() => setIsOpen(true)}
      >
        <BiMenu size={30} color="black" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-fit px-[1rem] bg-[#1B043A] dark:bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ zIndex: 100 }}
      >
        <div className="p-4 flex justify-between items-center border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {/* Sidebar */}
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            X
          </button>
        </div>

        <nav className="mt-4 space-y-3 px-4 flex flex-col text-white">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md w-fit ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-white hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{ zIndex: 1 }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminNavbar;
