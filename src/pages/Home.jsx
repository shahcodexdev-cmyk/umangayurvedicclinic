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
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Umang Ayurvedic Clinic (उमंग आयुर्वेदिक क्लिनिक)",
    "alternateName": "Umang Clinic",
    "url": "https://umangayurvedic.com",
    "logo": "https://umangayurvedic.com/logo.jpeg",
    "description": "उमंग आयुर्वेदिक क्लिनिक ठाणे - बवासीर, भगंदर, सेक्स समस्याएं और हड्डी में गैप व दबी नस (Sciatica) का सफल आयुर्वेदिक व यूनानी इलाज।",
    "medicalSpecialty": ["Ayurvedic", "Proctology", "SexualHealth", "Orthopedics"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 101, 1st Floor, Siddharth Tower, Near Post Office, Opposite Tip Top Sweet, Thane West",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400602",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "telephone": "+919833826366"
  };

  return (
    <>
      <SEO 
        title="Umang Ayurvedic Clinic | For – Sex | Piles | Fistula | Bones & Sciatica | Thane"
        description="उमंग आयुर्वेदिक क्लिनिक (ठाणे) - सेक्स समस्याएं, खूनी बवासीर, भगंदर और हड्डी में गैप व दबी नस (Sciatica) का सफल आयुर्वेदिक और यूनानी इलाज। कॉल: 98338 26366 / 8652674047."
        keywords="Umang Ayurvedic Clinic, Sex doctor Thane, Piles treatment Thane, Laser piles, Fistula cure, Sciatica ayurvedic treatment, हड्डी में गैप, बवासीर, भगंदर, नपुंसकता, शीघ्रपतन, 9833826366"
        schema={homeSchema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-muted pt-16 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="inline-block py-1 px-3.5 rounded-full bg-primary text-white text-xs md:text-sm font-bold tracking-wide uppercase shadow-sm">
                  {homeData.hero.badge}
                </span>
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/15 text-secondary font-bold text-xs md:text-sm uppercase tracking-wider">
                  आयुर्वेदिक व यूनानी इलाज
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
                {homeData.hero.title}
                <span className="block text-primary text-2xl md:text-4xl mt-2 font-bold text-secondary">
                  {homeData.hero.highlight}
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {homeData.hero.description}
              </p>

              {/* Quick Call Strip */}
              <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm mb-8 inline-flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center text-primary font-bold text-sm md:text-base">
                  <Phone size={18} className="text-secondary mr-2" />
                  <span>सीधे कॉल करें:</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href="tel:+919833826366" className="text-sm md:text-base font-extrabold text-primary hover:text-secondary hover:underline">
                    98338 26366
                  </a>
                  <span className="text-gray-300">/</span>
                  <a href="tel:+918652674047" className="text-sm md:text-base font-extrabold text-primary hover:text-secondary hover:underline">
                    8652674047
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button to="/appointment" variant="primary" className="w-full sm:w-auto text-base md:text-lg px-8 py-3.5 font-bold shadow-lg">
                  {homeData.hero.primaryButton}
                </Button>
                <Button to="/treatments" variant="ghost" className="w-full sm:w-auto text-base md:text-lg px-8 py-3.5 font-bold">
                  {homeData.hero.secondaryButton}
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-110 -z-10"></div>
              <img 
                src={homeData.hero.image} 
                alt="Umang Ayurvedic Clinic - Thane" 
                className="rounded-2xl shadow-2xl object-cover h-[420px] lg:h-[500px] w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/800x600?text=Umang+Clinic';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Strip (Exact from Banner) */}
      <section className="bg-primary text-white py-10 -mt-10 relative z-20 shadow-xl mx-4 lg:mx-8 rounded-3xl">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">विशेषज्ञ उपचार</span>
            <h2 className="text-2xl md:text-3xl font-extrabold">FOR – SEX | PILES | FISTULA | BONES & SCIATICA</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sexual Health */}
            <div className="bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-base md:text-lg text-secondary">SEXUAL HEALTH</span>
                <span className="text-[10px] bg-secondary text-primary font-bold px-2 py-0.5 rounded">गोपनीय</span>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-100">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> कमज़ोरी</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> नपुंसकता</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> शीघ्रपतन</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> वैवाहिक समस्याएँ</li>
              </ul>
              <Link to="/sexual-health" className="inline-flex items-center text-xs text-secondary-light font-bold mt-4 hover:underline">
                इलाज जानें <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>

            {/* Piles */}
            <div className="bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-base md:text-lg text-secondary">PILES</span>
                <span className="text-[10px] bg-secondary text-primary font-bold px-2 py-0.5 rounded">लेजर सुविधा</span>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-100">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> खूनी बवासीर</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> दर्द व सूजन में राहत</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> लेजर की सुविधा उपलब्ध</li>
              </ul>
              <Link to="/piles-treatment" className="inline-flex items-center text-xs text-secondary-light font-bold mt-4 hover:underline">
                इलाज जानें <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>

            {/* Fistula */}
            <div className="bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-base md:text-lg text-secondary">FISTULA</span>
                <span className="text-[10px] bg-secondary text-primary font-bold px-2 py-0.5 rounded">जड़ से इलाज</span>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-100">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> भगंदर का इलाज</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> फिस्टुला में राहत</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-secondary mr-2 flex-shrink-0" /> पुराने फिस्टुला का उपचार</li>
              </ul>
              <Link to="/fistula-treatment" className="inline-flex items-center text-xs text-secondary-light font-bold mt-4 hover:underline">
                इलाज जानें <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>

            {/* Sciatica & Bones */}
            <div className="bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/20 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-extrabold text-base md:text-lg text-secondary">SCIATICA / BONES</span>
                <span className="text-[10px] bg-secondary text-primary font-bold px-2 py-0.5 rounded">इलाज मुमकिन</span>
              </div>
              <p className="text-xs md:text-sm text-gray-100 leading-relaxed font-medium">
                हड्डी में गैप और दबी नस (Sciatica) का आयुर्वेदिक और यूनानी दवाओं से इलाज मुमकिन है।
              </p>
              <ul className="space-y-1 text-xs text-gray-200 mt-2">
                <li>• कमर व घुटनों का दर्द</li>
                <li>• पैरों का सुन्नपन व झनझनाहट</li>
              </ul>
              <Link to="/bone-joint-care" className="inline-flex items-center text-xs text-secondary-light font-bold mt-4 hover:underline">
                इलाज जानें <ArrowRight size={12} className="ml-1" />
              </Link>
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
                alt="About Umang Clinic" 
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
