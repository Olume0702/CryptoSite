import React, { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav>
            <div className="navbar">
                <h1 style={{fontSize:"20px",color:"plum"}}><span style={{fontSize:"60px ",color:"tomato",fontWeight:"700"}}>M</span>icollo's</h1>
                <ul className={`navbar-links ${isDropdownOpen ? 'open' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className={`dropdown-button ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
