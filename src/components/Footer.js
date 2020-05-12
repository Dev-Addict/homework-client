import React from "react";

import '../style/components/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            copyright © by Aria Azadi Pour
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            (<a href="https://github.com/AriaMAN-ACT" target="_blank" className="footer-link">AriaMAN-ACT</a>)
        </div>
    );
};

export default Footer;