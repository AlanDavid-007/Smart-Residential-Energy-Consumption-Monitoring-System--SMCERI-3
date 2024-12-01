import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styles.css"; // Certifique-se de adicionar seu CSS aqui

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
