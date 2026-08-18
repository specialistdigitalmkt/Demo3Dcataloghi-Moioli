import React from 'react';
export function Tabs({ items = [], active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)' }}>
      {items.map((item) => {
        const isActive = item === active;
        return (
          <button key={item} onClick={() => onChange && onChange(item)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '10px 16px', fontSize: 14, fontWeight: 600,
            color: isActive ? 'var(--navy)' : 'var(--text-muted)', borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
            marginBottom: -1, transition: `color var(--duration-fast) var(--ease)`
          }}>{item}</button>
        );
      })}
    </div>
  );
}
