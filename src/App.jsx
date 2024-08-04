import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';

import OtpVerification from './auth/OtpVerification';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';





const App = () => {
  return (
    
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </Router>
    
   
  )
}

export default App


