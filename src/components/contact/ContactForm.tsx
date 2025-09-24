'use client';

import { useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { useAtom } from 'jotai';
import { sendEmailAction } from '@/app/contact/action';

// Import atoms
import {
  nameAtom,
  emailAtom,
  subjectAtom,
  messageAtom,
  formSuccessAtom,
  formErrorAtom,
  isPendingAtom
} from '@/lib/atoms/contactAtoms';

// Icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

// Submit Button with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  const [formSuccess] = useAtom(formSuccessAtom);

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-[var(--color-ctp-surface)] transition-all duration-300 text-sm sm:text-base
        ${pending
          ? 'bg-gray-600 cursor-not-allowed'
          : formSuccess
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] hover:shadow-lg hover:scale-105'
        }`}
    >
      {pending ? (
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" strokeDasharray="31.4" strokeDashoffset="0"></circle>
          </svg>
          Mengirim...
        </div>
      ) : formSuccess ? (
        <div className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Pesan Terkirim!
        </div>
      ) : (
        'Kirim Pesan'
      )}
    </button>
  );
}

// Contact methods data
const contactMethods = [
  {
    icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Email',
    value: 'ikwansatria3974@gmail.com',
    href: 'mailto:ikwansatria3974@gmail.com',
    description: 'Drop me a line anytime',
  },
  {
    icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'GitHub',
    value: '@wanto-production',
    href: 'https://github.com/wanto-production',
    description: 'Check out my code',
  },
  {
    icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'LinkedIn',
    value: 'Ikhwan Satrio',
    href: 'https://linkedin.com/in/ikhwan-satrio',
    description: "Let's connect professionally",
  },
  {
    icon: <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Twitter',
    value: '@ikhwansatrio',
    href: 'https://twitter.com/ikhwansatrio',
    description: 'Follow me for updates',
  },
];


export function ContactForm() {
  const [_, startTransition] = useTransition();
  const [, setIsPending] = useAtom(isPendingAtom);
  const [formSuccess, setFormSuccess] = useAtom(formSuccessAtom);
  const [formError, setFormError] = useAtom(formErrorAtom);

  const [name, setName] = useAtom(nameAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [subject, setSubject] = useAtom(subjectAtom);
  const [message, setMessage] = useAtom(messageAtom);

  const handleSubmit = async (formData: FormData) => {
    setFormSuccess(false);
    setFormError(null);
    setIsPending(true);

    startTransition(async () => {
      try {
        const result = await sendEmailAction(formData);
        if (result.success) {
          setFormSuccess(true);
          // Reset form fields
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        } else {
          setFormError(result.error || 'Something went wrong');
        }
      } catch (err) {
        setFormError('Failed to send message. Please try again.');
      } finally {
        setIsPending(false);
      }
    });
  };

  return (
    <div className="w-full bg-gradient-to-b from-[var(--color-ctp-bg)] to-[var(--color-ctp-surface)] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent mb-3 sm:mb-4">
                Kirim Pesan
              </h2>
              <p className="text-[var(--color-ctp-subtext)] text-base sm:text-lg">
                Isi formulir ini untuk hubungi saya
              </p>
            </div>

            <form action={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ctp-text)] mb-2">
                    Nama *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-[var(--color-ctp-surface)] border border-[var(--color-ctp-text)]/20 rounded-lg text-[var(--color-ctp-text)] placeholder-[var(--color-ctp-subtext)] focus:ring-2 focus:ring-[var(--color-ctp-accent)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ctp-text)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-[var(--color-ctp-surface)] border border-[var(--color-ctp-text)]/20 rounded-lg text-[var(--color-ctp-text)] placeholder-[var(--color-ctp-subtext)] focus:ring-2 focus:ring-[var(--color-ctp-accent)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-ctp-text)] mb-2">
                  Subjek *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-3 sm:px-4 py-3 bg-[var(--color-ctp-surface)] border border-[var(--color-ctp-text)]/20 rounded-lg text-[var(--color-ctp-text)] placeholder-[var(--color-ctp-subtext)] focus:ring-2 focus:ring-[var(--color-ctp-accent)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="Diskusi proyek, kolaborasi, dll."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ctp-text)] mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-3 bg-[var(--color-ctp-surface)] border border-[var(--color-ctp-text)]/20 rounded-lg text-[var(--color-ctp-text)] placeholder-[var(--color-ctp-subtext)] focus:ring-2 focus:ring-[var(--color-ctp-accent)] focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Ceritakan tentang proyek Anda, ide, atau sekadar menyapa..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <SubmitButton />
              </div>

              {formSuccess && (
                <div className="p-3 sm:p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-xs sm:text-sm">
                  Terima kasih sudah menghubungi saya!
                </div>
              )}

              {formError && (
                <div className="p-3 sm:p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-xs sm:text-sm">
                  {formError}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent mb-3 sm:mb-4">
                Hubungi saya
              </h2>
              <p className="text-[var(--color-ctp-subtext)] text-base sm:text-lg">
                Lebih suka menghubungi langsung? Berikut cara terbaik untuk menghubungi saya
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={method.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="group block p-4 sm:p-6 bg-[var(--color-ctp-surface)]/50 rounded-xl sm:rounded-2xl border border-[var(--color-ctp-text)]/20 backdrop-blur-sm hover:border-[var(--color-ctp-text)]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[var(--color-ctp-accent)]/20 to-[var(--color-ctp-accent2)]/20 rounded-lg flex items-center justify-center text-[var(--color-ctp-accent)] group-hover:from-[var(--color-ctp-accent)]/30 group-hover:to-[var(--color-ctp-accent2)]/30 transition-all duration-300 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[var(--color-ctp-text)] group-hover:text-[var(--color-ctp-accent)] transition-colors duration-300 text-sm sm:text-base">
                        {method.title}
                      </h3>
                      <p className="text-[var(--color-ctp-subtext)] group-hover:text-[var(--color-ctp-text)] transition-colors duration-300 mb-1 text-sm sm:text-base break-words">
                        {method.value}
                      </p>
                      <p className="text-[var(--color-ctp-text)]/70 text-xs sm:text-sm">{method.description}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-ctp-subtext)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-xl sm:rounded-2xl border border-green-600/30">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <h3 className="font-semibold text-[var(--color-ctp-text)] text-sm sm:text-base">Sedang Tersedia</h3>
              </div>
              <p className="text-[var(--color-ctp-text)] text-xs sm:text-sm leading-relaxed">
                Kami sedang menerima pertanyaan dan diskusi baru. Waktu respon biasanya dalam 24 jam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  // FAQ data
  const faqs = [
    {
      question: 'Apa jenis proyek yang biasanya dikerjakan kelas 8.10?',
      answer:
        'Kami mengerjakan berbagai proyek seperti presentasi interaktif, tugas kelompok kreatif, dan proyek seni digital menggunakan teknologi modern.',
    },
    {
      question: 'Berapa lama biasanya pengerjaan tugas kelompok?',
      answer:
        'Durasi pengerjaan bervariasi tergantung kompleksitas tugas. Tugas sederhana biasanya selesai dalam 1-2 minggu, sementara proyek kompleks bisa memakan waktu 1-2 bulan.',
    },
    {
      question: 'Apakah kelas 8.10 bekerja dengan siswa dari kelas lain?',
      answer:
        'Tentu saja! Kami terbuka untuk bekerja sama dengan siswa dari kelas lain. Kami menggunakan aplikasi pesan dan video call untuk komunikasi yang efektif.',
    },
    {
      question: 'Apa teknologi yang paling sering digunakan?',
      answer:
        'Kami suka menggunakan Canva, Google Workspace, dan berbagai aplikasi kreatif lainnya untuk membuat proyek yang menarik dan interaktif.',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[var(--color-ctp-surface)] to-[var(--color-ctp-bg)] py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent mb-4 sm:mb-6">
            Pertanyaan Umum
          </h2>
          <p className="text-[var(--color-ctp-subtext)] text-base sm:text-lg">
            Jawaban cepat untuk pertanyaan umum tentang kelas 8.10
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[var(--color-ctp-surface)]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[var(--color-ctp-text)]/20 backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--color-ctp-text)] mb-2 sm:mb-3 leading-snug">{faq.question}</h3>
              <p className="text-[var(--color-ctp-subtext)] leading-relaxed text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="w-full bg-gradient-to-b from-[var(--color-ctp-bg)] to-[var(--color-ctp-surface)] py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[var(--color-ctp-accent)]/10 via-[var(--color-ctp-accent2)]/10 to-cyan-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm border border-[var(--color-ctp-text)]/20">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] bg-clip-text text-transparent mb-4 sm:mb-6">
            Siap Memulai Proyek Baru?
          </h2>
          <p className="text-[var(--color-ctp-text)] text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Apakah Anda memiliki visi yang jelas atau hanya sebuah ide, kami siap membantu mewujudkannya. Mari kita ciptakan sesuatu yang luar biasa bersama.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href="mailto:ikwansatria3974@gmail.com"
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[var(--color-ctp-accent)] to-[var(--color-ctp-accent2)] text-[var(--color-ctp-surface)] rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Mulai Percakapan
            </a>
            <Link
              href="/about"
              className="px-6 sm:px-8 py-3 border border-[var(--color-ctp-text)]/30 text-[var(--color-ctp-text)] rounded-xl font-medium hover:bg-[var(--color-ctp-text)]/10 transition-all duration-300 text-sm sm:text-base"
            >
              Tentang 8.10
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
