import React from 'react';
import { Cpu, Terminal, Database, Cloud, Code, Shield, CpuIcon, Layers, Server, Workflow } from 'lucide-react';
import './TechMarqueeSection.css';

const TechMarqueeSection = () => {
  const technologies = [
    { name: 'Python', category: 'CORE AI', icon: Terminal },
    { name: 'PyTorch', category: 'NEURAL NETWORKS', icon: Cpu },
    { name: 'TensorFlow', category: 'DEEP LEARNING', icon: CpuIcon },
    { name: 'OpenAI API', category: 'LLM & AGENTS', icon: Workflow },
    { name: 'NVIDIA CUDA', category: 'GPU COMPUTE', icon: Server },
    { name: 'React 19', category: 'FRONTEND UI', icon: Code },
    { name: 'TypeScript', category: 'TYPE SYSTEM', icon: Code },
    { name: 'FastAPI', category: 'MICROSERVICES', icon: Layers },
    { name: 'Docker', category: 'CONTAINERS', icon: Database },
    { name: 'Kubernetes', category: 'ORCHESTRATION', icon: Cloud },
    { name: 'AWS Cloud', category: 'INFRASTRUCTURE', icon: Cloud },
    { name: 'MongoDB', category: 'VECTOR DB', icon: Database },
    { name: 'Redis', category: 'IN-MEMORY CACHE', icon: Database },
    { name: 'Zero-Trust', category: 'SECURITY', icon: Shield }
  ];

  // Duplicate for continuous seamless marquee loop
  const marqueeList = [...technologies, ...technologies];

  return (
    <section id="tech" className="tech-marquee-section">
      
      <div className="marquee-header">
        <span className="text-mono text-red marquee-subhead">— ENTERPRISE TECH STACK</span>
        <h3 className="marquee-title">POWERING HIGH-PERFORMANCE NEURAL INFRASTRUCTURE</h3>
      </div>

      <div className="marquee-track-container">
        
        {/* Left & Right Overlay Fades */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track">
          {marqueeList.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="tech-chip glass-card">
                <div className="tech-chip-icon">
                  <Icon size={20} className="text-red" />
                </div>
                <div className="tech-chip-info">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-category text-mono">{tech.category}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechMarqueeSection;
