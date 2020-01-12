import React from 'react';

// Components
import Text from '../../elements/Text/Text';

// Styles
import './Texts.scss';


const Texts = ({texts}) => {
    return (
        <div className="texts">
            {texts.map((texts) => (
                <Text 
                    {...texts}
                    key={texts.id}
                />
            ))}
        </div>
    );
}

export default Texts;