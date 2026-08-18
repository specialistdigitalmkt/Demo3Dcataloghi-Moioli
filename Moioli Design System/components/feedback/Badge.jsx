import React from 'react';
export function Badge({ tone = 'navy', children }) {
  const tones = {
    navy: { background: 'var(--navy)', color: '#fff' },
    accent: { background: 'var(--accent)', color: '#fff' },
    neutral: { background: 'var(--bg-2)', color: 'var(--text-body)' },
  };
  return (
    <span style={{
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.16em',
      padding: '4px 9px', borderRadius: 'var(--radius-sm)', display: 'inline-block', ...tones[tone]
    }}>{children}</span>
  );
}
