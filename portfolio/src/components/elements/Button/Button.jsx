import React from 'react';

// Components 

// Styles
import './Button.scss';

const Button = ({clickHandler, variables, text}) => {
    return (
        <button 
            className={`button ${variables}`} 
            onClick={clickHandler}
        >
            {text}
        </button>
    );
}

Button.defaultProps = {
    variables: 'button-projects',
    text: '',
}

export default Button;