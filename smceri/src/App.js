import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from React Router
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard"; // Import your page components
import ConsumptionHistory from "./pages/ConsumptionHistory";
import DeviceManagement from "./pages/DeviceManagement";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Logout from "./components/Logout"; // Or create a separate Logout page if needed
import './styles/style.scss'; // Import global SCSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="main-wrapper" className="app">
        <Header />
        <Sidebar />
        <div className="main-container">
          <MainContent />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
