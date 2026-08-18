import React from 'react';
const sizes = { md: { padding: '10px 20px', fontSize: 14 }, sm: { padding: '7px 14px', fontSize: 13 } };
export function Button({ variant = 'primary', size = 'md', disabled = false, children, onClick, type = 'button' }) {
  const base = {
    fontFamily: 'var(--font-body)', fontWeight: 600, border: 'none', borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer', transition: `background var(--duration-fast) var(--ease), color var(--duration-fast) var(--ease), opacity var(--duration-fast) var(--ease)`,
    opacity: disabled ? 0.5 : 1, ...sizes[size]
  };
  const variants = {
    primary: { background: 'var(--navy)', color: '#fff' },
    accent: { background: 'var(--accent)', color: '#fff' },
    secondary: { background: 'transparent', color: 'var(--navy)', border: '1px solid var(--border)' },
    ghost: { background: 'transparent', color: 'var(--text-body)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = { primary: 'var(--navy-deep)', accent: 'var(--accent-hover)', secondary: 'var(--bg-1)', ghost: 'var(--bg-1)' };
  const style = { ...base, ...variants[variant] };
  if (hover && !disabled) style.background = hoverBg[variant];
  return (
    <button type={type} disabled={disabled} style={style} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </button>
  );
}
