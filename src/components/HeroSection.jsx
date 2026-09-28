import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import GlowingBrainCanvas from './GlowingBrainCanvas';
import './HeroSection.css';

const HeroSection = ({ onSelectFeature, onOpenContact, onOpenDemo }) => {

  return (
    <section className="hero-section">
      
      {/* Background Ambient Red Cyber Grid */}
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow-orb" />

      <div className="hero-container">
        
        {/* Main Grid: Left Typography & Content, Right Interactive Canvas */}
        <div className="hero-grid">
          
          {/* Left Column: Hero Text */}
          <div className="hero-content">
            
            <h1 className="hero-main-title">
              <span className="title-block-white">INTELLIGENT</span>
              <span className="title-block-ai-glow">AI</span>
              <span className="title-block-white">SOLUTIONS</span>
            </h1>

            <div className="hero-tagline-box">
              <span className="tagline-white">SMART TECHNOLOGY.</span>
              <span className="tagline-red"> REAL WORLD IMPACT.</span>
            </div>

            <p className="hero-description">
              We build intelligent AI solutions that drive innovation, automate complexity, and deliver measurable results for your business.
            </p>

            {/* Action Buttons matching User Screenshot */}
            <div className="hero-action-row">
              <button 
                className="btn-gradient-pill" 
                onClick={onOpenContact}
              >
                <span>Send Me a Proposal</span>
                <span className="pill-arrow-circle">
                  <ArrowRight size={18} />
                </span>
              </button>

              <button 
                className="btn-discovery-call" 
                onClick={onOpenDemo || onOpenContact}
              >
                <span className="discovery-play-icon">
                  <Play size={14} fill="currentColor" style={{ marginLeft: '2px' }} />
                </span>
                <span>Book a Discovery Call</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Holographic Interactive Glowing AI Brain */}
          <div className="hero-visual-col">
            <GlowingBrainCanvas />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
