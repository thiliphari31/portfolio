"use client";
import Link from "next/link";

export default function Header() {
  return (
       <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-lg border border-black rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow w-auto max-w-[90%]">
  <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-white">
    <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
    <a href="/About" className="hover:text-blue-500 transition-colors">About</a>
    <a href="/Service" className="hover:text-blue-500 transition-colors">Service</a>
    <a href="/ContactMe" className="hover:text-blue-500 transition-colors">Contact Me</a>
  </nav>
</header>

  );
}
