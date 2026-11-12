import React, { useState } from 'react';
import { ShieldCheck, Droplet, Sun, Sparkles, Award, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export default function CeramicFeature({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      id: "hydrophobic",
      icon: Droplet,
      title: "Extreme Hydrophobic Bead Angle",
      desc: "Water, mud, and road grime slide right off at angles >110°. Washing your car takes 70% less effort and time.",
      stat: "110°+",
      statLabel: "Contact Angle"
    },
    {
      id: "hardness",
      icon: ShieldCheck,
      title: "9H Permanent Glass Armor",
      desc: "Forms an indestructible nano-crystal barrier over clear coat that guards against key marks, bird droppings & tree sap.",
      stat: "9H",
      statLabel: "Pencil Hardness Scale"
    },
    {
      id: "gloss",
      icon: Sparkles,
      title: "Deep Wet-Look Obsidian Gloss",
      desc: "Unlocks rich optical depth and mirror reflection, giving dark paints (Mahindra XUV700, Harrier) an endless wet reflection.",
      stat: "99.4%",
      statLabel: "Gloss Meter Rating"
    },
    {
      id: "uv",
      icon: Sun,
      title: "UV & Acid Rain Shield",
      desc: "Blocks harsh tropical solar UV rays from fading paintwork while neutralizing acid rain, hard water spots & industrial fallouts.",
      stat: "100%",
      statLabel: "UV-A/B Block"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#0B0F14] relative overflow-hidden border-y border-[#00B7FF]/20 carbon-pattern">
      
      {/* Glow Effects */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#00B7FF]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#00B7FF]/40 shadow-[0_0_40px_rgba(0,183,255,0.3)] group">
              <img
                src="/images/ceramic.jpg"
                alt="9H Nano Ceramic Coating Hydrophobic Water Beads on Toyota Fortuner"
                className="w-full h-[320px] sm:h-[440px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent"></div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#05070A]/90 border border-[#00B7FF]/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#0099FF]/20 text-[#00B7FF] shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase font-heading">Certified 9H Nano Glass</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Gtechniq & CarPro Official Installers</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-[#00B7FF] text-black text-[10px] sm:text-xs font-bold font-subheading uppercase tracking-wider shrink-0">
                  3-5 YEAR WARRANTY
                </span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#05070A] border border-[#00B7FF]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B7FF]" />
              <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
                FEATURED CERAMIC PROTECTION
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight leading-tight">
              ENGINEERED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">CERAMIC SHIELD</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Standard wax fades in weeks under Indian heat. Our 9H Nano Ceramic Coating creates a permanent molecular glass bond with your vehicle clear coat, guaranteeing unmatched shine and hydrophobic protection.
            </p>

            {/* Interactive Benefits Selector */}
            <div className="space-y-3 sm:space-y-4 pt-1">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                const isSelected = activeTab === idx;
                return (
                  <div
                    key={benefit.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#05070A] border-[#00B7FF] shadow-[0_0_25px_rgba(0,183,255,0.25)]'
                        : 'bg-[#05070A]/50 border-[#00B7FF]/15 hover:border-[#00B7FF]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                        <div className={`p-2 sm:p-2.5 rounded-xl mt-0.5 shrink-0 ${isSelected ? 'bg-[#0099FF] text-white' : 'bg-[#0B0F14] text-[#00B7FF]'}`}>
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-white uppercase font-heading">{benefit.title}</h4>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-lg sm:text-xl font-black font-heading text-[#00B7FF] block">
                          {benefit.stat}
                        </span>
                        <span className="text-[9px] text-gray-400 uppercase block font-subheading">
                          {benefit.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('ceramic-coating')}
                className="btn-electric w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-3 shadow-[0_0_25px_rgba(0,183,255,0.4)]"
              >
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>BOOK CERAMIC SHIELD NOW</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
