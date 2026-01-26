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
  SiMysql,
  SiNextdotjs,
  SiPostman,
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
        { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90, color: '#3178C6' },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 95, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3/SCSS', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'Material UI', icon: <FaCode />, level: 90, color: '#007FFF' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
        { name: 'Redux Toolkit', icon: <SiRedux />, level: 85, color: '#764ABC' },
      ],
    },
    {
      title: 'Backend & Mobile',
      skills: [
        { name: 'Node.js', icon: <FaCode />, level: 85, color: '#339933' },
        { name: 'NestJS', icon: <FaCode />, level: 80, color: '#E0234E' },
        { name: 'React Native', icon: <FaReact />, level: 85, color: '#61DAFB' },
        { name: 'MongoDB', icon: <FaCode />, level: 85, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, level: 80, color: '#4479A1' },
        { name: 'REST APIs', icon: <FaCode />, level: 90, color: '#FF6C37' },
        { name: 'JWT/OAuth', icon: <FaCode />, level: 85, color: '#000000' },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Docker', icon: <FaCode />, level: 75, color: '#2496ED' },
        { name: 'AWS', icon: <FaCode />, level: 75, color: '#FF9900' },
        { name: 'Vercel/Netlify', icon: <FaCode />, level: 85, color: '#000000' },
        { name: 'Vite', icon: <SiVite />, level: 85, color: '#646CFF' },
        { name: 'Postman', icon: <SiPostman />, level: 90, color: '#FF6C37' },
        { name: 'VS Code', icon: <FaCode />, level: 95, color: '#007ACC' },
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
