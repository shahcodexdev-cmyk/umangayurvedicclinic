import React from 'react';
import Button from './Button';

const CTASection = ({ title, description, buttonText, buttonPath }) => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 C70 30, 90 40, 100 50 C70 70, 60 90, 50 100 C30 70, 10 60, 0 50 C30 30, 40 10, 50 0 Z" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            {description}
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Button to={buttonPath || '/appointment'} variant="secondary" className="text-lg px-8 py-4">
              {buttonText || 'Book Appointment'}
            </Button>
            <Button href="tel:+919999999999" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
