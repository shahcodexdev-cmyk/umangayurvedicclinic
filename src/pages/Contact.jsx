import React from 'react';
import contactData from '../data/contact.json';
import ContactCard from '../components/ContactCard';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO title="Contact Us | Umang Ayurvedic Clinic" description={contactData.hero.description} />
      
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{contactData.hero.title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            {contactData.hero.description}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-muted relative -mt-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.contactCards.map((card, index) => (
              <ContactCard 
                key={index}
                type={card.type}
                title={card.title}
                value={card.value}
                action={card.action}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map or Image Placeholder */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Find Us Here" centered={true} />
          
          <div className="mt-10 max-w-5xl mx-auto h-[400px] bg-muted rounded-2xl overflow-hidden shadow-md flex items-center justify-center border border-gray-200">
             {contactData.map.enabled && contactData.map.embedUrl ? (
                <iframe 
                  src={contactData.map.embedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
             ) : (
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">Location Map</h3>
                  <p className="text-gray-500">{contactData.address}</p>
                  <p className="text-gray-500 mt-4 text-sm">(Map integration pending client URL)</p>
                </div>
             )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
