import React from 'react';

// Components 

// Styles
import './Text.scss';

const Text = ({text, variables}) => {
    return (
        <div className={`text ${variables}`}>
            {text}
        </div>
    );
}

Text.defaultProps = {
    variables: '',
    text: '',
}

export default Text;