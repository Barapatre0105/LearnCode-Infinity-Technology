import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import './AboutCtaBannerSection.css';

const AboutCtaBannerSection = ({ onOpenContact, onOpenDemo }) => {
  return (
    <section id="about" className="about-cta-section">
      
      {/* 2. Cyber Skyline Glow CTA Banner (Poster Footer Aesthetic) */}
      <div className="cta-banner-container">
        
        {/* Skyline Cyber Grid Background */}
        <div className="skyline-grid-bg" />
        <div className="skyline-glow-orb" />

        {/* Banner Content */}
        <div className="cta-banner-card glass-card">
          
          <div className="cta-banner-header">
            <span className="cta-subtitle text-mono text-red">— READY TO TRANSFORM YOUR ENTERPRISE?</span>
            <h2 className="cta-main-heading">
              READY TO ACCELERATE YOUR AI JOURNEY?
            </h2>
            <p className="cta-subheading">
              Partner with LearnCode Infinity Technology to deploy intelligent, autonomous, and enterprise-ready AI solutions today.
            </p>
          </div>

          <div className="cta-button-group">
            <Button 
              variant="primary" 
              size="lg" 
              icon={ArrowRight}
              onClick={onOpenContact}
            >
              Schedule AI Consultation
            </Button>
          </div>

          {/* Footer Grid Specs */}
          <div className="cta-banner-footer-specs text-mono text-xs">
            <span>LOCATION: GLOBAL HQ</span>
            <span className="spec-dot">•</span>
            <span>STATUS: ALL SYSTEMS OPERATIONAL</span>
            <span className="spec-dot">•</span>
            <span>ENCRYPTION: 256-BIT AES</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutCtaBannerSection;
