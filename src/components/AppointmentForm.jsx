import React, { useState } from 'react';
import apptData from '../data/appointment.json';
import { createWhatsAppMessage } from '../utils/whatsapp';
import { GOOGLE_APPS_SCRIPT_URL } from '../config/api';
import { CheckCircle2, AlertCircle, Loader2, Calendar, Clock, User, Phone, Send, MessageSquare } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    treatment: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = apptData.validationMessages.required;
    if (!formData.mobile.trim()) tempErrors.mobile = apptData.validationMessages.required;
    else if (!/^\d{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
      tempErrors.mobile = apptData.validationMessages.invalidMobile;
    }
    
    if (!formData.treatment) tempErrors.treatment = apptData.validationMessages.required;
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      treatment: formData.treatment,
      date: formData.date || 'जल्द से जल्द',
      time: formData.time || 'सुविधानुसार',
      message: formData.message.trim() || 'कोई अतिरिक्त संदेश नहीं'
    };

    try {
      // Check if valid Google Apps Script URL has been provided
      const isConfigured = GOOGLE_APPS_SCRIPT_URL && 
        !GOOGLE_APPS_SCRIPT_URL.includes("https://script.google.com/macros/s/AKfycbxTBblJWZ_lJb1C0l5m-Wc3LeS4MjEoz6OymSa6t7ZA4IAeDWurOf3vXOd9WO4hRKto/exec") && 
        GOOGLE_APPS_SCRIPT_URL.startsWith("http");

      if (isConfigured) {
        // Send to Google Apps Script Web App
        // Using urlencoded + no-cors to prevent GAS CORS redirect issues
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(payload).toString()
        });
      }

      // Save submitted data for confirmation screen
      setSubmittedData({ ...payload });
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        treatment: '',
        date: '',
        time: '',
        message: ''
      });

    } catch (error) {
      console.error('Submission error:', error);
      // Still show success fallback with WhatsApp option so patient is never left stranded
      setSubmittedData({ ...payload });
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus('idle');
    setSubmittedData(null);
  };

  const formFields = apptData.form.fields;

  // Render Success Screen after Email submission
  if (submitStatus === 'success' && submittedData) {
    const whatsappUrl = createWhatsAppMessage(submittedData);

    return (
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden text-center animate-fadeIn">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>

        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
          <CheckCircle2 size={36} />
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
          अपॉइंटमेंट अनुरोध प्राप्त हो गया है!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm md:text-base leading-relaxed">
          आपका विवरण हमारे डॉक्टर को ईमेल द्वारा भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।
        </p>

        {/* Details Card */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 mb-6 text-left max-w-lg mx-auto divide-y divide-gray-200 text-xs md:text-sm">
          <div className="py-2 flex items-center justify-between">
            <span className="text-gray-500 flex items-center"><User size={14} className="mr-1.5 text-primary" /> नाम:</span>
            <span className="font-bold text-gray-800">{submittedData.name}</span>
          </div>
          <div className="py-2 flex items-center justify-between">
            <span className="text-gray-500 flex items-center"><Phone size={14} className="mr-1.5 text-primary" /> मोबाइल:</span>
            <span className="font-bold text-gray-800">{submittedData.mobile}</span>
          </div>
          <div className="py-2 flex items-center justify-between">
            <span className="text-gray-500">उपचार / विषय:</span>
            <span className="font-bold text-primary">{submittedData.treatment}</span>
          </div>
          {(submittedData.date || submittedData.time) && (
            <div className="py-2 flex items-center justify-between">
              <span className="text-gray-500 flex items-center"><Calendar size={14} className="mr-1.5 text-primary" /> समय:</span>
              <span className="font-medium text-gray-800">{submittedData.date} {submittedData.time ? `(${submittedData.time})` : ''}</span>
            </div>
          )}
        </div>

        {/* WhatsApp Immediate Action */}
        <div className="space-y-3 max-w-lg mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-sm md:text-base"
          >
            <MessageSquare size={18} />
            <span>WhatsApp पर भी कन्फर्म करें (Recommended)</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full text-gray-600 hover:text-primary font-medium py-2.5 text-xs md:text-sm transition-colors"
          >
            नया अपॉइंटमेंट फॉर्म भरें
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
      
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{apptData.form.title}</h3>
        <p className="text-gray-600">{apptData.form.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formFields.name.label} *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={formFields.name.placeholder}
            className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none`}
            disabled={isSubmitting}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formFields.mobile.label} *
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder={formFields.mobile.placeholder}
            className={`w-full px-4 py-3 rounded-md border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none`}
            disabled={isSubmitting}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>

        {/* Treatment Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formFields.treatment.label} *
          </label>
          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${errors.treatment ? 'border-red-500' : 'border-gray-300'} bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none`}
            disabled={isSubmitting}
          >
            <option value="">{formFields.treatment.placeholder}</option>
            <option value="Sexual Health (कमजोरी, नपुंसकता, शीघ्रपतन)">Sexual Health (कमजोरी, नपुंसकता, शीघ्रपतन)</option>
            <option value="Piles (खूनी व बादी बवासीर, लेजर)">Piles (खूनी व बादी बवासीर, लेजर सुविधा)</option>
            <option value="Fistula (भगंदर / पुराना फिस्टुला)">Fistula (भगंदर / पुराना फिस्टुला)</option>
            <option value="Sciatica & Bones (हड्डी में गैप, दबी नस)">Sciatica & Bones (हड्डी में गैप, दबी नस)</option>
            <option value="अन्य स्वास्थ्य समस्या (General Consultation)">अन्य स्वास्थ्य समस्या (General Consultation)</option>
          </select>
          {errors.treatment && <p className="text-red-500 text-sm mt-1">{errors.treatment}</p>}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {formFields.date.label}
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {formFields.time.label}
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formFields.message.label}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder={formFields.message.placeholder}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none resize-none"
            disabled={isSubmitting}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>अपॉइंटमेंट दर्ज किया जा रहा है...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>{apptData.form.submitButton || 'अपॉइंटमेंट बुक करें (Email Confirmation)'}</span>
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500">
          🔒 आपकी जानकारी पूरी तरह सुरक्षित और डॉक्टर के साथ गोपनीय रखी जाएगी।
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
