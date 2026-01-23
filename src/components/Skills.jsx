import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNpm,
  FaSass,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiWebpack,
} from 'react-icons/si';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#06B6D4' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: '#000000' },
        { name: 'Redux', icon: <SiRedux />, level: 80, color: '#764ABC' },
        { name: 'Sass', icon: <FaSass />, level: 85, color: '#CC6699' },
        { name: 'Vite', icon: <SiVite />, level: 88, color: '#646CFF' },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'NPM', icon: <FaNpm />, level: 85, color: '#CB3837' },
        { name: 'Webpack', icon: <SiWebpack />, level: 75, color: '#8DD6F9' },
        { name: 'Figma', icon: <FaFigma />, level: 80, color: '#F24E1E' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="section-title" variants={fadeInUp}>
            <h2>
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">Technologies I work with</p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category glass-card"
                variants={fadeInUp}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
