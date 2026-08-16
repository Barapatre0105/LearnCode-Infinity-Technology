import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './IconFeatureCard.css';

/**
 * IconFeatureCard component
 * Renders an icon (Lucide icon component or SVG), title, and subtitle.
 * Reusable for Hero Feature Strip, Services page, and capability grids.
 */
const IconFeatureCard = ({
  icon: Icon,
  title,
  subtitle = '',
  description = '',
  onClick,
  active = false,
  badge = '',
  showArrow = true,
  className = ''
}) => {
  return (
    <div 
      className={`icon-feature-card glass-card red-glow-hover ${active ? 'card-active' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (onClick) onClick();
        }
      }}
    >
      <div className="card-header">
        <div className="icon-wrapper">
          {React.isValidElement(Icon) ? (
            Icon
          ) : Icon ? (
            <Icon className="feature-icon" size={28} />
          ) : null}
        </div>
        {badge && <span className="card-badge">{badge}</span>}
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {subtitle && <span className="card-subtitle text-mono">{subtitle}</span>}
        {description && <p className="card-desc">{description}</p>}
      </div>

      {showArrow && (
        <div className="card-footer">
          <span className="learn-more-text">Explore Capability</span>
          <ArrowUpRight size={16} className="arrow-icon" />
        </div>
      )}
    </div>
  );
};

export default IconFeatureCard;

