import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Check, Star, Layers, Sliders, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Packages({ onOpenBooking }) {
  const [selectedVehicle, setSelectedVehicle] = useState(BUSINESS_CONFIG.vehicleCategories[3]); // default Mid SUV
  const [customAddons, setCustomAddons] = useState([]);

  const addonOptions = [
    { id: "dechrome", name: "Piano Black De-chroming", price: 4999 },
    { id: "calipers", name: "Electric Blue Caliper Paint", price: 2999 },
    { id: "rim_coating", name: "Ceramic Rim Face Coating", price: 3499 },
    { id: "leather_treatment", name: "Interior Leather Conditioning & Ceramic", price: 3999 },
    { id: "glass_shield", name: "Hydrophobic Glass Rain Repellent", price: 1999 },
    { id: "underglow", name: "App-Controlled Ambient Underglow", price: 4499 }
  ];

  const calculatePrice = (basePrice) => {
    return Math.round(basePrice * selectedVehicle.priceMultiplier);
  };

  const toggleAddon = (id) => {
    if (customAddons.includes(id)) {
      setCustomAddons(customAddons.filter(item => item !== id));
    } else {
      setCustomAddons([...customAddons, id]);
    }
  };

  const customAddonTotal = customAddons.reduce((sum, addonId) => {
    const item = addonOptions.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  return (
    <section id="packages" className="py-16 sm:py-24 lg:py-28 bg-[#05070A] relative overflow-hidden border-t border-[#00B7FF]/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0099FF]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B0F14] border border-[#00B7FF]/30 shadow-md">
            <Layers className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              CONFIGURABLE PACKAGES & CALCULATOR
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            DETAILING & STANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">PACKAGES</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Transparent pricing calculated directly for your vehicle model. Select your car segment below to view real-time estimates.
          </p>

          {/* Vehicle Category Selector Bar */}
          <div className="pt-3 sm:pt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {BUSINESS_CONFIG.vehicleCategories.map((v) => {
              const isSelected = selectedVehicle.id === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(v)}
                  className={`px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex flex-col items-center border ${
                    isSelected
                      ? 'bg-[#0099FF]/20 border-[#00B7FF] text-white shadow-[0_0_20px_rgba(0,183,255,0.35)]'
                      : 'bg-[#0B0F14] border-[#00B7FF]/20 text-gray-400 hover:text-white hover:border-[#00B7FF]/40'
                  }`}
                >
                  <span className={isSelected ? 'text-[#00B7FF]' : 'text-gray-300'}>{v.name}</span>
                  <span className="text-[10px] text-gray-400 normal-case font-normal mt-0.5">{v.examples}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mb-12 sm:mb-16">
          {BUSINESS_CONFIG.packages.map((pkg) => {
            const calculated = calculatePrice(pkg.basePrice);
            return (
              <div
                key={pkg.id}
                className={`glass-panel rounded-2xl p-5 sm:p-6 lg:p-7 border transition-all duration-300 flex flex-col justify-between relative group ${
                  pkg.popular
                    ? 'border-[#00B7FF] bg-gradient-to-b from-[#0B0F14] to-[#0099FF]/10 shadow-[0_0_35px_rgba(0,183,255,0.25)] xl:-translate-y-3'
                    : 'border-[#00B7FF]/20 hover:border-[#00B7FF]/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#00B7FF] text-black text-[10px] font-bold font-subheading uppercase tracking-widest flex items-center gap-1 shadow-[0_0_10px_rgba(0,183,255,0.5)] whitespace-nowrap">
                    <Star className="w-3 h-3 fill-black text-black" />
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading italic text-white uppercase group-hover:text-[#00B7FF] transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{pkg.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#05070A]/80 border border-[#00B7FF]/20">
                    <span className="text-[10px] text-gray-400 uppercase block font-subheading">Estimated Investment</span>
                    <div className="flex flex-wrap items-baseline gap-1 mt-1">
                      <span className="text-2xl sm:text-3xl font-black font-heading text-white text-glow-blue">
                        ₹{calculated.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-gray-400">({selectedVehicle.name})</span>
                    </div>
                    <span className="text-[10px] text-[#00B7FF] block mt-1.5 font-medium">
                      🛡️ Includes {pkg.warranty}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-1">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#00B7FF] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8">
                  <button
                    onClick={() => onOpenBooking(pkg.id, selectedVehicle.id)}
                    className={`w-full py-3 sm:py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'btn-electric shadow-[0_0_20px_rgba(0,183,255,0.4)]'
                        : 'btn-outline-electric'
                    }`}
                  >
                    <span>SELECT PACKAGE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Add-On Calculator Box */}
        <div className="glass-panel p-5 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl border border-[#00B7FF]/40 carbon-pattern shadow-[0_0_50px_rgba(0,183,255,0.15)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-[#00B7FF]/20">
            <div>
              <div className="flex items-center gap-2 text-[#00B7FF] text-xs font-bold font-subheading uppercase tracking-widest mb-1.5">
                <Sliders className="w-4 h-4" />
                <span>BUILD YOUR CUSTOM DETAILING BUILD</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold font-heading italic text-white">
                INTERACTIVE ADD-ON CALCULATOR
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1.5">
                Combine individual custom detailing modules for <strong className="text-white">{selectedVehicle.name}</strong>
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#05070A] border border-[#00B7FF]/30 text-left md:text-right w-full md:w-auto md:min-w-[220px]">
              <span className="text-xs text-gray-400 block uppercase font-subheading">Estimated Add-On Total</span>
              <span className="text-2xl sm:text-3xl font-black font-heading text-[#00B7FF] text-glow-blue mt-1 block">
                + ₹{customAddonTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 pt-6 sm:pt-8">
            {addonOptions.map((addon) => {
              const isChecked = customAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                    isChecked
                      ? 'bg-[#0099FF]/20 border-[#00B7FF] text-white shadow-[0_0_20px_rgba(0,183,255,0.25)]'
                      : 'bg-[#05070A]/60 border-[#00B7FF]/15 text-gray-300 hover:border-[#00B7FF]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 ${
                      isChecked ? 'bg-[#00B7FF] border-[#00B7FF] text-black' : 'border-gray-500'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase">{addon.name}</h4>
                      <span className="text-[10px] text-gray-400 mt-0.5 block">+ ₹{addon.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 sm:pt-8 flex justify-end">
            <button
              onClick={() => onOpenBooking('custom', selectedVehicle.id)}
              className="btn-electric w-full sm:w-auto justify-center px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>BOOK CUSTOM BUILD ({customAddons.length} ADD-ONS SELECTED)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
