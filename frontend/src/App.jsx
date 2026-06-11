import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';



const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 45;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 140, 255, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

function App() {
  const [githubStats, setGithubStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [achievements, setAchievements] = useState([]);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic Hover Coordinate tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fetch all database records on mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? '/api' : '/_/backend/api';

        const fetchJSON = async (url) => {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          return res.json();
        };

        // Fire all queries in parallel
        const [projectsData, skillsData, expData, certsData, achsData, ghData] = await Promise.allSettled([
          fetchJSON(`${API_BASE}/projects`),
          fetchJSON(`${API_BASE}/skills`),
          fetchJSON(`${API_BASE}/experience`),
          fetchJSON(`${API_BASE}/certifications`),
          fetchJSON(`${API_BASE}/achievements`),
          fetchJSON(`${API_BASE}/github`),
        ]);

        if (projectsData.status === 'fulfilled') setProjects(projectsData.value);
        if (skillsData.status === 'fulfilled') setSkills(skillsData.value);
        if (expData.status === 'fulfilled') setExperiences(expData.value);
        if (certsData.status === 'fulfilled') setCertifications(certsData.value);
        if (achsData.status === 'fulfilled') setAchievements(achsData.value);
        if (ghData.status === 'fulfilled') setGithubStats(ghData.value);

      } catch (err) {
        console.error('Error loading API payloads, falling back to mock representations:', err);
      } finally {
        // Minimum delay to appreciate the load transition
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    fetchAllData();
  }, []);

  // Trigger scroll fade-ins
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const targets = document.querySelectorAll('.fade-in-on-scroll');
    targets.forEach((t) => observer.observe(t));

    return () => {
      targets.forEach((t) => observer.unobserve(t));
    };
  }, [isLoading, projects, skills, experiences, achievements]);

  return (
    <>
      {/* Premium Loader screen */}
      <div className={`loader-wrapper ${!isLoading ? 'hidden' : ''}`}>
        <div className="loader-ring" />
        <span style={{
          marginTop: '16px',
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>Loading Experience</span>
      </div>

      {/* Floating Canvas Particles & Mouse Glow */}
      <ParticlesBackground />
      <div className="cursor-glow-overlay" />

      {/* Navigation Layout */}
      <Navbar />

      {/* Landing Content sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero githubStats={githubStats} />
        
        <About />
        
        <Skills skillsList={skills} />
        
        <Experience experiencesList={experiences} />
        
        <Projects projectsList={projects} onSelectProject={setSelectedProject} />
        
        <Certifications certificationsList={certifications} />
        
        <Achievements achievementsList={achievements} />
        
        <ContactForm />
      </main>

      {/* Footer copyright */}
      <Footer />

      {/* Detail view Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

export default App;
