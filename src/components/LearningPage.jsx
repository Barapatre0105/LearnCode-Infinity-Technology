import React, { useState } from 'react';
import { GraduationCap, Clock, Users, Star, ArrowRight, Sparkles, BookOpen, CheckCircle, Code, Shield, Cpu, Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import './LearningPage.css';

const LearningPage = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Programs' },
    { id: 'ai', label: 'AI & Deep Learning' },
    { id: 'fullstack', label: 'Full-Stack Engineering' },
    { id: 'security', label: 'AI Security & Cloud' }
  ];

  const courses = [
    {
      id: 'ai-eng',
      category: 'ai',
      tag: 'RECOMMENDED',
      level: 'ADVANCED',
      title: 'Full-Stack Enterprise AI Engineering',
      duration: '12 Weeks',
      students: '2,400+ Enrolled',
      rating: '4.95 / 5.0',
      description: 'Master end-to-end AI deployment—from custom PyTorch neural architecture design to scalable React 19 dashboards and cloud microservices.',
      topics: [
        'Custom PyTorch & Transformer Architecture',
        'LLM RAG Pipeline & Vector Search Optimization',
        'FastAPI Microservices & Docker Containerization',
        'Real-time React 19 Dashboard UI Design'
      ],
      icon: Cpu,
      accentColor: 'red'
    },
    {
      id: 'multi-agent',
      category: 'ai',
      tag: 'HOT & TRENDING',
      level: 'MASTERCLASS',
      title: 'Autonomous Multi-Agent System Architecture',
      duration: '6 Weeks',
      students: '1,850+ Enrolled',
      rating: '4.98 / 5.0',
      description: 'Learn to design, orchestrate, and deploy self-correcting multi-agent AI networks capable of handling complex enterprise workflows.',
      topics: [
        'Multi-Agent Coordination & Communication Protocols',
        'LangGraph & AutoGen Framework Deep-Dive',
        'Self-Healing & Error Correction Mechanisms',
        'Enterprise Security & Function Tool-Calling'
      ],
      icon: Zap,
      accentColor: 'red'
    },
    {
      id: 'deep-learning',
      category: 'ai',
      tag: 'INTENSIVE',
      level: 'INTERMEDIATE',
      title: 'Applied Deep Learning & Neural Networks',
      duration: '8 Weeks',
      students: '3,100+ Enrolled',
      rating: '4.92 / 5.0',
      description: 'Hands-on training in convolutional networks, recurrent models, and reinforcement learning algorithms applied to real industrial datasets.',
      topics: [
        'Neural Network Mathematics & Optimization',
        'Computer Vision & Object Detection (YOLOv8)',
        'Time-Series Forecasting & Anomaly Detection',
        'TensorRT & GPU Performance Acceleration'
      ],
      icon: BookOpen,
      accentColor: 'red'
    },
    {
      id: 'ai-sec',
      category: 'security',
      tag: 'EXECUTIVE',
      level: 'ADVANCED',
      title: 'Zero-Trust AI Security & Privacy Compliance',
      duration: '4 Weeks',
      students: '950+ Enrolled',
      rating: '4.96 / 5.0',
      description: 'Protect AI models against prompt injection, data poisoning, and model inversion. Ensure SOC2, HIPAA, and ISO 27001 regulatory compliance.',
      topics: [
        'Adversarial Attack Simulation & Mitigation',
        'Differential Privacy & Encrypted Inference',
        'SOC2 & Enterprise Regulatory Compliance',
        'Audit Logging & Zero-Data-Leakage Architecture'
      ],
      icon: Shield,
      accentColor: 'red'
    },
    {
      id: 'fullstack-dev',
      category: 'fullstack',
      tag: 'BOOTCAMP',
      level: 'ALL LEVELS',
      title: 'Full-Stack Modern Web & Cloud Architecture',
      duration: '10 Weeks',
      students: '4,200+ Enrolled',
      rating: '4.90 / 5.0',
      description: 'Build high-throughput web applications using modern TypeScript, React, Vite, Node.js, and cloud container orchestration.',
      topics: [
        'React 19, Hooks, & State Management',
        'TypeScript Production Best Practices',
        'RESTful & GraphQL API Design',
        'AWS Deployment & CI/CD Pipelines'
      ],
      icon: Code,
      accentColor: 'red'
    },
    {
      id: 'edge-ai',
      category: 'ai',
      tag: 'SPECIALIZED',
      level: 'MASTERCLASS',
      title: 'Edge AI & Computer Vision with CUDA',
      duration: '6 Weeks',
      students: '1,200+ Enrolled',
      rating: '4.94 / 5.0',
      description: 'Optimize deep learning inference on embedded edge hardware (NVIDIA Jetson, Raspberry Pi) with custom CUDA kernels.',
      topics: [
        'CUDA C++ Kernel Optimization',
        'ONNX Runtime & Quantization Techniques',
        'Real-time Video Stream Processing',
        'Embedded Hardware Deployment'
      ],
      icon: Cpu,
      accentColor: 'red'
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeFilter);

  return (
    <div className="learning-page-wrapper">
      
      {/* Hero Header */}
      <section className="learning-hero">
        <div className="learning-hero-bg-grid" />
        <div className="learning-container">
          
          <div className="glass-pill">
            <Sparkles size={12} className="text-red" />
            <span>LEARNCODE ACADEMY & NEURAL LABS</span>
          </div>

          <h1 className="learning-main-heading">
            MASTER ENTERPRISE <span className="text-red">AI & SOFTWARE</span> ENGINEERING
          </h1>

          <p className="learning-hero-sub">
            Gain production-grade skills through hands-on neural sandbox labs, direct mentorship from senior AI architects, and real-world project portfolios.
          </p>

          <div className="learning-hero-stats">
            <div className="l-stat-box glass-card">
              <span className="l-stat-num text-red">15,000+</span>
              <span className="l-stat-txt">Global Alumni</span>
            </div>
            <div className="l-stat-box glass-card">
              <span className="l-stat-num text-red">98%</span>
              <span className="l-stat-txt">Career Placement</span>
            </div>
            <div className="l-stat-box glass-card">
              <span className="l-stat-num text-red">45+</span>
              <span className="l-stat-txt">Hands-on Neural Labs</span>
            </div>
          </div>

        </div>
      </section>

      {/* Courses Section */}
      <section className="learning-courses-section">
        <div className="learning-container">
          
          <SectionTitle 
            badge="CURRICULUM CATALOG"
            title="INDUSTRY-ALIGNED PROGRAMS"
            subtitle="Choose from specialized AI immersions designed for engineers, researchers, and tech leaders."
            center
          />

          {/* Filter Pills */}
          <div className="learning-filter-bar">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`l-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="learning-grid">
            {filteredCourses.map((course) => {
              const IconComp = course.icon;
              return (
                <div key={course.id} className="course-card glass-card red-glow-hover">
                  
                  {/* Card Top Badges */}
                  <div className="course-card-top">
                    <div className="course-icon-wrapper">
                      <IconComp size={24} className="text-red" />
                    </div>
                    <div className="course-tags-group">
                      <span className="red-accent-tag">{course.tag}</span>
                      <span className="level-tag text-mono">{course.level}</span>
                    </div>
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-desc">{course.description}</p>

                  {/* Syllabus Topics */}
                  <div className="course-topics-box">
                    <span className="topics-heading text-mono">CORE MODULES COVERED:</span>
                    <ul className="topics-list">
                      {course.topics.map((t, idx) => (
                        <li key={idx} className="topic-item">
                          <CheckCircle size={14} className="text-red topic-icon" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metadata Bar */}
                  <div className="course-meta-bar">
                    <div className="meta-item">
                      <Clock size={14} className="text-red" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={14} className="text-muted" />
                      <span>{course.students}</span>
                    </div>
                    <div className="meta-item">
                      <Star size={14} className="text-red fill-red" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="course-card-footer">
                    <Button 
                      variant="primary" 
                      fullWidth 
                      icon={ArrowRight}
                      onClick={onOpenContact}
                    >
                      Enroll & Download Syllabus
                    </Button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default LearningPage;
