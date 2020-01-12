import React from 'react';

// Components

// Styles
import './Textarea.scss';

const Textarea = ({text, name, textareaHandler, errorText, textareaName}) => {
    return (
        <label htmlFor={name} className="label-textarea">
            {textareaName}
            <textarea className="textarea" id={name} name={name} onChange={textareaHandler} rows="6">
            </textarea>
            <div className="error-text">{errorText}</div>
        </label>

    );
}

export default Textarea;