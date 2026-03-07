import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <a href="#" className="logo">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M17 2L31 9.5V24.5L17 32L3 24.5V9.5L17 2Z" fill="#FF5B1F" opacity="0.12" stroke="#FF5B1F" strokeWidth="1.5" />
                    <path d="M11 17L15 13L19 17L15 21L11 17Z" fill="#FF5B1F" />
                    <path d="M19 11.5L25 17L19 22.5" stroke="#FF5B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="logo-text">Speedwins</span>
            </a>
            <ul className="nav-links">
                <li><a href="#games">Our Games</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
