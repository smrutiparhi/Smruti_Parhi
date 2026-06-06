import { useState, useEffect } from 'react';
import {
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaArrowUp, FaHeart, FaChevronRight
} from 'react-icons/fa';
import { personalInfo, socialLinks, navLinks } from '../data/portfolioData';
import './Footer.css';

const socialIconMap = { FaGithub, FaLinkedin, FaTwitter, FaEnvelope };

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="bracket">&lt;</span>
                <span className="name">{personalInfo.firstName}</span>
                <span className="bracket">/&gt;</span>
              </div>
              <p className="footer-tagline">
                {personalInfo.tagline}. Always learning, always building.
              </p>
              <div className="footer-social">
                {socialLinks.map(link => {
                  const Icon = socialIconMap[link.icon];
                  return Icon ? (
                    <a
                      key={link.name}
                      href={link.url}
                      className="footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <Icon />
                    </a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-column-title">Quick Links</h4>
              <div className="footer-links">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href}>
                    <FaChevronRight style={{ fontSize: '0.6em' }} />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-column-title">Contact</h4>
              <div className="footer-links">
                <a href={`mailto:${personalInfo.email}`}>
                  <FaEnvelope style={{ fontSize: '0.85em' }} />
                  {personalInfo.email}
                </a>
                <a href="#contact">
                  <FaChevronRight style={{ fontSize: '0.6em' }} />
                  Send a message
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="footer-made-with">
              Built with <FaHeart className="heart" /> using React
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
