import React from 'react';
export function Dialog({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,25,46,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)' }}>
      <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-float)', padding: 26, width: 360, maxWidth: '90%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--navy)' }}>{title}</div>
          <button onClick={onClose} aria-label="Chiudi" style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--text-muted)' }}>×</button>
        </div>
        <div style={{ fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}
