"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = ["about", "projects", "contact"];
const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="container px-2 mx-auto bg-slate-300">
      <div className="flex justify-between items-center">
        <Link
          href={"/hi"}
          className="text-2xl text-gray-800 leading-tight tracking-tight"
        >
          Hi Layout {pathname}
        </Link>

        <ul className="flex justify-between items-center">
          {links.map((li) => (
            <li
              className={`li  p-2 m-1 capitalize hover:text-gray-600 duration-300 transition-all ${
                li === pathname.slice(1) ? "text-blue-500 text-2xl" : "text-gray-800"
              }`}
              key={li}
            >
              <Link href={li}>{li}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
