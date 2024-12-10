import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for route checking
import "../styles/_sidebar.scss"; // Import your custom SCSS styles

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  const isActive = (path) => location.pathname === path; // Helper function to check active route

  const handleLogout = () => {
    // Remove token e redireciona
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/dashboard") ? "active" : ""}`} to="/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/consumption-history") ? "active" : ""}`} to="/consumption-history">
            <i className="bi bi-grid"></i>
            <span>Histórico de Consumo</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/device-management") ? "active" : ""}`} to="/device-management">
            <i className="bi bi-grid"></i>
            <span>Gerenciamento de Dispositivos</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/profile") ? "active" : ""}`} to="/profile">
            <i className="bi bi-grid"></i>
            <span>Perfil</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/help") ? "active" : ""}`} to="/help">
            <i className="bi bi-grid"></i>
            <span>Ajuda</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/logout") ? "active" : ""}`} to="/logout">
            <i className="bi bi-grid"></i>
            <span>Sair</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
