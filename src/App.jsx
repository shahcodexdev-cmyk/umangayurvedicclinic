import React from 'react';
import { 
  Leaf, 
  Construction, 
  MessageCircle, 
  Phone
} from 'lucide-react';

function App() {
  const phoneDisplay = "+91 98338 26366";
  const phoneRaw = "+919833826366";
  const whatsappNumber = "919833826366";
  const whatsappMessage = encodeURIComponent("Hello Umang Ayurvedic Clinic, I would like to inquire about a consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="simple-page-wrapper">
      <main className="simple-card">
        {/* Clinic Brand */}
        <div className="brand-header">
          <div className="brand-icon-wrapper">
            <Leaf size={32} />
          </div>
          <h1 className="clinic-title">Umang Ayurvedic Clinic</h1>
          <p className="clinic-subtitle">Natural Healing & Wellness</p>
        </div>

        {/* Simple Under Construction Badge */}
        <div className="under-construction-badge">
          <Construction size={16} />
          <span>Website Under Development</span>
        </div>

        {/* Brief Message */}
        <p className="simple-message">
          Our official web portal is currently being created. 
          For appointments & consultations, please connect directly:
        </p>

        {/* Perfectly Responsive Contact Action Buttons */}
        <div className="cta-container">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-action btn-wa"
          >
            <MessageCircle size={22} className="btn-icon" />
            <div className="btn-text-wrap">
              <span className="btn-primary-text">WhatsApp Consultation</span>
              <span className="btn-phone-text">{phoneDisplay}</span>
            </div>
          </a>
          
          <a 
            href={`tel:${phoneRaw}`} 
            className="btn-action btn-call"
          >
            <Phone size={20} className="btn-icon" />
            <div className="btn-text-wrap">
              <span className="btn-primary-text">Call Clinic Directly</span>
              <span className="btn-phone-text">{phoneDisplay}</span>
            </div>
          </a>
        </div>

        <div className="simple-footer">
          © {new Date().getFullYear()} Umang Ayurvedic Clinic • All Rights Reserved
        </div>
      </main>
    </div>
  );
}

export default App;
