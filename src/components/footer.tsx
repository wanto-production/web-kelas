'use client';
import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram Kelas',
      href: 'https://www.instagram.com/class_eight10/', // ganti dengan IG kelas
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072C5.526.13 4.718.33 4.015.63a5.98 5.98 0 00-2.157 1.405A5.98 5.98 0 00.453 4.192c-.3.703-.5 1.511-.558 2.741C-.072 8.166-.059 8.573-.059 12.017c0 3.444-.013 3.851.045 5.084c.058 1.23.258 2.038.558 2.741a5.98 5.98 0 001.405 2.157a5.98 5.98 0 002.157 1.405c.703.3 1.511.5 2.741.558c1.233.058 1.64.045 5.084.045c3.444 0 3.851.013 5.084-.045c1.23-.058 2.038-.258 2.741-.558a5.98 5.98 0 002.157-1.405a5.98 5.98 0 001.405-2.157c.3-.703.5-1.511.558-2.741c.058-1.233.045-1.64.045-5.084c0-3.444.013-3.851-.045-5.084c-.058-1.23-.258-2.038-.558-2.741a5.98 5.98 0 00-1.405-2.157A5.98 5.98 0 0019.832.63c-.703-.3-1.511-.5-2.741-.558C15.851.013 15.444 0 12.017 0zm0 2.158c3.387 0 3.787.013 5.12.072c1.235.058 1.906.264 2.353.438a3.94 3.94 0 011.462.95a3.94 3.94 0 01.95 1.462c.174.447.38 1.118.438 2.353c.059 1.333.072 1.733.072 5.12s-.013 3.787-.072 5.12c-.058 1.235-.264 1.906-.438 2.353a3.94 3.94 0 01-.95 1.462a3.94 3.94 0 01-1.462.95c-.447.174-1.118.38-2.353.438c-1.333.059-1.733.072-5.12.072s-3.787-.013-5.12-.072c-1.235-.058-1.906-.264-2.353-.438a3.94 3.94 0 01-1.462-.95a3.94 3.94 0 01-.95-1.462c-.174-.447-.38-1.118-.438-2.353c-.059-1.333-.072-1.733-.072-5.12s.013-3.787.072-5.12c.058-1.235.264-1.906.438-2.353a3.94 3.94 0 01.95-1.462a3.94 3.94 0 011.462-.95c.447-.174 1.118-.38 2.353-.438c1.333-.059 1.733-.072 5.12-.072zM12.017 5.838a6.179 6.179 0 100 12.358a6.179 6.179 0 000-12.358zm0 10.188a4.009 4.009 0 110-8.018a4.009 4.009 0 010 8.018zm7.846-10.405a1.441 1.441 0 11-2.883 0a1.441 1.441 0 012.883 0z" />
        </svg>
      )
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Siswa', href: '/students' },
    { name: 'Tugas', href: '/assignments' },
    { name: 'Jadwal', href: '/schedule' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Pengumuman', href: '/announcements' }
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'NextJs', 'Bun'
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">8.10</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Kelas 8.10</h3>
                <p className="text-gray-400 text-sm">SMP Negeri Bekasi</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Website resmi Kelas 8.10 SMP. Portal informasi siswa untuk tugas, pengumuman,
              jadwal pelajaran, dan kegiatan kelas. Dibuat dengan ❤️ oleh siswa untuk siswa.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white transition-all duration-200 cursor-default"
                >
                  {subject}
                </span>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">32 Siswa Aktif</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} Kelas 8.10.</span>
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <span className="text-blue-400 font-medium">Ikhwan Satrio</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Aturan Kelas
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Kontak Wali Kelas
            </Link>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Built with</span>
              <span className="text-blue-400 font-medium">Next.js</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 mx-auto group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};
