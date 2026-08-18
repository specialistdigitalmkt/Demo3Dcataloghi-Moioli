import React from 'react';
export function PlaceholderValue({ children = 'dato da verificare' }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ph-text)', background: 'var(--ph-bg)',
      border: '1.5px dashed var(--ph-border)', borderRadius: 'var(--radius-md)', padding: '3px 9px', display: 'inline-block'
    }}>{children}</span>
  );
}
