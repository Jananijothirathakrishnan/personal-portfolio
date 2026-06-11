import React from 'react';
import { Award, Cloud, Database, Network, ShieldCheck } from 'lucide-react';

const Certifications = ({ certificationsList = [] }) => {
  const defaultCertifications = [
    { name: 'SnowPro Associate Platform Certification', issuer: 'Snowflake', date: '2025', icon: <Cloud size={24} style={{ color: 'var(--accent-blue)' }} /> },
    { name: 'MongoDB Basics for Students', issuer: 'MongoDB University', date: '2024', icon: <Database size={24} style={{ color: 'var(--accent-purple)' }} /> },
    { name: 'Network Addressing & Troubleshooting', issuer: 'Cisco', date: '2024', icon: <Network size={24} style={{ color: 'var(--accent-blue)' }} /> },
    { name: 'TCS CodeVita Certification', issuer: 'TCS', date: '2025', icon: <Award size={24} style={{ color: 'var(--accent-purple)' }} /> }
  ];

  const displayCertifications = certificationsList.length > 0 ? certificationsList : defaultCertifications;

  // Function to attach icons based on certification name if seeded from database
  const getIcon = (name) => {
    if (name.includes('Snow')) return <Cloud size={24} style={{ color: 'var(--accent-blue)' }} />;
    if (name.includes('Mongo')) return <Database size={24} style={{ color: 'var(--accent-purple)' }} />;
    if (name.includes('Network') || name.includes('Cisco')) return <Network size={24} style={{ color: 'var(--accent-blue)' }} />;
    return <Award size={24} style={{ color: 'var(--accent-purple)' }} />;
  };

  return (
    <section id="certifications" style={{
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
            Licenses & <span className="text-gradient-blue-purple">Certifications</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Grid layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {displayCertifications.map((cert, index) => (
            <div key={index} className="glow-card glass-panel" style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(10, 10, 12, 0.7)',
              minHeight: '180px'
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '12px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cert.icon || getIcon(cert.name)}
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: '6px' }}>
                    {cert.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '12px',
                color: 'var(--text-tertiary)'
              }}>
                <span>Verified Credential</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
