import React from 'react';

// Components
import Text from '../../elements/Text/Text';
import Socials from '../../wraps/Socials/Socials';

// Styles
import './Footer.scss';


const Footer = () => {
    return (
        <div className="footer">
            <Socials />
            <Text text="&copy; Copyright 2019-2020. All Rights Reserved."  />
        </div>
    );
}

export default Footer;