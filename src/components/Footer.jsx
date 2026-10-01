import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import footerData from '../data/footer.json';
import siteData from '../data/site.json';

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div>
            <Link to="/" className="inline-block mb-6 bg-white p-2 rounded">
              <img 
                src={siteData.clinic.logo} 
                alt={siteData.clinic.name} 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x50?text=Logo';
                }}
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {footerData.description}
            </p>
            <div className="flex space-x-4">
              {siteData.social.instagram && (
                <a href={siteData.social.instagram} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <InstagramIcon size={20} />
                </a>
              )}
              {siteData.social.facebook && (
                <a href={siteData.social.facebook} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <FacebookIcon size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Treatments</h4>
            <ul className="space-y-3">
              {footerData.treatments.map((treatment, index) => (
                <li key={index}>
                  <Link to={treatment.path} className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    {treatment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span>{footerData.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={18} className="flex-shrink-0 text-secondary" />
                <a href={`tel:${footerData.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {footerData.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={18} className="flex-shrink-0 text-secondary" />
                <a href={`mailto:${footerData.contact.email}`} className="hover:text-white">
                  {footerData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
