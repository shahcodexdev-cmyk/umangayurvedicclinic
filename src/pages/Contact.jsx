import React from 'react';
import contactData from '../data/contact.json';
import ContactCard from '../components/ContactCard';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="संपर्क करें (Contact Us) | Umang Ayurvedic Clinic Thane | 98338 26366" 
        description="Office No. 101, सिद्धार्थ टॉवर, ठाणे स्टेशन (पश्चिम). सेक्स, बवासीर, भगंदर और साइटिका का इलाज। फोन: 98338 26366 / 8652674047."
        keywords="Contact Umang Ayurvedic Clinic, Ayurvedic clinic Thane phone number, Thane West clinic address, 9833826366, 8652674047, ऑफिस 101, ठाणे क्लिनिक फोन" 
      />
      
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-light text-xs font-bold mb-3 uppercase tracking-wider">
            Office No. 101, Thane (West)
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{contactData.hero.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {contactData.hero.description}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-muted relative -mt-10">
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

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="क्लिनिक का पता एवं लोकेशन" centered={true} />
          
          <div className="mt-10 max-w-4xl mx-auto bg-muted rounded-3xl p-8 md:p-12 text-center border border-gray-200 shadow-sm">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
              Office No. 101, 1st Floor
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              सिद्धार्थ टॉवर, ठाणे (पश्चिम)
            </h3>
            <p className="text-gray-700 max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-4">
              {contactData.address}
            </p>
            <p className="text-secondary font-bold text-base md:text-lg mb-6">
              (ठाणे रेलवे स्टेशन से सिर्फ 2 मिनट की दूरी पर, टिप टॉप स्वीट के सामने)
            </p>
            
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm">
              <span className="text-gray-600 font-medium text-sm">सीधे बात करें:</span>
              <a href="tel:+919833826366" className="text-primary font-extrabold text-base hover:underline">
                98338 26366
              </a>
              <span className="text-gray-300">/</span>
              <a href="tel:+918652674047" className="text-primary font-extrabold text-base hover:underline">
                8652674047
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
