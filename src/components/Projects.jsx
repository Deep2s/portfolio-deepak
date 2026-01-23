import { motion } from 'framer-motion';
// Icons removed
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  const projects = [
    {
      title: 'Front Office Management Web Application',
      description:
        'A web application to manage front office activities like user signup, login, and password recovery. Includes a dashboard to visualize performance data. Follows MVC architecture.',
      image: 'project1', // Placeholder or use a generic one if available
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'React.js'],
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'Report Application (Citizen Plan Search)',
      description:
        'Web-based reporting application allowing users to search citizen plans based on filters. Supports exporting search results into PDF and Excel and automated email reports.',
      image: 'project2',
      technologies: ['Java', 'Spring Boot', 'Python (Flask)', 'MySQL', 'React.js'],
      gradient: 'var(--gradient-accent)',
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
                    {/* Links removed as per request */}
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
