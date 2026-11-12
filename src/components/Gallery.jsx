import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Sparkles, Maximize2, Camera } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function Gallery({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filters = ['All', 'Exterior Wash', 'Paint Correction', 'Ceramic Shield', 'Customization', 'Interior'];

  const filteredGallery = activeFilter === 'All'
    ? BUSINESS_CONFIG.gallery
    : BUSINESS_CONFIG.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-28 bg-[#05070A] relative overflow-hidden border-t border-[#00B7FF]/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B0F14] border border-[#00B7FF]/30 shadow-md">
            <Camera className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              STUDIO PORTFOLIO & SHOWCASE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">BUILD GALLERY</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore recent transformations delivered at HYPERGLOSS CUSTOM for Mahindra Thar, Tata Harrier Dark Edition, Toyota Fortuner Legender & Mahindra XUV700.
          </p>

          {/* Filter Pills */}
          <div className="pt-3 sm:pt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'btn-electric shadow-[0_0_15px_rgba(0,183,255,0.4)]'
                    : 'bg-[#0B0F14] text-gray-400 hover:text-white border border-[#00B7FF]/20 hover:border-[#00B7FF]/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="glass-panel rounded-2xl overflow-hidden border border-[#00B7FF]/20 group relative cursor-pointer glass-panel-hover"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Badge */}
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0B0F14]/90 text-[#00B7FF] border border-[#00B7FF]/40 backdrop-blur-md">
                  {item.category}
                </span>

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white group-hover:text-[#00B7FF] group-hover:bg-black/90 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Title Info */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-bold font-heading italic text-white uppercase group-hover:text-[#00B7FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium line-clamp-1 mt-1">
                    {item.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <LightboxModal
          item={activeLightbox}
          onClose={() => setActiveLightbox(null)}
          onBookVehicle={() => {
            setActiveLightbox(null);
            onOpenBooking();
          }}
        />
      )}
    </section>
  );
}
