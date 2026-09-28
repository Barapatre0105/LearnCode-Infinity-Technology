import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Loader2,
  Lock
} from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  // Eyebrow quote rotation state
  const eyebrows = [
    '"KNOWLEDGE COMPOUNDS. SO DOES ADOPTION."',
    'ZERO-DATA-LEAKAGE GUARANTEE',
    'FAST DISCOVERY SLA',
    '100% STRICT NDA PROTECTED'
  ];
  const [eyebrowIdx, setEyebrowIdx] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  // Eyebrow rotation timer (3.5s interval)
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setEyebrowIdx((prev) => (prev + 1) % eyebrows.length);
        setFadeState(true);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Copy state for email card
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@learncodeinfinitytechnology.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Form state & submission logic
  const [formData, setFormData] = useState({
    service: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    goals: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    if (!formData.service) newErrors.service = true;
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.goals.trim()) newErrors.goals = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      service: '',
      fullName: '',
      email: '',
      phone: '',
      company: '',
      goals: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div 
        className="contact-benchmark-modal glass-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Icon */}
        <button className="benchmark-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="benchmark-grid-layout">
          
          {/* LEFT COLUMN: Left-Aligned Text & Direct Contacts */}
          <div className="benchmark-left-col">
            
            {/* 2. Rotating Eyebrow Line */}
            <div className="benchmark-eyebrow-wrapper">
              <span className={`benchmark-eyebrow-text ${fadeState ? 'fade-in' : 'fade-out'}`}>
                <Sparkles size={13} className="eyebrow-sparkle" /> {eyebrows[eyebrowIdx]}
              </span>
            </div>

            {/* 3. Headline Block */}
            <h2 className="benchmark-headline">
              Let's Build Your <br />
              <span className="benchmark-ai-advantage-text">AI Advantage.</span>
            </h2>

            {/* 4. Supporting Paragraph */}
            <p className="benchmark-subtitle">
              Whether you need a structured learning path for your team or a full enterprise AI deployment, our team is ready to scope it with you.
            </p>

            {/* 5. Contact Cards List */}
            <div className="benchmark-cards-list">
              
              {/* Card 1: Direct Pipeline */}
              <div className="benchmark-contact-card">
                <div className="card-left-group">
                  <div className="card-icon-box box-blue">
                    <Mail size={18} />
                  </div>
                  <div className="card-text-stack">
                    <span className="card-label">DIRECT PIPELINE</span>
                    <a href="mailto:info@learncodeinfinitytechnology.com" className="card-value-link">
                      info@learncodeinfinitytechnology.com
                    </a>
                  </div>
                </div>
                <button 
                  className={`card-copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>

              {/* Card 2: Hot Line Support */}
              <div className="benchmark-contact-card">
                <div className="card-left-group">
                  <div className="card-icon-box box-purple">
                    <Phone size={18} />
                  </div>
                  <div className="card-text-stack">
                    <span className="card-label">HOT LINE SUPPORT</span>
                    <div className="card-value-multiline">
                      <p><strong>IN India:</strong> +91 72195 48968</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Our Locations */}
              <div className="benchmark-contact-card">
                <div className="card-left-group">
                  <div className="card-icon-box box-pink">
                    <MapPin size={18} />
                  </div>
                  <div className="card-text-stack">
                    <span className="card-label">OUR LOCATIONS</span>
                    <div className="card-value-multiline location-stack">
                      <div className="loc-item">
                        <span className="loc-head text-pink">NAGPUR, INDIA (HQ)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Project Configurator Form Panel */}
          <div className="benchmark-right-col">
            <div className="configurator-panel-card">
              
              {!isSuccess ? (
                <>
                  <div className="configurator-header">
                    <h3 className="config-title">Project Configurator</h3>
                    <p className="config-subtitle">
                      Tell us what you need — training, deployment, or both — and we'll route it to the right team.
                    </p>
                  </div>

                  <form className="configurator-form" onSubmit={handleSubmit} noValidate>
                    
                    {/* 1. Select field */}
                    <div className={`config-field-group ${errors.service ? 'field-error' : ''}`}>
                      <select 
                        className="config-select"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                      >
                        <option value="" disabled hidden>Select what you need *</option>
                        <option value="training">AI Training & Skill Programs</option>
                        <option value="deployment">Enterprise AI Deployment & Engineering</option>
                        <option value="software">Full Stack Software & Cloud Architecture</option>
                        <option value="both">Both Training & Deployment</option>
                      </select>
                      {errors.service && <span className="error-msg">Please select an option</span>}
                    </div>

                    {/* Stacked Single-Column Inputs */}
                    <div className="config-fields-stacked">
                      
                      {/* Full Name */}
                      <div className={`config-field-group ${errors.fullName ? 'field-error' : ''}`}>
                        <input 
                          type="text"
                          className="config-input"
                          placeholder="Full Name *"
                          value={formData.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                        />
                        {errors.fullName && <span className="error-msg">Full Name is required</span>}
                      </div>

                      {/* Work Email */}
                      <div className={`config-field-group ${errors.email ? 'field-error' : ''}`}>
                        <input 
                          type="email"
                          className="config-input"
                          placeholder="Work Email *"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                        {errors.email && <span className="error-msg">Valid work email required</span>}
                      </div>

                      {/* Phone Number (Optional) */}
                      <div className="config-field-group">
                        <input 
                          type="tel"
                          className="config-input"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                      </div>

                      {/* Company Name (Optional) */}
                      <div className="config-field-group">
                        <input 
                          type="text"
                          className="config-input"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                        />
                      </div>

                    </div>

                    {/* Textarea */}
                    <div className={`config-field-group ${errors.goals ? 'field-error' : ''}`}>
                      <textarea
                        className="config-textarea"
                        rows={3}
                        placeholder="Briefly describe your goals, team size, or timeline *"
                        value={formData.goals}
                        onChange={(e) => handleChange('goals', e.target.value)}
                      />
                      {errors.goals && <span className="error-msg">Please describe your goals or timeline</span>}
                    </div>

                    {/* Trust Line */}
                    <div className="config-trust-line">
                      <Lock size={14} className="trust-icon-lock" />
                      <span>YOUR DETAILS STAY CONFIDENTIAL</span>
                    </div>

                    {/* High-Contrast Submit Button */}
                    <button 
                      type="submit" 
                      className="config-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="spinner" /> Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                  </form>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="configurator-success">
                  <div className="success-badge-circle">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="success-config-title">Configuration Submitted!</h3>
                  <p className="success-config-subtitle">
                    Thank you, <strong>{formData.fullName}</strong>. Your project parameters have been routed directly to our engineering architects.
                  </p>
                  
                  <div className="success-summary-box">
                    <div className="summary-item">
                      <span className="sum-label">SERVICE:</span>
                      <span className="sum-val">{formData.service || 'Custom Enterprise Engineering'}</span>
                    </div>
                    <div className="summary-item">
                      <span className="sum-label">DISCOVERY SLA:</span>
                      <span className="sum-val">Proposal & Tech Stack Audit within 4 Hours</span>
                    </div>
                  </div>

                  <button className="config-submit-btn" onClick={handleReset}>
                    Done & Return to Platform
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactModal;
