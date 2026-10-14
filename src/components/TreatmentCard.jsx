import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, CircleDot, Bone, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Activity: Activity,
  CircleDot: CircleDot,
  Bone: Bone,
  Target: CircleDot
};

const TreatmentCard = ({ treatment }) => {
  const Icon = iconMap[treatment.icon] || Activity;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
        <img 
          src={treatment.image} 
          alt={treatment.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x300?text=Treatment';
          }}
        />
        {treatment.badge && (
          <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {treatment.badge}
          </div>
        )}
        <div className="absolute top-4 right-4 z-20 bg-white p-2.5 rounded-full shadow-md text-primary">
          <Icon size={20} />
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{treatment.title}</h3>
        <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
          {treatment.shortDescription || treatment.description}
        </p>

        {/* Highlights from clinic banner */}
        {treatment.highlights && treatment.highlights.length > 0 && (
          <ul className="mb-6 space-y-1.5 bg-gray-50 p-4 rounded-xl border border-gray-100">
            {treatment.highlights.map((point, idx) => (
              <li key={idx} className="flex items-center text-xs md:text-sm font-medium text-gray-800">
                <CheckCircle2 size={15} className="text-secondary mr-2 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          <Link 
            to={treatment.path}
            className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors text-sm md:text-base group/link"
          >
            <span>विस्तार से पढ़ें एवं अपॉइंटमेंट लें</span>
            <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
