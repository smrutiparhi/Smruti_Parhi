import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const skillList = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'HTML', 'CSS'] },
  { label: 'Web Stack', items: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS', 'Vite'] },
  { label: 'Data & Platforms', items: ['PostgreSQL', 'Supabase', 'SQLite', 'WebSockets', 'JWT', 'GitHub Actions'] },
  { label: 'ML & CS Core', items: ['Scikit-learn', 'Predictive Modeling', 'DSA', 'OOP', 'DBMS', 'Operating Systems'] },
];

export default function About() {
  const constraintsRef = useRef(null);

  return (
    <section className="about-section" id="about" ref={constraintsRef}>
      {/* Floating Figma-Style Decorative Icons */}
      <motion.div 
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={false}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="float-decor moon-decor"
        whileTap={{ cursor: 'grabbing' }}
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="" 
          draggable={false} 
        />
      </motion.div>
      <motion.div 
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={false}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="float-decor p59-decor"
        whileTap={{ cursor: 'grabbing' }}
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="" 
          draggable={false} 
        />
      </motion.div>
      <motion.div 
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={false}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="float-decor lego-decor"
        whileTap={{ cursor: 'grabbing' }}
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="" 
          draggable={false} 
        />
      </motion.div>
      <motion.div 
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={false}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="float-decor group-decor"
        whileTap={{ cursor: 'grabbing' }}
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="" 
          draggable={false} 
        />
      </motion.div>

      {/* Main Content */}
      <div className="about-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="about-heading">About me</h2>
        </motion.div>

        <div className="about-inner">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-bio"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Categorized Skills Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-skills-stack"
          >
            {skillList.map((skillGroup) => (
              <div key={skillGroup.label} className="skills-row">
                <span className="skills-label">{skillGroup.label}</span>
                <div className="skills-items-container">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="skill-item-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Resume Download Trigger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-cta-row"
          >
            <a 
              href={personalInfo.resumeUrl} 
              className="about-download-btn" 
              download="Smruti_Ranjan_Parhi_Resume.pdf"
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
