import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Leading frontend development for enterprise applications using React and modern web technologies.',
      icon: <FaBriefcase />,
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Built responsive web applications and collaborated with design teams to create exceptional user experiences.',
      icon: <FaBriefcase />,
    },
    {
      year: '2020 - 2021',
      title: 'Junior Frontend Developer',
      company: 'Startup Inc',
      description: 'Developed and maintained client-facing web applications, focusing on performance and accessibility.',
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="section-title" variants={fadeInUp}>
            <h2>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>

          <div className="about-content">
            <motion.div className="about-text" variants={fadeInUp}>
              <h3>Hello! I'm a Frontend Developer</h3>
              <p>
                With over 3 years of professional experience, I specialize in creating
                beautiful, responsive, and user-friendly web applications. My passion
                lies in transforming complex problems into simple, elegant solutions.
              </p>
              <p>
                I'm proficient in modern frontend technologies and frameworks, with a
                strong focus on React, JavaScript, and CSS. I believe in writing clean,
                maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </motion.div>

            <motion.div className="timeline" variants={fadeInUp}>
              <h3 className="timeline-title">
                <FaGraduationCap /> Experience Timeline
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item glass-card"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-icon">{exp.icon}</div>
                  <div className="timeline-content">
                    <span className="timeline-year">{exp.year}</span>
                    <h4>{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
