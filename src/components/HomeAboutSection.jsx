import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  BrainCircuit, 
  ArrowRight
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import './HomeAboutSection.css';

const HomeAboutSection = ({ onOpenContact, onNavigate }) => {
  return (
    <section id="about" className="home-about-section">
      <div className="about-glow-overlay" />
      
      <div className="home-about-container">
        
        {/* Section Header */}
        <SectionTitle 
          title="BRIDGING PRACTICAL LEARNING WITH REAL-WORLD INNOVATION"
          subtitle="LearnCode Infinity Technologies is an AI and technology-focused company dedicated to building practical technology solutions and creating industry-ready learning opportunities."
          center
        />

        {/* Dual Pillar Overview Cards */}
        <div className="home-pillars-grid">
          
          {/* Pillar 1: Learning */}
          <div className="home-pillar-card glass-card hover-red-border">
            <div className="pillar-top">
              <div className="pillar-icon red-glow">
                <GraduationCap size={28} className="text-red" />
              </div>
            </div>
            <h3 className="pillar-heading">Learning & Skill Development</h3>
            <p className="pillar-text">
              Helping students, freshers, and professionals develop practical, job-ready skills in Artificial Intelligence, Machine Learning, Data Science, Python, Software Development, and emerging technologies.
            </p>
            <div className="pillar-foot">
              <span className="text-mono text-red text-xs">PRACTICAL & HANDS-ON</span>
            </div>
          </div>

          {/* Pillar 2: Corporate */}
          <div className="home-pillar-card glass-card hover-red-border">
            <div className="pillar-top">
              <div className="pillar-icon red-glow">
                <Briefcase size={28} className="text-red" />
              </div>
            </div>
            <h3 className="pillar-heading">Corporate Technology Solutions</h3>
            <p className="pillar-text">
              Working with businesses to build custom software, AI-powered systems, data applications, automation pipelines, and scalable digital products tailored to specific enterprise requirements.
            </p>
            <div className="pillar-foot">
              <span className="text-mono text-red text-xs">ENTERPRISE SCALABLE</span>
            </div>
          </div>

        </div>

        {/* Core Goal Box */}
        <div className="home-goal-box glass-card text-center">
          <span className="goal-tag text-mono text-red">OUR CORE GOAL</span>
          <h3 className="goal-statement">
            "To create a bridge between <span className="text-red">learning technology</span> and <span className="text-white">applying technology</span> in the real world."
          </h3>
        </div>

        {/* "Our Two Worlds" Interactive Architecture Diagram */}
        <div className="home-two-worlds-wrapper glass-card">
          <div className="two-worlds-header text-center">
            <h3 className="two-worlds-title">From Learning to Real-World Innovation</h3>
            <p className="two-worlds-desc">
              We believe technology becomes more valuable when knowledge is transformed into real-world solutions. Our Learning division develops technology talent, while our Corporate Solutions division applies that expertise to solve real business problems.
            </p>
          </div>

          {/* Diagram Flow */}
          <div className="home-diagram-flow">
            {/* Central Hub */}
            <div className="home-diagram-central">
              <BrainCircuit size={28} className="text-red" />
              <span className="text-mono hub-title">LEARNCODE INFINITY</span>
            </div>

            <div className="home-diagram-branches">
              {/* Learn Side */}
              <div className="home-node node-left glass-card">
                <div className="node-badge text-mono">LEARN</div>
                <h4 className="node-title">Courses & Training</h4>
                <p className="node-sub">Internships | Workshops | Mentorship</p>
              </div>

              <div className="diagram-connector-plus">+</div>

              {/* Build Side */}
              <div className="home-node node-right glass-card">
                <div className="node-badge text-mono">BUILD</div>
                <h4 className="node-title">Corporate Projects</h4>
                <p className="node-sub">AI Solutions | Custom Software | Automation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Row */}
        <div className="home-mv-row">
          
          {/* Mission */}
          <div className="home-mv-card glass-card">
            <div className="mv-card-top">
              <Target size={26} className="text-red" />
              <h4 className="mv-card-title">Our Mission</h4>
            </div>
            <p className="mv-card-desc">
              To make technology learning practical and accessible while helping businesses solve real-world problems through innovative AI and technology solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="home-mv-card glass-card">
            <div className="mv-card-top">
              <Eye size={26} className="text-red" />
              <h4 className="mv-card-title">Our Vision</h4>
            </div>
            <p className="mv-card-desc">
              To become a trusted AI and technology ecosystem where people learn emerging technologies and businesses transform their ideas into impactful digital solutions.
            </p>
          </div>

        </div>

        {/* CTA to Full About Page */}
        {onNavigate && (
          <div className="home-about-more text-center">
            <Button variant="secondary" icon={ArrowRight} onClick={() => onNavigate('about')}>
              Explore Detailed About Us Page
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};

export default HomeAboutSection;
