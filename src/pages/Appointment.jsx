import React from 'react';
import apptData from '../data/appointment.json';
import siteData from '../data/site.json';
import AppointmentForm from '../components/AppointmentForm';
import SEO from '../components/SEO';
import { Phone, MapPin } from 'lucide-react';

const Appointment = () => {
  return (
    <>
      <SEO 
        title="अपॉइंटमेंट बुक करें | Book Consultation | Umang Ayurvedic Clinic" 
        description="उमंग आयुर्वेदिक क्लिनिक ठाणे में परामर्श के लिए समय बुक करें। Book appointment with expert Ayurvedic doctors in Thane West."
        keywords="Book appointment ayurvedic clinic, Thane ayurvedic doctor consultation, Umang clinic appointment, अपॉइंटमेंट बुक करें, ठाणे आयुर्वेदिक क्लिनिक" 
      />
      
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
                <h3 className="text-2xl font-bold text-primary mb-6">संपर्क जानकारी</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">फ़ोन पर बात करें</h4>
                      <p className="text-gray-600 mt-1 font-medium">{siteData.contact.phoneDisplay || siteData.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">क्लिनिक का पता</h4>
                      <p className="text-gray-600 mt-1">{siteData.contact.address}</p>
                    </div>
                  </div>
                  
                  <hr className="border-gray-100" />
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">क्लिनिक का समय (TIMING)</h4>
                    <p className="text-gray-800 font-medium text-sm">
                      <span className="font-bold text-primary">Monday to Saturday:</span> Mor. 10 AM to Eve. 9 PM
                    </p>
                    <p className="text-gray-800 font-medium text-sm mt-1">
                      <span className="font-bold text-secondary">Sunday:</span> Mor. 10 AM to 2 PM
                    </p>
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
