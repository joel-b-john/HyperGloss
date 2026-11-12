import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onSelectBooking }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B0F14] border border-[#00B7FF]/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,183,255,0.3)] my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Image */}
        <div className="relative h-48 sm:h-64 w-full shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#00B7FF] hover:bg-black/90 border border-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#0099FF]/30 text-[#00B7FF] border border-[#00B7FF]/40 inline-block mb-2">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading italic text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Overview & Duration */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#05070A] border border-[#00B7FF]/20">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Clock className="w-4 h-4 text-[#00B7FF]" />
              <span>Duration: <strong className="text-white">{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[#00B7FF] text-sm">
              <ShieldCheck className="w-4 h-4 text-[#00B7FF]" />
              <span>Studio Certified Procedure</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 block">Starting From</span>
              <span className="text-xl font-heading font-bold text-white text-glow-blue">
                ₹{service.basePrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            {service.fullDesc}
          </p>

          {/* Service Inclusions Checklist */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider font-subheading text-[#00B7FF] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
              <span>Process & Inclusions Checklist</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-200 p-2.5 rounded-lg bg-[#05070A]/60 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF] mt-1 shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#05070A] border-t border-[#00B7FF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-gray-400 block">Need custom configuration?</span>
            <span className="text-xs font-bold text-[#00B7FF]">Prices scale dynamically by vehicle model</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectBooking(service.id);
            }}
            className="btn-electric w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
          >
            <span>BOOK THIS SERVICE NOW</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
