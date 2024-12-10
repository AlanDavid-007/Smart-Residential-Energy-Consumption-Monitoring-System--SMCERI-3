import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 

import Dashboard from "../pages/Dashboard"; 
import ConsumptionHistory from "../pages/ConsumptionHistory";
import DeviceManagement from "../pages/DeviceManagement";
import Profile from "../pages/Profile";
import Help from "../pages/Help";
import Logout from "./components/Logout";
// import Logout from "../components/Logout";

import "../styles/_mainContent.scss"; // Import the styles

const MainContent = () => {
  return (
    <main id="main" className="main">
      <Routes>
        {/* Default route, redirects to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Define routes for each page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consumption-history" element={<ConsumptionHistory />} />
        <Route path="/device-management" element={<DeviceManagement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default MainContent;
