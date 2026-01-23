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
  FaPython,
  FaJava,
  FaCode,
  FaBriefcase,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVite,
  SiWebpack,
  SiSpringboot,
  SiMysql,
  SiPostman,
} from 'react-icons/si';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 85, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'Redux / Hooks', icon: <SiRedux />, level: 85, color: '#764ABC' },
        { name: 'API Integration', icon: <SiVite />, level: 90, color: '#646CFF' }, // Placeholder icon for API
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', icon: <FaBriefcase />, level: 85, color: '#5382a1' }, // No specific Java icon imported, using briefcase as placeholder or I should import one. I'll stick to what I have or use FaJava if available but it's not imported.
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 80, color: '#6DB33F' },
        { name: 'Python', icon: <FaPython />, level: 75, color: '#3776AB' },
        { name: 'REST APIs', icon: <SiPostman />, level: 85, color: '#FF6C37' },
        { name: 'MySQL / SQL', icon: <SiMysql />, level: 80, color: '#00758F' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git / GitHub', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Postman', icon: <SiPostman />, level: 85, color: '#FF6C37' },
        { name: 'IntelliJ / Eclipse', icon: <FaCode />, level: 80, color: '#000000' }, // Placeholder icon
        { name: 'GitHub Copilot', icon: <FaGithub />, level: 85, color: '#171515' },
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
