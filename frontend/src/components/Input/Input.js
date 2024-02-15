import React from 'react';
import './Input.css';

const Input = ({ type, value, onChange, classeName}) => {
    return (
        <input type={type} value={value} onChange={onChange} className={`input ${classeName}`}/>
    );
}

export default Input;