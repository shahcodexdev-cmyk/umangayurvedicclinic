import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Treatments from '../pages/Treatments';
import TreatmentPage from '../pages/TreatmentPage';
import Appointment from '../pages/Appointment';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

import sexualHealthData from '../data/sexual-health.json';
import pilesData from '../data/piles-treatment.json';
import boneJointData from '../data/bone-joint-care.json';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/sexual-health" element={<TreatmentPage data={sexualHealthData} />} />
      <Route path="/piles-treatment" element={<TreatmentPage data={pilesData} />} />
      <Route path="/bone-joint-care" element={<TreatmentPage data={boneJointData} />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
