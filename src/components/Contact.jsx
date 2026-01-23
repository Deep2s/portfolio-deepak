import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'swatigupta5040@gmail.com',
      link: 'mailto:swatigupta5040@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91-8839284719',
      link: 'tel:+918839284719',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Swati5040', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/swati5040', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="section-title" variants={fadeInUp}>
            <h2>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle">Let's work together</p>
          </motion.div>

          <div className="contact-content">
            <motion.div className="contact-info" variants={fadeInUp}>
              <h3>Contact Information</h3>
              <p className="contact-description">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>

              <div className="info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="info-item glass-card"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.value}</a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              className="contact-form glass-card"
              onSubmit={handleSubmit}
              variants={fadeInUp}
            >
              <h3>Send Me a Message</h3>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Swati Gupta. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
