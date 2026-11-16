import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import usePointerDepth from '../hooks/usePointerDepth';
import './Hero.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  const containerRef = useRef(null);

  const depth = usePointerDepth(3);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: depth.reducedMotion ? 'instant' : 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={containerRef} className="hero-section" id="home"
      onPointerMove={depth.onPointerMove}
      onPointerLeave={depth.onPointerLeave}
      onPointerCancel={depth.onPointerCancel}
    >
      {/* Fullscreen Background Image */}
      <motion.img
        src="./hero_bg.png"
        alt="Smruti Ranjan Parhi Background"
        className="hero-bg-image"
        draggable={false}
        style={{ y: depth.reducedMotion ? 0 : backgroundY, scale: 1.04 }}
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
        <motion.div className="hero-text-area" style={depth.style}>
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
            Full-Stack Developer • Software Engineer • ML Enthusiast
          </motion.p>
        </motion.div>
      </div>
      <div className="hero-depth-scene" aria-hidden="true">
        <div className="hero-orbit" />
        <div className="hero-orbit hero-orbit-secondary" />
        <div className="code-cube">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, index) => (
            <span className={`cube-face cube-${face}`} key={face}>{['</>', '{ }', 'TS', 'AI', '01', 'JS'][index]}</span>
          ))}
        </div>
        <span className="scene-caption">Ideas into interfaces</span>
      </div>
    </section>
  );
}
