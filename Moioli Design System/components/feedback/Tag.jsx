import React from 'react';
export function Tag({ children, onRemove }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-body)', background: 'var(--bg-1)',
      border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '4px 10px',
      display: 'inline-flex', alignItems: 'center', gap: 6
    }}>
      {children}
      {onRemove && <button onClick={onRemove} aria-label="Rimuovi" style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 14, lineHeight: 1, padding: 0 }}>×</button>}
    </span>
  );
}
