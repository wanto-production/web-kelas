import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/background.png";
import { FaGithub } from "react-icons/fa";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";

export const metadata: Metadata = {
  title: "home"
};

export default function Page() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[radial-gradient(circle_at_center,var(--color-ctp-bg),var(--color-ctp-surface))]">

      {/* Background logo */}
      <Image
        src={logo}
        alt="Logo Background"
        fill
        priority
        className="object-cover opacity-20 blur-sm -z-10"
      />

      {/* Foto & Circular Text */}
      <div className="relative flex items-center justify-center">
        <Image
          src={logo}
          alt="Logo Kelas 8.10"
          className="h-[135px] w-[135px] rounded-full object-cover shadow-lg border-4 border-[var(--color-ctp-surface)] absolute"
        />
        <CircularText
          text="*KELAS*8.10*"
          onHover="speedUp"
          spinDuration={20}
          className="text-[var(--color-ctp-subtext)]"
        />
      </div>

      {/* Judul */}
      <BlurText
        text="Selamat Datang di Kelas 8.10"
        delay={150}
        animateBy="words"
        direction="top"
        className="mt-8 p-4 font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent transition-colors"
      />

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="/info"
          className="min-w-[150px] px-6 py-2 rounded-xl bg-[var(--color-ctp-accent)] text-[var(--color-ctp-surface)] font-medium shadow-md hover:scale-105 transition-all"
        >
          Lihat Info
        </a>
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          className="min-w-[150px] px-6 py-2 rounded-xl bg-[var(--color-ctp-accent2)] text-[var(--color-ctp-surface)] font-medium flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
        >
          <FaGithub /> Github
        </a>
      </div>
    </main>
  )
}
