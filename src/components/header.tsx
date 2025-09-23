"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaGithub } from "react-icons/fa";
import logo from "@/assets/favicon.png"; // favicon kamu
import { FaXmark } from "react-icons/fa6";
import ThemeToggle from "./themes/theme-togle";

interface Pages {
  href: string,
  text: string
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pages: Pages[] = [
    { href: '/', text: "Home" },
    { href: '/about', text: "About" },
    { href: '/memo', text: "Memories" },
    { href: '/contact', text: "Contact" }
  ]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50">
      {/* Floating Bar */}
      <div
        className="w-full h-[60px] flex items-center justify-between px-6 
                  bg-[var(--color-ctp-bg)]/80 backdrop-blur-md border border-[var(--color-ctp-border)] 
                  rounded-2xl shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo Kelas 8.10" className="h-[36px] w-auto" />
          <span className="hidden sm:inline font-poppins font-semibold text-[var(--color-ctp-text)]">
            Kelas 8.10
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-[var(--color-ctp-subtext)] text-sm">
          {pages.map(({ href, text }, i) => (
            <Link key={i} href={href} className="hover:text-[var(--color-ctp-text)] transition">{text}</Link>
          ))}
        </nav>

        <div className="flex gap-2 items-center">
          {/* Github Button (Desktop) */}
          <a
            href="https://github.com/wanto-production"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                 bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] 
                 text-[var(--color-ctp-btn-text)] font-medium hover:opacity-90 transition"
          >
            <FaGithub />
            Github
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-center text-[var(--color-ctp-subtext)] hover:text-[var(--color-ctp-text)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-[72px] left-1/2 -translate-x-1/2 w-[90%] 
          bg-[var(--color-ctp-bg)]/95 backdrop-blur-md border border-[var(--color-ctp-border)] 
          rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6 
          transition-all duration-300 z-40
          ${isOpen
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-95 invisible pointer-events-none"
          }`}
      >
        {pages.map(({ href, text }, i) => (
          <Link key={i} href={href} className="text-[var(--color-ctp-subtext)] hover:text-[var(--color-ctp-text)] font-medium">{text}</Link>
        ))}
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r 
           from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] text-[var(--color-ctp-btn-text)] font-medium 
           hover:opacity-90 transition"
        >
          <FaGithub />
          Github
        </a>
      </div>
    </header>
  );
}
