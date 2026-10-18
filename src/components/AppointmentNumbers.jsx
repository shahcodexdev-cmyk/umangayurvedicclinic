import React, { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, Clock, MapPin, Navigation, ShieldCheck, Award, Calendar, Sparkles } from 'lucide-react';
import apptData from '../data/appointment.json';
import siteData from '../data/site.json';

const AppointmentNumbers = () => {
  const [copiedNumber, setCopiedNumber] = useState(null);

  const handleCopy = (number, id) => {
    navigator.clipboard.writeText(number.replace(/\s+/g, ''));
    setCopiedNumber(id);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  return (
    <div className="space-y-12">
      {/* Main Hotline Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {apptData.contacts.map((contact) => {
          const isPrimary = contact.isPrimary;
          const whatsappUrl = `https://wa.me/${contact.cleanNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contact.whatsappMessage)}`;

          return (
            <div
              key={contact.id}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${
                isPrimary
                  ? 'bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white border-2 border-secondary/40 shadow-primary/20'
                  : 'bg-white text-foreground border border-gray-200 shadow-gray-200/50'
              }`}
            >
              {/* Decorative top accent */}
              {isPrimary && (
                <div className="absolute top-0 right-0 w-36 h-36 bg-secondary/15 rounded-full blur-2xl pointer-events-none"></div>
              )}

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isPrimary
                        ? 'bg-secondary text-primary-dark shadow-sm'
                        : 'bg-primary/10 text-primary border border-primary/20'
                    }`}
                  >
                    <Sparkles size={13} />
                    {contact.badge}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      isPrimary
                        ? 'bg-white/15 text-secondary-light'
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    कॉल व WhatsApp चालू
                  </span>
                </div>

                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-primary'}`}>
                  {contact.title}
                </h3>
                
                <p className={`text-sm mb-6 ${isPrimary ? 'text-gray-200' : 'text-gray-600'}`}>
                  {contact.description}
                </p>

                {/* Big Phone Number Display */}
                <div
                  className={`p-5 rounded-2xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border ${
                    isPrimary
                      ? 'bg-white/10 border-white/15 backdrop-blur-sm'
                      : 'bg-muted border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isPrimary ? 'bg-secondary text-primary' : 'bg-primary text-white'
                      }`}
                    >
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className={`block text-xs uppercase font-medium ${isPrimary ? 'text-gray-300' : 'text-gray-500'}`}>
                        अपॉइंटमेंट नंबर
                      </span>
                      <a
                        href={`tel:${contact.cleanNumber}`}
                        className={`text-2xl md:text-3xl font-extrabold tracking-wide hover:underline ${
                          isPrimary ? 'text-secondary-light hover:text-white' : 'text-primary hover:text-secondary'
                        }`}
                      >
                        {contact.displayNumber}
                      </a>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(contact.displayNumber, contact.id)}
                    type="button"
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      copiedNumber === contact.id
                        ? 'bg-green-600 text-white'
                        : isPrimary
                        ? 'bg-white/15 hover:bg-white/25 text-white'
                        : 'bg-gray-200/70 hover:bg-gray-300 text-gray-700'
                    }`}
                    title="नंबर कॉपी करें"
                  >
                    {copiedNumber === contact.id ? (
                      <>
                        <Check size={14} />
                        <span>कॉपी हो गया!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>कॉपी करें</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${contact.cleanNumber}`}
                  className={`py-3.5 px-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
                    isPrimary
                      ? 'bg-secondary hover:bg-secondary-light text-primary-dark hover:shadow-lg'
                      : 'bg-primary hover:bg-primary-dark text-white hover:shadow-lg'
                  }`}
                >
                  <Phone size={18} />
                  <span>सीधे कॉल करें</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1fb355] text-white py-3.5 px-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp अपॉइंटमेंट</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Specialties Quick-Book Chips */}
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full inline-block mb-2">
            अपनी बीमारी अनुसार समय चुनें
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
            किस बीमारी के लिए अपॉइंटमेंट चाहिए?
          </h3>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            नीचे अपनी समस्या चुनें और सीधे WhatsApp पर उस बीमारी के विशेषज्ञ डॉक्टर से समय बुक करें:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apptData.specialties.map((spec, index) => {
            const specUrl = `https://wa.me/919833826366?text=${encodeURIComponent(spec.msg)}`;
            return (
              <div
                key={index}
                className="bg-muted hover:bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    0{index + 1}
                  </div>
                  <h4 className="font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors">
                    {spec.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                <a
                  href={specUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white group-hover:bg-[#25D366] text-gray-800 group-hover:text-white border border-gray-200 group-hover:border-[#25D366] text-xs font-bold transition-all shadow-sm"
                >
                  <MessageCircle size={15} />
                  <span>समय बुक करें</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Simple Steps */}
      <div className="bg-gradient-to-br from-primary-dark to-primary text-white rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block mb-2">
            {apptData.steps.subtitle}
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            {apptData.steps.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apptData.steps.items.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/15 rounded-2xl p-6 relative hover:bg-white/15 transition-all"
            >
              <div className="text-4xl font-black text-secondary/40 mb-2">
                {step.step}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timings, Address and Map Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timing Card */}
        <div className="bg-white p-7 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-secondary/15 rounded-2xl flex items-center justify-center text-primary mb-4">
              <Clock size={24} />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1">
              {apptData.timings.title}
            </h4>
            <p className="text-xs text-gray-500 mb-4">{apptData.timings.note}</p>

            <div className="space-y-3">
              {apptData.timings.schedule.map((item, i) => (
                <div key={i} className="p-3 bg-muted rounded-xl border border-gray-100">
                  <span className="block text-xs font-bold text-primary">
                    {item.days}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {item.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100">
            <span className="text-xs text-green-700 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              कॉल रिसेप्शन चालू रहता है
            </span>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-white p-7 rounded-3xl shadow-md border border-gray-100 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {apptData.clinicAddress.office}
              </span>
            </div>

            <h4 className="text-xl font-bold text-foreground mb-1">
              {apptData.clinicAddress.building}
            </h4>
            <p className="text-primary font-bold text-sm mb-3">
              📍 {apptData.clinicAddress.walkTime}
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mb-2 font-medium">
              {apptData.clinicAddress.landmark}
            </p>
            <p className="text-gray-600 text-sm">
              {apptData.clinicAddress.city}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Navigation size={14} className="text-secondary" />
              <span>ठाणे स्टेशन (पश्चिम) से बाहर निकलकर पोस्ट ऑफिस के सामने</span>
            </div>

            <a
              href={apptData.clinicAddress.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-all shadow-sm"
            >
              <Navigation size={14} />
              <span>Google Maps पर देखें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust & Confidentiality Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={26} />
          </div>
          <div>
            <h5 className="font-bold text-gray-900 text-base mb-1">100% गोपनीय परामर्श</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              आपकी सभी स्वास्थ्य संबंधी बातें और व्यक्तिगत जानकारी पूरी तरह सुरक्षित व निजी रखी जाती हैं।
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
            <Award size={26} />
          </div>
          <div>
            <h5 className="font-bold text-gray-900 text-base mb-1">20+ वर्षों का अनुभव</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              वरिष्ठ आयुर्वेदिक व यूनानी चिकित्सकों द्वारा जांच व सफल औषधीय उपचार।
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <Calendar size={26} />
          </div>
          <div>
            <h5 className="font-bold text-gray-900 text-base mb-1">तुरंत समय निर्धारण</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              कोई लंबी फॉर्म भरने की जरूरत नहीं — एक कॉल से आपका स्लॉट डॉक्टर के पास कन्फर्म हो जाता है।
            </p>
          </div>
        </div>
      </div>

      {/* Phone Booking FAQ */}
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
          अपॉइंटमेंट से जुड़े सामान्य प्रश्न
        </h3>

        <div className="divide-y divide-gray-100 max-w-3xl mx-auto">
          {apptData.faq.map((item, i) => (
            <div key={i} className="py-4">
              <h4 className="font-bold text-foreground text-sm md:text-base mb-1.5 flex items-start gap-2">
                <span className="text-secondary font-black">Q.</span>
                <span>{item.q}</span>
              </h4>
              <p className="text-xs md:text-sm text-gray-600 pl-6 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentNumbers;
