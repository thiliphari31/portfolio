// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Inter } from "next/font/google";







const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Thilip Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.variable} antialiased`}>


        <div className="flex flex-col min-h-screen text-white bg-black">
          <Header />

          {/* Add fade-in animation to main section */}
          <main className="flex-grow w-full mx-auto animate-fade-in">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
