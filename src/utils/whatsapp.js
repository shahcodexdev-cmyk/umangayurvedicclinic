import siteData from '../data/site.json';

export const createWhatsAppMessage = (details) => {
  const { name, mobile, treatment, date, time, message } = details;
  
  let text = `नमस्ते उमंग आयुर्वेदिक क्लिनिक,\n\nमुझे डॉक्टर से अपॉइंटमेंट बुक करना है:\n\n`;
  if (name) text += `*नाम (Name):* ${name}\n`;
  if (mobile) text += `*मोबाइल (Mobile):* ${mobile}\n`;
  if (treatment) text += `*समस्या (Treatment):* ${treatment}\n`;
  if (date) text += `*तारीख (Preferred Date):* ${date}\n`;
  if (time) text += `*समय (Preferred Time):* ${time}\n`;
  if (message) text += `*विवरण (Problem):* ${message}\n`;

  const encodedText = encodeURIComponent(text);
  const whatsappNumber = siteData.contact.whatsapp;
  
  return `https://wa.me/${whatsappNumber}?text=${encodedText}`;
};

export const getWhatsAppLink = (message = 'नमस्ते डॉक्टर, मुझे उमंग आयुर्वेदिक क्लिनिक में इलाज के लिए अपॉइंटमेंट बुक करना है।') => {
  const whatsappNumber = siteData.contact.whatsapp;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
