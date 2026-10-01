import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`border rounded-lg overflow-hidden transition-all duration-300 ${
            openIndex === index ? 'border-primary shadow-md' : 'border-gray-200'
          }`}
        >
          <button
            className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-lg text-foreground pr-8">
              {item.question}
            </span>
            <span className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDown size={20} />
            </span>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out bg-white ${
              openIndex === index ? 'max-h-96 opacity-100 py-4 px-6 border-t' : 'max-h-0 opacity-0 px-6'
            }`}
          >
            <p className="text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
