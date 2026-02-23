import React, { useState, useEffect } from 'react';

const roles = ['MERN Stack Developer', 'React.js Developer', 'Frontend Engineer', 'Full Stack Builder'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, charIdx + 1)), 60);
      return () => clearTimeout(timeout);
    }
    if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 35);
      return () => clearTimeout(timeout);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % roles.length);
    }
  }, [charIdx, deleting, roleIdx]);

  useEffect(() => {
    if (!deleting) setCharIdx(displayed.length);
  }, [displayed, deleting]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
      <div className="section-inner" style={{ width: '100%', marginTop:'47px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }}>

          {/* Left content */}
          <div>
            {/* Status badge */}
            <div className="fade-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.2)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 28,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#00d4aa',
                animation: 'pulse-ring 1.5s infinite',
                display: 'inline-block',
              }} />
              <span style={{ fontSize: '0.8rem', color: '#00d4aa', fontWeight: 600, letterSpacing: '0.04em' }}>
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="fade-up-1" style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: 16,
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #e2e8f0 30%, #64748b)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Gurpreet</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #00d4aa, #00a882)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Singh</span>
            </h1>

            {/* Typewriter */}
            <div className="fade-up-2" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
              color: '#64748b',
              marginBottom: 28,
              height: 32,
              display: 'flex', alignItems: 'center', gap: 2,
            }}>
              <span style={{ color: '#00d4aa', marginRight: 4 }}>{'>'}</span>
              <span style={{ color: '#e2e8f0' }}>{displayed}</span>
              <span style={{ animation: 'blink 1s infinite', color: '#00d4aa', fontWeight: 100 }}>|</span>
            </div>

            {/* Bio */}
            <p className="fade-up-3" style={{
              fontSize: '1rem', lineHeight: 1.8, color: '#94a3b8',
              maxWidth: 520, marginBottom: 40, fontWeight: 400,
            }}>
              MCA graduate from IMS Engineering College, Ghaziabad. I build full-stack web apps
              with <span style={{ color: '#00d4aa', fontWeight: 600 }}>React.js, Node.js, MongoDB & Express.js</span>.
              Passionate about clean UI, real-world problem solving, and shipping things that work.
            </p>

            {/* CTAs */}
            <div className="fade-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('projects')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #00d4aa, #00a882)',
                  border: 'none', borderRadius: 12, padding: '12px 28px',
                  color: '#080b10', fontWeight: 700, fontSize: '0.95rem',
                  fontFamily: 'var(--font-head)', cursor: 'pointer',
                  boxShadow: '0 4px 24px rgba(0,212,170,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,212,170,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,212,170,0.3)'; }}
              >
                <i className="bi bi-grid-3x3-gap-fill" /> View Projects
              </button>

              <a href="mailto:gurpreetchahal1009@gmail.com"
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 12, padding: '12px 28px',
                  color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00d4aa'; e.currentTarget.style.color = '#00d4aa'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#e2e8f0'; }}
              >
                <i className="bi bi-envelope" /> Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="fade-up-4" style={{ display: 'flex', gap: 16, marginTop: 36 }}>
              {[
                { icon: 'bi-github', href: 'https://github.com/Gurpreet1109', label: 'GitHub' },
                { icon: 'bi-linkedin', href: 'https://linkedin.com/in/gurpreet1109', label: 'LinkedIn' },
                { icon: 'bi-envelope-fill', href: 'mailto:gurpreetchahal1009@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    color: '#64748b', textDecoration: 'none', fontSize: '0.82rem',
                    fontWeight: 500, transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#00d4aa'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  <i className={`bi ${s.icon}`} style={{ fontSize: '1rem' }} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — avatar card */}
          <div style={{ animation: 'float 4s ease-in-out infinite' }} className="hero-avatar">
            <div style={{
              width: 280, height: 280,
              background: 'linear-gradient(135deg, #111827, #1a2235)',
              border: '1px solid rgba(0,212,170,0.25)',
              borderRadius: 28,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 12,
              boxShadow: '0 0 60px rgba(0,212,170,0.12), 0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Corner accent */}
              <div style={{
                position: 'absolute', top: -1, left: -1, right: -1,
                height: 3,
                background: 'linear-gradient(90deg, transparent, #00d4aa, transparent)',
              }} />
              {/* Avatar initials */}
              <div style={{
                width: 100, height: 100,
                background: 'linear-gradient(135deg, #00d4aa22, #00a88222)',
                border: '2px solid rgba(0,212,170,0.4)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.2rem', fontWeight: 900, color: '#00d4aa',
                letterSpacing: '-0.02em',
              }}>GS</div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#e2e8f0' }}>Gurpreet Singh</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#64748b', marginTop: 2 }}>MERN Stack Dev</div>
              </div>

              {/* Mini stats */}
              <div style={{ display: 'flex', gap: 20, marginTop: 8 }}>
                {[['5+', 'Projects'], ['2+', 'Yrs Exp'], ['7.6', 'CGPA']].map(([num, lab]) => (
                  <div key={lab} style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#00d4aa' }}>{num}</div>
                    <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 500 }}>{lab}</div>
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', padding: '0 20px' }}>
                {['React', 'Node.js', 'MongoDB'].map(t => (
                  <span key={t} className="pill primary" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hero-avatar { display: none !important; } }
      `}</style>
    </section>
  );
}
