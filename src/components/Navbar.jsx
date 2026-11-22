import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import classNames from 'classnames';
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'Contact Me',
        to: 'contact',
        active: 'contact'
    }
]

export default function Navbar({ darkMode, handleClick, active, setActive }) {

    return (
        <nav className={classNames(darkMode ? Style.dark : Style.light, Style.nav, singlePage && Style.fixed)}>
            <ul className={Style.links}>
                {links.map((link, index) => (
                    <li key={index} className={(link.active === active && !link.type) ? Style.active : undefined}
                        style={{ borderImageSource: info.gradient }}>
                        <a
                          href={singlePage ? `#${link.to}` : `/${link.to}`}
                          onClick={() => setActive(link.active)}
                          className={Style.link}
                        >
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </a>
                    </li>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </ul>
        </nav>
    );
}
