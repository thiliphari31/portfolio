"use client";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
      className={`w-full min-h-screen relative overflow-visible font-sans transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      {/* Custom Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[999]"
        style={{
          transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-70 blur-md"></div>
      </div>

      {/* Floating Menu */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setDarkMode(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow hover:scale-110 transition"
              title="Dark Mode"
            >
              🌙
            </button>
            <button
              onClick={() => setDarkMode(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow hover:scale-110 transition"
              title="Light Mode"
            >
              ☀️
            </button>
            <a
              href="https://www.linkedin.com/in/thilipkumar-k31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow hover:scale-110 transition"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/thiliphari31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white shadow hover:scale-110 transition"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M165.9 397.4c0 2-2.3 4.3-5.2 3.6C82 380.7 48 317.4 48 256.2c0-76 61.5-137.5 
                137.5-137.5 38.1 0 72.6 15.4 97.6 40.2 25-24.8 59.5-40.2 97.6-40.2C386.5 78.7 448 140.2 
                448 216.2c0 61.2-34 124.5-112.7 144.8-2.9.6-5.2-1.6-5.2-3.6v-29.4c0-10.3 3.6-17 7.6-23.5 
                37.5-9 69.7-31.2 69.7-77.5 0-17.2-6.1-31.3-16.1-42.3 1.6-3.9 7-19.7-1.5-41-13.2-4-43.5 
                16.7-43.5 16.7-12.5-3.5-25.8-5.2-39.1-5.2s-26.6 1.7-39.1 5.2c0 0-30.3-20.7-43.5-16.7-8.5 
                21.3-3.1 37.1-1.5 41-10 11-16.1 25.1-16.1 42.3 0 46.4 32.2 68.5 69.7 77.5 4 6.5 7.6 13.2 7.6 23.5v29.4z" />
              </svg>
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
      <div className="relative z-10 flex flex-col items-center justify-center pt-28 pb-34 text-center gap-6 px-6 md:px-20">
        <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden border-2 border-gray-700 shadow-xl">
          <Image src="/profile.jpg" alt="Thilip's Photo" fill className="object-cover" />
        </div>

        <div className="flex flex-col items-center gap-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold transition duration-500">
            Hi, I'm Thilip Kumar 👋🏻
          </h1>
          <p className="text-base sm:text-lg">Web Developer | UI Designer</p>
          <p className="text-base sm:text-lg">
            Passionate about building responsive, user-friendly websites.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="/TK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-6 py-2 rounded-full font-semibold text-white dark:text-black bg-gradient-to-r
              from-purple-300 via-pink-300 to-indigo-400 shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out focus:outline-none
              focus:ring-2 focus:ring-purple-500"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 px-6 md:px-10 py-20">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-10">
    {/* Left Sticky Photo */}
    <div className="w-full sm:w-[250px] shrink-0 flex justify-center sm:block">
      <div className="relative w-[250px] h-[270px] sm:w-[250px] sm:h-[270px]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 blur-2xl opacity-40 animate-glow z-0" />
        <div
          className="relative z-10 w-full h-full"
          style={{ perspective: "1000px" }}
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * -8;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.transform = "rotateX(0deg) rotateY(0deg)";
          }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Thilip's Photo"
              fill
              sizes="(max-width: 640px) 100vw, 250px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>


          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base sm:text-lg leading-7">
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Skills",
                  color: "purple",
                  content: "HTML, CSS, JavaScript, React, Tailwind CSS",
                },
                {
                  title: "Tools & Design",
                  color: "blue",
                  content: "Figma, Photoshop, GitHub, VS Code",
                },
                {
                  title: "Soft Skills",
                  color: "pink",
                  content: "Communication, Teamwork, Problem-Solving",
                },
              ].map(({ title, color, content }) => (
                <div
                  key={title}
                  className={`group bg-white dark:bg-gray-900 text-black dark:text-white p-5 rounded-xl shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-${color}-500`}
                >
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 group-hover:text-${color}-600 dark:group-hover:text-${color}-400 transition-colors`}
                  >
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-base">{content}</p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Tools I Used</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { src: "/vscode.png", alt: "VS Code", border: "hover:border-blue-500" },
                  { src: "/tailwind.png", alt: "Tailwind", border: "hover:border-cyan-500" },
                  { src: "/github.jpg", alt: "GitHub", border: "hover:border-gray-300" },
                  { src: "/next.jpg", alt: "Next.js", border: "hover:border-black dark:hover:border-white" },
                ].map((tool) => (
                  <div
                    key={tool.alt}
                    className={`w-16 h-16 flex items-center justify-center border dark:border-gray-600 rounded-xl transition duration-300 ${tool.border}`}
                  >
                    <img src={tool.src} alt={tool.alt} className="w-10 h-10 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
