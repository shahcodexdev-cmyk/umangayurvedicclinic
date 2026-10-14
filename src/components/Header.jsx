import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import siteData from '../data/site.json';
import navData from '../data/navigation.json';
import Button from './Button';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentLang, setCurrentLang] = useState('hi');
  const location = useLocation();

  useEffect(() => {
    // Detect if googtrans cookie is set to English
    const checkLang = () => {
      const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
      if (match && match[1] === 'en') {
        setCurrentLang('en');
      } else {
        setCurrentLang('hi');
      }
    };
    checkLang();
  }, []);

  const toggleLanguage = () => {
    if (currentLang === 'hi') {
      // Translate to English
      setCurrentLang('en');
      document.cookie = 'googtrans=/hi/en; path=/;';
      document.cookie = `googtrans=/hi/en; path=/; domain=${window.location.hostname};`;
      
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
      } else {
        window.location.reload();
      }
    } else {
      // Revert back to original Hindi
      setCurrentLang('hi');
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = 'hi';
        select.dispatchEvent(new Event('change'));
      }
      window.location.reload();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar (Desktop) */}
      <div className="bg-primary text-white py-1.5 px-4 hidden md:block border-b border-primary-light/20">
        <div className="container-custom flex justify-between items-center text-xs md:text-sm">
          {/* Contact Details */}
          <div className="flex items-center space-x-4">
            <span className="bg-secondary/20 text-secondary-light font-bold text-xs px-2.5 py-0.5 rounded">
              {siteData.clinic.office || 'Office No. 101'}
            </span>
            <a 
              href={`tel:+919833826366`} 
              className="flex items-center hover:text-secondary-light transition-colors font-medium"
            >
              <Phone size={13} className="mr-1.5 text-secondary" />
              <span>{siteData.contact.phoneDisplay || siteData.contact.phone}</span>
            </a>
            <span className="text-gray-200 hidden xl:inline text-xs border-l border-white/20 pl-4">
              सोम - शनि: 10 AM - 9 PM | रवि: 10 AM - 2 PM
            </span>
          </div>

          {/* Quick Search & Language Switcher */}
          <div className="flex items-center space-x-3">
            <SearchBar className="w-56 lg:w-64" />
            
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center space-x-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-semibold tracking-wide text-white transition-all hover:scale-105"
              title="Click to translate into English / हिन्दी में अनुवाद करें"
            >
              <Globe size={13} className="text-secondary" />
              <span>{currentLang === 'en' ? 'हिन्दी (मूल)' : 'English'}</span>
            </button>
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
                    className="absolute top-full left-0 w-60 pt-2"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 py-2 border border-gray-100">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block px-4 py-2.5 text-sm hover:bg-muted hover:text-secondary transition-colors ${
                            isActive(subItem.path) ? 'text-secondary bg-muted font-medium' : 'text-gray-700'
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

          {/* Mobile Actions: Language Switcher & Hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center space-x-1 px-2.5 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full text-xs font-semibold text-gray-800 transition-colors"
              title="Translate language"
            >
              <Globe size={13} className="text-primary" />
              <span>{currentLang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 text-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 py-6 space-y-4">
            {/* Quick Search on Mobile */}
            <div className="pb-2 border-b border-gray-100">
              <SearchBar 
                isMobile={true} 
                onCloseMobile={() => setIsMobileMenuOpen(false)} 
              />
            </div>

            {navData.mainNavigation.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                {item.dropdown ? (
                  <div>
                    <div className="font-semibold text-foreground mb-2">{item.label}</div>
                    <div className="pl-4 space-y-3 border-l-2 border-primary/20">
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
            
            <div className="pt-2">
              <Button to={navData.cta.path} variant="primary" className="w-full text-center">
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
