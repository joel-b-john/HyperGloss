import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { ShieldCheck, Award, Search, Sparkles, Coffee, Wrench, CheckCircle } from 'lucide-react';

export default function WhyUs() {
  const iconMap = {
    ShieldCheck,
    Award,
    Search,
    Sparkles,
    Coffee,
    Wrench
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-[#05070A] relative overflow-hidden border-t border-[#00B7FF]/10">
      
      {/* Background Neon Overlay */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B7FF]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B0F14] border border-[#00B7FF]/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              THE HYPERGLOSS STANDARD
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            WHY VEHICLE OWNERS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">CHOOSE US</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We are not a volume car wash. We operate as an elite automotive detailing lab combining chemical precision, German polishing technology, and VIP client hospitality.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {BUSINESS_CONFIG.whyUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 sm:p-7 lg:p-8 border border-[#00B7FF]/20 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#0099FF]/5 rounded-bl-full group-hover:bg-[#0099FF]/15 transition-all"></div>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0099FF]/10 border border-[#00B7FF]/30 text-[#00B7FF] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0099FF]/20 transition-all">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading italic text-white uppercase group-hover:text-[#00B7FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#00B7FF]/10 flex items-center gap-2 text-xs font-subheading font-bold text-[#00B7FF]">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>STUDIO STANDARD ASSURED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
