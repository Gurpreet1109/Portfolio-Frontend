import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'MCA — Master of Computer Applications',
    school: 'IMS Engineering College, Ghaziabad',
    grade: '7.63 CGPA',
    period: '2022 – 2024',
    icon: 'bi-mortarboard-fill',
    color: '#00d4aa',
    desc: 'Focused on software engineering, data structures, web development, and database management. Built full-stack projects throughout the program.',
  },
  {
    degree: 'BCA — Bachelor of Computer Applications',
    school: 'Glocal University, Saharanpur',
    grade: '7.49 CGPA',
    period: '2019 – 2022',
    icon: 'bi-building',
    color: '#a78bfa',
    desc: 'Foundation in programming, algorithms, computer networks, and operating systems.',
  },
  {
    degree: 'Intermediate (12th)',
    school: 'Dhyan Singh Academy Inter College, Fattehpur Bhau (Sambhal)',
    grade: '76%',
    period: '2018 – 2019',
    icon: 'bi-award',
    color: '#fbbf24',
    desc: '',
  },
  {
    degree: 'High School (10th)',
    school: 'Chandawali Inter College, Chandawali (Sambhal)',
    grade: '74%',
    period: '2016 – 2017',
    icon: 'bi-journal-bookmark',
    color: '#34d399',
    desc: '',
  },
];

const certifications = [
  { name: 'Advanced C++', provider: 'Udemy', icon: 'bi-patch-check-fill', color: '#fbbf24' },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 0' }}>
      <div className="section-inner">
        <div className='myEducationGrid'>

          {/* Education */}
          <div>
            <div className="section-label">Education</div>
            <h2 className="section-title">Academic Journey</h2>
            <p className="section-sub" style={{ marginBottom: 40 }}>
              A strong computer science foundation from BCA through MCA, with consistent academic performance.
            </p>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: 32 }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: 10, top: 0, bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #00d4aa, #a78bfa44)',
                borderRadius: 2,
              }} />

              {education.map((e, i) => (
                <div key={i} style={{
                  position: 'relative',
                  marginBottom: i < education.length - 1 ? 36 : 0,
                  animation: `fadeUp 0.5s ${i * 0.1}s ease both`,
                }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: -26, top: 4,
                    width: 16, height: 16,
                    background: e.color,
                    borderRadius: '50%',
                    border: '3px solid var(--bg)',
                    boxShadow: `0 0 10px ${e.color}60`,
                  }} />

                  <div style={{
                    background: 'rgba(17,24,39,0.6)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14,
                    padding: '20px 22px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e2 => { e2.currentTarget.style.borderColor = `${e.color}30`; e2.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e2 => { e2.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e2.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#e2e8f0', marginBottom: 3 }}>{e.degree}</h4>
                        <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: 6 }}>{e.school}</div>
                        {e.desc && <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6 }}>{e.desc}</p>}
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{
                          fontFamily: 'var(--font-mono)', fontWeight: 700,
                          color: e.color, fontSize: '0.85rem',
                          padding: '2px 10px',
                          background: `${e.color}15`,
                          borderRadius: 8,
                          border: `1px solid ${e.color}25`,
                          marginBottom: 6,
                        }}>{e.grade}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b' }}>{e.period}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certs + Contact info */}
          <div>
            {/* Certifications */}
            <div className="section-label">Certifications</div>
            <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#e2e8f0', marginBottom: 20, letterSpacing: '-0.02em' }}>
              Credentials
            </h3>
            {certifications.map((c, i) => (
              <div key={i} style={{
                background: 'rgba(17,24,39,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14, padding: '20px',
                marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${c.color}18`,
                  border: `1px solid ${c.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <i className={`bi ${c.icon}`} style={{ color: c.color, fontSize: '1.2rem' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#e2e8f0', fontSize: '0.9rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: 2 }}>{c.provider}</div>
                </div>
              </div>
            ))}

            {/* Interests */}
            <div style={{ marginTop: 36 }}>
              <div className="section-label">Interests</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                {[
                  { icon: 'bi-globe2', label: 'Web Development', color: '#00d4aa' },
                  { icon: 'bi-puzzle', label: 'Problem Solving', color: '#a78bfa' },
                  { icon: 'bi-code-square', label: 'Open Source', color: '#fbbf24' },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px',
                    background: 'rgba(17,24,39,0.5)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 10,
                  }}>
                    <i className={`bi ${item.icon}`} style={{ color: item.color, fontSize: '1rem' }} />
                    <span style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
