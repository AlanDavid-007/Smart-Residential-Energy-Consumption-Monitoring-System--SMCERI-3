import React from "react";
import { Link } from "react-router-dom";  // Using React Router's Link component
import "../styles/_sidebar.scss";  // Importing the SCSS for sidebar styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/consumption-history">
            <i className="bi bi-grid"></i>
            <span>Histórico de Consumo</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/device-management">
            <i className="bi bi-grid"></i>
            <span>Gerenciamento de Dispositivos</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            <i className="bi bi-grid"></i>
            <span>Perfil</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/help">
            <i className="bi bi-grid"></i>
            <span>Ajuda</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">
            <i className="bi bi-grid"></i>
            <span>Sair</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
