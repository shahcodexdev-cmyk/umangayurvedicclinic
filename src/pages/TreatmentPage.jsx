import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  AlertCircle,
  Sparkles,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import Button from '../components/Button';

const TreatmentPage = ({ data }) => {
  if (!data) return null;

  const getKeywordsForSlug = (slug) => {
    if (slug === 'piles-treatment') {
      return 'umang ayurvedic, ayurvedic in thane, piles treatment in thane, laser piles thane, best piles doctor thane, bawasir treatment thane, fissure doctor thane, piles clinic thane west, बवासीर का इलाज ठाणे, खूनी बवासीर, लेजर सुविधा ठाणे, 9833826366';
    }
    if (slug === 'fistula-treatment') {
      return 'umang ayurvedic, ayurvedic in thane, fistula treatment in thane, fistula doctor thane, bhagandar cure thane, ksharasutra thane west, anal fistula ayurveda thane, भगंदर का इलाज ठाणे, फिस्टुला में राहत, पुराना फिस्टुला, 9833826366';
    }
    if (slug === 'sexual-health') {
      return 'umang ayurvedic, ayurvedic in thane, sexologist in thane, ayurvedic sex doctor thane, sexual health clinic thane, premature ejaculation ayurvedic treatment thane, erectile dysfunction cure thane, male fertility clinic thane, गुप्त रोग का इलाज ठाणे, शीघ्रपतन, कमजोरी, नपुंसकता, 9833826366';
    }
    if (slug === 'bone-joint-care') {
      return 'umang ayurvedic, ayurvedic in thane, sciatica treatment in thane, bone gap ayurveda thane, slipped disc cure thane, pinched nerve treatment thane, knee joint pain thane west, arthritis doctor thane, हड्डी में गैप ठाणे, दबी नस का इलाज ठाणे, साइटिका, 9833826366';
    }
    return 'umang ayurvedic, ayurvedic in thane, Umang Ayurvedic Clinic, Ayurvedic treatments Thane, Thane Ayurveda clinic';
  };

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": `${data.page.title} - Umang Ayurvedic Clinic Thane`,
    "description": data.seo?.description || data.page.description,
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Ayurvedic Medicine"
    },
    "provider": {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "name": "Umang Ayurvedic Clinic (उमंग आयुर्वेदिक क्लिनिक)",
      "url": "https://umangayurvedicclinic.vercel.app",
      "telephone": ["+919833826366", "+918652674047"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 101, 1st Floor, Siddharth Tower, Near Post Office, Opposite Tip Top Sweet, Thane West",
        "addressLocality": "Thane",
        "addressRegion": "Maharashtra",
        "postalCode": "400602",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO 
        title={data.seo?.title || data.page.title} 
        description={data.seo?.description || data.page.description} 
        keywords={getKeywordsForSlug(data.page.slug)}
        canonical={`https://umangayurvedicclinic.vercel.app/${data.page.slug}`}
        schema={treatmentSchema}
      />
      
      {/* Hero */}
      <section className="relative bg-primary-dark pt-20 pb-28 overflow-hidden">
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
          {data.page.subtitle && (
            <span className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary-light font-semibold tracking-wider uppercase text-xs md:text-sm mb-4 border border-secondary/30">
              {data.page.subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            {data.page.title}
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed font-medium mb-8">
            {data.page.description}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/appointment" variant="secondary" className="px-6 py-3 shadow-md">
              गोपनीय अपॉइंटमेंट बुक करें
            </Button>
            <a 
              href="tel:+919833826366" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-full border border-white/25 transition-all backdrop-blur-sm text-sm md:text-base"
            >
              <Phone size={18} className="text-secondary-light" />
              <span>कॉल: 98338 26366</span>
            </a>
            <a 
              href="https://wa.me/919833826366?text=नमस्ते%20डॉक्टर,%20मुझे%20गुप्त%20रोग%20के%20बारे%20में%20गोपनीय%20परामर्श%20चाहिए।" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-5 py-3 rounded-full shadow-md transition-all text-sm md:text-base"
            >
              <MessageCircle size={18} />
              <span>WhatsApp परामर्श</span>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section with Right-Side Image */}
      {data.introduction && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Left Column: Text Content */}
              <div className="lg:w-7/12 w-full">
                <SectionHeading 
                  eyebrow={data.introduction.eyebrow} 
                  title={data.introduction.title} 
                />

                {/* Screenshot 2 Quote Box */}
                {data.introduction.quote && (
                  <div className="mb-6 p-6 md:p-7 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50/50 rounded-2xl border-l-4 border-secondary shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-secondary/15 rounded-xl text-primary flex-shrink-0 mt-1">
                        <ShieldCheck size={26} className="text-secondary-dark" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-extrabold tracking-wider text-secondary-dark block mb-2">
                          सच्चाई और समझ
                        </span>
                        <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed">
                          {data.introduction.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screenshot 1 Definition and Bullets */}
                {data.introduction.definition && (
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-gray-900 font-semibold mb-4 leading-relaxed">
                      {data.introduction.definition}
                    </p>
                    
                    {data.introduction.bullets && (
                      <div className="space-y-3.5">
                        {data.introduction.bullets.map((bullet, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-3.5 bg-muted/40 hover:bg-muted/70 p-4 rounded-2xl border border-gray-100 transition-colors shadow-sm"
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-secondary flex-shrink-0 mt-2"></div>
                            <p className="text-base text-gray-800 font-medium leading-relaxed">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Fallback description for other treatment pages */}
                {data.introduction.description && !data.introduction.quote && (
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                    {data.introduction.description}
                  </p>
                )}
              </div>

              {/* Right Column: Main Image */}
              {data.introduction.image && (
                <div className="lg:w-5/12 w-full">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-lg opacity-60"></div>
                    <img 
                      src={data.introduction.image} 
                      alt={data.introduction.title || "Treatment Intro"} 
                      className="relative rounded-2xl shadow-xl w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/600x400?text=Treatment+Intro';
                      }}
                    />
                  </div>

                  {/* Doctor Helpline Box below image */}
                  <div className="mt-5 bg-muted p-4 rounded-2xl border border-secondary/20 text-center">
                    <span className="text-xs uppercase font-bold text-secondary tracking-wider block mb-1">
                      100% गोपनीय व सुरक्षित परामर्श
                    </span>
                    <p className="text-xs md:text-sm text-gray-700 font-medium mb-2">
                      वरिष्ठ डॉक्टर से अलग केबिन में अकेले बात करें:
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <a 
                        href="tel:+919833826366" 
                        className="inline-flex items-center gap-1 text-primary font-bold hover:text-secondary text-sm md:text-base"
                      >
                        <Phone size={15} className="text-secondary" />
                        98338 26366
                      </a>
                      <span className="text-gray-400">/</span>
                      <a 
                        href="tel:+918652674047" 
                        className="inline-flex items-center gap-1 text-primary font-bold hover:text-secondary text-sm md:text-base"
                      >
                        <Phone size={15} className="text-secondary" />
                        8652674047
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Major Types Section with 4 Equal Sized Visual Cards */}
      {data.majorTypes && (
        <section className="py-16 md:py-20 bg-muted/60">
          <div className="container-custom">
            <SectionHeading 
              eyebrow="चित्र एवं जानकारी" 
              title={data.majorTypes.title} 
              centered={true}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {data.majorTypes.items.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
                >
                  <div>
                    {/* Equal Size Image (4:3 ratio) */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/600x450?text=Health+Care';
                        }}
                      />
                      <span className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                        #0{index + 1}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 leading-snug">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <span className="inline-block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                          {item.subtitle}
                        </span>
                      )}
                      <p className="text-gray-700 text-sm leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="p-5 pt-0">
                    <a 
                      href="tel:+919833826366" 
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-muted hover:bg-secondary hover:text-white text-primary font-bold text-xs rounded-xl transition-colors"
                    >
                      <Phone size={14} />
                      <span>डॉक्टर से पूछें</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Helpline Box */}
            <div className="mt-12 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  किसी भी समस्या के लिए सीधे डॉक्टर से बात करें
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  आपकी पहचान और बातचीत 100% सुरक्षित और गुप्त रखी जाती है।
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button to="/appointment" variant="secondary" className="px-5 py-2.5 text-sm">
                  अपॉइंटमेंट बुक करें
                </Button>
                <a 
                  href="https://wa.me/919833826366?text=नमस्ते%20डॉक्टर,%20मुझे%20परामर्श%20चाहिए।" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-bold shadow hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 4 Clinical Categories from Client's text */}
      {data.categoriesSection && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <SectionHeading 
              eyebrow="बीमारियों का वर्गीकरण" 
              title={data.categoriesSection.title} 
              description={data.categoriesSection.subtitle}
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {data.categoriesSection.categories.map((cat, index) => (
                <div 
                  key={index} 
                  className="p-7 rounded-3xl bg-muted/30 border border-gray-100 hover:border-secondary/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-secondary/15 text-secondary-dark rounded-full">
                      {cat.badge}
                    </span>
                    <span className="text-xs font-bold text-gray-400">#0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment & Prevention from Client's text */}
      {data.treatmentAndPrevention && (
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Treatment Approaches */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-secondary/20">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-secondary" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {data.treatmentAndPrevention.treatmentTitle}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {data.treatmentAndPrevention.treatmentDescription}
                </p>
                <div className="space-y-4">
                  {data.treatmentAndPrevention.treatmentPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-800 text-sm md:text-base font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention & Healthy Habits */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <HeartPulse className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {data.treatmentAndPrevention.preventionTitle}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {data.treatmentAndPrevention.preventionDescription}
                </p>
                <div className="space-y-4">
                  {data.treatmentAndPrevention.preventionPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                      <span className="text-gray-800 text-sm md:text-base font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* When to Consult Doctor & Important Message */}
      {data.whenToConsult && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <SectionHeading 
              eyebrow="सावधानी एवं जांच" 
              title={data.whenToConsult.title} 
              description={data.whenToConsult.subtitle} 
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {data.whenToConsult.signs.map((sign, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3.5 p-5 rounded-2xl bg-muted/40 border border-gray-100"
                >
                  <AlertCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800 text-sm md:text-base font-medium leading-relaxed">
                    {sign}
                  </span>
                </div>
              ))}
            </div>

            {/* Reassuring Important Message Callout */}
            {data.whenToConsult.importantNote && (
              <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-dark text-white p-8 md:p-10 rounded-3xl shadow-lg border border-secondary/30">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-secondary-light" size={28} />
                  <h4 className="text-xl md:text-2xl font-bold text-white">
                    {data.whenToConsult.importantNote.title}
                  </h4>
                </div>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                  {data.whenToConsult.importantNote.message}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button to="/appointment" variant="secondary" className="px-6 py-2.5 text-sm">
                    गोपनीय परामर्श बुक करें
                  </Button>
                  <a 
                    href="tel:+919833826366" 
                    className="text-white hover:text-secondary-light font-bold text-sm inline-flex items-center gap-1.5"
                  >
                    <Phone size={16} />
                    कॉल करें: 98338 26366
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Concerns & Approach (Combined Section for other treatment pages) */}
      {(data.concerns || data.approach) && (
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
      )}

      {/* Process */}
      {data.process && (
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container-custom">
            <SectionHeading title={data.process.title} centered={true} />
            <div className="mt-12">
              <ProcessSteps steps={data.process.steps} />
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faq && (
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title={data.faq.title} centered={true} />
            <div className="mt-12 max-w-4xl mx-auto">
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
