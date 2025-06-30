"use client";
import React from "react";
import Image from "next/image";


export default function About() {
  return (
    <div className="relative z-10 px-6 md:px-20 py-28 pt-30 pb-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* 3D Hover + Glowing BG */}
        <div className="relative">
          {/* Glowing Background */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 blur-2xl opacity-40 animate-glow z-0" />

          {/* 3D Card */}
          <div className="relative z-10" style={{ perspective: "1000px" }}>
            <div
              className="profile-3d-card w-[280px] h-[300px] bg-transparent border-1 border-gray-700  rounded-xl transition-transform duration-300 ease-in-out"
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
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-7">
            👋🏻 I'm Thilip Kumar, a passionate Web Developer and UI Designer from India.
            I love building clean and responsive websites that offer great user experience.
          </p>
          <p className="text-lg mt-4 leading-7">
            My focus is on front-end technologies like React, Next.js, and Tailwind CSS.
            I'm also exploring UI/UX design to bring visual ideas to life with smooth user flow.
          </p>
          <p className="text-lg mt-4 leading-7">
            Apart from coding, I enjoy bodybuilding, basketball, and learning new design trends.
          </p>
          {/* Skill Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500 border border-transparent">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Frontend Skills
              </h3>
              <p>HTML, CSS, JavaScript, React, Tailwind CSS</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 border border-transparent">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tools & Design
              </h3>
              <p>Figma, Photoshop, GitHub, VS Code</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-pink-500 border border-transparent">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                Soft Skills
              </h3>
              <p>Communication, Teamwork, Problem-Solving</p>
            </div>
          </div>

          {/* tools section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Tools I Used</h3>

            <div className="flex flex-wrap gap-3">
              {/* VS Code */}
              <div className="w-15 h-15 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-md transition duration-300">
                <img src="/vscode.png" alt="VS Code" className="w-10 h-10 object-contain" />
              </div>

              {/* Figma */}
              <div className="w-15 h-15 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-md transition duration-300">
                <img src="/tailwind.png" alt="Tailwind" className="w-10 h-10 object-contain" />
              </div>

              {/* GitHub */}
              <div className="w-15 h-15 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-md transition duration-300">
                <img src="/github.jpg" alt="GitHub" className="w-10 h-10 object-contain dark:invert" />
              </div>

              {/* Next.js */}
              <div className="w-15 h-15 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-xl hover:shadow-md transition duration-300">
                <img src="/next.jpg" alt="Next.js" className="w-10 h-10 object-contain dark:invert" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
