import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { experience, education } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-description">
            A timeline of my professional journey and academic background
          </p>
        </div>

        <div className="experience-grid">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="experience-column-title">
              <span className="col-icon"><FaBriefcase /></span>
              Work Experience
            </h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="timeline-card">
                    <span className="timeline-duration">{item.duration}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-org">{item.organization}</p>
                    <p className="timeline-description">{item.description}</p>
                    {item.skills && (
                      <div className="timeline-skills">
                        {item.skills.map(skill => (
                          <span key={skill} className="timeline-skill-tag">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="experience-column-title">
              <span className="col-icon"><FaGraduationCap /></span>
              Education
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="timeline-card">
                    <span className="timeline-duration">{item.duration}</span>
                    <h4 className="timeline-title">{item.degree}</h4>
                    <p className="timeline-org">{item.institution}</p>
                    <p className="timeline-description">
                      {item.field} — {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
