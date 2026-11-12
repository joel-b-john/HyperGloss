import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'services', 'packages', 'gallery', 'about', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070A]/95 backdrop-blur-md border-b border-[#00B7FF]/20 shadow-[0_4px_30px_rgba(0,183,255,0.15)] py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-[#05070A]/90 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0"
          >
            <div className="relative shrink-0">
              <img
                src="/images/logo.jpg"
                alt="HYPERGLOSS CUSTOM Logo"
                className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg object-cover border border-[#00B7FF]/40 shadow-[0_0_15px_rgba(0,183,255,0.4)] group-hover:border-[#00F0FF] transition-all duration-300"
              />
              <div className="absolute -inset-1 rounded-lg bg-[#00B7FF]/20 blur-sm group-hover:bg-[#00F0FF]/40 transition-all duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading text-sm sm:text-lg xl:text-xl font-black italic tracking-wider text-white group-hover:text-[#00B7FF] transition-colors truncate">
                HYPERGLOSS <span className="text-[#00B7FF] group-hover:text-white">CUSTOM</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-subheading tracking-widest text-[#94A3B8] group-hover:text-[#00B7FF] transition-colors uppercase -mt-0.5 truncate">
                {BUSINESS_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 bg-[#0B0F14]/70 border border-[#00B7FF]/15 px-2.5 xl:px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-[#0099FF]/20 border border-[#00B7FF]/40 shadow-[0_0_10px_rgba(0,183,255,0.3)]'
                      : 'text-gray-300 hover:text-[#00B7FF] hover:bg-[#0099FF]/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-[#00B7FF] transition-colors px-2 py-1 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#00B7FF]" />
              <span>{BUSINESS_CONFIG.contact.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="btn-electric px-4 xl:px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 group whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
              <span>BOOK A SERVICE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="btn-electric px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1"
            >
              <Calendar className="w-3 h-3 text-white" />
              <span>BOOK</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-gray-300 hover:text-white hover:bg-[#0B0F14] rounded-lg border border-[#00B7FF]/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B7FF]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-[#05070A]/95 backdrop-blur-xl border-b border-[#00B7FF]/30 p-4 sm:p-6 shadow-2xl transition-all animate-fadeIn max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-3 px-4 rounded-lg text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white hover:bg-[#0099FF]/20 hover:border-l-4 hover:border-[#00B7FF] transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#00B7FF]" />
              </a>
            ))}

            <div className="pt-4 border-t border-[#00B7FF]/20 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0B0F14] border border-[#00B7FF]/30 text-xs font-bold text-gray-200"
              >
                <Phone className="w-4 h-4 text-[#00B7FF]" />
                <span>Call Studio: {BUSINESS_CONFIG.contact.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-electric w-full py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>BOOK A SERVICE NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
