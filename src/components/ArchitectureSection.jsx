import React from 'react';
import { ShieldCheck, Lock, Cpu, Server, Network, Terminal, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './ArchitectureSection.css';

const ArchitectureSection = () => {
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Enclave',
      desc: 'Isolated hardware security modules (HSM) with cryptographic memory isolation for every model node.'
    },
    {
      icon: Lock,
      title: 'Homomorphic Data Shield',
      desc: 'Compute directly on encrypted enterprise datasets without ever decrypting raw data.'
    },
    {
      icon: Network,
      title: 'Distributed Neural Swarm',
      desc: 'Sub-millisecond model routing across 40+ global edge locations with auto-failover.'
    },
    {
      icon: Server,
      title: 'Auditable Model Lineage',
      desc: 'Immutable ledger logging of every AI decision, model weights version, and token input.'
    }
  ];

  return (
    <section id="architecture" className="architecture-section">
      <div className="arch-container">
        
        <SectionTitle
          badge="ZERO-TRUST ENTERPRISE INFRASTRUCTURE"
          title="Engineered for Uncompromising"
          highlight="SECURITY & SCALE"
          subtitle="Built from the ground up for high-stakes industries including finance, defense, healthcare, and global enterprise logistics."
        />

        <div className="arch-grid">
          {securityFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="arch-card glass-card red-glow-hover">
                <div className="arch-card-header">
                  <div className="arch-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="arch-num text-mono">0{idx + 1}</span>
                </div>
                <h3 className="arch-title">{item.title}</h3>
                <p className="arch-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ArchitectureSection;
