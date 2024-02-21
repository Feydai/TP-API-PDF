import React from 'react';
import './Input.css';

const Input = ({ type, value, onChange, className, placeHolder}) => {
    return (
        <input placeholder={placeHolder} type={type} value={value} onChange={onChange} className={`input ${className}`}/>
    );
}

export default Input;