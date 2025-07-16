"use client";

import Image from "next/image";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="w-full h-[72px] px-6 flex items-center justify-between bg-white shadow-md rounded-b-xl z-50">
      
      {/* LOGO */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Paves Logo"
          width={130}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      {/* NAVIGATION LINKS */}
      <div className="flex items-center gap-8 text-sm font-medium text-gray-800 tracking-wide">
        {["WHAT WE DO", "WHO WE ARE", "PAVES AI LABS", "INSIGHTS", "CAREERS", "CONTACT"].map((label, idx) => {
          const href = ["#what", "#who", "#labs", "#insights", "#careers", "#contact"][idx];
          return (
            <a
              key={label}
              href={href}
              className="relative group transition-colors duration-300"
            >
              <span className="group-hover:text-pink-600 transition">{label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          );
        })}
      </div>

      {/* SEARCH BAR */}
      <div className="relative border border-gray-300 px-4 py-2 rounded-lg w-[240px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pr-8 text-sm outline-none bg-transparent"
          style={{ paddingRight: "32px" }}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          aria-label="Search"
        />
        <BsSearch className="absolute right-3 top-3 text-gray-400" size={18} />
      </div>
    </nav>
  );
}