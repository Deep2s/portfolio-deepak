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
      title: 'SEO & Digital Marketing',
      skills: [
        { name: 'On-Page SEO', icon: <FaCode />, level: 95, color: '#4285F4' },
        { name: 'Off-Page SEO', icon: <FaBriefcase />, level: 90, color: '#34A853' },
        { name: 'Keyword Research', icon: <FaReact />, level: 95, color: '#FBBC04' },
        { name: 'Content Marketing', icon: <FaFigma />, level: 85, color: '#EA4335' },
        { name: 'Link Building', icon: <FaGitAlt />, level: 90, color: '#0F9D58' },
        { name: 'Google Analytics', icon: <SiVite />, level: 85, color: '#E37400' },
      ],
    },
    {
      title: 'Google Tools & Platforms',
      skills: [
        { name: 'Google Ads', icon: <FaJs />, level: 85, color: '#4285F4' },
        { name: 'Google Search Console', icon: <SiPostman />, level: 80, color: '#34A853' },
        { name: 'Google Analytics', icon: <SiVite />, level: 85, color: '#E37400' },
        { name: 'SEO Tools', icon: <FaCode />, level: 90, color: '#5F6368' },
      ],
    },
    {
      title: 'Social Media & Technical',
      skills: [
        { name: 'Facebook Marketing', icon: <FaReact />, level: 85, color: '#1877F2' },
        { name: 'LinkedIn Marketing', icon: <FaBriefcase />, level: 85, color: '#0A66C2' },
        { name: 'Twitter/X Marketing', icon: <FaGithub />, level: 80, color: '#000000' },
        { name: 'HTML', icon: <FaHtml5 />, level: 80, color: '#E34F26' },
        { name: 'WordPress', icon: <FaCode />, level: 85, color: '#21759B' },
        { name: 'MS Office', icon: <FaNpm />, level: 90, color: '#D83B01' },
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
