import React from 'react';
import './SectionTitle.css';

/**
 * Reusable Section Title Component
 */
const SectionTitle = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  center = false,
  className = ''
}) => {
  const isCentered = centered || center;

  return (
    <div className={`section-title-wrapper ${isCentered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className="glass-pill section-badge">
          <span className="glass-pill-dot"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="section-heading">
        {title}{' '}
        {highlight && <span className="neon-red-text">{highlight}</span>}
      </h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
