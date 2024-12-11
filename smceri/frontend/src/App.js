import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
// import ReportsChart from "./components/ReportsChart";
// import TinyMCEEditor from "./components/TinyMCEEditor";
// import DataTableComponent from "./components/DataTableComponent";
import "./styles/style.scss"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <div id="main-wrapper" className="app">
        <Header />
        <Sidebar />
        <div className="main-container">
          <MainContent /> 
            {/* <ReportsChart />
            <TinyMCEEditor />
            <DataTableComponent /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
