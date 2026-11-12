import React from 'react';
import { X, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LightboxModal({ item, onClose, onBookVehicle }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0B0F14] border border-[#00B7FF]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,183,255,0.35)] flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:text-[#00B7FF] border border-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Frame */}
        <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[450px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Details Column */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#0099FF]/20 text-[#00B7FF] border border-[#00B7FF]/30 inline-block mb-2">
                {item.category}
              </span>
              <h3 className="text-2xl font-black font-heading italic text-white uppercase">
                {item.title}
              </h3>
              <p className="text-xs text-[#00B7FF] font-subheading font-bold mt-1">
                🚗 {item.vehicle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05070A] border border-[#00B7FF]/20 space-y-2">
              <span className="text-[10px] text-gray-400 uppercase font-subheading block">Service Performed</span>
              <p className="text-xs text-gray-200 font-medium">{item.service}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#00B7FF]" />
                <span>360° LED Quality Inspection Verified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#00B7FF]" />
                <span>Paint Clarity Optimization Confirmed</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#00B7FF]/20">
            <button
              onClick={() => {
                onClose();
                onBookVehicle(item.service);
              }}
              className="btn-electric w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>BOOK THIS SERVICE FOR YOUR CAR</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
