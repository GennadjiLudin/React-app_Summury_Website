import React from 'react';
import {NavLink} from 'react-router-dom';

// Components 

// Styles
import './Nav.scss';

const links = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/projects',
        text: 'Projects',
    },
    {
        href: '/about-us',
        text: 'About us',
    },
    {
        href: '/contacts',
        text: 'Contact',
    },
];

const Nav = ({variables}) => {
    return (
        <nav className="nav">
            <ul className={`nav__list ${variables}`}>
                {links.map((link, index) => (
                    <li className="nav__item" key={index}>
                        <NavLink exact to={link.href} className="nav__link" activeClassName="nav__link-active">
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;