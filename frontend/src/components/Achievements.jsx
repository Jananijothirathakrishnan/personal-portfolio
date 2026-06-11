import React from 'react';
import { Award, Star, Trophy, Users } from 'lucide-react';

const Achievements = ({ achievementsList = [] }) => {
  const defaultAchievements = [
    { 
      title: 'Code Relay Competition', 
      description: 'Awarded 2nd Place among 50+ participating developer teams.', 
      context: 'College Technical Symposium',
      icon: <Trophy size={28} style={{ color: '#FBBF24' }} />
    },
    { 
      title: 'Best Readers Club Member Award', 
      description: 'Presented in recognition of outstanding reading contributions.', 
      context: 'Awarded by SALIS (Society for the Advancement of Library and Information Science)',
      icon: <Award size={28} style={{ color: 'var(--accent-blue)' }} />
    }
  ];

  const displayAchievements = achievementsList.length > 0 ? achievementsList : defaultAchievements;

  return (
    <section id="achievements" style={{
      padding: '100px 24px',
      position: 'relative'
    }} className="fade-in-on-scroll">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Title */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
            Key <span className="text-gradient-purple-blue">Achievements</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-purple)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {displayAchievements.map((ach, index) => (
            <div key={index} className="glow-card glass-panel" style={{
              padding: '32px',
              background: 'rgba(10, 10, 12, 0.7)',
              display: 'flex',
              gap: '20px',
              alignItems: 'start'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '16px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {ach.icon || <Trophy size={28} style={{ color: 'var(--accent-blue)' }} />}
              </div>

              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
                  {ach.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                  {ach.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <Star size={12} style={{ color: 'var(--accent-purple)' }} />
                  <span>{ach.context}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
