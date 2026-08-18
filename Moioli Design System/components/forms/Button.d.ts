import React from 'react';
/**
 * @startingPoint section="Forms" subtitle="Buttons: primary, accent, secondary, ghost, sizes, disabled" viewport="700x150"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children?: React.ReactNode;
}
