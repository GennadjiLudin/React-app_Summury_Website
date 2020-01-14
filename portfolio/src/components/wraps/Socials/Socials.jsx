import React from 'react';

// Components
import Social from '../../elements/Social/Social';

// Styles
import './Socials.scss';

const socials = [
    {socialImg: 'inst', link: 'https://www.instagram.com/ludvig_russia/'},
    {socialImg: 'vk', link: 'https://vk.com/ludingennady'},
    {socialImg: 'telegram', link: 'https://teleg.run/garry1980'},
    {socialImg: 'facebook', link: 'https://www.facebook.com/RussianGarry1980'},
    {socialImg: 'linkedin', link: 'https://www.linkedin.com/in/gennadiyludin/'},
];

const Socials = () => {
    return (
        <div className="socials">
            {socials.map((social, index) => (
                <Social 
                    {...social}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Socials;