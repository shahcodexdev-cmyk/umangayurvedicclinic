import React from 'react';

const ProcessSteps = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="relative group">
          {/* Connector Line (Desktop only) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200">
              <div className="h-full bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          )}
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-muted flex items-center justify-center text-xl font-bold text-primary mb-6 group-hover:border-secondary transition-colors duration-300 shadow-sm">
              {step.step || (index + 1).toString().padStart(2, '0')}
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
