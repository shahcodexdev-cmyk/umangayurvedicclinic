import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const TreatmentPage = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <SEO title={data.seo?.title || data.page.title} description={data.seo?.description || data.page.description} />
      
      {/* Hero */}
      <section className="relative bg-primary-dark pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={data.page.heroImage} 
            alt={data.page.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-primary-dark mix-blend-multiply"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <span className="text-secondary-light font-semibold tracking-wider uppercase text-sm mb-4 block">
            {data.page.subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{data.page.title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            {data.page.description}
          </p>
        </div>
      </section>

      {/* Introduction */}
      {data.introduction && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <SectionHeading title={data.introduction.title} />
                <p className="text-lg text-gray-700 leading-relaxed">
                  {data.introduction.description}
                </p>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={data.introduction.image} 
                  alt={data.introduction.title} 
                  className="rounded-2xl shadow-xl w-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400?text=Treatment+Intro';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Concerns & Approach (Combined Section) */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Concerns */}
            {data.concerns && (
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <SectionHeading title={data.concerns.title} />
                <p className="text-gray-600 mb-8">{data.concerns.description}</p>
                <ul className="space-y-4">
                  {data.concerns.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-secondary flex-shrink-0 mt-1 mr-4" size={24} />
                      <span className="text-lg text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Approach */}
            {data.approach && (
              <div>
                <SectionHeading title={data.approach.title} />
                <p className="text-gray-600 mb-8 text-lg">{data.approach.description}</p>
                <div className="space-y-6">
                  {data.approach.items.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* Process */}
      {data.process && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title={data.process.title} centered={true} />
            <div className="mt-16">
              <ProcessSteps steps={data.process.steps} />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq && (
        <section className="py-20 bg-muted">
          <div className="container-custom">
            <SectionHeading title={data.faq.title} centered={true} />
            <div className="mt-12">
              <FAQ items={data.faq.items} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {data.cta && (
        <CTASection 
          title={data.cta.title} 
          description={data.cta.description} 
          buttonText={data.cta.button} 
        />
      )}
    </>
  );
};

export default TreatmentPage;
