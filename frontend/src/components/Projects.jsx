import React, { useState } from 'react';
import { Github, ExternalLink, Search, Filter } from 'lucide-react';

const Projects = ({ projectsList = [], onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const defaultProjects = [
    {
      _id: '1',
      title: 'Blood Bank Management System',
      description: 'Developed a database-driven system for donor management, blood inventory tracking, and secure CRUD operations.',
      techStack: ['Java', 'JDBC', 'MySQL'],
      features: ['Donor Search', 'Inventory Tracking', 'Secure Database Management'],
      githubUrl: 'https://github.com/Jananijothirathakrishnan',
      liveUrl: '',
      featured: true
    },
    {
      _id: '2',
      title: 'E-Commerce Return Fraud Detection System',
      description: 'Built an intelligent return fraud prevention solution capable of detecting counterfeit product swaps and verifying product authenticity.',
      techStack: ['Firebase', 'NFC Technology', 'Real-Time Verification'],
      features: ['NFC Verification', 'Real-Time Validation', 'Fraud Detection', 'Security Monitoring'],
      githubUrl: 'https://github.com/Jananijothirathakrishnan',
      liveUrl: '',
      featured: true
    }
  ];

  const displayProjects = projectsList.length > 0 ? projectsList : defaultProjects;

  // Extract all unique tags
  const allTags = ['All', ...new Set(displayProjects.flatMap(p => p.techStack))];

  // Filter project cards
  const filteredProjects = displayProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === 'All' || project.techStack.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" style={{
      padding: '100px 24px',
      position: 'relative'
    }} className="fade-in-on-scroll">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Title */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
            Featured <span className="text-gradient-blue-purple">Projects</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Filter controls bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '36px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '16px 24px',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)'
        }}>
          {/* Search */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(5, 5, 5, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '8px 16px',
            borderRadius: '9999px',
            width: '100%',
            maxWidth: '320px'
          }}>
            <Search size={16} style={{ color: 'var(--text-tertiary)' }} />
            <input 
              type="text" 
              placeholder="Search projects or tech..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                width: '100%'
              }}
            />
          </div>

          {/* Tags */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginRight: '4px' }}>
              <Filter size={14} /> Filters:
            </span>
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  background: selectedTag === tag ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid',
                  borderColor: selectedTag === tag ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.06)',
                  color: selectedTag === tag ? '#fff' : 'var(--text-secondary)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {filteredProjects.map(project => (
            <div 
              key={project._id} 
              className="glow-card glass-panel subgrid-card"
              onClick={() => onSelectProject(project)}
              style={{
                cursor: 'pointer',
                padding: '28px',
                background: 'rgba(10, 10, 12, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px'
              }}
            >
              {/* Header block */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      background: 'rgba(79, 140, 255, 0.1)',
                      border: '1px solid rgba(79, 140, 255, 0.2)',
                      color: 'var(--accent-blue)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Featured</span>
                  )}
                </div>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>
              </div>

              {/* Footer Block */}
              <div>
                {/* Tech Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '20px'
                }}>
                  {project.techStack.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links / Action */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                }} onClick={(e) => e.stopPropagation()}>
                  <span style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => onSelectProject(project)}>
                    View Project Details
                  </span>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = '#fff'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      <Github size={18} />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.target.style.color = '#fff'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '48px',
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px dashed rgba(255, 255, 255, 0.08)',
            borderRadius: '12px'
          }}>
            <p style={{ color: 'var(--text-secondary)' }}>No projects match your current filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
