import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const iconMap = {
  phone: Phone,
  whatsapp: MessageCircle,
  location: MapPin,
  email: Mail
};

const ContactCard = ({ type, title, value, action }) => {
  const Icon = iconMap[type] || Phone;
  
  const isWhatsapp = type === 'whatsapp';
  
  return (
    <a 
      href={action} 
      target={isWhatsapp ? "_blank" : "_self"}
      rel={isWhatsapp ? "noopener noreferrer" : ""}
      className={`group block bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 ${isWhatsapp ? 'border-[#25D366]' : 'border-primary'}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${isWhatsapp ? 'bg-green-100 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white' : 'bg-muted text-primary group-hover:bg-primary group-hover:text-white'}`}>
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-gray-600 font-medium text-lg">{value}</p>
      </div>
    </a>
  );
};

export default ContactCard;
