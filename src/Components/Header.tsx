"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        fixed 
        top-4 left-1/2 -translate-x-1/2 
        w-[90%] 
        sm:w-auto 
        z-50 
        bg-black/70 
        backdrop-blur-md 
        border border-black 
        rounded-full 
        px- py-2 sm:px-6 sm:py-3 
        shadow
      "
    >
      <nav className="flex flex-wrap justify-center gap-6 sm:gap-6 text-sm sm:text-base text-white">
        <a href="/" className="hover:text-blue-400 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400 transition-colors">
          About
        </a>

        <a href="#service" className="hover:text-blue-400 transition-colors">
          Service
        </a>
        <a href="ContactMe" className="hover:text-blue-400 transition-colors">
          Contact Me
        </a>
      </nav>
    </header>
  );
}
