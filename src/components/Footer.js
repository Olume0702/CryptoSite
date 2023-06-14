import React from 'react';
import "./Footer.css"
// import logo from './logo.png'; // Replace with the path to your company's logo

const Footer = () => {
    return (
        <footer >
            <div className="container">
                {/* <img src={logo} alt="Company Logo" className="logo" /> */}
                <h1 style={{ textAlign: "center", fontSize: "30px", color: "plum" }}><span style={{ fontSize: "80px ", color: "tomato", fontWeight: "700" }}>M</span>icollo's</h1>
                <p style={{ textAlign: 'center' }}>
                    Micollo's is a leading platform for cryptocurrency enthusiasts. We provide comprehensive information, real-time market data, and advanced tools to help you navigate the exciting world of cryptocurrencies. Stay informed and make informed investment decisions with our trusted resources.
                </p>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                    <input id='int' type="email" placeholder='Enter your email ' />
                    <button id='butn' type="submit">Subscribe </button>
                </div>
                <p style={{ textAlign: 'center', fontSize: "12px" }}>&copy; {new Date().getFullYear()} Micollo's. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
