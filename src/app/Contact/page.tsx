// app/Contact/page.tsx
"use client";
import React from "react";
export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-gray-300 mb-8">
        I'm open to work and collaborations. Feel free to get in touch!
      </p>

      <div className="space-y-4 text-gray-300 text-center">
        <p>📧 <strong>Email:</strong> <a href="mailto:harithilip31@gmail.com" className="underline text-white">harithilip31@gmail.com</a></p>
        <p>📱 <strong>Phone:</strong> <a href="tel:+919566308764" className="underline text-white">+91 95663 08764</a></p>
        <p>📍 <strong>Location:</strong> Coimbatore, Tamil Nadu</p>
      </div>
    </div>
  );
}