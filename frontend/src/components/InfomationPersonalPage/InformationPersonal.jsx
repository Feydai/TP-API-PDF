import React from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import "./InformationPersonal.css";
import HeaderSecond from "../../layout/HeaderSecond/HeaderSecond.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function InformationPersonal({
  firstName,
  setFirstName,
  text,
  setText,
  handleImageUpload,
  imageData,
  email,
  setEmail,
  address,
  setAddress,
  city,
  setCity,
  postalCode,
  setPostalCode,
  phoneNumber,
  setPhoneNumber,
  nextPage,
}) {
  return (
    <>
      <HeaderSecond text="Vos Informations" />
      <div className="container">
        <div className="first">
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <label htmlFor="file-upload" className="image">
            <FontAwesomeIcon icon={faCamera} size="2x" />
            Ajouter une photo
          </label>
          <div className="name-fields">
            <FormField
              placeHolder="Prénom*"
              type="text"
              className="name-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormField
              placeHolder="Nom de famille*"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="container-info">
          <FormField
            className="wide-input"
            placeHolder="Adresse e-mail*"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <FormField
              placeHolder="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormField
              placeHolder="Ville"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <FormField
              placeHolder="Code postal"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <FormField
              placeHolder="Numero de téléphone*"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <Button text="Etape Suivante >" onClick={nextPage} />
      </div>
    </>
  );
}

export default InformationPersonal;
