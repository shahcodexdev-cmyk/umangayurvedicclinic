import React from 'react';
import treatmentsData from '../data/treatments.json';
import SectionHeading from '../components/SectionHeading';
import TreatmentGrid from '../components/TreatmentGrid';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Treatments = () => {
  return (
    <>
      <SEO 
        title="Ayurvedic Treatments in Thane | Umang Ayurvedic Clinic | Sex, Piles, Fistula & Bones" 
        description="Comprehensive Ayurvedic treatments in Thane West at Umang Ayurvedic Clinic: Sexual Health & Stamina, Piles & Fissure Laser Treatment, Fistula Ksharasutra, and Bone Gap & Sciatica." 
        keywords="ayurvedic in thane, umang ayurvedic, umang ayurvedic clinic, ayurvedic treatments thane, sexologist in thane, piles treatment thane, fistula cure thane, sciatica treatment thane, बवासीर का इलाज ठाणे, आयुर्वेदिक उपचार"
        canonical="https://umangayurvedicclinic.vercel.app/treatments"
      />
      
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container-custom text-center">
          {treatmentsData.page.subtitle && (
            <span className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary-light text-sm md:text-base font-bold mb-4 tracking-wide uppercase border border-secondary/30">
              {treatmentsData.page.subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{treatmentsData.page.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            {treatmentsData.page.description}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <TreatmentGrid treatments={treatmentsData.items} />
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="बीमारी के बारे में डॉक्टर से सीधे बात करें" 
        description="अगर आपको समझ नहीं आ रहा कि कौन सा इलाज आपके लिए बेहतर है, तो बेझिझक 98338 26366 या 8652674047 पर फोन या WhatsApp करें।"
        buttonText="WhatsApp पर बात करें"
      />
    </>
  );
};

export default Treatments;
