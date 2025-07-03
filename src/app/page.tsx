"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`w-full min-h-screen relative overflow-visible font-sans transition-colors duration-500
    ${darkMode ? "bg-black text-white" : "bg-white text-black"}
    bg-fixed bg-no-repeat bg-center`}
      style={{
        backgroundImage: "url('/bg-8.png')",
        backgroundSize: "450px auto",
      }}
    >


      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="flex flex-col items-end gap-2">
            {/* Single Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow transition-transform duration-300 hover:scale-110 ${darkMode ? "bg-gray-800 text-white" : "bg-yellow-400 text-black"
                }`}
              title="Toggle Theme"
            >
              {darkMode ? (
                // 🌙 Moon icon (Dark Mode active)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              ) : (
                // ☀️ Sun icon (Light Mode active)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.485-8.485h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              )}
            </button>

            {/* Social Icons */}
            <a
              href="https://www.linkedin.com/in/thilipkumar-k31"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white"
            >
              in
            </a>
            <a
              href="https://github.com/thiliphari31"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white"
            >
              GH
            </a>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow hover:scale-110 transition"
        >
          {open ? "✕" : "+"}
        </button>
      </div>

      {/* Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[10%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-blob1"></div>
        <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-purple-500 opacity-20 rounded-full blur-3xl animate-blob2"></div>
        <div className="absolute top-[65%] left-[25%] w-[250px] h-[250px] bg-cyan-300 opacity-20 rounded-full blur-3xl animate-blob3"></div>
      </div>

      {/* Home Section */}

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center 
      justify-center gap-10 md:gap-24 px-6 md:px-28 py-16 md:py-28 ">
        {/* Text Content */}
        <div className="flex-1 text-left md:pl-8">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${inter.className}`}
          >
            Hi, I'm Thilip Kumar 👋🏻
          </h1>

          <p className="text-base sm:text-xl">Web Developer | UI Designer</p>
          <p className="text-base sm:text-xl mt-2">
            Passionate about building responsive, user-friendly websites.
          </p>

          <div className="mt-6 flex justify-start">
            <a
              href="/TK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full font-semibold text-white dark:text-black bg-gradient-to-r
      from-purple-400 via-pink-400 to-indigo-300 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out 
      focus:outline-none focus:ring-2 "
            >
              View Resume
            </a>
          </div>
        </div>

        <div
          className="
    relative
    w-[180px] h-[180px]
    sm:w-[200px] sm:h-[200px]
    md:w-[230px] md:h-[230px]
    rounded-full
    overflow-hidden
    border-2 border-gray-700
    shadow-xl
    md:-translate-x-4
    transition-all duration-500
    hover:shadow-purple-500/80
  "
          style={{ perspective: "1000px" }}
        >
          {/* Background overlay */}
          <div
            className="
    absolute inset-0
    bg-gradient-to-br from-purple-500/30 to-pink-500/30
    opacity-0
    transition-opacity duration-500
    hover:opacity-100
    pointer-events-none
    z-0
  "
          />


          {/* Image container */}
          <div
            className="
    relative
    w-full h-full
    transform-gpu
    transition-transform duration-500
    hover:rotate-x-3 hover:rotate-y-3
    z-10
  "
          >
            <Image
              src="/profile.jpg"
              alt="Thilip's Photo"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>


      {/* About Section */}
      <div id="about" className="relative z-10 px-6 md:px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 ">About Me</h2>
            <p className="text-base sm:text-lg mt-4 leading-7">
              👋🏻 I'm Thilip Kumar, a passionate Web Developer and UI Designer from India.
              I love building clean and responsive websites that offer great user experience.
            </p>
            <p className="text-base sm:text-lg mt-4 leading-7">
              My focus is on front-end technologies like React, Next.js, and Tailwind CSS.
              I'm also exploring UI/UX design to bring visual ideas to life.
            </p>
            <p className="text-base sm:text-lg mt-4 leading-7">
              Apart from coding, I enjoy bodybuilding, basketball, and learning new design trends.
            </p>

            {/* Skill Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Frontend Skills",
                  content: "HTML, CSS, JavaScript, React, Tailwind CSS",
                  borderColor: "border-purple-500/40",
                  hoverBorderColor: "hover:border-purple-500",
                  textColor: "group-hover:text-purple-500",
                },
                {
                  title: "Tools & Design",
                  content: "Figma, Photoshop, GitHub, VS Code",
                  borderColor: "border-blue-500/40",
                  hoverBorderColor: "hover:border-blue-500",
                  textColor: "group-hover:text-blue-500",
                },
                {
                  title: "Soft Skills",
                  content: "Communication, Teamwork, Problem-Solving",
                  borderColor: "border-pink-500/40",
                  hoverBorderColor: "hover:border-pink-500",
                  textColor: "group-hover:text-pink-500",
                },
              ].map(({ title, content, borderColor, hoverBorderColor, textColor }) => (
                <div
                  key={title}
                  className={`
        group
        bg-white/10 dark:bg-white/5
        backdrop-blur
        "bg-black text-white:bg-black text-white"
        p-5
        rounded-xl
        shadow
        transition-transform duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        border-b-2 border-r-2 ${borderColor} border-opacity-40
        ${hoverBorderColor}
      `} >
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 transition-colors ${textColor}`}
                  >
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-base">{content}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Tools I Use</h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {[
                  {
                    src: "/vscode.png",
                    alt: "VS Code",
                    border: "border-blue-500/30",
                    hoverBorder: "hover:border-blue-500",
                  },
                  {
                    src: "/tailwind.png",
                    alt: "Tailwind",
                    border: "border-cyan-500/30",
                    hoverBorder: "hover:border-cyan-500",
                  },
                  {
                    src: "/R.png",
                    alt: "GitHub",
                    border: "border-pink-500/30",
                    hoverBorder: "hover:border-pink-500",
                  },
                  {
                    src: "/nextjs.jpg",
                    alt: "Next.js",
                    border: "border-purple-500/30",
                    hoverBorder: "hover:border-purple-500",
                  },
                ].map((tool) => (
                  <div
                    key={tool.alt}
                    className={`relative
          w-16 h-16
          flex items-center justify-center
          rounded-xl
          bg-white/10 dark:bg-white/5 backdrop-blur
          transition-transform duration-300 hover:scale-105
          border-b-2 border-r-2 ${tool.border} ${tool.hoverBorder}
          hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]
          dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,0.1)]
        `}
                  >
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div id="service" className="relative z-10 px-6 md:px-2 py-14">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3  ">
            Service
          </h2>

          {/* Service Cards */}
          <div id="service" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div
              className="
      group
      bg-white/10 dark:bg-white/5
      backdrop-blur
     
      p-6
      rounded-xl
      shadow
      transition-transform duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      border-b-2 border-r-2 border-purple-500/40
      hover:border-purple-500
    "
            >
              <h3
                className="
        text-xl font-semibold mb-2
        transition-colors
        group-hover:text-purple-500
        font-sans
      "
              >
                Web Development
              </h3>
              <p className="text-base font-sans">
                Building responsive and modern websites using Next.js and Tailwind CSS.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
      group
      bg-white/10 dark:bg-white/5
      backdrop-blur
     
      p-6
      rounded-xl
      shadow
      transition-transform duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      border-b-2 border-r-2 border-blue-500/40
      hover:border-blue-500
    "
            >
              <h3
                className="
        text-xl font-semibold mb-2
        transition-colors
        group-hover:text-blue-500
        font-sans
      "
              >
                UI/UX Design
              </h3>
              <p className="text-base font-sans">
                Designing clean and user-friendly interfaces to improve user experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
