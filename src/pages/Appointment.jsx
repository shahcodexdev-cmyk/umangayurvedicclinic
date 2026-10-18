import React from 'react';
import apptData from '../data/appointment.json';
import siteData from '../data/site.json';
import AppointmentNumbers from '../components/AppointmentNumbers';
import SEO from '../components/SEO';
import { Phone, Sparkles } from 'lucide-react';

const Appointment = () => {
  return (
    <>
      <SEO 
        title="Book Consultation | Umang Ayurvedic Clinic Thane | 98338 26366" 
        description="Book an appointment at Umang Ayurvedic Clinic Thane West near Thane Station. Expert Ayurvedic doctors for Sexual Health, Piles, Fistula & Sciatica. Call 98338 26366 / 8652674047." 
        keywords="book appointment umang ayurvedic, ayurvedic in thane appointment, umang ayurvedic clinic thane, ayurvedic doctor thane phone, 9833826366, 8652674047, ठाणे आयुर्वेदिक क्लिनिक अपॉइंटमेंट" 
        canonical="https://umangayurvedicclinic.vercel.app/appointment"
      />
      
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16 md:py-20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-secondary/20 text-secondary-light text-xs md:text-sm font-bold mb-4 uppercase tracking-wider border border-secondary/30">
            <Sparkles size={14} />
            <span>{apptData.hero.badge}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {apptData.hero.title}
            <span className="block text-secondary text-2xl md:text-4xl mt-2 font-bold">
              {apptData.hero.subtitle}
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 leading-relaxed font-medium mb-8">
            {apptData.hero.description}
          </p>

          {/* Quick Click-to-Call Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/20 shadow-lg">
            <div className="flex items-center text-secondary-light font-bold text-sm">
              <Phone size={16} className="mr-2 text-secondary" />
              <span>सीधे कॉल करने के लिए नंबर:</span>
            </div>
            <div className="flex items-center gap-2 text-base md:text-lg font-black">
              <a href="tel:+919833826366" className="text-white hover:text-secondary-light hover:underline">
                98338 26366
              </a>
              <span className="text-gray-400">/</span>
              <a href="tel:+918652674047" className="text-white hover:text-secondary-light hover:underline">
                8652674047
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Appointment Hub */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container-custom max-w-6xl mx-auto">
          <AppointmentNumbers />
        </div>
      </section>
    </>
  );
};

export default Appointment;
