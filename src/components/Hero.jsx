import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  const containerRef = useRef(null);

  // Smooth scroll trigger to About section on scroll down/keys
  useEffect(() => {
    let scrolled = false;

    const scrollToAbout = () => {
      if (scrolled) return;
      scrolled = true;
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleWheel = (e) => {
      if (!scrolled && e.deltaY > 0 && window.scrollY < 50) {
        e.preventDefault();
        scrollToAbout();
      }
    };

    const handleKeyDown = (e) => {
      if (!scrolled && window.scrollY < 50) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          scrollToAbout();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={containerRef} className="hero-section" id="home">
      {/* Fullscreen Background Image */}
      <img
        src="/hero_bg.png"
        alt="Smruti Ranjan Parhi Background"
        className="hero-bg-image"
        draggable={false}
      />

      {/* Background Dimming Overlays */}
      <div className="hero-overlay-horizontal"></div>
      <div className="hero-overlay-vertical"></div>

      {/* Content Container */}
      <div className="hero-container">
        {/* Navigation & Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-header"
        >
          <nav className="hero-nav">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link-item"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="email-me-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Email me
          </a>
        </motion.header>

        {/* Huge Middle Text Area */}
        <div className="hero-text-area">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-subtitle"
          >
            Portfolio · 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-giant-heading"
          >
            Smruti
            <br />
            Ranjan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="hero-roles-desc"
          >
            Developer • Designer • ML Specialist
          </motion.p>
        </div>
      </div>
    </section>
  );
}
