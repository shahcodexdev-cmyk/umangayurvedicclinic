import React from 'react';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';
import treatmentsData from '../data/treatments.json';
import SectionHeading from '../components/SectionHeading';
import TreatmentGrid from '../components/TreatmentGrid';
import FeatureCard from '../components/FeatureCard';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO title="Umang Ayurvedic Clinic | Authentic Ayurvedic Care" description={homeData.hero.description} />
      
      {/* Hero Section */}
      <section className="relative bg-muted pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              {homeData.hero.badge && (
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6 tracking-wide uppercase">
                  {homeData.hero.badge}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                {homeData.hero.title}
                <span className="block text-primary mt-2">{homeData.hero.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {homeData.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button to="/appointment" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                  {homeData.hero.primaryButton}
                </Button>
                <Button to="/treatments" variant="ghost" className="w-full sm:w-auto text-lg px-8 py-4">
                  {homeData.hero.secondaryButton}
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-110 -z-10"></div>
              <img 
                src={homeData.hero.image} 
                alt="Clinic Hero" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x600?text=Umang+Clinic';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img 
                src={homeData.introduction.image} 
                alt="About Clinic" 
                className="rounded-2xl shadow-xl w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x600?text=Interior';
                }}
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <SectionHeading 
                eyebrow={homeData.introduction.eyebrow}
                title={homeData.introduction.title}
                description={homeData.introduction.description}
              />
              <Button to="/about" variant="outline" className="mt-4">
                {homeData.introduction.button}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionHeading 
            eyebrow={homeData.treatments.eyebrow}
            title={homeData.treatments.title}
            description={homeData.treatments.description}
            centered={true}
          />
          <div className="mt-16">
            <TreatmentGrid treatments={treatmentsData.items} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading 
            eyebrow={homeData.whyChooseUs.eyebrow}
            title={homeData.whyChooseUs.title}
            description={homeData.whyChooseUs.description}
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {homeData.whyChooseUs.items.map((item, index) => (
              <FeatureCard key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionHeading 
            eyebrow={homeData.process.eyebrow}
            title={homeData.process.title}
            centered={true}
          />
          <div className="mt-16">
            <ProcessSteps steps={homeData.process.steps} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title={homeData.cta.title}
        description={homeData.cta.description}
        buttonText={homeData.cta.button}
      />
    </>
  );
};

export default Home;
