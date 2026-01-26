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

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sentence = "Full Stack Developer (React | Next.js | React Native | NestJS)".split("");

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
        <div className="hero-content">
          <motion.p className="hero-greeting" variants={fadeInUp}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            <span className="gradient-text">Deepak Mittal</span>
          </motion.h1>

          <motion.div className="hero-subtitle" variants={fadeInUp}>
            <h3>
              {sentence.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.03 + 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
          </motion.div>

          <motion.p className="hero-description" variants={fadeInUp}>
            Full Stack Developer with 3+ years of experience building scalable web and mobile 
            applications using React.js, Next.js, React Native, and backend systems using Node.js 
            and NestJS. Strong expertise in performance optimization, REST API integration, 
            authentication, payments, and production deployments.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeInUp}>
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={fadeInUp}>
            <motion.a
              href="https://www.linkedin.com/in/thedeepg/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Deep2s"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:deepakmittald129@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          variants={floatingAnimation}
          animate="animate"
        >
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <div className="profile-image">
              <div className="image-placeholder">
                <span className="gradient-text">DM</span>
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
