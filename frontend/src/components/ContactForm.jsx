import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', idea: '', message: '' });
      } else {
        setError(data.msg || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      // Fallback if backend is offline - simulate success but let user know
      setError('Unable to reach server. Please email directly at jananijothirathakrishnan@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{
      padding: '100px 24px',
      position: 'relative'
    }} className="fade-in-on-scroll">
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Title */}
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
            Let's Build <span className="text-gradient-blue-purple">Something Amazing</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-blue)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Methods and description info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                Connect and Collaborate
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Whether you have an internship opportunity, a project idea, or just want to chat about software development, feel free to drop a message! I'm always open to selected projects and engineering collaborations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Method 1 */}
              <a href="mailto:jananijothirathakrishnan@gmail.com" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                textDecoration: 'none'
              }} className="glow-card glass-panel">
                <div style={{ color: 'var(--accent-blue)', background: 'rgba(79, 140, 255, 0.05)', padding: '10px', borderRadius: '8px' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Email Me Directly</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>jananijothirathakrishnan@gmail.com</p>
                </div>
              </a>

              {/* Method 2 */}
              <a href="https://www.linkedin.com/in/janani-j3103/" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                textDecoration: 'none'
              }} className="glow-card glass-panel">
                <div style={{ color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.05)', padding: '10px', borderRadius: '8px' }}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>LinkedIn Profile</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>linkedin.com/in/janani-j3103</p>
                </div>
              </a>

              {/* Method 3 */}
              <a href="https://github.com/Jananijothirathakrishnan" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                textDecoration: 'none'
              }} className="glow-card glass-panel">
                <div style={{ color: 'var(--accent-blue)', background: 'rgba(79, 140, 255, 0.05)', padding: '10px', borderRadius: '8px' }}>
                  <Github size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>GitHub Repositories</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>github.com/Jananijothirathakrishnan</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glow-card glass-panel" style={{
            padding: '36px',
            background: 'rgba(10, 10, 12, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Status alerts */}
            {success && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                color: '#10b981',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '14px'
              }}>
                <CheckCircle2 size={16} />
                <span>Message sent successfully! Let's connect soon.</span>
              </div>
            )}

            {error && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                color: '#ef4444',
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '14px'
              }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Inputs */}
            <div>
              <label htmlFor="name" style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Your Name <span style={{ color: 'var(--accent-blue)' }}>*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.5)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '14px',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Your Email Address <span style={{ color: 'var(--accent-blue)' }}>*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.5)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '14px',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            <div>
              <label htmlFor="idea" style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Project Idea / Topic
              </label>
              <input 
                type="text" 
                id="idea" 
                name="idea" 
                value={formData.idea}
                onChange={handleChange}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.5)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '14px',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Your Message <span style={{ color: 'var(--accent-blue)' }}>*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.5)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '14px',
                  transition: 'border-color 0.2s',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                marginTop: '10px'
              }}
            >
              {loading ? (
                <span>Connecting...</span>
              ) : (
                <>
                  <span>Let's Connect</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
