import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { MessageSquare, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import PrivacyTermsModal from './PrivacyTermsModal';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const [modalType, setModalType] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Studio', href: '#about' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-[#05070A] border-t border-[#00B7FF]/30 pt-16 pb-12 relative overflow-hidden text-gray-400">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0099FF]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-[#00B7FF]/15">
          
          {/* Brand Column (Col 1 & 2) */}
          <div className="sm:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <img
                src="./images/logo.jpg"
                alt="HYPERGLOSS CUSTOM Logo"
                className="h-12 w-12 rounded-xl object-cover border border-[#00B7FF]/40 shadow-[0_0_15px_rgba(0,183,255,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black italic tracking-wider text-white">
                  HYPERGLOSS <span className="text-[#00B7FF]">CUSTOM</span>
                </span>
                <span className="text-[10px] font-subheading tracking-widest text-[#94A3B8] uppercase -mt-1">
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md font-normal">
              India’s premier car wash, precision detailing & bespoke automotive customization lab. Engineering showroom mirror reflection for Mahindra Thar, Tata Harrier, Toyota Fortuner & luxury automobiles.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0B0F14] border border-[#00B7FF]/20 text-gray-300 hover:text-white hover:border-[#00B7FF] hover:bg-[#0099FF]/20 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0B0F14] border border-[#00B7FF]/20 text-gray-300 hover:text-white hover:border-[#00B7FF] hover:bg-[#0099FF]/20 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0B0F14] border border-[#00B7FF]/20 text-gray-300 hover:text-white hover:border-[#00B7FF] hover:bg-[#0099FF]/20 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0B0F14] border border-[#00B7FF]/20 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all"
                aria-label="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 5).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#00B7FF] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-white">Studio Services</h4>
            <ul className="space-y-2 text-xs">
              {BUSINESS_CONFIG.services.slice(0, 5).map(s => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#00B7FF] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Quick Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-white">Studio Info</h4>
            <div className="text-xs space-y-2 text-gray-400">
              <p className="text-white font-bold">{BUSINESS_CONFIG.contact.phone}</p>
              <p>{BUSINESS_CONFIG.contact.email}</p>
              <p className="text-amber-400 font-medium">{BUSINESS_CONFIG.contact.hours}</p>
              <p className="text-[11px] text-gray-500">{BUSINESS_CONFIG.contact.address}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-gray-400">
            <span>© 2026 {BUSINESS_CONFIG.name}. All Rights Reserved.</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#00B7FF] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#00B7FF] transition-colors"
            >
              Terms & Warranty
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#0B0F14] border border-[#00B7FF]/30 text-[#00B7FF] hover:bg-[#0099FF] hover:text-white transition-all shadow-[0_0_15px_rgba(0,183,255,0.2)] flex items-center gap-1.5 font-bold font-subheading uppercase text-[10px]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Legal Modal */}
      {modalType && (
        <PrivacyTermsModal
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </footer>
  );
}
