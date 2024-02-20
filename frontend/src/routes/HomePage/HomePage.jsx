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
        <h1>Créez votre propre CV rapidement !!</h1>
        <Button
          className="create-cv-button"
          text="Crée un CV"
          onClick={() => {
            navigate("./cv");
          }}
        />
        <div>test</div>
        <div className="">
          <h1>OR</h1>
          <p>View history of created CVs:</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
