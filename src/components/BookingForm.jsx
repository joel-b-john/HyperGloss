import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Calendar, Clock, Car, User, Phone, Mail, FileText, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import BookingConfirmationModal from './BookingConfirmationModal';

export default function BookingForm({ initialServiceId = null, initialVehicleId = 'mid_suv' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleModel: '',
    vehicleCategoryId: initialVehicleId,
    serviceId: initialServiceId || BUSINESS_CONFIG.services[0].id,
    date: '',
    timeSlot: '09:00 AM - Morning Slot',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedBooking, setSubmittedBooking] = useState(null);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialVehicleId) {
      setFormData(prev => ({ ...prev, vehicleCategoryId: initialVehicleId }));
    }
  }, [initialServiceId, initialVehicleId]);

  // Set default minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const currentCategory = BUSINESS_CONFIG.vehicleCategories.find(c => c.id === formData.vehicleCategoryId) || BUSINESS_CONFIG.vehicleCategories[3];
  
  // Find selected service or package
  const selectedServiceObj = BUSINESS_CONFIG.services.find(s => s.id === formData.serviceId) ||
    BUSINESS_CONFIG.packages.find(p => p.id === formData.serviceId) ||
    BUSINESS_CONFIG.services[0];

  const estimatedPrice = Math.round((selectedServiceObj.basePrice || 1999) * currentCategory.priceMultiplier);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email address required';
    }
    if (!formData.vehicleModel.trim()) {
      newErrors.vehicleModel = 'Vehicle model is required (e.g. Tata Harrier, Thar, Fortuner)';
    }
    if (!formData.date) {
      newErrors.date = 'Preferred booking date is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `HG-2026-${randomNum}`;

    const bookingPayload = {
      referenceId,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      vehicleModel: formData.vehicleModel,
      vehicleCategoryName: currentCategory.name,
      serviceName: selectedServiceObj.title || selectedServiceObj.name,
      date: formData.date,
      timeSlot: formData.timeSlot,
      estimatedPrice,
      requirements: formData.requirements
    };

    setSubmittedBooking(bookingPayload);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-[#05070A] relative overflow-hidden">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B0F14] border border-[#00B7FF]/30">
            <Calendar className="w-3.5 h-3.5 text-[#00B7FF]" />
            <span className="text-[11px] sm:text-xs font-subheading font-bold uppercase tracking-widest text-[#00B7FF]">
              ONLINE APPOINTMENT RESERVATION
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading italic uppercase text-white tracking-tight">
            BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00B7FF]">STUDIO SLOT</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Reserve your preferred date and time slot for paint correction, 9H ceramic coating, or detailing care. Instant price calculation provided.
          </p>
        </div>

        {/* Booking Card Form Container */}
        <div className="max-w-5xl mx-auto glass-panel p-4 sm:p-7 lg:p-9 rounded-2xl border border-[#00B7FF]/40 carbon-pattern shadow-[0_0_50px_rgba(0,183,255,0.2)]">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Personal Details */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider font-subheading text-[#00B7FF] mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-[#00B7FF]" />
                <span>1. CLIENT CONTACT INFORMATION</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Full Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-[#05070A] border ${errors.name ? 'border-red-500' : 'border-[#00B7FF]/30 focus:border-[#00B7FF]'} rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00B7FF]`}
                    />
                  </div>
                  {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#05070A] border ${errors.phone ? 'border-red-500' : 'border-[#00B7FF]/30 focus:border-[#00B7FF]'} rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00B7FF]`}
                    />
                  </div>
                  {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="e.g. rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#05070A] border ${errors.email ? 'border-red-500' : 'border-[#00B7FF]/30 focus:border-[#00B7FF]'} rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00B7FF]`}
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>

              </div>
            </div>

            {/* Step 2: Vehicle Specs */}
            <div className="pt-4 border-t border-[#00B7FF]/20">
              <h3 className="text-sm font-bold uppercase tracking-wider font-subheading text-[#00B7FF] mb-4 flex items-center gap-2">
                <Car className="w-4 h-4 text-[#00B7FF]" />
                <span>2. VEHICLE DETAILS & CATEGORY</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Vehicle Model Name */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Vehicle Brand & Model *</label>
                  <input
                    type="text"
                    placeholder="e.g. Tata Harrier Dark Edition / Mahindra Thar 4x4"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className={`w-full bg-[#05070A] border ${errors.vehicleModel ? 'border-red-500' : 'border-[#00B7FF]/30 focus:border-[#00B7FF]'} rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00B7FF]`}
                  />
                  {errors.vehicleModel && <span className="text-[10px] text-red-400 mt-1 block">{errors.vehicleModel}</span>}
                </div>

                {/* Vehicle Category Select */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Vehicle Body Type Segment *</label>
                  <select
                    value={formData.vehicleCategoryId}
                    onChange={(e) => setFormData({ ...formData, vehicleCategoryId: e.target.value })}
                    className="w-full bg-[#05070A] border border-[#00B7FF]/30 focus:border-[#00B7FF] rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                  >
                    {BUSINESS_CONFIG.vehicleCategories.map(cat => (
                      <option key={cat.id} value={cat.id} className="bg-[#0B0F14] text-white">
                        {cat.name} ({cat.examples})
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </div>

            {/* Step 3: Service Selection & Slot */}
            <div className="pt-4 border-t border-[#00B7FF]/20">
              <h3 className="text-sm font-bold uppercase tracking-wider font-subheading text-[#00B7FF] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00B7FF]" />
                <span>3. SERVICE & APPOINTMENT TIMING</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Service Dropdown */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Select Service or Package *</label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full bg-[#05070A] border border-[#00B7FF]/30 focus:border-[#00B7FF] rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                  >
                    <optgroup label="Lab Services">
                      {BUSINESS_CONFIG.services.map(s => (
                        <option key={s.id} value={s.id} className="bg-[#0B0F14] text-white">
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Configurable Packages">
                      {BUSINESS_CONFIG.packages.map(p => (
                        <option key={p.id} value={p.id} className="bg-[#0B0F14] text-white">
                          {p.name} ({p.tagline})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#05070A] border ${errors.date ? 'border-red-500' : 'border-[#00B7FF]/30 focus:border-[#00B7FF]'} rounded-xl px-4 py-3 text-xs text-white focus:outline-none`}
                  />
                  {errors.date && <span className="text-[10px] text-red-400 mt-1 block">{errors.date}</span>}
                </div>

                {/* Time Slot */}
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Preferred Time Slot *</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#05070A] border border-[#00B7FF]/30 focus:border-[#00B7FF] rounded-xl px-4 py-3 text-xs text-white focus:outline-none"
                  >
                    <option value="09:00 AM - Morning Slot" className="bg-[#0B0F14]">09:00 AM - Morning Slot</option>
                    <option value="01:00 PM - Afternoon Slot" className="bg-[#0B0F14]">01:00 PM - Afternoon Slot</option>
                    <option value="04:00 PM - Evening Slot" className="bg-[#0B0F14]">04:00 PM - Evening Slot</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="text-xs font-bold text-gray-300 block mb-1">Custom Notes / Special Instructions</label>
              <textarea
                rows="2"
                placeholder="Mention specific scratch areas, de-chroming requests, or flatbed doorstep pickup needed..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full bg-[#05070A] border border-[#00B7FF]/30 focus:border-[#00B7FF] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Price Preview & Submit Bar */}
            <div className="pt-6 border-t border-[#00B7FF]/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              
              <div className="p-4 rounded-xl bg-[#05070A] border border-[#00B7FF]/30 w-full sm:w-auto sm:min-w-[240px]">
                <span className="text-[10px] text-gray-400 uppercase font-subheading block">Estimated Service Investment</span>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-black font-heading text-white text-glow-blue">
                    ₹{estimatedPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-[#00B7FF] font-bold">({currentCategory.name})</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn-electric w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,183,255,0.4)]"
              >
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span>CONFIRM APPOINTMENT RESERVATION</span>
              </button>

            </div>

          </form>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedBooking && (
        <BookingConfirmationModal
          bookingData={submittedBooking}
          onClose={() => setSubmittedBooking(null)}
        />
      )}

    </section>
  );
}
