import React, { useState } from "react";
import PDFHistory from "../HistoryPdf/HistoryPdf";
import "./HomePage.css";

const HomePage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="home-page">
      <PDFHistory onToggle={handleToggle} />
      <div className={`home-content ${isNavbarOpen ? "shifted" : ""}`}>
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page component.</p>
      </div>
    </div>
  );
};

export default HomePage;
