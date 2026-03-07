import React from 'react';

const Marquee = () => {
    const items = [
        'Wool Factory', 'Sandy Grains', 'Escape Me Out', 'Target Hit',
        'Mobile Games', 'Unity Studio', 'Made in India'
    ];

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {/* Render twice for continuous scrolling effect */}
                {[...items, ...items].map((text, index) => (
                    <div className="marquee-item" key={index}>
                        <span className="marquee-dot"></span>{text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
