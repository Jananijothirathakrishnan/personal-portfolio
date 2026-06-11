import React from 'react';
import { Briefcase, Calendar, Users, Cpu, FileText } from 'lucide-react';

const Experience = ({ experiencesList = [] }) => {
  const defaultExperiences = [
    {
      title: 'Team Lead',
      company: 'Younder Botz',
      period: 'Jan 2026 - Present',
      description: [
        'Led a team of four developers to coordinate project execution.',
        'Built HRMS and EMR frontend modules for internal management.',
        'Developed highly responsive and performant React.js user interfaces.'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Pinnacle Labs',
      period: 'Jun 2025 - Aug 2025',
      description: [
        'Developed responsive web applications for client deployments.',
        'Improved overall UI/UX through refactoring design components.',
        'Conducted manual and automated testing and debugging sessions.'
      ]
    },
    {
      title: 'C++ Programming Intern',
      company: 'CodSoft',
      period: 'Jan 2025 - Mar 2025',
      description: [
        'Developed terminal and system applications using Object-Oriented Programming principles.',
        'Collaborated on code testing, profiling, and runtime optimization.'
      ]
    }
  ];

  const displayExperiences = experiencesList.length > 0 ? experiencesList : defaultExperiences;

  return (
    <section id="experience" style={{
      padding: '100px 24px',
      position: 'relative'
    }} className="fade-in-on-scroll">
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Title */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
            Work <span className="text-gradient-blue-purple">Experience</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          paddingLeft: '32px'
        }} className="timeline-container">
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '8px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-blue) 0%, var(--accent-purple) 50%, rgba(255,255,255,0.05) 100%)'
          }} />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {displayExperiences.map((exp, index) => (
              <div key={index} style={{ position: 'relative' }}>
                {/* Timeline Node Icon */}
                <div style={{
                  position: 'absolute',
                  left: '-44px',
                  top: '4px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: `2.5px solid ${index === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 10px ${index === 0 ? 'rgba(79, 140, 255, 0.4)' : 'rgba(139, 92, 246, 0.4)'}`,
                  zIndex: 2
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: index === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'
                  }} />
                </div>

                {/* Experience Detail Box */}
                <div className="glow-card glass-panel" style={{
                  padding: '28px',
                  background: 'rgba(10, 10, 12, 0.7)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {exp.title}
                        {index === 0 && (
                          <span style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            background: 'rgba(79, 140, 255, 0.1)',
                            border: '1px solid rgba(79, 140, 255, 0.2)',
                            color: 'var(--accent-blue)',
                            padding: '2px 8px',
                            borderRadius: '4px'
                          }}>Current</span>
                        )}
                      </h3>
                      <p style={{ fontSize: '15px', color: 'var(--accent-blue)', fontWeight: 500, marginTop: '4px' }}>
                        {exp.company}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet description points */}
                  <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} style={{
                        position: 'relative',
                        paddingLeft: '20px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '6px',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.3)'
                        }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
