import React from "react";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";

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
      <FormField
        label="first name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <FormField
        label="last name"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <FormField label="Image" type="file" onChange={handleImageUpload} />
      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <FormField
        label="city"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <FormField
        label="postal code"
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <FormField
        label="Phone Number"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button text="Next" onClick={nextPage} />
    </>
  );
}

export default InformationPersonal;
