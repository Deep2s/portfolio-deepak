import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Reveal from './Reveal';
import './About.css';

const About = () => {

  const experiences = [
    {
      year: 'Feb 2025 – Present',
      title: 'Freelance Full Stack Developer',
      company: 'Freelance',
      description: 'Delivered end-to-end applications using React.js, Next.js, React Native, and NestJS with scalable architecture. Built secure backend APIs with authentication, RBAC, and payment integration (Razorpay). Managed deployments using Vercel/Netlify/AWS.',
      icon: <FaBriefcase />,
    },
    {
      year: 'Jan 2023 – Jan 2025',
      title: 'Full Stack Developer',
      company: 'Codeprism Technology Pvt. Ltd',
      description: 'Developed scalable web applications using React.js + TypeScript. Improved page load speed by ~40% using code splitting, lazy loading, and optimization. Integrated REST APIs and built dashboards/admin panels using Material UI. Implemented JWT authentication and RBAC.',
      icon: <FaBriefcase />,
    },
    {
      year: '2022 – 2023',
      title: 'Full Stack Developer Intern',
      company: 'Naresh IT, Hyderabad',
      description: 'Developed dashboards and UI modules for real-time analytics and reporting. Built cross-platform components and improved UI responsiveness.',
      icon: <FaBriefcase />,
    },
  ];

  const education = [
    {
      year: '2018 – 2021',
      degree: 'B.Com (Computers)',
      institute: 'University of Rajasthan',
      score: '78%',
      icon: <FaGraduationCap />,
    },
    {
      year: '2021 – 2022',
      degree: 'UI Full Stack Development Course',
      institute: 'Naresh IT, Hyderabad',
      score: '',
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <Reveal width="100%">
          <div className="section-title">
            <h2>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal delay={0.4} width="100%">
            <div className="about-text">
              <h3>Full Stack Developer & Software Engineer</h3>
              <p>
                I am a Full Stack Developer with 3+ years of experience building scalable web and mobile 
                applications. My expertise spans across React.js, Next.js, React Native, and backend 
                development using Node.js and NestJS with a proven track record of delivering high-quality 
                production applications.
              </p>
              <p>
                I possess strong knowledge of modern web technologies, performance optimization, REST API 
                integration, authentication systems (JWT/OAuth), payment integrations (Razorpay), and 
                building admin panels and dashboards. I have successfully delivered multiple projects 
                ranging from GIS applications to e-commerce platforms and LMS systems.
              </p>
              <p>
                I am proficient in TypeScript, JavaScript, React ecosystem, Material UI, TailwindCSS, 
                MongoDB, MySQL, Docker, AWS, and modern DevOps practices. I leverage AI developer tools 
                (Cursor, AntiGravity, GitHub Copilot) to accelerate delivery and improve code quality.
              </p>
            </div>
          </Reveal>

          <div className="timelines-container">
            <Reveal delay={0.6} width="100%">
              <div className="timeline">
                <h3 className="timeline-title">
                  <FaBriefcase /> Experience
                </h3>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item glass-card"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              </div>
            </Reveal>

            <Reveal delay={0.8} width="100%">
              <div className="timeline">
                <h3 className="timeline-title">
                  <FaGraduationCap /> Education
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item glass-card"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
