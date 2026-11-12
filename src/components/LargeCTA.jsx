import React from 'react';
import { Calendar, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function LargeCTA({ onOpenBooking }) {
  return (
    <section className="py-14 sm:py-20 lg:py-24 relative bg-[#05070A] overflow-hidden border-t border-[#00B7FF]/30">
      
      {/* Background Graphic & Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="HYPERGLOSS Detailing Lab background"
          className="w-full h-full object-cover filter brightness-30 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/90 to-[#05070A]"></div>
        
        {/* Neon Light Pulses */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#00B7FF]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10 text-center space-y-6 sm:space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B0F14]/90 border border-[#00B7FF]/40 shadow-[0_0_20px_rgba(0,183,255,0.3)]">
          <Sparkles className="w-4 h-4 text-[#00B7FF]" />
          <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
            TRANSFORM YOUR RIDE TODAY
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black font-heading italic uppercase text-white tracking-tight leading-tight max-w-4xl mx-auto">
          YOUR CAR DESERVES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] via-[#00B7FF] to-[#00F0FF] text-glow-blue">THE HYPERGLOSS.</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Book your slot now or talk with our master detailer to customize paint correction, 9H ceramic coating, or de-chroming for your car.
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="btn-electric w-full sm:w-auto justify-center px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-3 shadow-[0_0_35px_rgba(0,183,255,0.5)] group"
          >
            <Calendar className="w-5 h-5 text-white group-hover:rotate-12 transition-transform shrink-0" />
            <span>BOOK YOUR SLOT NOW</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="btn-outline-electric w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#00B7FF] shrink-0" />
            <span>TALK TO A DETAILING EXPERT</span>
          </a>
        </div>

      </div>
    </section>
  );
}
