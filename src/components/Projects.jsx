import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, Redux, and modern UI/UX principles.',
      image: 'project1',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media management with real-time data visualization, scheduling features, and performance metrics.',
      image: 'project2',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'var(--gradient-accent)',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with drag-and-drop functionality, team collaboration, and real-time updates.',
      image: 'project3',
      technologies: ['Next.js', 'Firebase', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'var(--gradient-secondary)',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'project4',
      technologies: ['React', 'API Integration', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'var(--gradient-warm)',
    },
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="section-title" variants={fadeInUp}>
            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">Some of my recent work</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card glass-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <div className="project-overlay">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
