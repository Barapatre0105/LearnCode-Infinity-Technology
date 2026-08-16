import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = ({ activePage = 'home', onNavigate, onOpenContact, onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, targetId, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(page);
    setMobileMenuOpen(false);

    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'home', label: 'Home', action: (e) => handleNavClick('home', null, e) },
    { id: 'about', label: 'About', action: (e) => handleNavClick('about', null, e) },
    { id: 'learning', label: 'Learning', action: (e) => handleNavClick('learning', null, e) },
    { id: 'services', label: 'Corporate', action: (e) => handleNavClick('services', null, e) },
    { id: 'projects', label: 'Projects', action: (e) => handleNavClick('projects', null, e) },
    { id: 'tech', label: 'Technologies', action: (e) => handleNavClick('home', 'tech', e) },
    { id: 'careers', label: 'Careers', action: (e) => { e.preventDefault(); onOpenContact(); setMobileMenuOpen(false); } }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Left Side: Brand Logo */}
        <div className="navbar-brand-group">
          <a href="#" className="navbar-logo" onClick={(e) => handleNavClick('home', null, e)}>
            <img 
              src="/learncode_infinity_logo.png" 
              alt="LearnCode Infinity Technology Logo" 
              className="navbar-brand-logo-img" 
            />
            
            <div className="logo-text-wrapper">
              <div className="logo-title">
                LEARNCODE INFINITY
              </div>
              <div className="logo-subhead">
                INTELLIGENCE. INNOVATION. IMPACT.
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Nav Tabs (8 requested tabs) */}
        <nav className="navbar-links">
          {tabs.map((tab) => {
            const isActive = activePage === tab.id;
            return (
              <button 
                key={tab.id}
                className={`nav-link ${isActive ? 'active-nav-link' : ''}`}
                onClick={tab.action}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Action CTAs */}
        <div className="navbar-actions">
          <Button variant="primary" size="sm" icon={ArrowRight} onClick={onOpenContact}>
            Contact Us
          </Button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-card">
          <nav className="mobile-nav-links">
            {tabs.map((tab) => (
              <button 
                key={tab.id} 
                className="mobile-nav-btn" 
                onClick={tab.action}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <Button variant="primary" fullWidth icon={ArrowRight} onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
              Let's Build Smarter Futures
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
