import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/_sidebar.scss"; // Importar estilos personalizados

const Sidebar = () => {
  const location = useLocation(); // Obter a localização atual
  const navigate = useNavigate();

  // Helper para identificar a rota ativa
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    // Remover token do localStorage e redirecionar para login
    localStorage.removeItem("authToken");
    navigate("/login");
    // Disparar evento global para reinicialização do conteúdo
    window.dispatchEvent(new Event("routeChanged"));
  };

  // Navegação e reinicialização do conteúdo no clique
  const handleNavigation = (path) => {
    navigate(path);
    window.dispatchEvent(new Event("routeChanged"));
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-nav mt-3" id="sidebar-nav">
        <li className="nav-item">
          <button
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
            onClick={() => handleNavigation("/dashboard")}
            aria-label="Dashboard"
          >
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${isActive("/consumption-history") ? "active" : ""}`}
            onClick={() => handleNavigation("/consumption-history")}
            aria-label="Histórico de Consumo"
          >
            <i className="bi bi-grid"></i>
            <span>Histórico de Consumo</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${isActive("/device-management") ? "active" : ""}`}
            onClick={() => handleNavigation("/device-management")}
            aria-label="Gerenciamento de Dispositivos"
          >
            <i className="bi bi-grid"></i>
            <span>Gerenciamento de Dispositivos</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${isActive("/profile") ? "active" : ""}`}
            onClick={() => handleNavigation("/profile")}
            aria-label="Perfil"
          >
            <i className="bi bi-grid"></i>
            <span>Perfil</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${isActive("/help") ? "active" : ""}`}
            onClick={() => handleNavigation("/help")}
            aria-label="Ajuda"
          >
            <i className="bi bi-grid"></i>
            <span>Ajuda</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={handleLogout}
            aria-label="Sair"
          >
            <i className="bi bi-grid"></i>
            <span>Sair</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
