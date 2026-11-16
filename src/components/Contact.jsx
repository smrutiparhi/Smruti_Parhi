import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const contactChannels = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiMessageCircle,
    label: 'WhatsApp',
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'in/smruti-parhi',
    href: 'https://www.linkedin.com/in/smruti-parhi',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: '@smrutiparhi',
    href: 'https://github.com/smrutiparhi',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Title Group */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-heading">Get in touch</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="contact-sub-header"
        >
          <p className="contact-subtitle">Pick whichever channel suits you</p>
        </motion.div>

        {/* 4-Card Contact Grid */}
        <div className="contact-grid">
          {contactChannels.map((channel, idx) => {
            const IconComponent = channel.icon;
            const isExternal = channel.href.startsWith('http');
            return (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid-card-wrapper"
              >
                <a
                  href={channel.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-grid-card"
                >
                  <div className="card-top-row">
                    <div className="card-icon-circle">
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>
                    <FiArrowUpRight size={22} className="arrow-up-right-icon" />
                  </div>

                  <div className="card-bottom-row">
                    <span className="card-label">{channel.label}</span>
                    <span className="card-value">{channel.value}</span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Clean Footer inside contact section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="contact-footer"
        >
          <span className="footer-copyright">
            © 2026 {personalInfo.name}
          </span>
          <span className="footer-designed">
            Designed & built in {personalInfo.location.split(',')[0]}
          </span>
        </motion.div>

      </div>
    </section>
  );
}
