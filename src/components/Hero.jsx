import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-grid"></div>
            <div className="hero-glow"></div>
            <div className="hero-glow2"></div>
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Mobile Game Studio · India
                </div>
                <h1>
                    Crafting
                    <span className="accent">Fun Games</span>
                </h1>
                <p>Designed to challenge and delight players worldwide. We build experiences that keep you coming back.</p>
                <div className="hero-cta">
                    <a href="#games" className="btn-primary">
                        Explore Games
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#team" className="btn-ghost">
                        Meet the team
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="hero-scroll">
                <div className="hero-scroll-line"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
