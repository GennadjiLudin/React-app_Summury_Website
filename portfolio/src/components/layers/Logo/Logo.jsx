import React from 'react';
import {Link} from 'react-router-dom';

// Components

//Styles
import './Logo.scss';

const Logo = ({style, text}) => {
    return (
        <Link to="/" className={`logo ${style}`}>
            {text.toUpperCase()}
        </Link>
    );
}

Logo.defaultProps = {
    text: "Ludin G.V",
    style: '',
}

export default Logo;