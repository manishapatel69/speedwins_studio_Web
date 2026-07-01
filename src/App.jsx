import React from 'react';
import './App.css';
import speedwinsLogo from './images/speedwins-logo.png';
import googlePlayIcon from './images/google-play-icon.png';
import appStoreIcon from './images/app-store-icon.png';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img src={speedwinsLogo} alt="Speedwins" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="mailto:contact@speedwins.studio" className="nav-link">info@speedwins.studio</a>
            <a href="https://speedwins.studio/PrivacyPolicy.html" className="nav-link" target="_blank" rel="noopener noreferrer">Terms & Privacy Policy</a>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="left-content">
            <div className="hero-text">
              <p className="hero-subtitle">Crafting</p>
              <h1 className="hero-title">Fun Games</h1>
              <p className="hero-description">
                We are a dynamic team dedicated to<br />
                crafting fun and engaging mobile<br />
                puzzle games for players worldwide.
              </p>
            </div>
          </div>

          <div className="right-content">
            <div className="games-section">
              <h2 className="games-title">Our Games</h2>
              <div className="store-buttons">
                <a href="https://play.google.com/store/apps/developer?id=Speedwins+TechLab&hl=en" className="store-btn google-play" target="_blank" rel="noopener noreferrer">
                  <img src={googlePlayIcon} alt="Google Play" />
                  <span>
                    <span className="store-btn-label">GET IT ON</span>
                    <span className="store-btn-name">Google Play</span>
                  </span>
                </a>
                {/* <a href="#" className="store-btn app-store">
                  <img src={appStoreIcon} alt="App Store" />
                  <span>
                    <span className="store-btn-label">AVAILABLE ON</span>
                    <span className="store-btn-name">App Store</span>
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
