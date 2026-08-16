import React from 'react';
import { Globe, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import Button from './Button';
import './Footer.css';

const Footer = ({ onOpenContact }) => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Main Footer Banner Bar matching Poster Bottom */}
        <div className="poster-footer-bar glass-card">
          <div className="website-link-group">
            <Globe className="globe-icon" size={20} />
            <a href="https://www.learncodeinfinitytechnology.com" target="_blank" rel="noopener noreferrer" className="website-url">
              www.learncodeinfinitytechnology.com
            </a>
          </div>

          <div className="footer-cta-wrapper">
            <button className="smarter-futures-btn text-mono" onClick={onOpenContact}>
              <span>LET'S BUILD SMARTER FUTURES</span>
              <ArrowRight size={20} className="red-arrow-icon" />
            </button>
          </div>
        </div>

        {/* Extended Footer Grid */}
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/learncode_infinity_logo.png" alt="LearnCode Infinity Technology" className="footer-learncode-logo" />
              <div className="footer-logo-text">
                <span className="footer-logo-title">LEARNCODE INFINITY</span>
                <span className="footer-logo-subtitle">TECHNOLOGY ECOSYSTEM</span>
              </div>
            </div>
            <p className="footer-tagline">
              LearnCode Infinity Technology. Powering practical skill learning and enterprise business transformation with intelligent AI & software solutions.
            </p>
            <div className="security-badge">
              <ShieldCheck size={16} className="text-red" />
              <span>SOC2 Type II & ISO 27001 Certified</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title text-mono">Solutions</h4>
            <ul>
              <li><a href="#solutions">AI Strategy & Consulting</a></li>
              <li><a href="#solutions">Intelligent Automation</a></li>
              <li><a href="#solutions">Data-Driven Insights</a></li>
              <li><a href="#solutions">Secure & Scalable AI</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title text-mono">Platform</h4>
            <ul>
              <li><a href="#demo">Neural Engine v4.2</a></li>
              <li><a href="#architecture">Enterprise Security</a></li>
              <li><a href="#architecture">API & Integrations</a></li>
              <li><a href="#demo">Performance Benchmarks</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title text-mono">Connect</h4>
            <ul>
              <li><a href="https://www.learncodeinfinitytechnology.com" target="_blank" rel="noreferrer">learncodeinfinitytechnology.com</a></li>
              <li><a href="#contact" onClick={onOpenContact}>Schedule Consultation</a></li>
              <li><a href="#contact" onClick={onOpenContact}>Partner Program</a></li>
              <li><a href="#contact" onClick={onOpenContact}>Support Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LearnCode Infinity Technology. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security Statement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
