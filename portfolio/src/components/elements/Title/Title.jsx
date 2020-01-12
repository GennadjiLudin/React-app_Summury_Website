import React from 'react';

// Components 

// Styles
import './Title.scss';

const Title = ({title, text, variables}) => {
    return (
        <div className={`title ${variables}`}>
            <h2 className="title__head">{title.toUpperCase()}</h2>
            <p className="title__text">{text}</p>
        </div>
    );
}

Title.defaultProps = {
    title: '',
    text: '',
    variables: '',
}

export default Title;