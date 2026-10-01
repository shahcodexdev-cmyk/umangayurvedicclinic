import React from 'react';
import apptData from '../data/appointment.json';
import siteData from '../data/site.json';
import AppointmentForm from '../components/AppointmentForm';
import SEO from '../components/SEO';
import { Phone, MapPin } from 'lucide-react';

const Appointment = () => {
  return (
    <>
      <SEO title="Book Appointment | Umang Ayurvedic Clinic" description={apptData.hero.description} />
      
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{apptData.hero.title}</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            {apptData.hero.description}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Left Info */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Call Us</h4>
                      <p className="text-gray-600 mt-1">{siteData.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">Location</h4>
                      <p className="text-gray-600 mt-1">{siteData.contact.address}</p>
                    </div>
                  </div>
                  
                  <hr className="border-gray-100" />
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">Opening Hours</h4>
                    <p className="text-gray-600 whitespace-pre-line">{siteData.contact.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-2/3">
              <AppointmentForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
