import React from 'react';
import { Shield, Database, Cpu, Cloud, Code, GraduationCap } from 'lucide-react';

const About = () => {
  const focusAreas = [
    { title: 'Java Development', desc: 'Object-oriented programming, data structures, and database interactions.', icon: <Code size={20} style={{ color: 'var(--accent-blue)' }} /> },
    { title: 'MERN Stack Development', desc: 'Building full-stack SaaS web applications using MongoDB, Express, React, and Node.', icon: <Cpu size={20} style={{ color: 'var(--accent-purple)' }} /> },
    { title: 'Database Design', desc: 'Relational database schema modeling, indexing, and complex queries (MySQL, SQL).', icon: <Database size={20} style={{ color: 'var(--accent-blue)' }} /> },
    { title: 'Cloud Technologies', desc: 'Data storage engineering and queries using Snowflake and cloud database engines.', icon: <Cloud size={20} style={{ color: 'var(--accent-purple)' }} /> },
    { title: 'Software Engineering', desc: 'Collaborating in teams, building modular components, and writing maintainable code.', icon: <GraduationCap size={20} style={{ color: 'var(--accent-blue)' }} /> },
    { title: 'AI-Powered Applications', desc: 'Integrating machine learning models and intelligent interfaces to deliver value.', icon: <Shield size={20} style={{ color: 'var(--accent-purple)' }} /> },
  ];

  return (
    <section id="about" style={{
      padding: '100px 24px',
      position: 'relative'
    }} className="fade-in-on-scroll">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Section Title */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
            About <span className="text-gradient-blue-purple">Me</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Info Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="about-layout">
          {/* Main story card */}
          <div className="glow-card glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff', marginBottom: '20px' }}>
              Aspiring Software Engineer & IT Student
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.8' }}>
              I am <strong>Janani Jothirathakrishnan</strong>, an Information Technology student passionate about building software products that combine technology, usability, and business value.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              My engineering philosophy revolves around solving real-world challenges through clean architectures, database efficiency, and modern cloud technologies. As a student developer, I focus on building scalable systems, refining UX, and delivering select collaborative projects.
            </p>
          </div>

          {/* Focus grids */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
              My Expertise & Focus Areas
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {focusAreas.map((area, idx) => (
                <div key={idx} className="glow-card glass-panel" style={{
                  padding: '20px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'start',
                  background: 'rgba(255, 255, 255, 0.01)'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {area.icon}
                  </div>
                  <div>
                    <h5 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                      {area.title}
                    </h5>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-layout {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
