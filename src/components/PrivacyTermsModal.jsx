import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export default function PrivacyTermsModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'PRIVACY POLICY' : 'TERMS OF SERVICE & WARRANTY';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B0F14] border border-[#00B7FF]/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,183,255,0.3)] my-8 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#05070A] border-b border-[#00B7FF]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#00B7FF]" />
            <h3 className="text-lg font-bold font-heading italic text-white uppercase">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-black/40 text-white hover:text-[#00B7FF] border border-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-gray-300 leading-relaxed font-normal">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{BUSINESS_CONFIG.name}</strong>, we respect your privacy and are committed to protecting all personal information shared during booking and service requests.
              </p>
              <h4 className="text-sm font-bold text-[#00B7FF] uppercase font-subheading pt-2">1. Information Collection</h4>
              <p>
                We collect your name, phone number, email address, and vehicle specifications strictly for scheduling detailing services and providing warranty documentation.
              </p>
              <h4 className="text-sm font-bold text-[#00B7FF] uppercase font-subheading pt-2">2. Data Usage</h4>
              <p>
                Your information is never sold or shared with third parties. It is solely used for appointment confirmation, service updates, and annual warranty checkup reminders.
              </p>
              <h4 className="text-sm font-bold text-[#00B7FF] uppercase font-subheading pt-2">3. Studio Surveillance</h4>
              <p>
                For vehicle security and quality auditing, live CCTV cameras operate in detailing bays. Footage is protected under strict security protocol.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{BUSINESS_CONFIG.name}</strong>. By reserving a service slot, you agree to our studio operating policies and paint warranty guidelines.
              </p>
              <h4 className="text-sm font-bold text-[#00B7FF] uppercase font-subheading pt-2">1. Ceramic Coating Warranty</h4>
              <p>
                Our 9H Nano Ceramic Coating comes with a written 3-Year to 5-Year warranty against UV fading and loss of gloss, provided recommended maintenance hand washes are observed.
              </p>
              <h4 className="text-sm font-bold text-[#00B7FF] uppercase font-subheading pt-2">2. Vehicle Evaluation & Pre-existing Damage</h4>
              <p>
                All vehicles undergo a 360° LED inspection upon check-in. Any pre-existing deep paint scratches penetrating clear coat layers will be documented prior to work.
              </p>
              <h4 className="text-sm font-bold text-[#00B7FF] uppercase font-subheading pt-2">3. Pickup & Handover</h4>
              <p>
                Vehicles must be inspected under inspection lights during handover. Warranties are registered digitally upon full invoice settlement.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#05070A] border-t border-[#00B7FF]/20 flex justify-end">
          <button
            onClick={onClose}
            className="btn-electric px-6 py-2.5 rounded-xl text-xs font-bold"
          >
            <span>I UNDERSTAND</span>
          </button>
        </div>

      </div>
    </div>
  );
}
