import React from 'react';
import './Sidebar.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const SideNavbar = () => {
    const socialIcons = [
        {
            name: 'Facebook',
            icon: FaFacebookSquare,
            link: 'https://www.facebook.com/your-page',
        },
        {
            name: 'Twitter',
            icon: FaTwitterSquare,
            link: 'https://www.twitter.com/your-page',
        },
        {
            name: 'Instagram',
            icon: FaInstagramSquare,
            link: 'https://www.instagram.com/your-page',
        },
    ];

    return (
        <nav className="side-navbar">
            <ul className="social-icons">
                {socialIcons.map((socialIcon, index) => (
                    <li key={index}>
                        <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
                            <socialIcon.icon />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNavbar;

