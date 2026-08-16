import React from 'react';
import { Search, Compass, Cpu, Rocket, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';
import './ProcessTimeline.css';

const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      phase: 'PHASE 01',
      title: 'Discovery & Data Audit',
      icon: Search,
      subtitle: 'NEURAL DATA MAPPING & INFRASTRUCTURE AUDIT',
      description: 'We audit legacy infrastructure, assess data density, identify high-ROI automation bottlenecks, and establish zero-trust security parameters.',
      deliverables: [
        'Data Ecosystem Vulnerability & Readiness Audit',
        'Enterprise AI Feasibility & ROI Roadmap',
        'Security & Zero-Data-Leakage Specification'
      ]
    },
    {
      number: '02',
      phase: 'PHASE 02',
      title: 'Neural Architecture Design',
      icon: Compass,
      subtitle: 'MODEL TOPOLOGY & WORKFLOW BLUEPRINT',
      description: 'Our AI architects design bespoke neural network topologies, agent communication protocols, vector database schemas, and microservice APIs.',
      deliverables: [
        'Custom Model Topology Blueprint',
        'Vector DB & RAG Knowledge Graph Schema',
        'API & Orchestration Architecture Spec'
      ]
    },
    {
      number: '03',
      phase: 'PHASE 03',
      title: 'Model Training & Fine-Tuning',
      icon: Cpu,
      subtitle: 'DISTRIBUTED GPU COMPUTING & BENCHMARKING',
      description: 'We execute multi-GPU cluster training, hyperparameter tuning, RLHF alignment, and fine-tuning on domain-specific enterprise datasets.',
      deliverables: [
        'Domain-Adapted LLM / Vision Neural Weights',
        'Sub-Millisecond Benchmark Test Reports',
        'Adversarial Security & Bias Compliance Testing'
      ]
    },
    {
      number: '04',
      phase: 'PHASE 04',
      title: 'Continuous Deployment & SLA',
      icon: Rocket,
      subtitle: 'ZERO-DOWNTIME DEPLOYMENT & 24/7 MONITORING',
      description: 'Seamless cloud container deployment with automated telemetry, real-time drift detection, zero-downtime hot reloads, and SOC2 SLA uptime.',
      deliverables: [
        'Kubernetes Microservices Deployment',
        'Automated Model Drift & Telemetry Dashboard',
        '24/7 Priority SLA & AI Maintenance Support'
      ]
    }
  ];

  return (
    <div className="process-timeline-wrapper">
      
      {/* Circuit Connector Main Track Line */}
      <div className="circuit-track-line">
        <div className="circuit-pulse-glow" />
      </div>

      <div className="timeline-steps-grid">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <div key={idx} className="timeline-step-node glass-card red-glow-hover">
              
              {/* Step Top Header */}
              <div className="step-node-header">
                <div className="step-number-badge text-mono text-red">
                  {step.number}
                </div>
                <div className="step-icon-box">
                  <StepIcon size={26} className="text-red step-main-icon" />
                </div>
              </div>

              {/* Glowing Connector Circuit Dot */}
              <div className="circuit-node-dot">
                <div className="inner-glow-dot" />
              </div>

              {/* Step Content */}
              <div className="step-node-body">
                <span className="step-phase text-mono">{step.phase}</span>
                <h3 className="step-title">{step.title}</h3>
                <span className="step-subtitle text-mono text-red">{step.subtitle}</span>
                <p className="step-desc">{step.description}</p>

                <div className="step-deliverables-box">
                  <span className="deliv-heading text-mono">KEY PHASE DELIVERABLES:</span>
                  <ul className="deliv-list">
                    {step.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="deliv-item">
                        <CheckCircle2 size={14} className="text-red deliv-icon" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default ProcessTimeline;
