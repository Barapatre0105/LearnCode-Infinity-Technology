import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * Supports variants: 'primary' (red glow), 'ghost', 'outline'
 * Sizes: 'sm', 'md', 'lg'
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'ghost':
        return 'btn-ghost';
      case 'outline':
        return 'btn-outline';
      case 'primary':
      default:
        return 'btn-primary-red';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      case 'md':
      default:
        return 'btn-md';
    }
  };

  return (
    <button
      type={type}
      className={`btn ${getVariantClass()} ${getSizeClass()} ${fullWidth ? 'btn-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="btn-icon left-icon" size={18} />}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-icon right-icon" size={18} />}
    </button>
  );
};

export default Button;
