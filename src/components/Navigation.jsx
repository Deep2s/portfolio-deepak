import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFilePdf } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">Portfolio</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://drive.google.com/file/d/1pen2UlgLsN4nfdsV7DlNGtgxiLQiv9Ng/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
            >
              <FaFilePdf /> Resume
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.ul
            className="nav-menu mobile-menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <a
                href="https://drive.google.com/file/d/1pen2UlgLsN4nfdsV7DlNGtgxiLQiv9Ng/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume-btn"
              >
                <FaFilePdf /> Resume
              </a>
            </motion.li>
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
