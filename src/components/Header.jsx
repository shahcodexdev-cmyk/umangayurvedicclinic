import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import siteData from '../data/site.json';
import navData from '../data/navigation.json';
import commonData from '../data/common.json';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone size={14} className="mr-2" />
              {siteData.contact.phone}
            </span>
            <span>{siteData.contact.openingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src={siteData.clinic.logo} 
              alt={siteData.clinic.name} 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/150x50?text=Umang+Clinic';
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navData.mainNavigation.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <button
                    className={`flex items-center space-x-1 font-medium transition-colors hover:text-secondary ${
                      item.items.some(subItem => isActive(subItem.path)) ? 'text-secondary' : 'text-foreground'
                    }`}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors hover:text-secondary ${
                      isActive(item.path) ? 'text-secondary' : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <div 
                    className="absolute top-full left-0 w-56 pt-2"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm hover:bg-muted hover:text-secondary ${
                            isActive(subItem.path) ? 'text-secondary bg-muted' : 'text-gray-700'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button to={navData.cta.path} variant="primary">
              {navData.cta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 py-6 space-y-4">
            {navData.mainNavigation.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                {item.dropdown ? (
                  <div>
                    <div className="font-medium text-foreground mb-2">{item.label}</div>
                    <div className="pl-4 space-y-3 border-l-2 border-muted">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block text-sm ${isActive(subItem.path) ? 'text-secondary font-medium' : 'text-gray-600'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block font-medium ${isActive(item.path) ? 'text-secondary' : 'text-foreground'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button to={navData.cta.path} variant="primary" className="w-full">
                {navData.cta.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
