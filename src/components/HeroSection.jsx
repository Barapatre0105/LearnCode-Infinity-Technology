import React from 'react';
import { Cpu, Cog, BarChart3, ShieldCheck } from 'lucide-react';
import IconFeatureCard from './IconFeatureCard';
import GlowingBrainCanvas from './GlowingBrainCanvas';
import './HeroSection.css';

const HeroSection = ({ onSelectFeature, onOpenContact, onOpenDemo }) => {

  const featureCards = [
    {
      id: 'strategy',
      icon: Cpu,
      title: 'AI STRATEGY & CONSULTING',
      subtitle: 'NEURAL ROADMAP & ARCHITECTURE',
      description: 'Strategic AI positioning, enterprise roadmap planning, and bespoke neural network architecture implementation.',
      badge: '01 MODULE'
    },
    {
      id: 'automation',
      icon: Cog,
      title: 'INTELLIGENT AUTOMATION',
      subtitle: 'AUTONOMOUS WORKFLOWS',
      description: 'Self-correcting process automation, intelligent agent orchestration, and automated decision-making engines.',
      badge: '02 MODULE'
    },
    {
      id: 'insights',
      icon: BarChart3,
      title: 'DATA-DRIVEN INSIGHTS',
      subtitle: 'PREDICTIVE ANALYTICS',
      description: 'High-density multi-category data modeling, real-time analytics, and predictive market forecasting systems.',
      badge: '03 MODULE'
    },
    {
      id: 'security',
      icon: ShieldCheck,
      title: 'SECURE & SCALABLE SOLUTIONS',
      subtitle: 'ZERO-TRUST AI FRAMEWORK',
      description: 'Enterprise-grade encryption, SOC2 compliant neural models, and scalable cloud-native AI infrastructures.',
      badge: '04 MODULE'
    }
  ];

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

          </div>

          {/* Right Column: 3D Holographic Interactive Glowing AI Brain */}
          <div className="hero-visual-col">
            <GlowingBrainCanvas />
          </div>

        </div>

        {/* Bottom Feature Cards Grid (4 Cards from Poster) */}
        <div id="solutions" className="hero-features-wrapper">
          <div className="features-header-row">
            <div className="features-title-group">
              <span className="text-mono text-red">— CORE CAPABILITIES</span>
              <h2 className="features-subheading">Enterprise AI Solutions Matrix</h2>
            </div>
            <p className="features-hint text-mono">CLICK ANY MODULE TO VIEW SYSTEM SPECIFICATIONS →</p>
          </div>

          <div className="feature-cards-grid">
            {featureCards.map((card) => (
              <IconFeatureCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                badge={card.badge}
                onClick={() => onSelectFeature(card)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
