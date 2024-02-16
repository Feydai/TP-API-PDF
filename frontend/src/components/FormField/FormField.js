import React from "react";
import Input from "../Input/Input";

const FormField = ({ label, type, value, onChange, className}) => (
  <label>
    {label}:
    <Input type={type} value={value} onChange={onChange} classeName={className} />
  </label>
);

export default FormField;
