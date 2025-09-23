import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/background.png";
import { FaGraduationCap, FaUsers, FaTrophy, FaHeart, FaGithub, FaHome } from "react-icons/fa";
import { MdSchool, MdLocationOn, MdCalendarToday } from "react-icons/md";
import BlurText from "@/components/react-bits/BlurText";

export const metadata: Metadata = {
  title: "Tentang Kelas 8.10",
  description: "Mengenal lebih dekat kelas 8.10 SMP Negeri Cikarang Utara - Visi, Misi, dan keunggulan kami"
};

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-[radial-gradient(circle_at_center,var(--color-ctp-bg),var(--color-ctp-surface))] overflow-x-hidden">
      {/* Background logo */}
      <Image
        src={logo}
        alt="Logo Background"
        fill
        priority
        className="object-cover opacity-10 blur-sm -z-10"
      />



      {/* Hero Section with Photo */}
      <section className=" px-4 min-h-screen flex items-center justify-center sm:px-6 lg:px-8">
        <div className=" h-full flex flex-col items-center justify-center text-center">
          {/* Class Photo */}
          <div className="relative inline-block group mb-12">
            <Image
              src={logo}
              alt="Foto Kelas 8.10"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-2xl border-4 border-[var(--color-ctp-surface)] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--color-ctp-accent)]/20 to-[var(--color-ctp-accent2)]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Title and Subtitle */}
          <BlurText
            text="Tentang Kelas 8.10"
            delay={150}
            animateBy="words"
            direction="top"
            className="font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent mb-6 p-4"
          />
          <p className="text-xl text-[var(--color-ctp-subtext)] max-w-3xl mx-auto">
            SMP Negeri Cikarang Utara - Kelas yang penuh semangat dan prestasi
          </p>
        </div>
      </section>



      {/* About Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visi Card */}
            <div className="bg-[var(--color-ctp-surface)]/50 backdrop-blur-sm rounded-xl p-8 border border-[var(--color-ctp-subtext)]/20 hover:scale-105 transition-transform duration-300 group">
              <div className="text-5xl mb-6 text-[var(--color-ctp-accent)] group-hover:scale-110 transition-transform flex justify-center">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-ctp-text)] mb-4 text-center">Visi Kelas</h3>
              <p className="text-[var(--color-ctp-subtext)] leading-relaxed text-center">
                Menjadi kelas yang unggul dalam prestasi akademik dan non-akademik, berkarakter mulia, dan berwawasan global.
              </p>
            </div>

            {/* Misi Card */}
            <div className="bg-[var(--color-ctp-surface)]/50 backdrop-blur-sm rounded-xl p-8 border border-[var(--color-ctp-subtext)]/20 hover:scale-105 transition-transform duration-300 group">
              <div className="text-5xl mb-6 text-[var(--color-ctp-accent2)] group-hover:scale-110 transition-transform flex justify-center">
                <FaTrophy />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-ctp-text)] mb-4 text-center">Misi Kelas</h3>
              <p className="text-[var(--color-ctp-subtext)] leading-relaxed text-center">
                Mengembangkan potensi siswa secara optimal melalui pembelajaran yang inovatif dan pembentukan karakter yang kuat.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-[var(--color-ctp-surface)]/50 backdrop-blur-sm rounded-xl p-8 border border-[var(--color-ctp-subtext)]/20 hover:scale-105 transition-transform duration-300 group md:col-span-2 lg:col-span-1">
              <div className="text-5xl mb-6 text-[var(--color-ctp-accent)] group-hover:scale-110 transition-transform flex justify-center">
                <FaHeart />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-ctp-text)] mb-4 text-center">Nilai-nilai</h3>
              <p className="text-[var(--color-ctp-subtext)] leading-relaxed text-center">
                Kejujuran, tanggung jawab, kerjasama, dan semangat berprestasi adalah fondasi yang membangun kelas 8.10.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Info */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--color-ctp-surface)]/50 backdrop-blur-sm rounded-2xl p-10 border border-[var(--color-ctp-subtext)]/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--color-ctp-text)] mb-12">
              Informasi Sekolah
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <MdSchool className="text-3xl text-[var(--color-ctp-accent)] mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--color-ctp-text)] text-lg mb-2">Nama Sekolah</h4>
                  <p className="text-[var(--color-ctp-subtext)]">SMP Negeri Cikarang Utara</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdLocationOn className="text-3xl text-[var(--color-ctp-accent2)] mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--color-ctp-text)] text-lg mb-2">Alamat</h4>
                  <p className="text-[var(--color-ctp-subtext)]">Cikarang Utara, Kabupaten Bekasi, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaUsers className="text-3xl text-[var(--color-ctp-accent)] mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--color-ctp-text)] text-lg mb-2">Wali Kelas</h4>
                  <p className="text-[var(--color-ctp-subtext)]">Bu cita</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdCalendarToday className="text-3xl text-[var(--color-ctp-accent2)] mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--color-ctp-text)] text-lg mb-2">Tahun Ajaran</h4>
                  <p className="text-[var(--color-ctp-subtext)]">2024/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ctp-text)] mb-6">
            Mari Berkenalan Lebih Dekat!
          </h2>
          <p className="text-xl text-[var(--color-ctp-subtext)] mb-12 max-w-2xl mx-auto">
            Jelajahi lebih banyak tentang aktivitas, prestasi, dan momen-momen berharga kelas 8.10
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/"
              className="min-w-[160px] px-8 py-4 rounded-xl bg-[var(--color-ctp-accent)] text-[var(--color-ctp-surface)] font-semibold shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <FaHome className="text-xl" /> Home
            </Link>
            <Link
              href="/memo"
              className="min-w-[160px] px-8 py-4 rounded-xl bg-[var(--color-ctp-accent2)] text-[var(--color-ctp-surface)] font-semibold shadow-lg hover:scale-105 transition-all text-lg"
            >
              Lihat Galeri
            </Link>
            <a
              href="https://github.com/wanto-production"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[160px] px-8 py-4 rounded-xl border-2 border-[var(--color-ctp-accent)] text-[var(--color-ctp-accent)] font-semibold hover:bg-[var(--color-ctp-accent)] hover:text-[var(--color-ctp-surface)] transition-all flex items-center justify-center gap-3 text-lg"
            >
              <FaGithub className="text-xl" /> Github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
