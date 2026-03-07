import React from 'react';

const Team = () => {
    return (
        <section className="team-section" id="team">
            <div className="section-label reveal">Our Team</div>
            <h2 className="section-title reveal reveal-delay-1">The Minds<br />Behind It All</h2>
            <div className="team-grid">
                <div className="team-card reveal">
                    <div className="team-card-photo">
                        <svg className="team-bg-shape" width="180" height="240" viewBox="0 0 180 240">
                            <circle cx="90" cy="100" r="75" stroke="#FF5B1F" strokeWidth="1" />
                            <circle cx="90" cy="75" r="32" fill="#FF5B1F" />
                            <rect x="30" y="115" width="120" height="80" rx="24" fill="#FF5B1F" />
                        </svg>
                        <div className="team-avatar"><span>MS</span></div>
                    </div>
                    <div className="team-card-info">
                        <div className="team-role">Unity Developer</div>
                        <div className="team-name">Manisha<br /></div>
                        <div className="team-skills">
                            <span className="skill-pill">2D-3D Mechanics</span>
                            <span className="skill-pill">App Publishing</span>
                            <span className="skill-pill">Plugin Integrations</span>
                            <span className="skill-pill">Level Editor</span>
                            <span className="skill-pill">IAP Integration</span>
                            <span className="skill-pill">Cloud Save</span>
                            <span className="skill-pill">Game Analytics</span>
                        </div>
                    </div>
                </div>
                <div className="team-card reveal reveal-delay-1">
                    <div className="team-card-photo">
                        <svg className="team-bg-shape" width="180" height="240" viewBox="0 0 180 240">
                            <polygon points="90,20 160,140 20,140" stroke="#FF5B1F" strokeWidth="1" fill="none" />
                            <circle cx="90" cy="90" r="36" fill="#FF5B1F" />
                        </svg>
                        <div className="team-avatar"><span>KS</span></div>
                    </div>
                    <div className="team-card-info">
                        <div className="team-role">Game Designer & Artist</div>
                        <div className="team-name">Krunal<br /></div>
                        <div className="team-skills">
                            <span className="skill-pill">Game Design</span>
                            <span className="skill-pill">UI/UX</span>
                            <span className="skill-pill">Unity UI</span>
                            <span className="skill-pill">3D Modeling</span>
                            <span className="skill-pill">Shader Graphs</span>
                            <span className="skill-pill">Textures</span>
                            <span className="skill-pill">Animations</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
