import React from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import "./InformationPersonal.css";

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
      <div className="container">
        <FormField className='image' label="Image" type="file" onChange={handleImageUpload} />
        <FormField
          label="Prénom*"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormField
          label="Nom de famille*"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <FormField
          label="Adresse e-mail*"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <FormField
          label="Ville"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <FormField
          label="Code postal"
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <FormField
          label="Numero de téléphone*"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button text="Etape Suivante >" onClick={nextPage} />
      </div>
    </>
  );
}

export default InformationPersonal;
