import React from 'react';
export function Card({ eyebrow, title, children, hover = true }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', padding: 22,
      boxShadow: h && hover ? 'var(--shadow-card)' : 'none', transition: `box-shadow var(--duration-slow) var(--ease)`,
      fontFamily: 'var(--font-body)'
    }}>
      {eyebrow && <div style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: 8 }}>{eyebrow}</div>}
      {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--navy)', marginBottom: 8 }}>{title}</div>}
      <div style={{ fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
