import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Calendar, Phone, MapPin, X, ShieldCheck, Download } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function BookingConfirmationModal({ bookingData, onClose }) {
  useEffect(() => {
    if (!bookingData) return;
    // Fire festive electric blue + white confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0099FF', '#00B7FF', '#FFFFFF', '#00F0FF']
    });
  }, [bookingData]);

  if (!bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0B0F14] border border-[#00B7FF]/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,183,255,0.4)] my-4 sm:my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0099FF] via-[#00B7FF] to-[#00F0FF] p-6 text-center text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-full bg-black/30 border border-white/40 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-black font-heading italic uppercase tracking-wider text-white">
            BOOKING CONFIRMED!
          </h3>
          <p className="text-xs font-subheading uppercase tracking-widest text-white/90 mt-1">
            Reference ID: <span className="font-bold underline">{bookingData.referenceId}</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#05070A] border border-[#00B7FF]/20 space-y-3">
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs pb-2 border-b border-white/10">
              <span className="text-gray-400 font-subheading">Customer Name:</span>
              <span className="text-white font-bold">{bookingData.name}</span>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-2 text-xs pb-2 border-b border-white/10">
              <span className="text-gray-400 font-subheading">Vehicle:</span>
              <span className="text-[#00B7FF] font-bold">{bookingData.vehicleModel} ({bookingData.vehicleCategoryName})</span>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-2 text-xs pb-2 border-b border-white/10">
              <span className="text-gray-400 font-subheading">Service / Package:</span>
              <span className="text-white font-bold">{bookingData.serviceName}</span>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-2 text-xs pb-2 border-b border-white/10">
              <span className="text-gray-400 font-subheading">Scheduled Date & Time:</span>
              <span className="text-amber-400 font-bold">{bookingData.date} at {bookingData.timeSlot}</span>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
              <span className="text-gray-400 font-subheading">Estimated Investment:</span>
              <span className="text-xl font-bold font-heading text-white text-glow-blue">
                ₹{bookingData.estimatedPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0099FF]/10 border border-[#00B7FF]/30 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#00B7FF] font-bold font-subheading uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>NEXT STEPS FOR YOUR BOOKING</span>
            </div>
            <p className="text-gray-300 text-[11px] leading-relaxed">
              Our studio coordinator will call you at <strong className="text-white">{bookingData.phone}</strong> within 30 minutes to confirm vehicle arrival or flatbed pickup arrangement.
            </p>
          </div>

          <div className="space-y-2 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00B7FF] shrink-0" />
              <span>Studio Address: {BUSINESS_CONFIG.contact.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00B7FF] shrink-0" />
              <span>Studio Helpline: {BUSINESS_CONFIG.contact.phone}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#05070A] border-t border-[#00B7FF]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a
            href={BUSINESS_CONFIG.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-electric flex-1 py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
          >
            <span>SEND ON WHATSAPP</span>
          </a>

          <button
            onClick={onClose}
            className="btn-electric flex-1 py-3 rounded-xl text-xs font-bold"
          >
            <span>CLOSE CONFIRMATION</span>
          </button>
        </div>

      </div>
    </div>
  );
}
