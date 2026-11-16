import { motion } from 'framer-motion';
import './Skills.css';

const servicesList = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Building production-grade applications with TypeScript, React.js, Node.js, Express.js, PostgreSQL, Supabase, and SQLite.'
  },
  {
    number: '02',
    title: 'AI & ML Engineering',
    description: 'Developing predictive models and intelligent workflows with Python, Scikit-learn, data analysis, and safety-constrained LLM integrations.'
  },
  {
    number: '03',
    title: 'APIs & Real-Time Systems',
    description: 'Designing RESTful APIs, JWT-secured workflows, and real-time multi-user experiences powered by WebSockets and reliable databases.'
  },
  {
    number: '04',
    title: 'Problem Solving & DSA',
    description: 'Applying data structures, algorithms, OOP, DBMS, and operating-system fundamentals to create maintainable and efficient software.'
  },
  {
    number: '05',
    title: 'Photography',
    description: 'Capturing expressive portraits, events, and visual stories with thoughtful composition, natural light, and polished post-production.'
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
