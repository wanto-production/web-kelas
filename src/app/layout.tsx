import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Providers } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["600", "700"], // buat heading tegas
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500"], // normal & medium buat isi teks
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: {
    template: "8.10 | %s",
    default: "Kelas 8.10 - Website Resmi Siswa SMP"
  },
  description:
    "Website resmi Kelas 8.10 SMP. Portal informasi siswa, pengumuman, tugas, jadwal pelajaran, galeri kegiatan, dan komunikasi antar siswa kelas 8.10.",
  keywords: [
    // Kelas & Sekolah
    "kelas 8.10",
    "kelas 8-10",
    "kelas delapan sepuluh",
    "siswa kelas 8",
    "SMP kelas 8",
    "website kelas",
    "portal siswa",

    // Akademik
    "tugas sekolah",
    "jadwal pelajaran",
    "pengumuman kelas",
    "materi pelajaran",
    "ujian kelas 8",
    "nilai siswa",
    "absensi kelas",
    "PR online",

    // Aktivitas & Komunitas
    "kegiatan kelas",
    "galeri foto kelas",
    "ekstrakulikuler",
    "organisasi siswa",
    "acara sekolah",
    "kompetisi siswa",
    "prestasi kelas",
    "komunitas siswa",

    // Komunikasi
    "grup kelas",
    "forum diskusi",
    "chat siswa",
    "konsultasi guru",
    "wali kelas",
    "orang tua siswa",

    // Teknologi & Platform
    "e-learning",
    "pembelajaran online",
    "digital class",
    "website sekolah",
    "portal pendidikan",
    "platform siswa",

    // Developer Credit
    "dibuat oleh Ikhwan Satrio",
    "developer Ikhwan Satrio",
    "Ikhwan Satrio web developer",

    // Lokasi (sesuaikan dengan sekolah)
    "SMP Bekasi",
    "sekolah Bekasi",
    "pendidikan Bekasi",
    "siswa Bekasi"
  ],
  authors: [
    { name: "Kelas 8.10" },
    { name: "Ikhwan Satrio", url: "https://github.com/wanto-production" }
  ],
  creator: "Ikhwan Satrio",
  publisher: "Kelas 8.10 SMP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "education",
  classification: "student portal",
  referrer: "origin-when-cross-origin",
  other: {
    developer: "Ikhwan Satrio",
    "developed-by": "Ikhwan Satrio",
    portfolio: "https://portofolio-wanto.vercel.app/"
  }
};
;
