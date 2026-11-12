import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Star, ShieldCheck, Quote, ThumbsUp } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-[#0B0F14] relative overflow-hidden border-y border-[#00B7FF]/20 carbon-pattern">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05070A] border border-[#00B7FF]/30">
            <Star className="w-3.5 h-3.5 fill-[#00B7FF] text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              VERIFIED CLIENT FEEDBACK
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">CLIENTS SAY</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Rated <strong className="text-white">4.9 / 5.0</strong> across over 380+ verified Google reviews by Mahindra, Tata, Toyota & luxury car owners in NCR.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {BUSINESS_CONFIG.reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel p-5 sm:p-7 rounded-2xl border border-[#00B7FF]/20 glass-panel-hover flex flex-col justify-between space-y-5 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#00B7FF]/10 group-hover:text-[#00B7FF]/20 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Rating & Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0099FF]/15 text-[#00B7FF] text-[10px] font-bold border border-[#00B7FF]/30">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Owner
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-[#00B7FF]/15 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0099FF] to-[#00B7FF] text-white font-black font-heading flex items-center justify-center text-xs shadow-[0_0_10px_rgba(0,183,255,0.4)] shrink-0">
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-heading">{rev.name}</h4>
                    <span className="text-xs text-[#00B7FF] font-subheading font-bold block">{rev.vehicle}</span>
                  </div>
                </div>

                <span className="text-[10px] text-gray-400 font-subheading">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
