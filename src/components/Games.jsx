import React from 'react';

// You can easily update your games by changing this array!
// To use a real image for the icon, simply provide a path in 'iconUrl'.
// For example: iconUrl: '/wool-factory-icon.png' (place the image in the 'public' folder)
const gamesData = [
    {
        id: 1,
        name: 'Wool Factory',
        genre: 'Puzzle · Casual',
        tag: '⭐ Top Pick',
        delayClass: '',
        playUrl: 'https://play.google.com/store/apps/details?id=com.speedwins.woolfactory&hl=en', // <-- ADD YOUR PLAY STORE URL HERE
        iconUrl: '/AppIcon_WoolFactory 512x512 @2X 1.png', // <-- ADD YOUR IMAGE URL HERE
        fallbackSvg: (
            <svg className="game-icon" width="300" height="300" viewBox="0 0 300 300" fill="none">
                <circle cx="41" cy="41" r="30" stroke="#FF5B1F" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="41" cy="41" r="17" fill="rgba(255,91,31,0.25)" />
                <path d="M30 41 Q41 28 52 41 Q41 54 30 41Z" fill="#FF5B1F" />
            </svg>
        )
    },
    {
        id: 2,
        name: 'Sandy Grains',
        genre: 'Strategy · Adventure',
        tag: '🏆 Featured',
        delayClass: 'reveal-delay-1',
        playUrl: 'https://play.google.com/store/apps/details?id=com.speedwins.sandygrains&hl=en', // <-- ADD YOUR PLAY STORE URL HERE
        iconUrl: '/AppIcon_SandyGrains 512x512@2x 1.png', // <-- ADD YOUR IMAGE URL HERE
        fallbackSvg: (
            <svg className="game-icon" width="300" height="300" viewBox="0 0 300 300" fill="none">
                <rect x="25" y="25" width="32" height="32" rx="5" stroke="#FF5B1F" strokeWidth="1.5" transform="rotate(45 41 41)" />
                <circle cx="41" cy="41" r="9" fill="rgba(255,91,31,0.35)" />
                <circle cx="41" cy="28" r="3.5" fill="#FF5B1F" /><circle cx="54" cy="41" r="3.5" fill="#FF5B1F" />
                <circle cx="41" cy="54" r="3.5" fill="#FF5B1F" /><circle cx="28" cy="41" r="3.5" fill="#FF5B1F" />
            </svg>
        )
    },
    {
        id: 3,
        name: 'Escape Me Out',
        genre: 'Escape · Brain Teaser',
        tag: '🔥 Hot',
        delayClass: 'reveal-delay-2',
        playUrl: 'https://play.google.com/store/apps/details?id=com.speedwins.escapemeout&hl=en', // <-- ADD YOUR PLAY STORE URL HERE
        iconUrl: '/GameIcon_EscapeMeOut 1024x1024 1.png', // <-- ADD YOUR IMAGE URL HERE
        fallbackSvg: (
            <svg className="game-icon" width="300" height="300" viewBox="0 0 300 300" fill="none">
                <rect x="20" y="20" width="42" height="42" rx="9" stroke="#FF5B1F" strokeWidth="1.5" />
                <path d="M31 41h20M41 31l10 10-10 10" stroke="#FF5B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 4,
        name: 'Target Hit',
        genre: 'Action · Arcade',
        tag: '🎯 Precision',
        delayClass: 'reveal-delay-3',
        playUrl: 'https://play.google.com/store/apps/details?id=com.speedwins.targethit&hl=en', // <-- ADD YOUR PLAY STORE URL HERE
        iconUrl: '/TargetHit.png', // <-- ADD YOUR IMAGE URL HERE
        fallbackSvg: (
            <svg className="game-icon" width="300" height="300" viewBox="0 0 300 300" fill="none">
                <circle cx="41" cy="41" r="28" stroke="#FF5B1F" strokeWidth="1" opacity="0.35" />
                <circle cx="41" cy="41" r="20" stroke="#FF5B1F" strokeWidth="1.2" opacity="0.6" />
                <circle cx="41" cy="41" r="11" stroke="#FF5B1F" strokeWidth="1.5" />
                <circle cx="41" cy="41" r="3.5" fill="#FF5B1F" />
                <line x1="41" y1="13" x2="41" y2="22" stroke="#FF5B1F" strokeWidth="2" />
                <line x1="41" y1="60" x2="41" y2="69" stroke="#FF5B1F" strokeWidth="2" />
            </svg>
        )
    }
];

const Games = () => {
    return (
        <section className="games-section" id="games">
            <div className="games-header">
                <div>
                    <div className="section-label reveal">Our Games</div>
                    <h2 className="section-title reveal reveal-delay-1">Play What<br />We Build</h2>
                </div>
                <a href="#" className="btn-ghost reveal" style={{ marginBottom: '8px' }}>View all &rarr;</a>
            </div>
            <div className="games-grid">
                {gamesData.map((game) => (
                    <div className={`game-card reveal ${game.delayClass}`} key={game.id}>
                        <div className="game-card-img">
                            <div className="game-card-overlay">
                                <a href={game.playUrl || '#'} className="game-play-btn" target="_blank" rel="noopener noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" fill="none" />
                                        <path d="M8 7l5 3-5 3V7z" fill="white" />
                                    </svg>
                                    Play now
                                </a>
                            </div>

                            {/* Show image if url is provided, otherwise show fallback SVG */}
                            {game.iconUrl ? (
                                <img
                                    src={game.iconUrl}
                                    alt={game.name}
                                    className="game-icon"
                                    style={{ width: '300px', height: '300px', objectFit: 'contain' }}
                                />
                            ) : (
                                game.fallbackSvg
                            )}

                        </div>
                        <div className="game-card-body">
                            <div className="game-name">{game.name}</div>
                            <div className="game-genre">{game.genre}</div>
                            <span className="game-tag">{game.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Games;
