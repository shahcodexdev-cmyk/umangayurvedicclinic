import React from 'react';
import aboutData from '../data/about.json';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <>
      <SEO title="About Us | Umang Ayurvedic Clinic" description={aboutData.hero.description} />
      
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{aboutData.hero.title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            {aboutData.hero.description}
          </p>
        </div>
      </section>

      {/* Clinic Intro */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading title={aboutData.clinic.title} />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {aboutData.clinic.description}
              </p>
              <div className="bg-muted p-8 rounded-2xl border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-primary mb-3">{aboutData.mission.title}</h3>
                <p className="text-gray-700 italic">"{aboutData.mission.description}"</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={aboutData.clinic.image} 
                alt="Clinic Building" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x600?text=Clinic+Building';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <SectionHeading title={aboutData.approach.title} description={aboutData.approach.description} centered={true} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aboutData.approach.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                <p className="text-lg font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto bg-muted rounded-3xl p-8 md:p-12">
            <div className="md:w-1/3">
              <img 
                src={aboutData.practitioner.image} 
                alt={aboutData.practitioner.name} 
                className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Doctor';
                }}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-primary mb-2">{aboutData.practitioner.name}</h2>
              {aboutData.practitioner.qualification && (
                <p className="text-secondary font-semibold text-lg mb-1">{aboutData.practitioner.qualification}</p>
              )}
              {aboutData.practitioner.experience && (
                <p className="text-gray-500 mb-6">{aboutData.practitioner.experience}</p>
              )}
              <p className="text-gray-700 text-lg leading-relaxed">
                {aboutData.practitioner.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title={aboutData.cta.title} 
        description={aboutData.cta.description} 
        buttonText={aboutData.cta.button} 
      />
    </>
  );
};

export default About;
