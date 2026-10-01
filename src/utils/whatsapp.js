import siteData from '../data/site.json';

export const createWhatsAppMessage = (details) => {
  const { name, mobile, treatment, date, time, message } = details;
  
  let text = `Hello Umang Ayurvedic Clinic,\n\nI would like to book an appointment.\n\n`;
  if (name) text += `*Name:* ${name}\n`;
  if (mobile) text += `*Mobile:* ${mobile}\n`;
  if (treatment) text += `*Treatment:* ${treatment}\n`;
  if (date) text += `*Preferred Date:* ${date}\n`;
  if (time) text += `*Preferred Time:* ${time}\n`;
  if (message) text += `*Concern:* ${message}\n`;

  const encodedText = encodeURIComponent(text);
  const whatsappNumber = siteData.contact.whatsapp;
  
  return `https://wa.me/${whatsappNumber}?text=${encodedText}`;
};

export const getWhatsAppLink = (message = 'Hello') => {
  const whatsappNumber = siteData.contact.whatsapp;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
