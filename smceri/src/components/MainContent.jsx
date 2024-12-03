import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes and Route components

import Dashboard from "../pages/Dashboard";  // Assuming these pages exist
import ConsumptionHistory from "../pages/ConsumptionHistory";
import DeviceManagement from "../pages/DeviceManagement";
import Profile from "../pages/Profile";
import Help from "../pages/Help";

import "../styles/_mainContent.scss";

const MainContent = () => {
  return (
    <main id="main" className="main">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/consumption-history" element={<ConsumptionHistory />} />
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
          </Routes>
    </main>
  );
};

export default MainContent;
