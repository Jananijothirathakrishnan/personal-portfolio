import React from 'react';
import { X, Github, ExternalLink, ShieldCheck } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 5, 5, 0.85)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px'
    }} onClick={onClose}>
      <div 
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'rgba(10, 10, 12, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.8), 0 0 100px rgba(79, 140, 255, 0.05)',
          animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Accent */}
        <div style={{
          height: '6px',
          background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))'
        }} />

        {/* Content Box */}
        <div style={{ padding: '36px', position: 'relative' }}>
          {/* Close button */}
          <button 
            onClick={onClose} 
            style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              color: 'var(--text-secondary)',
              borderRadius: '50%',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
            }}
          >
            <X size={18} />
          </button>

          {/* Project Title */}
          <h3 style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '16px',
            paddingRight: '40px'
          }} className="text-gradient-blue-purple">
            {project.title}
          </h3>

          {/* Project Description */}
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '28px'
          }}>
            {project.description}
          </p>

          {/* Key Features Block */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Key Features Included
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '12px'
              }}>
                {project.features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    padding: '10px 14px',
                    borderRadius: '8px'
                  }}>
                    <ShieldCheck size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '36px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Technologies & Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map(tech => (
                <span key={tech} className="tech-tag" style={{ fontSize: '12px', padding: '6px 14px' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '14px' }}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
