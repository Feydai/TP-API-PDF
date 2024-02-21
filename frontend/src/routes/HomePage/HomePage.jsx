import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PDFHistory from "../HistoryPdf/HistoryPdf";
import Header from "../../layout/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faInfinity } from "@fortawesome/free-solid-svg-icons";
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
        <Header />
        <h1>Créez votre propre CV rapidement !!</h1>
        <Button
          className="create-cv-button"
          text="Crée un CV"
          onClick={() => {
            navigate("./cv");
          }}
        />
        <div className="rectangular-div">
          <div className="fa-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="text-content">
            <h2 className="title-content">Simple et Efficasse</h2>
            <p className="text-content">
              "Découvrez la simplicité de créer un CV professionnel avec notre
              générateur. Conçu pour être intuitif et efficace, notre outil vous
              permet de libérer votre potentiel et de vous démarquer dans votre
              recherche d'emploi. Commencez dès maintenant et faites le premier
              pas vers votre prochaine opportunité de carrière !"
            </p>
          </div>
        </div>
        <div className="rectangular-div">
          <div className="fa-icon">
            <FontAwesomeIcon icon={faInfinity} />
          </div>
          <div className="text-content">
            <h2>CV ProMaster - Ouvrez la porte à des opportunités infinies</h2>
            <p>
              Créez un CV impressionnant en quelques minutes et faites un pas de
              géant vers votre prochain emploi de rêve. Avec CV ProMaster, votre
              potentiel n'a pas de limites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
