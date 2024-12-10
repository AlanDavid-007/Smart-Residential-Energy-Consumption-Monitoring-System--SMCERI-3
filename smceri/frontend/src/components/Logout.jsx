import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove informações do localStorage (token, role, etc.)
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    // Opcional: Faça uma chamada para o backend, caso precise invalidar o token no servidor.
    // fetch('/api/logout', { method: 'POST', credentials: 'include' });

    // Redireciona para a página de login
    navigate("/login");
  }, [navigate]);

  return null; // Este componente não renderiza nada
};

export default Logout;
