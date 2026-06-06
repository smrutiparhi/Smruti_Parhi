import { motion } from 'framer-motion';
import './Skills.css';

const servicesList = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Building responsive, modern, and performant web applications using React, Node.js, Express, and databases. Deployed seamlessly with pixel-perfect layouts.'
  },
  {
    number: '02',
    title: 'AI & ML Engineering',
    description: 'Developing intelligent classification, predictive, and natural language models using Python, Scikit-learn, and APIs to solve real-world problems.'
  },
  {
    number: '03',
    title: 'UI/UX Design & Prototyping',
    description: 'Creating clean, intuitive user interfaces in Figma that prioritize flow, hierarchy, and ease of use, transforming wireframes into delightful products.'
  },
  {
    number: '04',
    title: 'Problem Solving & DSA',
    description: 'Applying strong algorithmic thinking and data structures (Java, C/C++) to design efficient, scalable, and optimized coding solutions.'
  }
];

export default function Skills() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-heading">Services</h2>
        </motion.div>

        <div className="services-list">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-row"
              style={{
                borderBottom: index === servicesList.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none'
              }}
            >
              <div className="service-number">{service.number}</div>
              <div className="service-content-group group">
                <h3 className="service-title">
                  {service.title}
                  <span className="title-underline"></span>
                </h3>
                <p className="service-description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
