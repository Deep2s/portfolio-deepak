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
            <span className="gradient-text">Aniket Parmar</span>
          </motion.h1>

          <motion.div className="hero-subtitle" variants={fadeInUp}>
            <h3>Digital Marketing Expert</h3>
          </motion.div>

          <motion.p className="hero-description" variants={fadeInUp}>
            Data-driven SEO Specialist with 3+ years of experience in Digital Marketing. 
            Expert in SEO, SMO, Google Ads, and Content Marketing with proven track record 
            in optimizing websites and driving organic growth.
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
              href="https://www.linkedin.com/in/aniket-parmar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:aniketparmar@example.com"
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
                <span className="gradient-text">AP</span>
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
