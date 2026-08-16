import React from 'react';
import { X, CheckCircle2, ArrowRight, Zap, Shield, Cpu, Terminal } from 'lucide-react';
import Button from './Button';
import './FeatureDetailModal.css';

const FeatureDetailModal = ({ feature, onClose, onOpenContact }) => {
  if (!feature) return null;

  const Icon = feature.icon;

  const specifications = [
    'Sub-10ms Inference Latency across distributed edge nodes',
    'Automated fallback neural routing with 99.999% SLA uptime',
    'Custom fine-tuned LLaMA / DeepSeek / GPT hybrid orchestration',
    'End-to-end homomorphic data encryption at rest and in transit',
    'Zero data retention policy compliance (HIPAA, GDPR, SOC2)'
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="icon-wrapper">
              <Icon size={26} />
            </div>
            <div>
              <span className="modal-badge">{feature.badge}</span>
              <h2 className="modal-title">{feature.title}</h2>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-desc">{feature.description}</p>

          <div className="specs-section">
            <h3 className="specs-title text-mono">
              <Zap size={16} className="text-red" />
              SYSTEM ARCHITECTURE SPECIFICATIONS
            </h3>
            <ul className="specs-list">
              {specifications.map((spec, i) => (
                <li key={i} className="spec-item">
                  <CheckCircle2 size={16} className="text-red spec-check" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Code / Config Snippet */}
          <div className="code-box">
            <div className="code-box-header text-mono">
              <Terminal size={14} />
              <span>nexora_config.yaml</span>
            </div>
            <pre className="code-content">
{`pipeline:
  name: "${feature.id}_engine_v4"
  model: "nexora-neural-8x7b"
  acceleration: "tensorrt_fp16"
  security:
    zero_trust: true
    encryption: "aes_256_gcm"
  scaling:
    auto_replicate: true
    max_throughput: "50,000 req/sec"`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <Button variant="outline" onClick={onClose}>
            Close Specifications
          </Button>
          <Button variant="primary" icon={ArrowRight} onClick={() => { onClose(); onOpenContact(); }}>
            Deploy {feature.title.split(' ')[0]}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default FeatureDetailModal;
