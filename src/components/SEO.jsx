import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords, schema }) => {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Update Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // 3. Update Meta Keywords (Bilingual English & Hindi)
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    // 4. Update JSON-LD Structured Data Schema for Search Engines
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]#page-schema');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-schema';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, schema]);

  return null;
};

export default SEO;
