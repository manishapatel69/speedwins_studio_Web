import React, { useEffect } from 'react';
import './index.css';

// Components
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Games from './components/Games';
import Team from './components/Team';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((r) => obs.observe(r));

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Games />
      <Team />
      <AboutContact />
      <Footer />
    </>
  );
}

export default App;
