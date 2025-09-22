"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaGithub } from "react-icons/fa";
import logo from "@/assets/favicon.png"; // favicon kamu
import { FaXmark } from "react-icons/fa6";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50">
      {/* Floating Bar */}
      <div className="w-full h-[60px] flex items-center justify-between px-6 
                  bg-[#0c0c0c]/80 backdrop-blur-md border border-gray-700 
                  rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo Kelas 8.10" className="h-[36px] w-auto" />
          <span className="hidden sm:inline font-poppins font-semibold text-white">
            Kelas 8.10
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/info" className="hover:text-white transition">Info</Link>
          <Link href="/tugas" className="hover:text-white transition">Tugas</Link>
          <Link href="/jadwal" className="hover:text-white transition">Jadwal</Link>
          <Link href="/galeri" className="hover:text-white transition">Galeri</Link>
          <Link href="/kontak" className="hover:text-white transition">Kontak</Link>
        </nav>

        {/* Github Button (Desktop) */}
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                 font-medium hover:opacity-90 transition"
        >
          <FaGithub />
          Github
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-center text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaXmark className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Nav (Dropdown card style) */}
      <div
        className={`md:hidden absolute top-[72px] left-1/2 -translate-x-1/2 w-[90%] 
          bg-[#0c0c0c]/95 backdrop-blur-md border border-gray-700 
          rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6 
          transition-all duration-300 z-40
          ${isOpen
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-95 invisible pointer-events-none"
          }`}
      >
        <Link href="/" className="text-gray-300 hover:text-white font-medium">Home</Link>
        <Link href="/info" className="text-gray-300 hover:text-white font-medium">Info</Link>
        <Link href="/tugas" className="text-gray-300 hover:text-white font-medium">Tugas</Link>
        <Link href="/jadwal" className="text-gray-300 hover:text-white font-medium">Jadwal</Link>
        <Link href="/galeri" className="text-gray-300 hover:text-white font-medium">Galeri</Link>
        <Link href="/kontak" className="text-gray-300 hover:text-white font-medium">Kontak</Link>
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r 
           from-blue-600 to-purple-600 text-white font-medium 
           hover:opacity-90 transition"
        >
          <FaGithub />
          Github
        </a>
      </div>
    </header>
  );
}
