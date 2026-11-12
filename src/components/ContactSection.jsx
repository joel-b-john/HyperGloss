import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#0B0F14] relative overflow-hidden border-t border-[#00B7FF]/20 carbon-pattern">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#05070A] border border-[#00B7FF]/30">
            <MapPin className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              STUDIO LOCATION & DIRECT HELPLINE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            VISIT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">DETAILING STUDIO</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Drop by our climate-controlled studio lounge or call our detailing specialists directly to schedule your vehicle evaluation.
          </p>
        </div>

        {/* 2-Column Contact Info + Map Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Contact Info Cards Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-between">
            
            <div className="glass-panel p-5 sm:p-7 rounded-2xl border border-[#00B7FF]/30 space-y-5 sm:space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0099FF]/15 text-[#00B7FF] shrink-0 border border-[#00B7FF]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Studio Location</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{BUSINESS_CONFIG.contact.address}</p>
                  <a
                    href={BUSINESS_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#00B7FF] font-bold font-subheading uppercase mt-2 hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & Helpline */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#00B7FF]/15">
                <div className="p-3 rounded-xl bg-[#0099FF]/15 text-[#00B7FF] shrink-0 border border-[#00B7FF]/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Direct Helpline</h4>
                  <p className="text-xs text-gray-300 mt-1">{BUSINESS_CONFIG.contact.phone} / {BUSINESS_CONFIG.contact.altPhone}</p>
                  <span className="text-[10px] text-emerald-400 font-bold block mt-1">● Master Detailers Available Now</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#00B7FF]/15">
                <div className="p-3 rounded-xl bg-[#0099FF]/15 text-[#00B7FF] shrink-0 border border-[#00B7FF]/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Studio Email</h4>
                  <p className="text-xs text-gray-300 mt-1">{BUSINESS_CONFIG.contact.email}</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#00B7FF]/15">
                <div className="p-3 rounded-xl bg-[#0099FF]/15 text-[#00B7FF] shrink-0 border border-[#00B7FF]/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Operating Hours</h4>
                  <p className="text-xs text-amber-400 font-bold mt-1">{BUSINESS_CONFIG.contact.hours}</p>
                  <span className="text-[10px] text-gray-400 block">Open All 7 Days (Including Holidays)</span>
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="btn-electric py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>CALL NOW</span>
              </a>

              <a
                href={BUSINESS_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-electric py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={BUSINESS_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-electric py-3.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#00B7FF]" />
                <span>DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Interactive Dark Mode Map Simulation Canvas Column */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#00B7FF]/40 shadow-[0_0_40px_rgba(0,183,255,0.2)] bg-[#05070A] flex flex-col justify-between p-4 sm:p-6">
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3 py-1 rounded-full bg-[#0B0F14]/90 border border-[#00B7FF]/40 backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider font-subheading">
                  STUDIO LIVE MAP • NCR SECTOR 62
                </span>
              </div>
            </div>

            {/* Stylized Grid Lines Map Visual */}
            <div className="absolute inset-0 z-0 opacity-40">
              <div className="w-full h-full bg-[linear-gradient(to_right,#00b7ff15_1px,transparent_1px),linear-gradient(to_bottom,#00b7ff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              {/* Studio Marker Pulse */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#00B7FF]/20 animate-ping absolute -inset-2"></div>
                  <div className="w-12 h-12 rounded-full bg-[#0099FF] border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_#00B7FF] relative">
                    <MapPin className="w-6 h-6 fill-white text-[#0099FF]" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1 rounded-lg bg-[#0B0F14] border border-[#00B7FF] text-white text-xs font-bold font-heading uppercase shadow-lg">
                  HYPERGLOSS STUDIO
                </div>
              </div>
            </div>

            <div className="relative z-10 p-4 rounded-xl bg-[#0B0F14]/90 border border-[#00B7FF]/30 backdrop-blur-md space-y-2">
              <h4 className="text-xs font-bold text-white uppercase font-heading flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00B7FF]" />
                <span>STUDIO LOUNGE AMENITIES</span>
              </h4>
              <p className="text-[11px] text-gray-300">
                Air-conditioned lounge, complimentary espresso bar, high-speed Wi-Fi & live HD detailing bay camera monitoring feed.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
