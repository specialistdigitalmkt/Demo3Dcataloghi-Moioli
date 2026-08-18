import React from 'react';
export function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)' }}>{label}</span>}
      <input type={type} value={value} placeholder={placeholder} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 12px', borderRadius: 'var(--radius-sm)',
          border: `1px solid ${error ? 'var(--red)' : focus ? 'var(--navy)' : 'var(--border)'}`,
          outline: 'none', color: 'var(--text-body)', background: '#fff',
          transition: `border-color var(--duration-fast) var(--ease)`
        }} />
      {error && <span style={{ fontSize: 12.5, color: 'var(--red)' }}>{error}</span>}
    </label>
  );
}
