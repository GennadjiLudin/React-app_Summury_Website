import React from 'react';

// Components

// Styles
import './Textarea.scss';

const Textarea = ({valuesName, name, handleChange, handleBlur, inputName, error, errorName}) => {
    return (
        <label htmlFor={name} className="label-textarea">
            {inputName}
            <textarea 
                className="textarea"
                id={name}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                value={valuesName}
                rows="6"
            />
            <div className="error-text">{error && errorName ? errorName : null}</div>
        </label>

    );
}

export default Textarea;