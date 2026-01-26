import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      year: 'June 2023 – Present',
      title: 'Manager Customer Growth',
      company: 'MaxPetZ',
      description: 'Conducting keyword research, managing Google Ads campaigns, implementing off-page activities, optimizing website content, developing link-building strategies, and managing paid search campaigns across multiple websites.',
      icon: <FaBriefcase />,
    },
    {
      year: 'March 2022 – May 2023',
      title: 'SEO Executive',
      company: 'JPloft Solution, Jaipur',
      description: 'Performed keyword research, implemented off-page SEO activities, analyzed website performance, generated content ideas, optimized pages for multiple devices, and managed social media optimization.',
      icon: <FaBriefcase />,
    },
    {
      year: 'September 2021 – February 2022',
      title: 'SEO Intern',
      company: 'W3ERA',
      description: 'Handled 100+ websites, conducted keyword research, implemented off-page activities including blog writing and guest blogging, performed on-page optimization, and managed social media marketing.',
      icon: <FaBriefcase />,
    },
  ];

  const education = [
    {
      year: 'Graduation Year Not Specified',
      degree: 'Bachelor of Commerce (B.Com)',
      institute: 'Maharaja Brij University, Rajasthan',
      score: '',
      icon: <FaGraduationCap />,
    },
    {
      year: 'Completed',
      degree: 'Senior Secondary',
      institute: 'Rajasthan Board, Ajmer',
      score: '',
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="section-title" variants={fadeInUp}>
            <h2>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>

          <div className="about-content">
            <motion.div className="about-text" variants={fadeInUp}>
              <h3>SEO Specialist & Digital Marketing Expert</h3>
              <p>
                I am a data-driven SEO Specialist with over 2 years of experience in the field of Digital Marketing.
                My expertise spans across SEO, SMO, Google Ads, and Content Marketing with a proven track record
                of optimizing websites and driving organic growth.
              </p>
              <p>
                I possess sound knowledge of SEO tools, on-page and off-page optimization, keyword research,
                and content marketing strategies. I have successfully managed multiple websites and campaigns,
                implementing effective link-building strategies and social media optimization.
              </p>
              <p>
                I am proficient in Google Analytics, Google Ads, HTML, WordPress, and various SEO tools.
                I thrive in dynamic environments and am adaptable to changing digital marketing trends.
              </p>
            </motion.div>

            <div className="timelines-container">
                <motion.div className="timeline" variants={fadeInUp}>
                <h3 className="timeline-title">
                    <FaBriefcase /> Experience
                </h3>
                {experiences.map((exp, index) => (
                    <motion.div
                    key={index}
                    className="timeline-item glass-card"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    >
                    <div className="timeline-icon">{exp.icon}</div>
                    <div className="timeline-content">
                        <span className="timeline-year">{exp.year}</span>
                        <h4>{exp.title}</h4>
                        <p className="timeline-company">{exp.company}</p>
                        <p className="timeline-description">{exp.description}</p>
                    </div>
                    </motion.div>
                ))}
                </motion.div>

                <motion.div className="timeline" variants={fadeInUp}>
                <h3 className="timeline-title">
                    <FaGraduationCap /> Education
                </h3>
                {education.map((edu, index) => (
                    <motion.div
                    key={index}
                    className="timeline-item glass-card"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    >
                    <div className="timeline-icon">{edu.icon}</div>
                    <div className="timeline-content">
                        <span className="timeline-year">{edu.year}</span>
                        <h4>{edu.degree}</h4>
                        <p className="timeline-company">{edu.institute}</p>
                        <p className="timeline-description">{edu.score}</p>
                    </div>
                    </motion.div>
                ))}
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
