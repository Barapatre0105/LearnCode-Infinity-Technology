import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Activity, Cpu, ShieldCheck, Database, Layers, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import './FeaturedProjectsSection.css';

const FeaturedProjectsSection = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'enterprise', label: 'Enterprise AI' },
    { id: 'automation', label: 'Automation' },
    { id: 'vision', label: 'Computer Vision' }
  ];

  const projects = [
    {
      id: 'supply-chain',
      category: 'automation',
      title: 'Autonomous Supply Chain Neural Engine',
      client: 'Global Freight & Logistics Corp',
      description: 'Built a self-correcting multi-agent reinforcement learning pipeline that dynamically re-routes global cargo shipments during port congestion.',
      metrics: [
        { label: 'Routing Efficiency', value: '+450%' },
        { label: 'ETA Accuracy', value: '99.8%' }
      ],
      tags: ['PyTorch', 'Multi-Agent AI', 'FastAPI', 'AWS'],
      badge: 'CASE STUDY 01'
    },
    {
      id: 'knowledge-graph',
      category: 'enterprise',
      title: 'GenAI Knowledge Graph & Clinical Agent',
      client: 'Biomedical Research Institute',
      description: 'Engineered a Zero-Trust RAG (Retrieval-Augmented Generation) system parsing 5M+ clinical research documents with real-time citation accuracy.',
      metrics: [
        { label: 'Research Retrieval', value: '10x Speed' },
        { label: 'Data Security', value: 'SOC2 Type II' }
      ],
      tags: ['LLM Orchestration', 'Vector DB', 'Zero-Trust', 'React'],
      badge: 'CASE STUDY 02'
    },
    {
      id: 'vision-audit',
      category: 'vision',
      title: 'Sub-Millisecond Industrial Vision Inspector',
      client: 'Precision Semiconductor Mfg',
      description: 'Deployed high-speed edge computer vision neural models detecting microscopic microchip defects directly on assembly line conveyor belts.',
      metrics: [
        { label: 'Defect Precision', value: '99.94%' },
        { label: 'Inference Speed', value: '1.2ms' }
      ],
      tags: ['YOLOv8', 'NVIDIA CUDA', 'Edge AI', 'C++'],
      badge: 'CASE STUDY 03'
    },
    {
      id: 'algo-risk',
      category: 'enterprise',
      title: 'Algorithmic Financial Risk Engine',
      client: 'Apex Quantitative Capital',
      description: 'Developed an automated real-time risk compliance engine capable of auditing multi-asset portfolios against volatile global market stress test scenarios.',
      metrics: [
        { label: 'Stress Audit Speed', value: 'Sub-second' },
        { label: 'Capital Protected', value: '$2.4B+' }
      ],
      tags: ['Financial AI', 'High-Frequency', 'Docker', 'Kubernetes'],
      badge: 'CASE STUDY 04'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="featured-projects-section">
      <div className="projects-container">
        
        <SectionTitle 
          badge="PROVEN IMPACT"
          title="FEATURED ENTERPRISE CASE STUDIES"
          subtitle="Real-World Intelligent Systems Built and Deployed for Global Industry Leaders"
          center
        />

        {/* Filter Tabs */}
        <div className="project-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-tab-btn ${activeCategory === cat.id ? 'active-tab' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card glass-card red-glow-hover">
              
              <div className="project-card-header">
                <span className="project-badge text-mono">{proj.badge}</span>
                <span className="project-client text-mono text-muted">{proj.client}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>

                {/* Impact Metrics */}
                <div className="project-metrics-row">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="p-metric-box">
                      <span className="p-metric-val text-red">{m.value}</span>
                      <span className="p-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill text-mono">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <button className="project-action-btn" onClick={onOpenContact}>
                  <span>Request Full Architecture Specs</span>
                  <ArrowRight size={16} className="arrow-icon text-red" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="projects-bottom-bar glass-card">
          <div className="bottom-bar-content">
            <h4 className="bottom-bar-heading">HAVE A CUSTOM ENTERPRISE REQUIREMENT?</h4>
            <p className="bottom-bar-sub">We design custom neural network architectures tailored specifically to your data ecosystem.</p>
          </div>
          <Button variant="primary" icon={ExternalLink} onClick={onOpenContact}>
            Request Bespoke AI Proposal
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
