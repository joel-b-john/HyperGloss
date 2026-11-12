import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CeramicFeature from './components/CeramicFeature';
import Packages from './components/Packages';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import CustomizationStudio from './components/CustomizationStudio';
import ProcessSteps from './components/ProcessSteps';
import Reviews from './components/Reviews';
import LargeCTA from './components/LargeCTA';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from './config/businessConfig';

export default function App() {
  const [selectedBookingService, setSelectedBookingService] = useState(null);
  const [selectedBookingVehicle, setSelectedBookingVehicle] = useState('mid_suv');

  const handleOpenBooking = (serviceId = null, vehicleId = 'mid_suv') => {
    if (serviceId) setSelectedBookingService(serviceId);
    if (vehicleId) setSelectedBookingVehicle(vehicleId);

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      const offsetTop = bookingEl.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070A] text-white relative selection:bg-[#0099FF] selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Section 1: Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 2: Stats */}
        <Stats />

        {/* Section 3: Services */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Section 4: Featured Ceramic Coating */}
        <CeramicFeature onOpenBooking={handleOpenBooking} />

        {/* Section 5: Configurable Packages & Calculator */}
        <Packages onOpenBooking={handleOpenBooking} />

        {/* Section 6: Interactive Before / After Slider */}
        <BeforeAfterSlider />

        {/* Section 7: Why HYPERGLOSS */}
        <WhyUs />

        {/* Section 8: Gallery */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* Section 9: Customization Studio */}
        <CustomizationStudio onOpenBooking={handleOpenBooking} />

        {/* Section 10: 4-Step Process */}
        <ProcessSteps />

        {/* Section 11: Reviews */}
        <Reviews />

        {/* Section 12: Large CTA Banner */}
        <LargeCTA onOpenBooking={handleOpenBooking} />

        {/* Section 13: Booking Form */}
        <BookingForm
          initialServiceId={selectedBookingService}
          initialVehicleId={selectedBookingVehicle}
        />

        {/* Section 14: Contact & Studio Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Quick Access Bar (Mobile & Desktop) */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        
        {/* WhatsApp Fast Button */}
        <a
          href={BUSINESS_CONFIG.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 transition-transform flex items-center justify-center"
          title="Direct WhatsApp Inquiry"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white stroke-none" />
        </a>

        {/* Fast Booking Button */}
        <button
          onClick={() => handleOpenBooking()}
          className="btn-electric p-3.5 rounded-full text-white shadow-[0_0_25px_rgba(0,183,255,0.6)] hover:scale-110 transition-transform flex items-center justify-center"
          title="Instant Book Slot"
          aria-label="Book Slot"
        >
          <Calendar className="w-6 h-6" />
        </button>

      </div>

    </div>
  );
}
