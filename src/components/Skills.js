import React from 'react';

const skillGroups = [
  {
    label: 'Frontend',
    icon: 'bi-layout-wtf',
    color: '#00d4aa',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript ES6+', level: 85 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 78 },
    ],
  },
  {
    label: 'Backend',
    icon: 'bi-server',
    color: '#fbbf24',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 83 },
      { name: 'Authentication', level: 75 },
    ],
  },
  {
    label: 'Database',
    icon: 'bi-database',
    color: '#a78bfa',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 68 },
    ],
  },
  {
    label: 'Tools',
    icon: 'bi-database',
    color: '#4514d5',
    skills: [
      { name: 'Git / GitHub', level: 82 },
      { name: 'Postman', level: 80 },
      { name: 'Vercel', level: 80 },
      { name: 'Render', level: 80 },
    ],
  },
  {
    label: 'Languages',
    icon: 'bi-code-slash',
    color: '#ff6b6b',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 72 },
      { name: 'C / C++', level: 75 },
    ],
  },
];

function SkillBar({ name, level, color }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#cbd5e1' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#64748b' }}>{level}%</span>
      </div>
      <div style={{
        height: 6, background: '#1a2235', borderRadius: 100, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          borderRadius: 100,
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 8px ${color}44`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0' }}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What I Work With</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            A practical skill set built through real project development and continuous learning.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {skillGroups.map(group => (
            <div key={group.label} style={{
              background: 'rgba(17,24,39,0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 18,
              padding: '28px',
              transition: 'all 0.25s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${group.color}40`;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.4)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${group.color}18`,
                  border: `1px solid ${group.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className={`bi ${group.icon}`} style={{ color: group.color, fontSize: '1rem' }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#e2e8f0' }}>{group.label}</span>
              </div>

              {group.skills.map(s => (
                <SkillBar key={s.name} {...s} color={group.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech logos row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center',
          marginTop: 48, padding: '24px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Bootstrap', 'Tailwind', 'Git', 'MySQL', 'C++', 'Java', 'Postman','Vercel','Render'].map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
