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
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/consumption-history" element={<ConsumptionHistory />} />
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
