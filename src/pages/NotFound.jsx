import React from 'react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted py-20">
      <SEO title="404 - पेज नहीं मिला | Page Not Found | Umang Clinic" description="आप जिस पेज को खोज रहे हैं वह उपलब्ध नहीं है।" />
      
      <div className="text-center px-4 max-w-lg mx-auto">
        <h1 className="text-9xl font-extrabold text-primary opacity-20 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-6">पेज नहीं मिला</h2>
        <p className="text-gray-600 text-lg mb-8">
          आप जिस पेज को खोज रहे हैं वह शायद हटा दिया गया है या इसका वेब पता बदल दिया गया है।
        </p>
        <Button to="/" variant="primary" className="px-8 py-4">
          होमपेज पर वापस जाएं
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
