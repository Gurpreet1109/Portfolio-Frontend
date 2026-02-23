import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '32px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 16,
      maxWidth: 1100, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28,
          background: 'linear-gradient(135deg, #00d4aa, #00a882)',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '0.75rem', color: '#080b10',
        }}>GS</div>
        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
          © {year} Gurpreet Singh · Built with React.js
        </span>
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        {[
          { icon: 'bi-github', href: 'https://github.com/Gurpreet1109' },
          { icon: 'bi-linkedin', href: 'https://linkedin.com/in/gurpreet1109' },
          { icon: 'bi-envelope-fill', href: 'mailto:gurpreetchahal1009@gmail.com' },
        ].map(s => (
          <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
            style={{ color: '#64748b', fontSize: '1.1rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00d4aa'}
            onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
          >
            <i className={`bi ${s.icon}`} />
          </a>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#374151' }}>
        MERN Stack · React · Node · MongoDB
      </div>
    </footer>
  );
}
