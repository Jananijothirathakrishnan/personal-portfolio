import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5, 5, 5, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      webkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      padding: '16px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ffffff',
          textDecoration: 'none',
          fontFamily: 'var(--font-headings)',
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '-0.02em'
        }}>
          <Terminal size={20} style={{ color: 'var(--accent-blue)' }} />
          <span>janani<span style={{ color: 'var(--accent-purple)' }}>.dev</span></span>
        </a>

        {/* Desktop Nav Items */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '28px'
        }} className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '16px'
        }} className="desktop-socials">
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

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} style={{
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'block'
        }} className="mobile-toggle">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          background: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          zIndex: 999
        }}>
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                padding: '4px 0'
              }}
            >
              {item.name}
            </a>
          ))}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginTop: '12px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <a href="https://github.com/Jananijothirathakrishnan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/janani-j3103/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={20} /></a>
            <a href="mailto:jananijothirathakrishnan@gmail.com" style={{ color: 'var(--text-secondary)' }}><Mail size={20} /></a>
          </div>
        </div>
      )}

      {/* CSS injection for desktop visibility */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-socials { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
