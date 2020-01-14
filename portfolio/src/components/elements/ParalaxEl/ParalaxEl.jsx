import React from 'react';

// Components

// Style
import './ParalaxEl.scss';

const ParalaxEl = ({classes = " ", el}) => {

    return (
        <img className={`paralax-el ${classes}`} src={`/img/svg/${el}.svg`} alt="sidebar" />
    );
}

export default ParalaxEl;