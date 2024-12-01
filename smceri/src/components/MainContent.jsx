import React from "react";
import "./styles/MainContent.css";
const MainContent = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          {/* Colunas de conteúdo */}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
