import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  schema, 
  canonical,
  ogImage = '/logo.jpeg',
  ogType = 'website'
}) => {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // Helper to set or create a meta tag by name
    const setMetaByName = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    // Helper to set or create a meta tag by property (OG tags)
    const setMetaByProperty = (property, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    // 2. Update Description & Keywords
    if (description) {
      setMetaByName('description', description);
      setMetaByProperty('og:description', description);
      setMetaByName('twitter:description', description);
    }

    if (keywords) {
      setMetaByName('keywords', keywords);
    }

    // 3. Update Title in OpenGraph and Twitter
    if (title) {
      setMetaByProperty('og:title', title);
      setMetaByName('twitter:title', title);
    }

    // 4. Update Canonical and OG URL
    const currentUrl = canonical || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', currentUrl);
      document.head.appendChild(canonicalLink);
    }
    setMetaByProperty('og:url', currentUrl);

    // 5. OpenGraph Type & Image
    setMetaByProperty('og:type', ogType);
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMetaByProperty('og:image', fullImageUrl);
      setMetaByName('twitter:image', fullImageUrl);
    }

    // 6. Update JSON-LD Structured Data Schema
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
  }, [title, description, keywords, schema, canonical, ogImage, ogType]);

  return null;
};

export default SEO;

