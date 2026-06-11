import React from 'react';

const Skills = ({ skillsList = [] }) => {
  // If no live skills from API, use default hardcoded seed structure
  const categories = [
    { id: 'Programming', title: 'Languages' },
    { id: 'Frontend', title: 'Frontend' },
    { id: 'Backend', title: 'Backend' },
    { id: 'Databases', title: 'Databases' },
    { id: 'Tools', title: 'Tools' },
    { id: 'Cloud', title: 'Cloud' }
  ];

  const defaultSkills = [
    { name: 'Java', category: 'Programming', proficiency: 90 },
    { name: 'C++', category: 'Programming', proficiency: 85 },
    { name: 'SQL', category: 'Programming', proficiency: 88 },
    { name: 'JavaScript', category: 'Programming', proficiency: 85 },
    
    { name: 'React', category: 'Frontend', proficiency: 85 },
    { name: 'HTML', category: 'Frontend', proficiency: 92 },
    { name: 'CSS', category: 'Frontend', proficiency: 88 },
    { name: 'Tailwind CSS', category: 'Frontend', proficiency: 85 },
    
    { name: 'Node.js', category: 'Backend', proficiency: 80 },
    { name: 'Express.js', category: 'Backend', proficiency: 80 },
    { name: 'REST APIs', category: 'Backend', proficiency: 85 },
    
    { name: 'MySQL', category: 'Databases', proficiency: 88 },
    { name: 'MongoDB', category: 'Databases', proficiency: 82 },
    { name: 'Firebase', category: 'Databases', proficiency: 80 },
    
    { name: 'Git', category: 'Tools', proficiency: 85 },
    { name: 'GitHub', category: 'Tools', proficiency: 88 },
    { name: 'VS Code', category: 'Tools', proficiency: 90 },
    { name: 'Postman', category: 'Tools', proficiency: 85 },
    
    { name: 'Snowflake', category: 'Cloud', proficiency: 75 },
    { name: 'Cloud Fundamentals', category: 'Cloud', proficiency: 80 }
  ];

  const displaySkills = skillsList.length > 0 ? skillsList : defaultSkills;

  return (
    <section id="skills" style={{
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
            Technical <span className="text-gradient-purple-blue">Skills</span>
          </h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--accent-purple)', margin: '0 auto', borderRadius: '2px' }} />
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {categories.map((cat) => {
            const catSkills = displaySkills.filter(s => s.category === cat.id);
            if (catSkills.length === 0) return null;

            return (
              <div key={cat.id} className="glow-card glass-panel" style={{
                padding: '28px',
                background: 'rgba(10, 10, 12, 0.6)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '20px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{cat.title}</span>
                  <span style={{ fontSize: '11px', color: 'var(--accent-blue)', fontWeight: 500, letterSpacing: '0.05em' }}>
                    {catSkills.length} ITEMS
                  </span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {catSkills.map((skill) => (
                    <div key={skill.name}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '6px',
                        fontSize: '14px'
                      }}>
                        <span style={{ color: '#ffffff', fontWeight: 500 }}>{skill.name}</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{skill.proficiency}%</span>
                      </div>
                      
                      {/* Bar Container */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <div style={{
                          width: `${skill.proficiency}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, var(--accent-blue), var(--accent-purple))`,
                          borderRadius: '3px',
                          boxShadow: '0 0 8px rgba(79, 140, 255, 0.3)'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
