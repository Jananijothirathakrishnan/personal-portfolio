import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '40px 24px',
      background: 'rgba(5, 5, 5, 0.95)',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }} className="footer-layout">
        
        {/* Copyright info */}
        <p style={{
          fontSize: '13px',
          color: 'var(--text-tertiary)',
          textAlign: 'center'
        }}>
          Designed and Developed by <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Janani Jothirathakrishnan</span>.
        </p>

        {/* Social Icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <a href="https://github.com/Jananijothirathakrishnan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/janani-j3103/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
            <Linkedin size={18} />
          </a>
          <a href="mailto:jananijothirathakrishnan@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
            <Mail size={18} />
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 576px) {
          .footer-layout {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
