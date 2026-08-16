import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Target, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Layers, 
  BrainCircuit, 
  Code2, 
  Building2, 
  Compass, 
  Award,
  ShieldCheck
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import './AboutPage.css';

const AboutPage = ({ onOpenContact }) => {
  const learningTopics = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Data Analytics',
    'Python Development',
    'Web Development',
    'SQL & Databases',
    'Power BI',
    'Generative AI',
    'Software Development',
    'Internships',
    'Live Projects',
    'Workshops'
  ];

  const corporateServices = [
    'AI/ML Solutions',
    'Custom Software Development',
    'Web Application Development',
    'Data Analytics Solutions',
    'Business Automation',
    'API Development',
    'Backend Development',
    'Database Solutions',
    'AI-powered Applications',
    'Workflow Automation',
    'Maintenance & Support'
  ];

  const whyChooseUsCards = [
    {
      icon: GraduationCap,
      title: 'Practical Learning',
      desc: 'We focus on hands-on learning and real-world projects rather than only theoretical concepts.'
    },
    {
      icon: BrainCircuit,
      title: 'Industry-Relevant Technologies',
      desc: 'Our learning and development ecosystem focuses on modern technologies including AI, ML, data, software development and automation.'
    },
    {
      icon: Layers,
      title: 'Learning Meets Real Projects',
      desc: 'Our unique model connects technical learning with real-world technology implementation.'
    },
    {
      icon: Code2,
      title: 'Customized Solutions',
      desc: 'For corporate clients, we develop solutions according to specific business requirements instead of providing one-size-fits-all products.'
    },
    {
      icon: Users,
      title: 'Experienced Mentorship',
      desc: 'Learners receive guidance while working through concepts, projects and practical challenges.'
    },
    {
      icon: ShieldCheck,
      title: 'Long-Term Technology Partnership',
      desc: 'We aim to support businesses beyond initial development through improvements, maintenance and technology support.'
    }
  ];

  const teamRoles = [
    { label: 'AI/ML Engineers', icon: BrainCircuit },
    { label: 'Software Developers', icon: Code2 },
    { label: 'Data Professionals', icon: Layers },
    { label: 'UI/UX Designers', icon: Sparkles },
    { label: 'Project Managers', icon: Compass },
    { label: 'Trainers & Mentors', icon: GraduationCap }
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* 1. Page Hero Header */}
      <section className="about-hero-section">
        <div className="about-hero-glow" />
        <div className="about-container text-center">
          <div className="glass-pill hero-badge center-badge">
            <Sparkles size={14} className="text-red" />
            <span>ABOUT US — LEARNCODE INFINITY TECHNOLOGIES</span>
          </div>

          <h1 className="about-hero-title">
            BRIDGING PRACTICAL LEARNING WITH <br />
            <span className="text-red-glow">REAL-WORLD INNOVATION</span>
          </h1>

          <p className="about-hero-lead">
            LearnCode Infinity Technologies is an AI and technology-focused company dedicated to building practical technology solutions and creating industry-ready learning opportunities.
          </p>
        </div>
      </section>

      <div className="about-container">

        {/* 2. Section 1: Who We Are & Dual Division Overview */}
        <section className="about-block who-we-are-block">
          <SectionTitle 
            badge="01. WHO WE ARE"
            title="A DUAL-PILLAR TECHNOLOGY ECOSYSTEM"
            subtitle="Creating a bridge between learning technology and applying technology in the real world."
            center
          />

          <div className="dual-pillar-grid">
            {/* Pillar 1: Learning */}
            <div className="pillar-card glass-card hover-red-border">
              <div className="pillar-header">
                <div className="pillar-icon-box red-icon-glow">
                  <GraduationCap size={28} className="text-red" />
                </div>
                <div>
                  <h3 className="pillar-title">Learning & Skill Development</h3>
                </div>
              </div>
              <p className="pillar-desc">
                Through our learning division, we help students, freshers, and professionals develop practical skills in Artificial Intelligence, Machine Learning, Data Science, Python, Software Development, and other emerging technologies.
              </p>
            </div>

            {/* Pillar 2: Corporate */}
            <div className="pillar-card glass-card hover-red-border">
              <div className="pillar-header">
                <div className="pillar-icon-box red-icon-glow">
                  <Briefcase size={28} className="text-red" />
                </div>
                <div>
                  <h3 className="pillar-title">Corporate Technology Solutions</h3>
                </div>
              </div>
              <p className="pillar-desc">
                Alongside learning, our corporate division works with businesses to understand their technology requirements and build custom software, AI-powered solutions, data applications, automation systems, and digital products.
              </p>
            </div>
          </div>

          {/* Core Goal Banner */}
          <div className="goal-banner glass-card red-glow-hover text-center">
            <span className="goal-badge text-mono text-red">OUR CORE GOAL</span>
            <h3 className="goal-text">
              "To create a bridge between <span className="text-red">learning technology</span> and <span className="text-white">applying technology</span> in the real world."
            </h3>
          </div>
        </section>

        {/* 3. Section 9: "Our Two Worlds" Diagram Architecture */}
        <section className="about-block two-worlds-block">
          <SectionTitle 
            badge="02. OUR TWO WORLDS"
            title="FROM LEARNING TO REAL-WORLD INNOVATION"
            subtitle="Creating a complete ecosystem where technical knowledge transforms directly into enterprise solutions."
            center
          />

          <div className="two-worlds-container glass-card">
            <p className="two-worlds-intro text-center">
              We believe technology becomes more valuable when knowledge is transformed into real-world solutions. Our Learning division develops technology talent, while our Corporate Solutions division applies that expertise to solve real business problems.
            </p>

            {/* Interactive Architecture Flow Diagram */}
            <div className="ecosystem-diagram">
              
              {/* Central Hub */}
              <div className="diagram-node diagram-central">
                <BrainCircuit size={32} className="text-red" />
                <span className="text-mono node-title">LEARNCODE INFINITY</span>
                <span className="node-sub">TECHNOLOGY ECOSYSTEM</span>
              </div>



              {/* Dual Nodes Grid */}
              <div className="diagram-dual-nodes">
                
                {/* Learn Node */}
                <div className="diagram-node node-learn glass-card">
                  <div className="node-badge text-mono">LEARN</div>
                  <h4 className="node-heading">Skill & Talent Development</h4>
                  <ul className="node-list">
                    <li><CheckCircle2 size={14} className="text-red" /> Courses & Practical Training</li>
                    <li><CheckCircle2 size={14} className="text-red" /> Industry Internships</li>
                    <li><CheckCircle2 size={14} className="text-red" /> Hands-on Workshops</li>
                    <li><CheckCircle2 size={14} className="text-red" /> One-on-One Mentorship</li>
                  </ul>
                </div>

                {/* Build Node */}
                <div className="diagram-node node-build glass-card">
                  <div className="node-badge text-mono">BUILD</div>
                  <h4 className="node-heading">Corporate Solutions</h4>
                  <ul className="node-list">
                    <li><CheckCircle2 size={14} className="text-red" /> Corporate Projects</li>
                    <li><CheckCircle2 size={14} className="text-red" /> Bespoke AI Solutions</li>
                    <li><CheckCircle2 size={14} className="text-red" /> Custom Software</li>
                    <li><CheckCircle2 size={14} className="text-red" /> Process & Workflow Automation</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 4. Section 2 & 3: Mission & Vision */}
        <section className="about-block mission-vision-block">
          <div className="mission-vision-grid">
            
            {/* Mission Card */}
            <div className="mv-card glass-card">
              <div className="mv-header">
                <Target size={32} className="text-red" />
                <div>
                  <span className="text-mono text-muted text-xs">OUR PURPOSE</span>
                  <h3 className="mv-title">Our Mission</h3>
                </div>
              </div>

              <p className="mv-text">
                To make technology learning practical and accessible while helping businesses solve real-world problems through innovative AI and technology solutions.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mv-card glass-card">
              <div className="mv-header">
                <Eye size={32} className="text-red" />
                <div>
                  <span className="text-mono text-muted text-xs">OUR FUTURE</span>
                  <h3 className="mv-title">Our Vision</h3>
                </div>
              </div>

              <p className="mv-text">
                To become a trusted AI and technology ecosystem where people learn emerging technologies and businesses transform their ideas into impactful digital solutions.
              </p>
            </div>

          </div>
        </section>

        {/* 5. Section 4: What We Do (Two Big Cards) */}
        <section className="about-block what-we-do-block">
          <SectionTitle 
            badge="03. WHAT WE DO"
            title="OUR TWO CORE DIVISIONS IN DETAIL"
            subtitle="Explore our comprehensive offerings across skill development and enterprise technology."
            center
          />

          <div className="big-cards-wrapper">
            
            {/* Big Card 1: Learning */}
            <div className="big-card glass-card hover-red-border">
              <div className="big-card-header">
                <div className="big-card-icon-wrapper">
                  <GraduationCap size={36} className="text-red" />
                </div>
                <div>
                  <span className="text-mono text-red text-xs">DIVISION 01</span>
                  <h2 className="big-card-title">Learning & Skill Development</h2>
                </div>
              </div>

              <p className="big-card-lead">
                We provide practical, industry-oriented learning programs designed to help students, freshers, and professionals build strong technical skills.
              </p>

              <div className="tags-section">
                <h4 className="tags-heading text-mono">KEY LEARNING DOMAINS:</h4>
                <div className="tech-tags-grid">
                  {learningTopics.map((topic, index) => (
                    <span key={index} className="tech-tag-chip">
                      <span className="tag-dot" /> {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="approach-box glass-card">
                <h4 className="approach-title text-red">OUR LEARNING APPROACH:</h4>
                <p className="approach-desc">
                  Instead of focusing only on theory, learners get opportunities to practice, work on projects, understand real-world use cases, and build job-ready skills.
                </p>
              </div>
            </div>

            {/* Big Card 2: Corporate */}
            <div className="big-card glass-card hover-red-border">
              <div className="big-card-header">
                <div className="big-card-icon-wrapper">
                  <Building2 size={36} className="text-red" />
                </div>
                <div>
                  <span className="text-mono text-red text-xs">DIVISION 02</span>
                  <h2 className="big-card-title">Corporate Technology Solutions</h2>
                </div>
              </div>

              <p className="big-card-lead">
                We help businesses transform ideas and requirements into scalable, production-grade technology solutions.
              </p>

              <div className="tags-section">
                <h4 className="tags-heading text-mono">ENTERPRISE SERVICES:</h4>
                <div className="tech-tags-grid">
                  {corporateServices.map((service, index) => (
                    <span key={index} className="tech-tag-chip corporate-chip">
                      <span className="tag-dot red-dot" /> {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="approach-box glass-card">
                <h4 className="approach-title text-red">OUR CORPORATE APPROACH:</h4>
                <p className="approach-desc">
                  We understand the client's business requirement first, then design, develop, test and deploy a solution according to their specific needs.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Section 7 & 8: Why Choose Us & Growing Journey */}
        <section className="about-block why-choose-block">
          <SectionTitle 
            badge="05. WHY CHOOSE US"
            title="SIX CORE ADVANTAGES OF OUR ECOSYSTEM"
            subtitle="Connecting modern skill acquisition with enterprise digital execution."
            center
          />

          <div className="why-grid">
            {whyChooseUsCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="why-card glass-card hover-red-border">
                  <div className="why-icon-box">
                    <Icon size={24} className="text-red" />
                  </div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Our Growing Journey Banner */}
          <div className="journey-banner glass-card red-glow-hover">
            <div className="journey-content">
              <Award size={32} className="text-red" />
              <div>
                <span className="text-mono text-red text-xs">OUR GROWING JOURNEY</span>
                <h3 className="journey-heading">Building a Technology Ecosystem Focused on Learning, Innovation, & Real-World Impact</h3>
              </div>
            </div>
            <Button variant="primary" icon={ArrowRight} onClick={onOpenContact}>
              Join Our Ecosystem
            </Button>
          </div>
        </section>

        {/* 8. Section 5: Our Team & Multidisciplinary Experts */}
        <section className="about-block team-block">
          <SectionTitle 
            badge="06. OUR TEAM"
            title="LEADERSHIP & MULTIDISCIPLINARY EXPERTISE"
            subtitle="Engineers, creators, and mentors united by technical precision."
            center
          />

          <div className="team-container glass-card">
            
            {/* Leadership Profile Spotlight */}
            <div className="leadership-spotlight">
              <div className="leader-avatar-wrapper">
                <div className="leader-avatar">
                  <Users size={40} className="text-red" />
                </div>
                <div className="avatar-ring-glow" />
              </div>

              <div className="leader-info">
                <span className="text-mono text-red text-xs">FOUNDER & DIRECTOR</span>
                <h3 className="leader-name">LearnCode Infinity Leadership</h3>
                <p className="leader-bio">
                  Pioneering the vision of LearnCode Infinity Technologies, bridging deep technological research with career transformation and mission-critical corporate execution.
                </p>
              </div>
            </div>

            {/* Multidisciplinary Team Overview */}
            <div className="team-statement-box">
              <p className="team-statement">
                "Our multidisciplinary team combines technology expertise, industry knowledge, and a passion for continuous learning to deliver meaningful outcomes for learners and clients."
              </p>

              <div className="team-roles-grid">
                {teamRoles.map((role, idx) => {
                  const RoleIcon = role.icon;
                  return (
                    <div key={idx} className="role-chip glass-card">
                      <RoleIcon size={16} className="text-red" />
                      <span>{role.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 9. Bottom CTA Section */}
        <section className="about-cta-footer glass-card red-glow-hover text-center">
          <h2 className="cta-heading">READY TO TRANSFORM LEARNING OR ELEVATE YOUR BUSINESS?</h2>
          <p className="cta-sub">Let's discuss how LearnCode Infinity Technologies can support your growth.</p>
          <div className="cta-btn-group">
            <Button variant="primary" icon={ArrowRight} onClick={onOpenContact}>
              Contact Our Team
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
