import { Metadata } from "next";
import Image from "next/image";
import BlurText from "@/components/react-bits/BlurText";
import background from "@/assets/background.png";
import { GalleryContainer } from "@/components/memo/image-container";
import { ActivitiesTimeline } from "@/components/memo/activities";
import { FaImage } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Memories",
  description:
    "Kumpulan kenangan penuh tawa, cerita, dan kebersamaan. Temukan galeri foto serta kutipan yang menghangatkan hati dalam Memories."
};

const quotes = [
  "Hari ini adalah cerita untuk esok.",
  "Tertawa bersama, belajar bersama, tumbuh bersama, sep*ng bersama😹"
];

export default function Page() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start text-center bg-[radial-gradient(circle_at_center,var(--color-ctp-bg),var(--color-ctp-surface))] bg-[var(--color-ctp-bg)] pt-[70px]">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          alt="Memories Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 blur-sm"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <BlurText
        text="Memories"
        delay={100}
        animateBy="letters"
        direction="top"
        className="mt-12 sm:mt-16 font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight 
        bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent"
      />

      {/* Quotes */}
      <div className="mt-8 sm:mt-10 max-w-3xl w-full flex flex-col gap-4 px-6 sm:px-8">
        {quotes.map((q, i) => (
          <p
            key={i}
            className="text-base sm:text-lg md:text-xl italic text-[var(--color-ctp-subtext)] hover:text-[var(--color-ctp-accent)] transition-colors leading-relaxed"
          >
            “{q}”
          </p>
        ))}
      </div>

      {/* ============= SECTION 1: GALLERY ============= */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaImage className="w-8 h-8 text-[var(--color-ctp-accent)]" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent">
            Our Gallery
          </h2>
        </div>
        <GalleryContainer />
      </section>

      {/* ============= SECTION 2: ACTIVITIES TIMELINE ============= */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaMapMarkedAlt className="w-8 h-8 text-[var(--color-ctp-accent)]" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent">
            Our Adventures
          </h2>
        </div>
        <ActivitiesTimeline />
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-24" aria-hidden="true"></div>
    </main>
  );
}
