import React from 'react';
import { Cpu, Cog, BarChart3, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ProcessTimeline from './ProcessTimeline';
import Button from './Button';
import './ServicesPage.css';

const ServicesPage = ({ onOpenContact }) => {
  const serviceOfferings = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy & Neural Consulting',
      icon: Cpu,
      tagline: 'Enterprise Neural Architecture & AI Roadmap Planning',
      description: 'We partner with enterprise leadership to map high-impact AI capabilities, formulate scalable infrastructure roadmaps, and assess zero-trust data compliance.',
      features: [
        'Enterprise AI Readiness & Bottleneck Mapping',
        'Custom Model Topology Selection (Transformers, CNNs, RL)',
        'Cloud & On-Premises Hybrid Compute Strategy',
        'ROI & Cost-Efficiency Projections'
      ]
    },
    {
      id: 'intelligent-auto',
      title: 'Intelligent Autonomous Workflows',
      icon: Cog,
      tagline: 'Self-Healing Process Automation & Multi-Agent Orchestration',
      description: 'Replace brittle legacy automation with adaptive multi-agent AI models that handle complex edge cases, document parsing, and dynamic decision trees.',
      features: [
        'Multi-Agent System Orchestration (LangGraph / AutoGen)',
        'Unstructured Document & Multimodal Ingestion',
        'Autonomous Exception Handling & Human-in-the-Loop',
        'API Microservices Integration'
      ]
    },
    {
      id: 'predictive-analytics',
      title: 'Data-Driven Predictive Insights',
      icon: BarChart3,
      tagline: 'High-Density Predictive Modeling & Real-Time Analytics',
      description: 'Transform complex enterprise data streams into actionable predictive intelligence—forecasting market demand, risk exposure, and operational drift.',
      features: [
        'Real-Time Anomaly & Defect Detection Engines',
        'High-Frequency Time-Series & Market Forecasting',
        'Vector Search & Knowledge Graph Indexing',
        'Custom BI Dashboards & Telemetry'
      ]
    },
    {
      id: 'secure-solutions',
      title: 'Secure & Scalable AI Infrastructure',
      icon: ShieldCheck,
      tagline: 'Zero-Trust Architecture, Encryption, & SOC2 Compliance',
      description: 'Deploy production AI systems protected by enterprise zero-trust security parameters, differential privacy, and SOC2 compliant container pipelines.',
      features: [
        'Adversarial Attack & Prompt Injection Shielding',
        'Encrypted Inference & Private Local LLM Deployment',
        'SOC2, HIPAA, & ISO 27001 Regulatory Frameworks',
        '24/7 Hot-Reload & Automated Telemetry Monitoring'
      ]
    }
  ];

  return (
    <div className="services-page-wrapper">
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-bg-grid" />
        <div className="services-container">
          
          <div className="glass-pill">
            <Sparkles size={12} className="text-red" />
            <span>ENTERPRISE CORPORATE SERVICES</span>
          </div>

          <h1 className="services-main-heading">
            TAILORED <span className="text-red">AI SOLUTIONS</span> FOR ENTERPRISE LEADERS
          </h1>

          <p className="services-hero-sub">
            From strategic neural architecture design to 24/7 continuous autonomous deployment, we power digital transformation for global enterprises.
          </p>

          <div className="services-cta-bar">
            <Button variant="primary" size="lg" icon={ArrowRight} onClick={onOpenContact}>
              Request Enterprise Audit
            </Button>
          </div>

        </div>
      </section>

      {/* Services Detail Offerings */}
      <section className="services-offerings-section">
        <div className="services-container">
          
          <SectionTitle 
            badge="CAPABILITY PILLARS"
            title="CORE SERVICE OFFERINGS"
            subtitle="Deep-dive into our modular enterprise AI engineering capabilities."
            center
          />

          <div className="services-offerings-grid">
            {serviceOfferings.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div key={srv.id} className="service-offer-card glass-card red-glow-hover">
                  <div className="srv-card-header">
                    <div className="srv-icon-box">
                      <SrvIcon size={28} className="text-red" />
                    </div>
                    <h3 className="srv-card-title">{srv.title}</h3>
                  </div>

                  <p className="srv-tagline text-red text-mono">{srv.tagline}</p>
                  <p className="srv-desc">{srv.description}</p>

                  <div className="srv-features-box">
                    <span className="srv-feat-heading text-mono">TECHNICAL CAPABILITIES:</span>
                    <ul className="srv-feat-list">
                      {srv.features.map((f, fIdx) => (
                        <li key={fIdx} className="srv-feat-item">
                          <CheckCircle2 size={15} className="text-red srv-feat-icon" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="services-timeline-section">
        <div className="services-container">
          
          <SectionTitle 
            badge="EXECUTION METHODOLOGY"
            title="ENTERPRISE DEPLOYMENT PROCESS"
            subtitle="A rigorous 4-phase engineering pipeline designed for zero risk and maximum ROI."
            center
          />

          <ProcessTimeline />

        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
