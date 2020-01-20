import React from 'react';

// Components

// Styles
import './Input.scss';

const Input = ({type, valuesName, name, handleChange, handleBlur, inputName, error, errorName, holderText}) => {
    return (
        <label htmlFor={name} className="label-input" >
            {inputName}
            <input 
                type={type}
                value={valuesName}
                id={name}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={holderText}
                className="input"
            />
            <div className="error-text">{error && errorName ? errorName : null}</div>
        </label>
    );
}

export default Input;