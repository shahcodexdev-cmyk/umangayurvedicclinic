import React from 'react';
import treatmentsData from '../data/treatments.json';
import SectionHeading from '../components/SectionHeading';
import TreatmentGrid from '../components/TreatmentGrid';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Treatments = () => {
  return (
    <>
      <SEO title="Our Treatments | Umang Ayurvedic Clinic" description={treatmentsData.page.description} />
      
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{treatmentsData.page.title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
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
        title="Need a Consultation?" 
        description="Not sure which treatment is right for you? Book a general consultation and let our experts guide you."
      />
    </>
  );
};

export default Treatments;
