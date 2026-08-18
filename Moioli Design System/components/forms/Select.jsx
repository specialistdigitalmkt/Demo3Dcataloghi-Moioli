import React from 'react';
export function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)' }}>{label}</span>}
      <select value={value} onChange={onChange} style={{
        fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 12px', borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border)', outline: 'none', color: 'var(--text-body)', background: '#fff'
      }}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
