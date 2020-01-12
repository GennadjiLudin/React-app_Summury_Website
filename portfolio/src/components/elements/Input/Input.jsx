import React from 'react';

// Components

// Styles
import './Input.scss';

const Input = ({type, dataInput, name, inputHandler, inputName, error}) => {
    return (
        <label htmlFor={name} className="label-input" >
            {inputName}
            <input type={type} value={dataInput.value} id={name} name={name} onChange={inputHandler} className="input" />
            <div className="error-text">{error}</div>
        </label>
    );
}

export default Input;