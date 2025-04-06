import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import StaffDashboard from './pages/AllStaff';
import RegisterStaff from "./pages/RegisterStaff"
import FinancialDashboard from './pages/FinancialDashboard';
import AllPatients from './pages/AllPatients';
import RegisterPatient from './pages/RegisterPatient';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/all-staff" element={<StaffDashboard />} />
        <Route path="/register-staff" element={<RegisterStaff/>} />
        <Route path="/financial" element={<FinancialDashboard />} />
        <Route path="/" element={<AllPatients />} />
        <Route path="/register-patient" element={<RegisterPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
