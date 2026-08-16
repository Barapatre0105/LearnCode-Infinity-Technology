import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Calendar, Clock, Send, Sparkles } from 'lucide-react';
import Button from './Button';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    solution: 'AI Strategy & Consulting',
    timeframe: 'Immediate (1-2 weeks)',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="contact-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="contact-modal-header">
          <div className="contact-header-info">
            <div className="glass-pill">
              <Sparkles size={12} className="text-red" />
              <span>LEARNCODE INFINITY CONSULTATION</span>
            </div>
            <h2 className="contact-title">Let's Build Smarter Futures</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Form Body or Success Confirmation */}
        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              
              <div className="form-group">
                <label className="form-label text-mono">FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Alex Vance"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label text-mono">ENTERPRISE EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="contact@learncodeinfinitytechnology.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label text-mono">ORGANIZATION / COMPANY</label>
                <input
                  type="text"
                  placeholder="Nexus Dynamics Inc."
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label text-mono">PRIMARY AI FOCUS</label>
                <select
                  className="form-input form-select"
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                >
                  <option>AI Strategy & Consulting</option>
                  <option>Intelligent Automation Workflows</option>
                  <option>Data-Driven Predictive Insights</option>
                  <option>Secure & Scalable Infrastructure</option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label className="form-label text-mono">PROJECT SCOPE / OBJECTIVE</label>
              <textarea
                rows={3}
                placeholder="Describe your current tech stack or AI automation goals..."
                className="form-input form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="contact-form-footer">
              <span className="privacy-note">
                🔒 Enterprise NDA & Zero-Data-Leakage Guarantee included.
              </span>
              <Button type="submit" variant="primary" icon={Send}>
                Submit AI Consultation Request
              </Button>
            </div>
          </form>
        ) : (
          <div className="submission-success-box">
            <div className="success-icon-circle">
              <CheckCircle size={48} className="text-red" />
            </div>
            <h3 className="success-heading">Consultation Request Confirmed!</h3>
            <p className="success-text">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. A Nexora Principal AI Architect has been assigned to review your requirements for <strong>{formData.solution}</strong>.
            </p>
            <div className="success-details glass-card">
              <div className="detail-row">
                <Calendar size={16} className="text-red" />
                <span>Follow-Up Window: Within 4 Business Hours</span>
              </div>
              <div className="detail-row">
                <Clock size={16} className="text-red" />
                <span>Direct Access Link: Sent to {formData.email || 'your email'}</span>
              </div>
            </div>
            <Button variant="outline" icon={ArrowRight} onClick={handleReset}>
              Return to Platform Home
            </Button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactModal;
