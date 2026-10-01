import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, CircleDot, Bone } from 'lucide-react';

const iconMap = {
  Activity: Activity,
  CircleDot: CircleDot,
  Bone: Bone,
};

const TreatmentCard = ({ treatment }) => {
  const Icon = iconMap[treatment.icon] || Activity;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
        <img 
          src={treatment.image} 
          alt={treatment.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x300?text=Treatment';
          }}
        />
        <div className="absolute top-4 right-4 z-20 bg-white p-3 rounded-full shadow-md text-primary">
          <Icon size={24} />
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">{treatment.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {treatment.shortDescription || treatment.description}
        </p>
        <Link 
          to={treatment.path}
          className="inline-flex items-center text-secondary font-medium hover:text-primary transition-colors group/link"
        >
          Explore Treatment
          <ArrowRight size={18} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard;
