import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import Reveal from './Reveal';
import './About.css';

const About = () => {

  const experiences = [
    {
      year: 'Mar 2025 – Present',
      title: 'Full Stack Developer',
      company: 'Qnix Pvt Ltd',
      description: 'Developing enterprise-level organization management platforms using React and TypeScript. Architecting scalable frontend systems with reusable components and optimized state management. Designing and implementing a GIS research tool with map-driven workflows, Google Maps integration, and KML/GeoJSON layers. Contributing to React Native mobile applications with cross-platform features.',
      icon: <FaBriefcase />,
    },
    {
      year: 'Jan 2023 – Jan 2025',
      title: 'Full Stack Developer',
      company: 'Codeprism Technologies Pvt Ltd',
      description: 'Led end-to-end development of enterprise-grade web applications using React.js, TypeScript, and NestJS. Designed and built responsive frontend architectures with reusable components, custom hooks, and optimized state management. Developed complex dashboards and admin panels with dynamic tables, filters, forms, and role-based workflows. Implemented data visualization features using D3.js and interactive graphs. Improved page load performance by optimizing rendering, lazy loading, code-splitting, and API caching.',
      icon: <FaBriefcase />,
    },
    {
      year: 'June 2022 – Nov 2022',
      title: 'Full Stack Developer Intern',
      company: 'Naresh IT (Hyderabad)',
      description: 'Worked on building responsive web applications using React and Node.js, developed reusable UI components, integrated REST APIs, and assisted in implementing backend features and database operations.',
      icon: <FaBriefcase />,
    },
  ];

  const education = [
    {
      year: '2018 – 2021',
      degree: 'Bachelors in Commerce (B.com)',
      institute: 'University of Rajasthan, Jaipur',
      score: '',
      icon: <FaGraduationCap />,
    },
    {
      year: '2016 – 2018',
      degree: 'Intermediate',
      institute: 'Sarswati Gyan Mandir, Dholpur',
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
                Full Stack Engineer with 3+ years of experience building scalable web and mobile 
                applications with strong backend expertise. Specialized in designing modular REST APIs 
                and microservice-based systems using NestJS, Node.js, and TypeScript, along with 
                high-performance frontends in React, Next.js, and React Native.
              </p>
              <p>
                Experienced in authentication, payments integration, dashboards, and production 
                deployments. Focused on clean architecture, performance optimization, and delivering 
                reliable, maintainable solutions for real-world business use cases.
              </p>
              <p>
                Proficient in Angular, React.js, Ionic, Vite, Next.js, React Native, Nest.js, Node.js, 
                PostgreSQL, MySQL, Git, Postman, Redux, Recoil, AWS, JWT/OAuth, TypeScript, JavaScript, 
                HTML5, CSS3, Material UI, TailwindCSS, and SCSS.
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
