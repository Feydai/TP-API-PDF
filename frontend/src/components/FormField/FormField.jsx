import React from "react";
import Input from "../Input/Input";

const FormField = ({ label, type, value, onChange, className, placeHolder}) => (
  <label>
    {label}
    <Input placeHolder={placeHolder} type={type} value={value} onChange={onChange} className={className} />
  </label>
);

export default FormField;