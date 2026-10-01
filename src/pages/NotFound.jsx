import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted py-20">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      
      <div className="text-center px-4 max-w-lg mx-auto">
        <h1 className="text-9xl font-extrabold text-primary opacity-20 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-6">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary" className="px-8 py-4">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
