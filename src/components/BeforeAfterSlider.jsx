import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-[#0B0F14] relative overflow-hidden border-y border-[#00B7FF]/20 carbon-pattern">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#05070A] border border-[#00B7FF]/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              REAL TIME PAINT TRANSFORMATION
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            INTERACTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">BEFORE & AFTER</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Drag the glowing electric slider left and right to inspect paint correction results on a Mahindra XUV700 bonnet — from swirled, dull oxidation to deep obsidian mirror clarity.
          </p>
        </div>

        {/* Interactive Slider Box */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="before-after-container relative w-full h-[280px] sm:h-[440px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00B7FF]/40 shadow-[0_0_50px_rgba(0,183,255,0.25)] select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Fixed Overlay Status Badges (Never Cropped) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-600/90 text-white font-subheading font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg backdrop-blur-md pointer-events-none">
              <span>BEFORE<span className="hidden sm:inline">: DULL SWIRLS & SCRATCHES</span></span>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#00B7FF] text-black font-subheading font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,183,255,0.6)] flex items-center gap-1 sm:gap-1.5 pointer-events-none">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black text-[#00B7FF] shrink-0" />
              <span>AFTER<span className="hidden sm:inline">: HYPERGLOSS CERAMIC MIRROR</span></span>
            </div>

            {/* AFTER Image (Full Width Underneath) */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src="./images/after_gloss.jpg"
                alt="After HYPERGLOSS Detailing & Ceramic Coating"
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute top-0 left-0 bottom-0 h-full overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="./images/before_swirls.jpg"
                alt="Before Detailing - Heavy Swirls & Oxidation"
                className="absolute top-0 left-0 h-full object-cover filter contrast-105"
                style={{
                  width: containerWidth ? `${containerWidth}px` : '100%',
                  maxWidth: 'none'
                }}
              />
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#00F0FF] shadow-[0_0_20px_#00F0FF] cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central Glowing Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B0F14] border-2 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.8)] flex items-center justify-center text-[#00F0FF]">
                <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              </div>
            </div>

          </div>

          {/* Slider Helper Label */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-400 font-subheading">
            <span>◄ Drag Left for After</span>
            <span className="text-[#00B7FF] font-bold">Touch or Mouse Drag</span>
            <span>Drag Right for Before ►</span>
          </div>
        </div>

      </div>
    </section>
  );
}
