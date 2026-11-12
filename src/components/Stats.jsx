import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Car, ShieldCheck, Award, Star } from 'lucide-react';

export default function Stats() {
  const icons = [Car, Award, ShieldCheck, Star];

  return (
    <section className="relative z-20 py-10 sm:py-16 lg:py-20 bg-[#0B0F14]/90 border-y border-[#00B7FF]/20 carbon-pattern shadow-[0_0_50px_rgba(0,0,0,0.8)]">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {BUSINESS_CONFIG.stats.map((stat, idx) => {
            const IconComponent = icons[idx] || Car;
            return (
              <div
                key={idx}
                className="glass-panel p-4 sm:p-6 lg:p-8 rounded-2xl border border-[#00B7FF]/20 flex flex-col items-center text-center group hover:border-[#00B7FF]/60 hover:shadow-[0_0_25px_rgba(0,183,255,0.2)] transition-all duration-300"
              >
                <div className="p-3 sm:p-4 rounded-2xl bg-[#0099FF]/10 text-[#00B7FF] mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-[#0099FF]/20 transition-all">
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black font-heading italic text-white text-glow-blue tracking-tight mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-sm font-bold font-subheading uppercase tracking-wider text-[#00B7FF] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 line-clamp-2 sm:line-clamp-1">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
