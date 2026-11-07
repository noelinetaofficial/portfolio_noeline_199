import React from 'react';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const technicalSkills = [
    { name: 'React.js', category: 'Frontend', level: 'Advanced' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Advanced' },
    { name: 'HTML5 & JSX', category: 'Frontend', level: 'Proficient' },
    { name: 'CSS3 / Flexbox / Grid', category: 'Frontend', level: 'Proficient' },
    { name: 'React Router', category: 'Frontend', level: 'Proficient' },
    { name: 'Python', category: 'Language', level: 'Intermediate' },
    { name: 'C', category: 'Language', level: 'Proficient' },
    { name: 'C++', category: 'Language', level: 'Intermediate' },
    { name: 'Node.js & npm', category: 'Tools', level: 'Intermediate' },
    { name: 'Git & GitHub', category: 'Tools', level: 'Proficient' },
    { name: 'Form Validation', category: 'Frontend', level: 'Advanced' },
    { name: 'Responsive Web Design', category: 'Frontend', level: 'Advanced' }
  ];

  const featuredProjects = [
    {
      title: 'Personal Portfolio Website',
      subtitle: 'Ziuke Infotech React.js Practical Examination',
      description: 'A responsive, modular portfolio website engineered with React.js, demonstrating reusable component architecture, React Router v7 navigation, and comprehensive client-side form validation.',
      tags: ['React.js', 'React Router', 'Hooks (useState)', 'Form Validation', 'CSS3'],
      highlights: [
        'Dedicated Home, About, and Contact pages with persistent Header & Footer',
        'Interactive contact form with real-time regex validation for email and phone',
        'Showcases verified credentials, hackathon projects, and technical skills'
      ],
      codeUrl: 'https://github.com/noelinetaofficial/portfolio_noeline_199',
      featured: true
    },
    {
      title: 'Anavandi Transit Solution',
      subtitle: 'ANAVANDI Hackathon 2026 (Kochi to Munnar)',
      description: 'Developed during the prestigious 24-hour hackathon-in-motion organized by JAIN School of Future. Built under the Public Transport track to streamline bus route information, schedules, and citizen welfare for Kerala transit.',
      tags: ['React.js', 'JavaScript', 'Transit API', 'Hackathon in Motion'],
      highlights: [
        'Built during a 24-hour moving hackathon en route to Munnar',
        'Contributed to innovative public transport solutions for a better Kerala',
        'Recognized with Certificate of Participation by JAIN School of Future'
      ],
      featured: true
    },
    {
      title: 'Royal AARAMBH Startup Platform',
      subtitle: 'Royal AARAMBH Conclave 2026 • Team The Code Rushers',
      description: 'Presented at the Royal AARAMBH Startup Conclave 2026 organized by Royal College of Engineering and Technology in partnership with Druv360 and IEDC RCET, showcasing entrepreneurial tech solutions.',
      tags: ['React.js', 'UI/UX', 'Startup Innovation', 'Team The Code Rushers'],
      highlights: [
        'Represented Christ College of Engineering, Irinjalakuda as "The Code Rushers"',
        'Active presentation on tech innovation and startup development',
        'Official recognition by Druv360 Entrepreneurs Hub'
      ],
      featured: true
    },
    {
      title: 'Dynamic E-Commerce Web Store',
      subtitle: 'React State & Component Architecture',
      description: 'A full-featured modern web storefront built with React.js featuring real-time product filtering, search, cart management with useState, and simulated checkout flow.',
      tags: ['React.js', 'State Management', 'CSS Grid', 'JavaScript'],
      highlights: [
        'Dynamic cart calculations and state synchronization across components',
        'Responsive mobile-first product grid layout',
        'Modular reusable cards and price summary components'
      ]
    },
    {
      title: 'Productivity & Task Tracker',
      subtitle: 'React Hooks & Local Storage',
      description: 'An interactive task management web application with category filtering (All, Pending, Completed), priority tagging, and persistent browser storage.',
      tags: ['React.js', 'useState / useEffect', 'LocalStorage', 'Forms'],
      highlights: [
        'Instant task addition, status toggling, and removal with state transitions',
        'Input validation preventing empty submissions',
        'Persistent data storage across browser sessions'
      ]
    }
  ];

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-avatar-wrapper">
            <img 
              src="/profile.jpeg" 
              alt="Noeline T A - Profile" 
              className="hero-avatar"
              onError={(e) => {
                // Graceful fallback if image has rendering issues
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Noeline+T+A&background=2563eb&color=fff&size=256";
              }}
            />
            <div className="hero-status-pill">
              <span className="status-indicator"></span> Available for Hire
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-badge">Computer Science &amp; Engineering &bull; Reg. 199</div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-gradient">Noeline T A</span>
            </h1>
            <h2 className="hero-role">Frontend &amp; React.js Developer</h2>
            <p className="hero-institution">
              Christ College of Engineering, Irinjalakuda (Autonomous)
            </p>
            <p className="hero-bio">
              Passionate developer dedicated to creating responsive, accessible, and high-performance web applications. Experienced in React component architecture, client-side form validation, and hackathon-driven rapid innovation.
            </p>

            <div className="hero-buttons">
              <a href="#featured-projects" className="btn btn-primary">
                View My Work &darr;
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Me &rarr;
              </Link>
              <Link to="/about" className="btn btn-secondary">
                About My Journey
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Credentials Summary Bar */}
        <div className="credentials-strip">
          <div className="credential-stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Conclaves &amp; Hackathons</span>
          </div>
          <div className="credential-stat-divider"></div>
          <div className="credential-stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Featured Projects</span>
          </div>
          <div className="credential-stat-divider"></div>
          <div className="credential-stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Practical Exam Ready</span>
          </div>
          <div className="credential-stat-divider"></div>
          <div className="credential-stat">
            <span className="stat-number">Autonomous</span>
            <span className="stat-label">Christ College of Engg.</span>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section skills-section">
        <div className="section-header">
          <span className="section-eyebrow">Expertise &amp; Toolkit</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize to engineer robust user interfaces and modern software.
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-cloud">
            {technicalSkills.map((item, index) => (
              <SkillBadge 
                key={index} 
                skill={item.name} 
                category={item.category} 
                level={item.level} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="section projects-section">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio Work Samples</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects reflecting practical software engineering, hackathons, and React development.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h3>Interested in collaborating or reviewing my certificates?</h3>
            <p>
              Explore my educational qualifications, hackathon achievements, and verified certificate credentials.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/about" className="btn btn-primary">
              View About &amp; Certifications
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
