import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Sparkles, ArrowRight, Check, Eye, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import ServiceModal from './ServiceModal';

export default function Services({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = ['All', 'Wash', 'Interior', 'Paint Correction', 'Ceramic Shield', 'Customization'];

  const filteredServices = selectedCategory === 'All'
    ? BUSINESS_CONFIG.services
    : BUSINESS_CONFIG.services.filter(s => s.category === selectedCategory);

  // Identify flagship/featured ceramic service for special hero layout when All is selected
  const featuredService = BUSINESS_CONFIG.services.find(s => s.id === 'ceramic-coating');
  const regularServices = selectedCategory === 'All'
    ? filteredServices.filter(s => s.id !== 'ceramic-coating')
    : filteredServices;

  const handleBookService = (serviceId) => {
    onOpenBooking(serviceId);
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 relative bg-[#05070A] overflow-hidden border-t border-[#00B7FF]/10">
      
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0099FF]/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#00B7FF]/8 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B0F14] border border-[#00B7FF]/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              PRECISION AUTOMOTIVE LAB
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            OUR SIGNATURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">SERVICES</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Engineered detailing, 9H nano ceramic armor, multi-stage paint correction, and custom stance upgrades crafted specifically for Mahindra, Tata, Toyota, and luxury automobiles.
          </p>

          {/* Category Filter Pills Bar */}
          <div className="pt-3 sm:pt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'btn-electric shadow-[0_0_20px_rgba(0,183,255,0.45)]'
                    : 'bg-[#0B0F14] text-gray-400 hover:text-white border border-[#00B7FF]/20 hover:border-[#00B7FF]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Flagship Card (Shown prominently when 'All' category is active) */}
        {selectedCategory === 'All' && featuredService && (
          <div className="mb-10 sm:mb-14">
            <div className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00B7FF]/40 shadow-[0_0_50px_rgba(0,183,255,0.2)] grid grid-cols-1 lg:grid-cols-12 group transition-all duration-500 hover:border-[#00B7FF]/70">
              
              {/* Left Image Side */}
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[380px] overflow-hidden">
                <img
                  src={featuredService.image}
                  alt={featuredService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/50 to-transparent"></div>
                
                {/* Flagship Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#00B7FF] text-black text-[10px] sm:text-[11px] font-black uppercase tracking-widest font-subheading flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,183,255,0.6)]">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-black text-black" />
                  FLAGSHIP PROTECTION
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 lg:hidden">
                  <span className="text-xs text-[#00B7FF] font-bold uppercase tracking-wider block font-subheading">
                    {featuredService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading italic text-white uppercase mt-1">
                    {featuredService.title}
                  </h3>
                </div>
              </div>

              {/* Right Details Side */}
              <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-6 bg-[#0B0F14]/90">
                <div className="space-y-3 sm:space-y-4">
                  <div className="hidden lg:flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0099FF]/20 text-[#00B7FF] border border-[#00B7FF]/40">
                      {featuredService.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#00B7FF]" />
                      {featuredService.duration}
                    </span>
                  </div>

                  <h3 className="hidden lg:block text-2xl xl:text-3xl font-black font-heading italic text-white uppercase group-hover:text-[#00B7FF] transition-colors">
                    {featuredService.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {featuredService.fullDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 sm:pt-3">
                    {featuredService.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                        <Check className="w-4 h-4 text-[#00B7FF] shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-5 sm:pt-6 border-t border-[#00B7FF]/20 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-gray-400 uppercase block font-subheading">Starting Investment</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black font-heading text-white text-glow-blue">
                        ₹{featuredService.basePrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-gray-400">({featuredService.duration})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveModalService(featuredService)}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#05070A] border border-[#00B7FF]/30 text-gray-300 hover:text-white hover:border-[#00B7FF] transition-all shrink-0"
                      title="View Full Technical Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleBookService(featuredService.id)}
                      className="btn-electric flex-1 sm:flex-initial px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                      <span>BOOK CERAMIC SHIELD</span>
                      <ArrowRight className="w-4 h-4 text-white shrink-0" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Regular Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {regularServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00B7FF]/20 glass-panel-hover flex flex-col group relative"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-black/40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/20 to-transparent"></div>
                
                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0B0F14]/90 text-[#00B7FF] border border-[#00B7FF]/40 backdrop-blur-md">
                    {service.category}
                  </span>

                  <span className="px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-300 bg-black/75 backdrop-blur-md border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00B7FF]" />
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading italic text-white group-hover:text-[#00B7FF] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Compact Feature Pills / Tags */}
                <div className="pt-3 border-t border-[#00B7FF]/15 flex flex-wrap gap-1.5 sm:gap-2">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#05070A] border border-[#00B7FF]/20 text-[10px] text-gray-300 font-medium truncate max-w-full"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 rounded-lg bg-[#0099FF]/10 border border-[#00B7FF]/30 text-[10px] text-[#00B7FF] font-bold">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Card Footer Pricing & Actions */}
                <div className="pt-4 border-t border-[#00B7FF]/20 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-subheading">Starting Price</span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-white text-glow-blue">
                      ₹{service.basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#05070A] border border-[#00B7FF]/30 text-gray-300 hover:text-white hover:border-[#00B7FF] transition-all"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </button>

                    <button
                      onClick={() => handleBookService(service.id)}
                      className="btn-electric px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs font-bold flex items-center gap-1.5"
                    >
                      <span>BOOK</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectBooking={(serviceId) => {
            setActiveModalService(null);
            onOpenBooking(serviceId);
          }}
        />
      )}
    </section>
  );
}

