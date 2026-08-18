/* @ds-bundle: {"format":4,"namespace":"MoioliDesignSystem_393481","components":[{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"PlaceholderValue","sourcePath":"components/feedback/PlaceholderValue.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/display/Card.jsx":"8181c6fab5c6","components/display/Tabs.jsx":"076836ab215b","components/feedback/Badge.jsx":"96b84bd24c02","components/feedback/PlaceholderValue.jsx":"5f82d62cc771","components/feedback/Tag.jsx":"b46c6f08b222","components/forms/Button.jsx":"bec127e805ee","components/forms/Checkbox.jsx":"169d2a96219b","components/forms/Input.jsx":"7c8f974d4406","components/forms/Select.jsx":"c95b7d26769b","components/overlay/Dialog.jsx":"4b1263d776ff","components/overlay/Tooltip.jsx":"d58b04564611"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MoioliDesignSystem_393481 = window.MoioliDesignSystem_393481 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  hover = true
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border)',
      padding: 22,
      boxShadow: h && hover ? 'var(--shadow-card)' : 'none',
      transition: `box-shadow var(--duration-slow) var(--ease)`,
      fontFamily: 'var(--font-body)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--navy)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: () => onChange && onChange(item),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 16px',
        fontSize: 14,
        fontWeight: 600,
        color: isActive ? 'var(--navy)' : 'var(--text-muted)',
        borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
        marginBottom: -1,
        transition: `color var(--duration-fast) var(--ease)`
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  tone = 'navy',
  children
}) {
  const tones = {
    navy: {
      background: 'var(--navy)',
      color: '#fff'
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff'
    },
    neutral: {
      background: 'var(--bg-2)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11.5,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      padding: '4px 9px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/PlaceholderValue.jsx
try { (() => {
function PlaceholderValue({
  children = 'dato da verificare'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ph-text)',
      background: 'var(--ph-bg)',
      border: '1.5px dashed var(--ph-border)',
      borderRadius: 'var(--radius-md)',
      padding: '3px 9px',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { PlaceholderValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/PlaceholderValue.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-body)',
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 10px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Rimuovi",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const sizes = {
  md: {
    padding: '10px 20px',
    fontSize: 14
  },
  sm: {
    padding: '7px 14px',
    fontSize: 13
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button'
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `background var(--duration-fast) var(--ease), color var(--duration-fast) var(--ease), opacity var(--duration-fast) var(--ease)`,
    opacity: disabled ? 0.5 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--navy)',
      color: '#fff'
    },
    accent: {
      background: 'var(--accent)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--navy)',
      border: '1px solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--navy-deep)',
    accent: 'var(--accent-hover)',
    secondary: 'var(--bg-1)',
    ghost: 'var(--bg-1)'
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  if (hover && !disabled) style.background = hoverBg[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    style: style,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      width: 16,
      height: 16,
      accentColor: 'var(--navy)',
      borderRadius: 'var(--radius-sm)'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--red)' : focus ? 'var(--navy)' : 'var(--border)'}`,
      outline: 'none',
      color: 'var(--text-body)',
      background: '#fff',
      transition: `border-color var(--duration-fast) var(--ease)`
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--red)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border)',
      outline: 'none',
      color: 'var(--text-body)',
      background: '#fff'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(17,25,46,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float)',
      padding: 26,
      width: 360,
      maxWidth: '90%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--navy)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Chiudi",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--text-muted)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--navy-ink)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-float)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.PlaceholderValue = __ds_scope.PlaceholderValue;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
