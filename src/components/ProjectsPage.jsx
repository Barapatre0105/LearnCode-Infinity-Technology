import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import './ProjectsPage.css';

const ProjectsPage = ({ onOpenContact }) => {
  const [selectedTag, setSelectedTag] = useState('ALL');

  const tags = ['ALL', 'LLM & AGENTS', 'COMPUTER VISION', 'FINANCIAL AI', 'LOGISTICS', 'HEALTHCARE'];

  const caseStudies = [
    {
      id: 'cs-supply-chain',
      tag: 'LOGISTICS',
      title: 'Autonomous Supply Chain Neural Engine',
      client: 'Global Freight Systems Inc.',
      timeframe: '6-Month Enterprise Rollout',
      status: 'PRODUCTION DEPLOYED',
      summary: 'Self-correcting multi-agent reinforcement learning pipeline that dynamically predicts port bottlenecks, automates customs documentation, and re-routes cargo ships.',
      architecture: [
        'Multi-Agent System Orchestration using LangGraph',
        'Real-time Maritime & Satellite Ingestion Pipelines',
        'High-Frequency Container ETA Optimization Model'
      ],
      metrics: [
        { label: 'Routing Efficiency', value: '+450%' },
        { label: 'ETA Accuracy', value: '99.8%' },
        { label: 'Annual Savings', value: '$14.2M' }
      ],
      techStack: ['PyTorch', 'Multi-Agent AI', 'FastAPI', 'AWS Container', 'TypeScript', 'Redis']
    },
    {
      id: 'cs-medical-graph',
      tag: 'HEALTHCARE',
      title: 'Zero-Trust Medical Knowledge Graph & GenAI Agent',
      client: 'BioNexus Research Labs',
      timeframe: '4-Month Enterprise Deployment',
      status: 'PRODUCTION DEPLOYED',
      summary: 'Engineered an encrypted RAG system indexing over 5 Million clinical research papers with sub-second hybrid vector search and verifiable citation tracing.',
      architecture: [
        'Hybrid Vector Database with HNSW Indexing',
        'AES-256 Encrypted In-Memory Neural Inference',
        'SOC2 & HIPAA Compliant Data Pipeline'
      ],
      metrics: [
        { label: 'Research Speed', value: '10x Faster' },
        { label: 'Citation Accuracy', value: '99.9%' },
        { label: 'Security Level', value: 'SOC2 Type II' }
      ],
      techStack: ['LLM Orchestration', 'Vector DB', 'Zero-Trust AI', 'React 19', 'Python', 'FastAPI']
    },
    {
      id: 'cs-vision-defect',
      tag: 'COMPUTER VISION',
      title: 'Sub-Millisecond Microchip Vision Inspector',
      client: 'Apex Silicon Foundry',
      timeframe: '3-Month Deployment',
      status: 'PRODUCTION DEPLOYED',
      summary: 'High-performance edge computer vision system running custom CUDA kernels on NVIDIA Jetson cluster to detect microscopic silicon wafer defects at 60 FPS.',
      architecture: [
        'YOLOv8 Edge Neural Network with TensorRT Acceleration',
        'Multi-Camera 60 FPS Optical Stream Processing',
        'Sub-Millisecond Automated Defect Ejection Relay'
      ],
      metrics: [
        { label: 'Inspection Speed', value: '1.2ms' },
        { label: 'Defect Precision', value: '99.94%' },
        { label: 'Waste Reduction', value: '78%' }
      ],
      techStack: ['YOLOv8', 'NVIDIA CUDA', 'Edge Compute', 'TensorRT', 'C++', 'Python']
    },
    {
      id: 'cs-algo-risk',
      tag: 'FINANCIAL AI',
      title: 'Quantum-Safe Financial Risk Engine',
      client: 'Quantum Trading Partners',
      timeframe: '5-Month Deployment',
      status: 'PRODUCTION DEPLOYED',
      summary: 'Automated real-time stress testing platform evaluating multi-asset derivative portfolios against systemic market volatility events in milliseconds.',
      architecture: [
        'Distributed Microservices Grid on Kubernetes',
        'Real-Time Options & Futures Risk Surface Calculation',
        'Automated Hedging Signal Triggering Engine'
      ],
      metrics: [
        { label: 'Stress Test Speed', value: 'Sub-second' },
        { label: 'Portfolios Audited', value: '$2.4B+' },
        { label: 'System Uptime', value: '99.99%' }
      ],
      techStack: ['Financial AI', 'High-Frequency', 'Docker', 'Kubernetes', 'Go', 'GraphQL']
    },
    {
      id: 'cs-voice-intel',
      tag: 'LLM & AGENTS',
      title: 'Real-Time Conversational Voice Intelligence',
      client: 'OmniCustomer Telecom',
      timeframe: '4-Month Deployment',
      status: 'PRODUCTION DEPLOYED',
      summary: 'Human-like conversational AI agent processing live customer phone streams with sub-300ms latency, emotion detection, and instant CRM synchronization.',
      architecture: [
        'Custom Speech-to-Speech Streaming Transformer',
        'Real-Time Acoustic Emotion & Sentiment Analysis',
        'Automated CRM Ticket Resolution Pipeline'
      ],
      metrics: [
        { label: 'Audio Latency', value: '< 280ms' },
        { label: 'First-Call Resolution', value: '+62%' },
        { label: 'Agent Cost Deflection', value: '70%' }
      ],
      techStack: ['Voice AI', 'LLM Fine-Tuning', 'WebSockets', 'Python', 'React', 'AWS']
    }
  ];

  const filteredCaseStudies = selectedTag === 'ALL' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.tag === selectedTag);

  return (
    <div className="projects-page-wrapper">
      
      {/* Hero Header */}
      <section className="projects-page-hero">
        <div className="projects-hero-bg-grid" />
        <div className="projects-container">
          
          <div className="glass-pill">
            <Sparkles size={12} className="text-red" />
            <span>ENTERPRISE CASE STUDIES & SYSTEM ARCHITECTURE</span>
          </div>

          <h1 className="projects-main-heading">
            PROVEN ENTERPRISE <span className="text-red">AI DEPLOYMENTS</span>
          </h1>

          <p className="projects-hero-sub">
            Explore deep-dive technical case studies detailing how LearnCode Infinity Technology designs, builds, and deploys scalable neural architectures for global industry leaders.
          </p>

          {/* Filter Pills */}
          <div className="projects-filter-bar">
            {tags.map((t) => (
              <button
                key={t}
                className={`p-filter-btn ${selectedTag === t ? 'active' : ''}`}
                onClick={() => setSelectedTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Case Studies Dark Panel Layout List */}
      <section className="projects-panels-section">
        <div className="projects-container">
          
          <div className="panels-list">
            {filteredCaseStudies.map((cs) => (
              <div key={cs.id} className="case-study-dark-panel glass-card red-glow-hover">
                
                {/* Panel Header */}
                <div className="panel-header-row">
                  <div className="panel-badge-group">
                    <span className="panel-tag-pill text-mono">{cs.tag}</span>
                    <span className="panel-status-pill text-mono">
                      <span className="status-dot" />
                      {cs.status}
                    </span>
                  </div>
                  <div className="panel-meta-info text-mono text-muted">
                    <span>CLIENT: {cs.client}</span>
                    <span className="meta-sep">|</span>
                    <span>TIMEFRAME: {cs.timeframe}</span>
                  </div>
                </div>

                {/* Panel Title & Summary */}
                <div className="panel-content-grid">
                  
                  <div className="panel-main-col">
                    <h2 className="panel-title">{cs.title}</h2>
                    <p className="panel-summary">{cs.summary}</p>

                    {/* Architecture Details */}
                    <div className="panel-arch-box">
                      <span className="arch-box-title text-mono">— ARCHITECTURAL HIGHLIGHTS</span>
                      <ul className="arch-highlights-list">
                        {cs.architecture.map((item, idx) => (
                          <li key={idx} className="arch-item">
                            <CheckCircle2 size={16} className="text-red arch-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills (Red Outline Requirement) */}
                    <div className="panel-tech-stack">
                      <span className="tech-stack-label text-mono text-muted">TECH STACK ENGINE:</span>
                      <div className="tech-pills-row">
                        {cs.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-pill-red-outline text-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Metrics Panel */}
                  <div className="panel-metrics-col glass-card">
                    <span className="metrics-col-title text-mono text-red">— PRODUCTION METRICS</span>
                    <div className="metrics-stack">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-metric-item">
                          <span className="p-metric-value text-red">{m.value}</span>
                          <span className="p-metric-label text-mono">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="primary" 
                      fullWidth 
                      icon={ArrowRight}
                      onClick={onOpenContact}
                    >
                      Request Architecture Specs
                    </Button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
