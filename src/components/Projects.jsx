import { motion } from 'framer-motion';
// Icons removed
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  const projects = [
    {
      title: 'Multi-Website SEO Campaign - MaxPetZ',
      description:
        'Managed comprehensive SEO strategy for 4 websites (maxvets.com, maxpetz.com, pawxie.in, petzone.in). Conducted keyword research, created service pages, implemented on-page and off-page optimization, and managed Google Ads campaigns.',
      image: 'project1',
      technologies: ['SEO', 'Google Ads', 'Content Marketing', 'Link Building', 'Google Analytics'],
      gradient: 'var(--gradient-primary)',
    },
    {
      title: 'JPloft Solution - Digital Marketing Strategy',
      description:
        'Executed comprehensive digital marketing strategy for jploft.com and tapatradie.com. Performed keyword research, content optimization, social media marketing, and developed link-building strategies to improve organic rankings.',
      image: 'project2',
      technologies: ['SEO', 'SMO', 'Content Strategy', 'Social Media', 'WordPress'],
      gradient: 'var(--gradient-accent)',
    },
    {
      title: 'Multi-Client SEO Management - W3ERA',
      description:
        'Managed SEO for 100+ client websites during internship. Conducted keyword research, implemented off-page activities including guest blogging, blog writing, and Q&A forums. Performed regular on-page content optimization.',
      image: 'project3',
      technologies: ['On-Page SEO', 'Off-Page SEO', 'Guest Blogging', 'Content Writing', 'SEO Tools'],
      gradient: 'var(--gradient-primary)',
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
