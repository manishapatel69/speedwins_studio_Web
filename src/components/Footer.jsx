import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M17 2L31 9.5V24.5L17 32L3 24.5V9.5L17 2Z" fill="#FF5B1F" opacity="0.12" stroke="#FF5B1F" strokeWidth="1.5" /><path d="M11 17L15 13L19 17L15 21L11 17Z" fill="#FF5B1F" /><path d="M19 11.5L25 17L19 22.5" stroke="#FF5B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="logo-text">Speedwins</span>
                    </a>
                    <p>Speedwins is a mobile game development studio based in India, crafting puzzle and arcade experiences for players worldwide.</p>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#">Support &amp; Help Center</a></li>
                        <li><a href="mailto:support@speedwins.studio">support@speedwins.studio</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Our Games</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Speedwins Studio. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#" className="social-btn">&#120143;</a>
                    <a href="#" className="social-btn">&#9711;</a>
                    <a href="#" className="social-btn">in</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
