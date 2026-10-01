import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-secondary mb-6">
        <CheckCircle2 size={24} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
