import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;