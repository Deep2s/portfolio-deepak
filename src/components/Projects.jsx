import { motion } from 'framer-motion';
import Reveal from './Reveal';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      title: 'GIS Web Application',
      description:
        'Built GIS-based modules for map-driven workflows and data visualization. Integrated location-based APIs and optimized UI performance for large datasets with advanced mapping features.',
      image: 'project1',
      technologies: ['React.js', 'TypeScript', 'REST APIs', 'GIS Integration', 'Data Visualization'],
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'Travel Booking Management System',
      description:
        'Developed comprehensive listing, search, filters, and booking workflow screens. Built reusable UI components and integrated dynamic travel APIs for seamless booking experience.',
      image: 'project2',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'REST APIs', 'Material UI'],
      gradient: 'var(--gradient-accent)',
    },
    {
      title: 'Role-Based E-Commerce Admin Panel',
      description:
        'Implemented role-based permissions and secure admin workflows. Built reusable tables, filters, forms, and dashboard widgets with comprehensive RBAC system.',
      image: 'project3',
      technologies: ['React.js', 'TypeScript', 'Material UI', 'RBAC', 'Admin Dashboard'],
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'E-Commerce Platform (High Performance)',
      description:
        'Improved browsing experience with optimized state handling and API integration. Enhanced UX with clean navigation, responsive UI, and performance optimizations.',
      image: 'project4',
      technologies: ['React.js', 'TypeScript', 'Material UI', 'Redux', 'Performance Optimization'],
      gradient: 'var(--gradient-accent)',
    },
    {
      title: 'AI-Based Analytics Mobile App',
      description:
        'Built cross-platform analytics dashboards with optimized UI performance. Implemented real-time data visualization and AI-powered insights for business intelligence.',
      image: 'project5',
      technologies: ['Ionic 6', 'Angular', 'TypeScript', 'Analytics', 'Cross-Platform'],
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'Online School Management System',
      description:
        'Developed comprehensive dashboards and workflows with payment integration. Implemented student management, course tracking, and Razorpay payment gateway.',
      image: 'project6',
      technologies: ['React.js', 'TypeScript', 'Material UI', 'Razorpay', 'Dashboard'],
      gradient: 'var(--gradient-accent)',
    },
    {
      title: 'Learning Management System (LMS Admin Panel)',
      description:
        'Built admin panel with authentication, role management, and optimized data fetching. Implemented course management, user administration, and analytics.',
      image: 'project7',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Authentication', 'Admin Panel'],
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'Restaurant Order Management Panel',
      description:
        'Developed real-time order tracking and order lifecycle workflows. Integrated Razorpay payments and supported refund handling with comprehensive order management.',
      image: 'project8',
      technologies: ['React.js', 'TypeScript', 'Material UI', 'Razorpay', 'Real-time Updates'],
      gradient: 'var(--gradient-accent)',
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
