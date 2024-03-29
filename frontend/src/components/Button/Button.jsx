import React from 'react';
import './Button.css';

const Button = ({ onClick, text, type, className}) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;