import BlurText from '@/components/react-bits/BlurText';
import { ContactForm, FAQSection, FinalCTASection } from '@/components/contact/ContactForm';
import { Metadata } from 'next';

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-[radial-gradient(circle_at_center,var(--color-ctp-bg),var(--color-ctp-surface))] overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
            <BlurText
              text="Contact Saya"
              delay={150}
              animateBy="words"
              direction="top"
              className="font-poppins text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent leading-tight"
            />

            <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--color-ctp-subtext)] max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
              Web ini di buat oleh ikhwan satrio wicaksono, jika anda berminat dengan saya karena web ini atau karya saya yang lain
            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto">
            <a
              href="mailto:ikwansatria3974@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] text-[var(--color-ctp-surface)] rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              Kirim Email
            </a>
            <div className="text-[var(--color-ctp-subtext)] text-xs sm:text-sm text-center">atau isi formulir di bawah</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-[var(--color-ctp-subtext)] text-xs sm:text-sm mb-2">Hubungi Kami</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-ctp-subtext)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTASection />
    </main>
  );
}

// Metadata
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Hubungi Kelas 8.10 - Website Resmi Siswa SMP. Hubungi kami untuk pertanyaan, saran, atau kolaborasi.',
};
