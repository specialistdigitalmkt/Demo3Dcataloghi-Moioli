import React from 'react';
export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-body)', cursor: 'pointer' }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{
        width: 16, height: 16, accentColor: 'var(--navy)', borderRadius: 'var(--radius-sm)'
      }} />
      {label}
    </label>
  );
}
