import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

function ProjectCard({ project, index, total, containerRef }) {
  const cardRef = useRef(null);
  
  // Track scroll progress of the individual card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  });

  // Top card scales down slightly as subsequent cards scroll on top
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Stack offset positioning (96px baseline top + stack offset)
  const topPosition = 96 + index * 28;

  return (
    <div
      ref={cardRef}
      className="project-sticky-wrapper"
      style={{
        top: `${topPosition}px`,
      }}
    >
      <motion.article
        style={{ scale }}
        className="project-sticky-card"
      >
        {/* Card Header Row */}
        <div className="card-header-row">
          <div className="header-info">
            <span className="project-num">{project.number}</span>
            <div className="project-titles">
              <span className="project-cat">{project.category}</span>
              <h3 className="project-name">{project.name}</h3>
            </div>
          </div>
          
          <div className="header-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn github-btn"
              aria-label="View source code"
              title="GitHub Repository"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>

        {/* Project Description (Brief summary inside the card) */}
        <p className="card-desc">{project.description}</p>

        {/* Card Body: 3-Image Grid Layout (40% vs 60%) */}
        <div className="card-grid-body">
          {/* Column 1 (40%): Two stacked images */}
          <div className="col-40">
            <div className="img-wrap-small">
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="img-wrap-large">
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
          
          {/* Column 2 (60%): One tall image */}
          <div className="col-60">
            <div className="img-wrap-full">
              <img
                src={project.col2Image}
                alt={`${project.name} preview 3`}
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header-huge">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="huge-heading"
          >
            Projects
          </motion.h2>
        </div>

        <div ref={containerRef} className="projects-list-sticky">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
