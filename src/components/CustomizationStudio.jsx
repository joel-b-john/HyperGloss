import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Wrench, CircleDot, ShieldAlert, Zap, Sparkles, ShieldCheck, Eye, ArrowRight, Check } from 'lucide-react';

export default function CustomizationStudio({ onOpenBooking }) {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const iconMap = {
    CircleDot,
    ShieldAlert,
    Zap,
    Sparkles,
    ShieldCheck,
    Eye
  };

  const activeModule = BUSINESS_CONFIG.customizationModules[activeModuleIndex] || BUSINESS_CONFIG.customizationModules[0];
  const ActiveIcon = iconMap[activeModule.icon] || Wrench;

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#0B0F14] relative overflow-hidden border-y border-[#00B7FF]/15 carbon-pattern">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#05070A] border border-[#00B7FF]/30 shadow-md">
            <Wrench className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              BESPOKE STANCE & STYLING LAB
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            AUTOMOTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">CUSTOMIZATION</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Elevate your vehicle beyond stock specifications. Select any customization module below to explore tailored options for Mahindra Thar, Tata Harrier, Toyota Fortuner & luxury automobiles.
          </p>
        </div>

        {/* Master-Detail Interactive Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Module Selection Navigation Menu (Left Col) */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            {BUSINESS_CONFIG.customizationModules.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Wrench;
              const isActive = activeModuleIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 sm:gap-4 ${
                    isActive
                      ? 'bg-[#0099FF]/20 border-[#00B7FF] text-white shadow-[0_0_25px_rgba(0,183,255,0.25)] lg:translate-x-2'
                      : 'bg-[#05070A]/80 border-[#00B7FF]/15 text-gray-400 hover:text-white hover:border-[#00B7FF]/40'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className={`p-2.5 sm:p-3 rounded-xl transition-colors shrink-0 ${
                      isActive ? 'bg-[#00B7FF] text-black font-bold' : 'bg-[#0B0F14] text-[#00B7FF]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold font-heading italic uppercase text-white truncate">{item.title}</h4>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{item.desc}</p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#00B7FF] translate-x-1' : 'text-gray-600'}`} />
                </div>
              );
            })}
          </div>

          {/* Active Module Large Display Card (Right Col) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00B7FF]/30 shadow-[0_0_50px_rgba(0,183,255,0.15)] flex flex-col group">
              
              {/* Image Preview */}
              <div className="relative h-56 sm:h-80 lg:h-96 w-full overflow-hidden bg-black/50">
                <img
                  src={activeModule.image}
                  alt={activeModule.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/30 to-transparent"></div>

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#05070A]/90 border border-[#00B7FF]/40 text-[#00B7FF] backdrop-blur-md flex items-center gap-2.5 sm:gap-3">
                  <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B7FF]" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-subheading text-white">
                    Module 0{activeModuleIndex + 1} Spec
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 bg-[#0B0F14]/95">
                <div>
                  <h3 className="text-xl sm:text-3xl font-black font-heading italic text-white uppercase text-glow-blue">
                    {activeModule.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mt-2 sm:mt-3">
                    {activeModule.desc}
                  </p>
                </div>

                {/* Key Benefits List */}
                <div className="pt-4 border-t border-[#00B7FF]/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B7FF] shrink-0" />
                    <span>Custom Fitment Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B7FF] shrink-0" />
                    <span>Imported Premium Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B7FF] shrink-0" />
                    <span>Reversible Installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B7FF] shrink-0" />
                    <span>Written Studio Warranty</span>
                  </div>
                </div>

                {/* Inquire CTA */}
                <div className="pt-5 border-t border-[#00B7FF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-400 block font-subheading uppercase">Studio Fitment Time</span>
                    <span className="text-sm font-bold text-[#00B7FF]">Same Day / 24 Hours</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking('customization')}
                    className="btn-electric w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-white shrink-0" />
                    <span>INQUIRE ABOUT THIS MODULE</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
