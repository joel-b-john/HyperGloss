import React from 'react';
import { ShieldCheck, Sparkles, ChevronRight, Calendar, Star, Award, Layers } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function Hero({ onOpenBooking }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 flex items-center justify-center overflow-hidden">
      
      {/* Background Hero Image with Dark Gradient & Electric Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero.jpg"
          alt="Tata Harrier Dark Edition in HYPERGLOSS Detailing Bay"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-[#05070A]/80"></div>
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0099FF]/15 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00B7FF]/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6 sm:space-y-8 min-w-0">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0B0F14]/90 border border-[#00B7FF]/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,183,255,0.25)] max-w-full">
              <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#00B7FF] animate-ping shrink-0"></span>
              <span className="text-[10px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF] truncate">
                PREMIUM AUTOMOTIVE STUDIO • NCR
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-3 sm:space-y-4 w-full">
              <h1 className="text-[1.85rem] sm:text-5xl lg:text-6xl xl:text-7xl font-black italic tracking-tight text-white uppercase leading-[1.08] break-words">
                HYPERGLOSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] via-[#00B7FF] to-[#00F0FF] text-glow-blue">CUSTOM</span>
              </h1>
              
              <p className="font-subheading text-xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-[#00B7FF] uppercase flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>CLEANER.</span>
                <span className="text-white">SHINER.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7FF] to-[#00F0FF]">LONGER.</span>
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              India’s premier automotive detailing & customization lab. Specializing in 9H Nano Ceramic Coatings, multi-stage paint correction, stealth de-chroming, bespoke leather interiors & high-gloss car wash for Tata, Mahindra, Toyota & luxury vehicles.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="btn-electric px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto group shadow-[0_0_25px_rgba(0,183,255,0.4)]"
              >
                <Calendar className="w-4 h-4 text-white group-hover:rotate-12 transition-transform shrink-0" />
                <span>BOOK AN APPOINTMENT</span>
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => handleScrollTo('packages')}
                className="btn-outline-electric px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Layers className="w-4 h-4 text-[#00B7FF] shrink-0" />
                <span>EXPLORE PACKAGES</span>
              </button>
            </div>

            {/* Key Feature Badges Grid */}
            <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 w-full max-w-2xl">
              <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-[#00B7FF]/20 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#00B7FF] shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white uppercase">9H Ceramic Shield</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Hydrophobic Glass Protection</p>
                </div>
              </div>

              <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-[#00B7FF]/20 flex items-center gap-3">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#00B7FF] shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white uppercase">Paint Correction</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">95%+ Scratch Removal</p>
                </div>
              </div>

              <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-[#00B7FF]/20 flex items-center gap-3">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#00B7FF] shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white uppercase">Stealth Customs</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">De-chroming & Stance</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Badge / Highlight Panel */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            
            {/* Rating Glass Box */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#00B7FF]/30 shadow-[0_0_30px_rgba(0,183,255,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00B7FF]/10 rounded-full blur-2xl group-hover:bg-[#00B7FF]/20 transition-all"></div>
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#0099FF]/20 text-[#00B7FF] border border-[#00B7FF]/30">
                  5.0 ★ Top Rated
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white italic mb-2">
                {BUSINESS_CONFIG.rating} / 5.0
              </h3>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">
                Based on <span className="text-[#00B7FF] font-bold">{BUSINESS_CONFIG.reviewCount} verified client reviews</span> for Mahindra, Tata & Toyota SUVs.
              </p>

              <div className="mt-4 pt-3 sm:mt-5 sm:pt-4 border-t border-[#00B7FF]/20 flex items-center justify-between gap-2 text-xs text-gray-400 font-subheading">
                <span>Studio Location:</span>
                <span className="text-white font-bold">Sector 62, Auto Hub</span>
              </div>
            </div>

            {/* Indian Vehicle Callout Card */}
            <div className="glass-panel p-4 sm:p-5 rounded-xl border border-[#00B7FF]/20 flex items-center gap-3.5 sm:gap-4">
              <img
                src="./images/thar.jpg"
                alt="Mahindra Thar 4x4 Detailed at HYPERGLOSS"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover border border-[#00B7FF]/30 shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[#00B7FF] uppercase tracking-wider block">FEATURED RECENT BUILD</span>
                <h4 className="text-sm font-bold text-white uppercase font-heading mt-0.5">Mahindra Thar LX 4x4</h4>
                <p className="text-xs text-gray-400 mt-0.5">Ceramic Gloss + Offroad Armor Seal</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
