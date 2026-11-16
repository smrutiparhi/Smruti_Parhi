import { motion } from 'framer-motion';
import { certifications, education, experience } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section className="education-section" id="experience">
      <div className="education-container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="education-header"
        >
          <h2 className="education-heading">Experience & Education</h2>
        </motion.div>

        <h3 className="journey-subheading">Professional Experience</h3>
        <div className="education-timeline">
          <div className="timeline-track"></div>

          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="timeline-item"
            >
              <div className="timeline-dot">
                <span className="dot-inner"></span>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="header-text-group">
                    <span className="degree-title">{item.title}</span>
                    <span className="field-info">{item.duration}</span>
                  </div>
                </div>

                <h4 className="institution-name">{item.organization}</h4>
                <p className="education-desc">{item.description}</p>
                <div className="journey-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="journey-subheading journey-subheading-spaced">Education</h3>

        {/* Timeline container */}
        <div className="education-timeline">
          {/* Vertical track line */}
          <div className="timeline-track"></div>

          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="timeline-item"
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <span className="dot-inner"></span>
              </div>

              {/* Card content */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="header-text-group">
                    <span className="degree-title">{item.degree}</span>
                    <span className="field-info">{item.field}</span>
                  </div>
                </div>
                
                <h4 className="institution-name">{item.institution}</h4>
                <p className="education-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="certifications-block"
        >
          <h3 className="journey-subheading">Certifications & Achievements</h3>
          <div className="certification-grid">
            {certifications.map((certification) => (
              <div className="certification-card" key={certification}>
                <span className="certification-mark">✓</span>
                <span>{certification}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
