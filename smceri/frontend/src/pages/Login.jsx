import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        username,
        password,
      });

      // Salvar token no localStorage
      localStorage.setItem("authToken", response.data.token);

      // Redirecionar com base no tipo de usuário
      if (response.data.role === "admin") {
        navigate("/dashboard-admin");
      } else if (response.data.role === "client") {
        navigate("/dashboard-client");
      } else {
        setErrorMessage("Role inválido");
      }
    } catch (error) {
      setErrorMessage("Login inválido. Verifique suas credenciais.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
