import { motion } from 'framer-motion';
import {
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact
} from 'react-icons/fa';
import {
  SiAngular,
  SiIonic,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Reveal from './Reveal';
import './Skills.css';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', icon: <SiAngular />, level: 85, color: '#DD0031' },
        { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'Ionic', icon: <SiIonic />, level: 85, color: '#3880FF' },
        { name: 'Vite', icon: <SiVite />, level: 90, color: '#646CFF' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90, color: '#000000' },
        { name: 'React Native', icon: <FaReact />, level: 85, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs />, level: 95, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'SCSS', icon: <FaCss3Alt />, level: 85, color: '#CC6699' },
        { name: 'Material UI', icon: <FaCode />, level: 90, color: '#007FFF' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
        { name: 'Redux', icon: <SiRedux />, level: 85, color: '#764ABC' },
        { name: 'Recoil', icon: <FaCode />, level: 80, color: '#3578E5' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Nest.js', icon: <FaCode />, level: 85, color: '#E0234E' },
        { name: 'Node.js', icon: <FaCode />, level: 85, color: '#339933' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: '#336791' },
        { name: 'MySQL', icon: <SiMysql />, level: 80, color: '#4479A1' },
        { name: 'REST APIs', icon: <FaCode />, level: 90, color: '#FF6C37' },
        { name: 'JWT/OAuth', icon: <FaCode />, level: 85, color: '#000000' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Postman', icon: <SiPostman />, level: 90, color: '#FF6C37' },
        { name: 'AWS', icon: <FaCode />, level: 75, color: '#FF9900' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <Reveal width="100%">
          <div className="section-title">
            <h2>
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} delay={categoryIndex * 0.2} width="100%">
              <div className="skill-category glass-card">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
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
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
