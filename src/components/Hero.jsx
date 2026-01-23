import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { fadeInUp, containerVariants, floatingAnimation } from '../utils/animations';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={fadeInUp}>
          <motion.p className="hero-greeting" variants={fadeInUp}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            <span className="gradient-text">Swati Gupta</span>
          </motion.h1>

          <motion.div className="hero-subtitle" variants={fadeInUp}>
            <h2>Full Stack Developer</h2>
            <h3>(Java + React + Python)</h3>
          </motion.div>

          <motion.p className="hero-description" variants={fadeInUp}>
            Full Stack Developer with 2+ years of experience in developing responsive web applications 
            using React.js for frontend and Java Spring Boot / Python for backend development. 
            Skilled in building scalable code and delivering end-to-end features.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeInUp}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={fadeInUp}>
            <motion.a
              href="https://github.com/Swati5040"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/swati5040"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:swatigupta5040@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={floatingAnimation}
          animate="animate"
        >
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <div className="profile-image">
              <div className="image-placeholder">
                <span className="gradient-text">SG</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
