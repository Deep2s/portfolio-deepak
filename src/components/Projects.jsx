import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      title: 'Travel Booking / Travel Management Project',
      description:
        'Developed a full-stack travel booking system with package listings, search, filters, and seamless booking workflows. Built an admin panel to manage customers, bookings, payments, and agent-based reservations, with secure role-based access and real-time data updates.',
      image: 'project1',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'JWT/OAuth', 'Admin Panel'],
      gradient: 'var(--gradient-primary)',
      liveUrl: 'https://sunrisetourtravel.netlify.app/',
      githubUrl: null,
    },
    {
      title: 'Restaurant Food Delivery System',
      description:
        'Engineered a mobile-first food delivery system with Android and iOS apps supporting cart, checkout, and secure payments. Designed an admin dashboard to handle order lifecycle management, customer data, menu updates, and transaction tracking with real-time API integration.',
      image: 'project2',
      technologies: ['React Native', 'Node.js', 'NestJS', 'MySQL', 'Payment Integration', 'Admin Dashboard'],
      gradient: 'var(--gradient-accent)',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.thedeepg.ashirwad&pcampaignid=web_share',
      githubUrl: null,
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React.js, featuring smooth animations, glassmorphism design, and optimized performance.',
      image: 'project3',
      technologies: ['React.js', 'Vite', 'CSS3', 'Framer Motion', 'Responsive Design'],
      gradient: 'var(--gradient-primary)',
      liveUrl: 'https://aiwithdeepak-portfolio.netlify.app/',
      githubUrl: 'https://github.com/Deep2s',
    },
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <Reveal width="100%">
          <div className="section-title">
            <h2>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <motion.div
                className="project-card glass-card"
                whileHover={{ y: -10 }}
              >
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <div className="project-overlay">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="View Live"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="View Code"
                      >
                        <FaGithub />
                      </motion.a>
                    )}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
