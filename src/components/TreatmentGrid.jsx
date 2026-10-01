import React from 'react';
import TreatmentCard from './TreatmentCard';

const TreatmentGrid = ({ treatments }) => {
  if (!treatments || treatments.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.id} treatment={treatment} />
      ))}
    </div>
  );
};

export default TreatmentGrid;
