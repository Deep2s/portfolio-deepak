import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      year: 'Jul 2025 – Dec 2025',
      title: 'Full Stack Developer',
      company: 'Skytech Commerce Pvt. Ltd. — Hyderabad',
      description: 'Developed full-stack features using React.js, Spring Boot, and Python. Built reusable components, REST APIs, and managed MySQL integrations. Collaborated on bug fixes and enhancements.',
      icon: <FaBriefcase />,
    },
    {
      year: 'Dec 2024 – May 2025',
      title: 'Mentor & Tutor',
      company: 'Naresh i Technologies — Hyderabad',
      description: 'Mentored students in Java Full Stack development. Provided guidance on Spring Boot, REST APIs, and frontend. Supported debugging and interview preparation.',
      icon: <FaBriefcase />,
    },
    {
      year: 'Jan 2024 – Nov 2024',
      title: 'Internship & Training',
      company: 'Naresh i Technologies — Hyderabad',
      description: 'Completed hands-on training in Java Full Stack. Built web modules using Spring Boot, JSP, and MySQL. Practiced REST API development and problem-solving.',
      icon: <FaBriefcase />,
    },
  ];

  const education = [
    {
      year: '2021 - 2023',
      degree: 'Master of Computer Application (MCA)',
      institute: 'Pranveer Singh Institute of Technology, Kanpur',
      score: 'CGPA: 7.7',
      icon: <FaGraduationCap />,
    },
    {
      year: '2016 - 2019',
      degree: 'Bachelor of Computer Application (BCA)',
      institute: 'Makhanlal Chaturvedi National University',
      score: 'Percentage: 72%',
      icon: <FaGraduationCap />,
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
              <h3>Full Stack Developer</h3>
              <p>
                I am a Full Stack Developer with over 2 years of experience in developing responsive web applications.
                My expertise spans across React.js for frontend and Java Spring Boot / Python for backend development.
              </p>
              <p>
                I am proficient in building REST APIs, implementing authentication modules, and integrating databases like MySQL.
                I have a strong track record of delivering end-to-end features including dashboards, report generation, and export functionality.
              </p>
              <p>
                I strictly follow clean coding practices and thrive in collaborative agile environments.
              </p>
            </motion.div>

            <div className="timelines-container">
                <motion.div className="timeline" variants={fadeInUp}>
                <h3 className="timeline-title">
                    <FaBriefcase /> Experience
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

                <motion.div className="timeline" variants={fadeInUp}>
                <h3 className="timeline-title">
                    <FaGraduationCap /> Education
                </h3>
                {education.map((edu, index) => (
                    <motion.div
                    key={index}
                    className="timeline-item glass-card"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    >
                    <div className="timeline-icon">{edu.icon}</div>
                    <div className="timeline-content">
                        <span className="timeline-year">{edu.year}</span>
                        <h4>{edu.degree}</h4>
                        <p className="timeline-company">{edu.institute}</p>
                        <p className="timeline-description">{edu.score}</p>
                    </div>
                    </motion.div>
                ))}
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
