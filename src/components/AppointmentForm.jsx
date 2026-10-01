import React, { useState } from 'react';
import apptData from '../data/appointment.json';
import { createWhatsAppMessage } from '../utils/whatsapp';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = apptData.validationMessages.required;
    if (!formData.mobile) tempErrors.mobile = apptData.validationMessages.required;
    else if (!/^\d{10}$/.test(formData.mobile)) tempErrors.mobile = apptData.validationMessages.invalidMobile;
    
    if (!formData.treatment) tempErrors.treatment = apptData.validationMessages.required;
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const whatsappUrl = createWhatsAppMessage(formData);
      window.open(whatsappUrl, '_blank');
    }
  };

  const formFields = apptData.form.fields;

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
          >
            <option value="">{formFields.treatment.placeholder}</option>
            <option value="Sexual Health">Sexual Health</option>
            <option value="Piles Treatment">Piles Treatment</option>
            <option value="Bone & Joint Care">Bone & Joint Care</option>
            <option value="General Consultation">General Consultation</option>
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
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-md shadow-md transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <span>{apptData.form.submitButton}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
