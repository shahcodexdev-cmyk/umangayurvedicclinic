import React from 'react';

const SectionHeading = ({ eyebrow, title, description, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
