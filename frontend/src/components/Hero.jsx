import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Github, Star, GitBranch, Layers, Award } from 'lucide-react';

const Hero = ({ githubStats }) => {
  const [typedText, setTypedText] = useState('');
  const fullIntroText = 'Janani Jothirathakrishnan';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullIntroText.slice(0, index));
      index++;
      if (index > fullIntroText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur Backgrounds */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'rgba(79, 140, 255, 0.08)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'rgba(139, 92, 246, 0.08)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '48px',
        zIndex: 1,
        position: 'relative'
      }} className="hero-grid">
        {/* Intro copy */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--accent-blue)',
            width: 'fit-content',
            marginBottom: '20px'
          }}>
            <Code size={14} />
            <span>Hello, I am {typedText || 'J'}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1.1,
            marginBottom: '24px',
            fontFamily: 'var(--font-headings)',
            fontWeight: 800,
            letterSpacing: '-0.03em'
          }}>
            Building Software <br />
            <span className="text-gradient-blue-purple">That Solves Real Problems.</span>
          </h1>

          <h3 style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: '#ffffff',
            fontWeight: 500,
            marginBottom: '16px',
            lineHeight: 1.4
          }}>
            Software Engineer specializing in Java, MERN Stack, Databases, and AI-driven applications.
          </h3>

          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            marginBottom: '36px'
          }}>
            I build scalable web applications, business solutions, and innovative technology products that create measurable impact.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '48px'
          }}>
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/13qw_k7jNh085H04nFo6KozeX-i4jSMGC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderStyle: 'dashed' }}>
              Download Resume
            </a>
          </div>
        </div>

        {/* Stats Grid Dashboard */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          alignContent: 'center'
        }} className="stats-dashboard">
          {/* GitHub widget */}
          <div className="glow-card glass-panel" style={{ padding: '24px', gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Github size={20} style={{ color: 'var(--accent-blue)' }} />
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>GitHub Statistics</span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>@Jananijothirathakrishnan</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>{githubStats?.publicRepos || 12}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Public Repos</p>
              </div>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>{githubStats?.followers || 8}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Followers</p>
              </div>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>{githubStats?.totalStars || 4}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Stars Earned</p>
              </div>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>{githubStats?.contributions || 320}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Contributions</p>
              </div>
            </div>
            {githubStats?.languages && (
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>TOP LANGUAGES USED</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {githubStats.languages.map(lang => (
                    <span key={lang} className="tech-tag">{lang}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Stats Card 2 */}
          <div className="glow-card glass-panel" style={{ padding: '20px' }}>
            <Layers size={24} style={{ color: 'var(--accent-purple)', marginBottom: '12px' }} />
            <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>20+</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Technologies Mastered</p>
          </div>

          {/* Stats Card 3 */}
          <div className="glow-card glass-panel" style={{ padding: '20px' }}>
            <Award size={24} style={{ color: 'var(--accent-blue)', marginBottom: '12px' }} />
            <h4 style={{ fontSize: '32px', fontWeight: 700, color: '#fff' }}>3</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Internship & Lead Roles</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
