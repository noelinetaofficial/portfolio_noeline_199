import React, { useState } from 'react';
import SkillBadge from '../components/SkillBadge';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificatesData = [
    {
      title: 'ADAPTATHON — Techkshetra \'26',
      type: 'Certificate of Appreciation',
      issuer: 'Rajagiri School of Engineering & Technology (Autonomous)',
      date: '15th September 2026',
      event: 'Techkshetra 2026 (Inter-College Level Tech Fest)',
      image: '/certificates/techkshetra-2026-adaptathon.jpg',
      description: 'Awarded Certificate of Appreciation for active participation and technical excellence in the ADAPTATHON challenge during the Techkshetra 2026 Inter-College Tech Fest.',
      tags: ['Appreciation', 'Adaptathon', 'Tech Fest', 'Problem Solving']
    },
    {
      title: 'ANAVANDI Hackathon 2026',
      type: 'Certificate of Participation',
      issuer: 'JAIN School of Future (JAIN Deemed-to-be University)',
      date: '23-24 September 2026',
      event: '24-Hour Hackathon in Motion (Kochi en route to Munnar)',
      image: '/certificates/anavandi-hackathon-2026.jpg',
      description: 'Participated in the unique 24-hour moving hackathon on the [Public Transport / Water and Coast / Public Welfare] track, developing innovative solutions for a better Kerala.',
      tags: ['Hackathon in Motion', 'Public Welfare', 'Teamwork', 'Rapid Prototyping']
    },
    {
      title: 'Royal AARAMBH Startup Conclave 2026',
      type: 'Certificate of Participation',
      issuer: 'Royal College of Engineering & Technology & Druv360',
      date: '15th July 2026',
      event: 'Royal AARAMBH Startup Conclave (IEDC & Institution\'s Innovation Council)',
      team: 'The Code Rushers (Christ College of Engineering, Irinjalakuda)',
      image: '/certificates/royal-aarambh-startup-conclave-2026.jpg',
      description: 'Recognized for active participation, innovation, and startup pitch presentation with team "The Code Rushers", demonstrating entrepreneurship and technical leadership.',
      tags: ['The Code Rushers', 'Innovation', 'Startup Conclave', 'Leadership']
    },
    {
      title: 'React.js Practical Examination Certification',
      type: 'Professional Evaluation',
      issuer: 'Ziuke Infotech (OPC) Private Limited',
      date: 'September 2026',
      event: 'React.js Practical Assessment & Portfolio Development',
      image: null,
      description: 'Practical evaluation covering React Components, Reusable Component Architecture, Props, Hooks (useState), Event Handling, Multi-field Form Validation, and React Router navigation.',
      tags: ['React.js', 'React Router', 'Form Validation', 'SPA Development']
    }
  ];

  const frontendSkills = [
    'React.js', 'JavaScript (ES6+)', 'HTML5 & JSX', 'CSS3 (Flexbox/Grid)', 
    'React Router v7', 'State Management (useState/useEffect)', 'Reusable Components'
  ];

  const languageSkills = ['C', 'C++', 'Python', 'JavaScript'];

  const toolsSkills = ['Git', 'GitHub', 'Node.js', 'npm', 'VS Code', 'Chrome DevTools'];

  return (
    <div className="page about-page">
      {/* Page Header */}
      <div className="page-header">
        <span className="page-header-eyebrow">Professional Profile</span>
        <h1 className="page-title">About Me</h1>
        <p className="page-lead">
          Comprehensive profile outlining my education, technical toolkit, real-world hackathon experience, verified credentials, and future engineering ambitions.
        </p>
      </div>

      {/* 1. Personal Introduction */}
      <section className="section about-section">
        <div className="about-section-header">
          <div className="section-number">01</div>
          <h2>Personal Introduction</h2>
        </div>
        <div className="about-card">
          <div className="intro-content">
            <p>
              I am <strong>Noeline T A</strong> (Register No: <strong>199</strong>), an enthusiastic Computer Science and Engineering student at <strong>Christ College of Engineering, Irinjalakuda (Autonomous)</strong>.
            </p>
            <p>
              My passion lies at the intersection of modern frontend engineering and intuitive design. I love building responsive, user-friendly, and accessible web applications powered by React.js and modern JavaScript. I enjoy transforming complex problems into clean, modular, and maintainable software architectures.
            </p>
            <p>
              Beyond coding, I actively participate in hackathons, innovation conclaves, and tech fests — including the 24-hour moving <em>Anavandi Hackathon</em> and the <em>Royal AARAMBH Startup Conclave</em> with my team <em>The Code Rushers</em>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Educational Qualification */}
      <section className="section about-section">
        <div className="about-section-header">
          <div className="section-number">02</div>
          <h2>Educational Qualification</h2>
        </div>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">2023 &ndash; Present (Undergraduate)</span>
              <h3 className="timeline-degree">
                Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
              </h3>
              <p className="timeline-institution">
                <strong>Christ College of Engineering, Irinjalakuda (Autonomous)</strong> &bull; Kerala, India
              </p>
              <p className="timeline-details">
                Pursuing comprehensive coursework covering Data Structures &amp; Algorithms, Object-Oriented Programming, Web Technologies, Database Management Systems, and Software Engineering. Active participant in technical symposiums and coding competitions.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">Higher Secondary Education (12th Grade)</span>
              <h3 className="timeline-degree">Senior Secondary &ndash; Science Stream</h3>
              <p className="timeline-institution">
                Board of Higher Secondary Examinations, Kerala
              </p>
              <p className="timeline-details">
                Focused on Mathematics, Physics, Chemistry, and Computer Science with distinguished academic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical Skills */}
      <section className="section about-section">
        <div className="about-section-header">
          <div className="section-number">03</div>
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-categorized-grid">
          <div className="skill-cat-card">
            <div className="cat-header">
              <span className="cat-icon">&#9881;</span>
              <h3>Frontend Technologies</h3>
            </div>
            <div className="cat-badges">
              {frontendSkills.map((s, i) => (
                <SkillBadge key={i} skill={s} category="Frontend" />
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-header">
              <span className="cat-icon">&#60;&#47;&#62;</span>
              <h3>Programming Languages</h3>
            </div>
            <div className="cat-badges">
              {languageSkills.map((s, i) => (
                <SkillBadge key={i} skill={s} category="Language" />
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-header">
              <span className="cat-icon">&#128736;</span>
              <h3>Tools &amp; Workflows</h3>
            </div>
            <div className="cat-badges">
              {toolsSkills.map((s, i) => (
                <SkillBadge key={i} skill={s} category="Tools" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Work Experience & Practical Exposure */}
      <section className="section about-section">
        <div className="about-section-header">
          <div className="section-number">04</div>
          <h2>Work Experience &amp; Practical Training</h2>
        </div>
        <div className="experience-cards">
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">Frontend &amp; React.js Developer Practical Training</h3>
                <span className="exp-company">Ziuke Infotech (OPC) Private Limited</span>
              </div>
              <span className="exp-duration">Project Assessment 2026</span>
            </div>
            <ul className="exp-bullets">
              <li>
                Architected and implemented a complete responsive multi-page portfolio application leveraging React.js, React Router, and modular component hierarchy.
              </li>
              <li>
                Built reusable UI widgets including navigation headers, footers, interactive project showcases, and dynamic skill badges.
              </li>
              <li>
                Authored robust client-side form validation mechanisms with regex matching for email and phone numbers, providing instantaneous user feedback.
              </li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">Hackathon &amp; Startup Innovation Experience</h3>
                <span className="exp-company">Christ College of Engineering &bull; Team "The Code Rushers"</span>
              </div>
              <span className="exp-duration">2026</span>
            </div>
            <ul className="exp-bullets">
              <li>
                Led frontend UI prototyping during high-pressure 24-hour sprint in the ANAVANDI Hackathon en route from Kochi to Munnar.
              </li>
              <li>
                Collaborated with multidisciplinary teammates under the team banner <em>The Code Rushers</em> for the Royal AARAMBH Startup Conclave supported by Druv360.
              </li>
              <li>
                Maintained collaborative version control using Git and GitHub, conducting code reviews and sprint retrospectives.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Certifications */}
      <section id="certifications" className="section about-section">
        <div className="about-section-header">
          <div className="section-number">05</div>
          <h2>Certifications</h2>
        </div>
        <p className="cert-note">
          Below are verified certificates and appreciations earned from prestigious institutions. Click on any certificate card to inspect the full document.
        </p>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <CertificateCard 
              key={index} 
              {...cert} 
              onView={(certObj) => setSelectedCertificate(certObj)}
            />
          ))}
        </div>
      </section>

      {/* 6. Achievements */}
      <section className="section about-section">
        <div className="about-section-header">
          <div className="section-number">06</div>
          <h2>Achievements</h2>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">&#127942;</div>
            <h3>Techkshetra '26 Adaptathon Recognition</h3>
            <p>
              Awarded a Certificate of Appreciation for outstanding performance in the ADAPTATHON event at Techkshetra 2026, held at Rajagiri School of Engineering &amp; Technology (Autonomous).
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">&#128652;</div>
            <h3>24-Hour Moving Hackathon Participant</h3>
            <p>
              Selected and successfully competed in the ANAVANDI Hackathon 2026, a 24-hour hackathon-in-motion organized by JAIN School of Future traveling from Kochi to Munnar, tackling real-world public transport challenges.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">&#128640;</div>
            <h3>Startup Conclave Presentation</h3>
            <p>
              Presented innovative technical and entrepreneurial concepts as part of team <em>The Code Rushers</em> at the Royal AARAMBH Startup Conclave 2026, organized by Royal College of Engineering and Technology &amp; Druv360.
            </p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">&#128187;</div>
            <h3>Practical React Exam Project Delivery</h3>
            <p>
              Successfully developed and structured an end-to-end compliant personal portfolio following Ziuke Infotech's examination specifications.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Career Interests & Goals */}
      <section className="section about-section">
        <div className="about-section-header">
          <div className="section-number">07</div>
          <h2>Career Interests &amp; Goals</h2>
        </div>
        <div className="goals-container">
          <div className="goal-card">
            <h3>Short-Term Objectives</h3>
            <p>
              Secure a challenging position or internship as a <strong>Frontend / React.js Developer</strong>, where I can apply my modern JavaScript skills, contribute to scalable single-page applications, and work within an agile engineering environment.
            </p>
          </div>

          <div className="goal-card">
            <h3>Long-Term Vision</h3>
            <p>
              Evolve into a <strong>Full-Stack Software Engineer &amp; Solution Architect</strong> capable of designing enterprise-grade, high-performance web systems. I aim to drive impactful digital transformations and contribute meaningfully to the open-source community.
            </p>
          </div>

          <div className="goal-card">
            <h3>Core Technical Interests</h3>
            <ul className="interests-list">
              <li>Modern React ecosystems, Next.js, and Server Components</li>
              <li>Design Systems, accessible UI/UX, and component libraries</li>
              <li>State architecture, API integrations, and Progressive Web Apps (PWAs)</li>
              <li>Entrepreneurship and product engineering in fast-paced teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modal for viewing certificate image */}
      <CertificateModal 
        certificate={selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
      />
    </div>
  );
};

export default About;
