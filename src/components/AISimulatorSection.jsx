import React, { useState } from 'react';
import { Play, RotateCcw, Check, Sparkles, Cpu, Activity, Server, Layers } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import './AISimulatorSection.css';

const AISimulatorSection = ({ onOpenContact }) => {
  const [activeTask, setActiveTask] = useState('supply_chain');
  const [neuralSpeed, setNeuralSpeed] = useState(85);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState({
    latency: '1.2ms',
    throughput: '48,200 req/s',
    accuracy: '99.94%',
    costReduction: '42.8%'
  });

  const tasks = [
    {
      id: 'supply_chain',
      name: 'Autonomous Supply Chain Routing',
      desc: 'Optimizes global logistics paths across 10,000+ nodes under high latency.',
      baseLatency: '1.2ms',
      baseThroughput: '48,200 req/s'
    },
    {
      id: 'fraud_matrix',
      name: 'Real-Time Financial Fraud Matrix',
      desc: 'Evaluates transaction vectors with zero false positives.',
      baseLatency: '0.8ms',
      baseThroughput: '120,500 req/s'
    },
    {
      id: 'healthcare_gen',
      name: 'Genomic Pattern Synthesis',
      desc: 'Predictive protein folding and biomarker classification.',
      baseLatency: '4.5ms',
      baseThroughput: '18,900 req/s'
    }
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setLogs([]);

    const taskObj = tasks.find(t => t.id === activeTask);

    const logMessages = [
      `[SYS_INIT] Initializing Nexora Core v4.2 Neural Cluster...`,
      `[SECURITY] Verifying Zero-Trust Enclave & AES-256 Certificates... OK`,
      `[QUANTIZATION] Loading FP16 Weights for ${taskObj.name}...`,
      `[TENSOR_ACCEL] Allocating 512 Tensor Cores across Edge Nodes...`,
      `[EXECUTION] Processing 1,000,000 synthetic test vectors...`,
      `[RESULT] Completed in ${taskObj.baseLatency}! Accuracy: 99.94%.`
    ];

    logMessages.forEach((msg, idx) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
        if (idx === logMessages.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 350);
    });
  };

  return (
    <section id="demo" className="simulator-section">
      <div className="simulator-container">
        
        <SectionTitle
          badge="INTERACTIVE AI ENGINE DEMO"
          title="Experience the Power of"
          highlight="NEXORA NEURAL LABS"
          subtitle="Test our high-throughput AI orchestration engine live in your browser. Configure parameters and observe real-world performance metrics."
          centered
        />

        <div className="simulator-card glass-card">
          
          {/* Top Panel Controls */}
          <div className="sim-control-panel">
            
            <div className="sim-task-selector">
              <span className="control-label text-mono">1. SELECT AI WORKLOAD</span>
              <div className="task-buttons-grid">
                {tasks.map(t => (
                  <button
                    key={t.id}
                    className={`task-btn ${activeTask === t.id ? 'task-btn-active' : ''}`}
                    onClick={() => setActiveTask(t.id)}
                  >
                    <Cpu size={16} className="task-icon" />
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sim-slider-group">
              <div className="slider-header text-mono">
                <span>2. TENSOR THROTTLE SPEED ({neuralSpeed}%)</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={neuralSpeed}
                onChange={(e) => setNeuralSpeed(Number(e.target.value))}
                className="sim-range-input"
              />
            </div>

            <div className="sim-action-area">
              <Button
                variant="primary"
                size="md"
                icon={Play}
                onClick={handleRunSimulation}
                disabled={isRunning}
              >
                {isRunning ? 'Synthesizing Neural Workload...' : 'Execute AI Workload'}
              </Button>
            </div>

          </div>

          {/* Middle Metrics Dashboard Grid */}
          <div className="sim-metrics-grid">
            <div className="sim-metric-card">
              <Activity size={20} className="sim-icon" />
              <div className="sim-metric-info">
                <span className="sim-lbl">Inference Latency</span>
                <span className="sim-val neon-red-text">{metrics.latency}</span>
              </div>
            </div>

            <div className="sim-metric-card">
              <Server size={20} className="sim-icon" />
              <div className="sim-metric-info">
                <span className="sim-lbl">Cluster Throughput</span>
                <span className="sim-val neon-red-text">{metrics.throughput}</span>
              </div>
            </div>

            <div className="sim-metric-card">
              <Sparkles size={20} className="sim-icon" />
              <div className="sim-metric-info">
                <span className="sim-lbl">Neural Precision</span>
                <span className="sim-val neon-red-text">{metrics.accuracy}</span>
              </div>
            </div>

            <div className="sim-metric-card">
              <Layers size={20} className="sim-icon" />
              <div className="sim-metric-info">
                <span className="sim-lbl">OpEx Savings</span>
                <span className="sim-val neon-red-text">{metrics.costReduction}</span>
              </div>
            </div>
          </div>

          {/* Bottom Real-time Stream Terminal */}
          <div className="sim-terminal-box">
            <div className="terminal-header text-mono">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span>NEXORA_NEURAL_STREAM :: OUTPUT_LOGS</span>
              {isRunning && <span className="status-live">LIVE EXECUTION</span>}
            </div>

            <div className="terminal-body">
              {logs.length === 0 ? (
                <div className="terminal-placeholder">
                  Press <strong>"Execute AI Workload"</strong> to trigger real-time neural synthesis stream...
                </div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="log-line">
                    <span className="log-arrow">›</span> {log}
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AISimulatorSection;
