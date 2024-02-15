import React from "react";
import Input from "../Input/Input";

const FormField = ({ label, type, value, onChange }) => (
  <label>
    {label}:
    <Input type={type} value={value} onChange={onChange} />
  </label>
);

export default FormField;
