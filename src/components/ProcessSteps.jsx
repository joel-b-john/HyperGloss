import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Sparkles, CalendarCheck, Truck, Sparkle, Key } from 'lucide-react';

export default function ProcessSteps() {
  const stepIcons = [CalendarCheck, Truck, Sparkle, Key];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#05070A] relative overflow-hidden border-t border-[#00B7FF]/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#0099FF]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B0F14] border border-[#00B7FF]/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              SEAMLESS CLIENT JOURNEY
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            OUR 4-STEP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">DETAILING WORKFLOW</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From easy online slot booking to hand delivery under studio inspection lights, experience precision care at every step.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#0099FF]/20 via-[#00B7FF] to-[#0099FF]/20 -translate-y-6 z-0"></div>

          {BUSINESS_CONFIG.processSteps.map((step, idx) => {
            const IconComponent = stepIcons[idx] || CalendarCheck;
            return (
              <div
                key={step.step}
                className="glass-panel p-5 sm:p-6 lg:p-7 rounded-2xl border border-[#00B7FF]/20 glass-panel-hover flex flex-col justify-between relative z-10 group"
              >
                <div className="space-y-4">
                  
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-3xl sm:text-4xl font-black font-heading italic text-[#00B7FF] text-glow-blue">
                      {step.step}
                    </span>
                    
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0099FF]/10 border border-[#00B7FF]/40 text-[#00B7FF] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0099FF]/20 transition-all">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading italic text-white uppercase group-hover:text-[#00B7FF] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#00B7FF]/15 text-xs font-subheading font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#00B7FF] transition-colors">
                  Step {idx + 1} of 4 • HYPERGLOSS Lab
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
