import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // Importando o hook useLocation

import Dashboard from "../pages/Dashboard"; 
import ConsumptionHistory from "../pages/ConsumptionHistory";
import DeviceManagement from "../pages/DeviceManagement";
import Profile from "../pages/Profile";
import Help from "../pages/Help";
import Logout from "../components/Logout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import "../styles/_mainContent.scss"; // Importe seus estilos

const MainContent = () => {
  const location = useLocation(); // Obtenha a localização atual para re-renderizar o conteúdo

  return (
    <main id="main" className="main">
      <Routes key={location.pathname}> {/* Isso vai garantir o re-render automático */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
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
