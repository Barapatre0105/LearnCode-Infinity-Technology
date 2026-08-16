import React from 'react';
import { GraduationCap, Building2, ArrowRight, CheckCircle2, Sparkles, Code2, BrainCircuit, Users, Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import './VerticalsSection.css';

const VerticalsSection = ({ onOpenContact }) => {
  const verticals = [
    {
      id: 'learning',
      badge: 'VERTICAL 01',
      title: 'LEARNCODE INFINITY ACADEMY',
      tagline: 'Empowering Next-Gen Developers & AI Engineers',
      icon: GraduationCap,
      description: 'Comprehensive AI & software engineering education designed to bridge academia and industry with hands-on neural labs and real-world projects.',
      highlights: [
        'Interactive Neural Coding Labs & AI Sandbox',
        'Industry-Recognized AI & Full-Stack Certifications',
        'Direct Career Placement & Enterprise Internship Pipeline',
        'Mentorship by Senior AI Architects & Researchers'
      ],
      stats: [
        { value: '15,000+', label: 'Graduates' },
        { value: '98%', label: 'Placement Rate' },
        { value: '45+', label: 'Hands-on Labs' }
      ],
      buttonText: 'Explore Learning Programs',
      glowColor: 'rgba(255, 30, 56, 0.4)'
    },
    {
      id: 'corporate',
      badge: 'VERTICAL 02',
      title: 'ENTERPRISE CORPORATE SOLUTIONS',
      tagline: 'Custom AI Systems & Digital Transformation',
      icon: Building2,
      description: 'End-to-end AI strategy, autonomous workflow development, and scalable cloud-native architectures tailored for Fortune 500 enterprises.',
      highlights: [
        'Bespoke LLM & Multi-Agent System Integration',
        'Automated Business Intelligence & Predictive Analytics',
        'Zero-Trust Data Protection & SOC2 Compliance',
        '24/7 Dedicated AI Infrastructure Support'
      ],
      stats: [
        { value: '120+', label: 'Enterprise Clients' },
        { value: '99.9%', label: 'System Uptime' },
        { value: '$40M+', label: 'Client Value Generated' }
      ],
      buttonText: 'Schedule Corporate Audit',
      glowColor: 'rgba(255, 30, 56, 0.4)'
    }
  ];

  return (
    <section id="verticals" className="verticals-section">
      <div className="verticals-container">
        
        <SectionTitle 
          badge="DUAL OPERATING MODEL"
          title="OUR TWO CORE VERTICALS"
          subtitle="Transforming Individuals and Enterprises Through World-Class AI Innovation"
          center
        />

        <div className="verticals-grid">
          {verticals.map((vert) => {
            const IconComp = vert.icon;
            return (
              <div key={vert.id} className="vertical-card glass-card red-glow-hover">
                
                {/* Header */}
                <div className="vertical-card-header">
                  <div className="vertical-badge-wrap">
                    <span className="vertical-badge text-mono">{vert.badge}</span>
                  </div>
                  <div className="vertical-icon-box">
                    <IconComp size={32} className="vertical-main-icon text-red" />
                  </div>
                </div>

                {/* Content */}
                <div className="vertical-card-body">
                  <h3 className="vertical-title">{vert.title}</h3>
                  <p className="vertical-tagline text-red">{vert.tagline}</p>
                  <p className="vertical-desc">{vert.description}</p>

                  <div className="vertical-highlights">
                    <h4 className="highlights-heading text-mono">KEY CAPABILITIES & DELIVERABLES:</h4>
                    <ul className="highlights-list">
                      {vert.highlights.map((item, idx) => (
                        <li key={idx} className="highlight-item">
                          <CheckCircle2 size={16} className="highlight-icon text-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Bar */}
                  <div className="vertical-stats-bar">
                    {vert.stats.map((st, i) => (
                      <div key={i} className="v-stat-item">
                        <span className="v-stat-val text-red">{st.value}</span>
                        <span className="v-stat-lbl">{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="vertical-card-footer">
                  <Button 
                    variant="outline" 
                    icon={ArrowRight}
                    onClick={onOpenContact}
                    fullWidth
                  >
                    {vert.buttonText}
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VerticalsSection;
