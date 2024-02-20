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
        <h1>Create your own CV quickly !!</h1>
        <Button
          className="create-cv-button"
          text="Create CV"
          onClick={() => {
            navigate("./cv");
          }}
        />
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  );
};

export default HomePage;
