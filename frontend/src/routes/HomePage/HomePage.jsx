import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PDFHistory from "../HistoryPdf/HistoryPdf";
import "./HomePage.css";

const HomePage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="home-page">
      <PDFHistory onToggle={handleToggle} />
      <div className={`home-content ${isNavbarOpen ? "shifted" : ""}`}>
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple home page component.</p>
        <Button
          className="create-cv-button"
          text="Create CV"
          onClick={() => {
            navigate("./cv");
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
