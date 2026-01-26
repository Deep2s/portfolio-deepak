import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from './Reveal';
import './Contact.css';

const Contact = () => {
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
      value: 'deepakmittald129@gmail.com',
      link: 'mailto:deepakmittald129@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 8619378143',
      link: 'tel:+918619378143',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Jaipur, Rajasthan, India',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/thedeepg/', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/Deep2s', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <Reveal width="100%">
          <div className="section-title">
            <h2>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle">Let's work together</p>
          </div>
        </Reveal>

        <div className="contact-content">
          <div className="contact-info">
            <Reveal width="100%">
              <h3>Contact Information</h3>
              <p className="contact-description">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>
            </Reveal>

            <div className="info-list">
              {contactInfo.map((info, index) => (
                <Reveal key={index} delay={0.2 + index * 0.1} width="100%">
                  <motion.div
                    className="info-item glass-card"
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
                </Reveal>
              ))}
            </div>

            <div className="social-links">
              <Reveal delay={0.5}>
                <h4>Follow Me</h4>
              </Reveal>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <Reveal key={index} delay={0.6 + index * 0.1} width="auto" style={{ display: 'inline-block' }}>
                    <motion.a
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
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={0.4} width="100%">
            <motion.form
              className="contact-form glass-card"
              onSubmit={handleSubmit}
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
          </Reveal>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2026 Deepak Mittal. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
