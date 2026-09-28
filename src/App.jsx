import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectConfiguratorSection from './components/ProjectConfiguratorSection';
import TechMarqueeSection from './components/TechMarqueeSection';
import HomeAboutSection from './components/HomeAboutSection';
import VerticalsSection from './components/VerticalsSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import AboutCtaBannerSection from './components/AboutCtaBannerSection';
import AboutPage from './components/AboutPage';
import LearningPage from './components/LearningPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import FeatureDetailModal from './components/FeatureDetailModal';
import ContactModal from './components/ContactModal';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Attach scroll-reveal animations to .reveal-slide-up elements
  useScrollReveal('.reveal-slide-up', activePage);

  // Scroll to top of page whenever active navigation page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleOpenDemo = () => {
    setActivePage('home');
    setTimeout(() => {
      const demoElement = document.getElementById('demo');
      if (demoElement) {
        demoElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="app-main-wrapper bg-dark-global">
      
      {/* Top Navbar Component */}
      <Navbar 
        activePage={activePage}
        onNavigate={(page) => setActivePage(page)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenDemo={handleOpenDemo}
      />

      {/* Dynamic View Routing */}
      <main>
        {activePage === 'home' && (
          <div className="reveal-slide-up">
            <HeroSection
              onSelectFeature={(feature) => setSelectedFeature(feature)}
              onOpenContact={() => setIsContactOpen(true)}
              onOpenDemo={handleOpenDemo}
            />
          </div>
        )}

        {/* About Us Page */}
        {activePage === 'about' && (
          <div className="reveal-slide-up">
            <AboutPage 
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
        )}

        {/* Step 5.12: Learning Academy Page */}
        {activePage === 'learning' && (
          <div className="reveal-slide-up">
            <LearningPage 
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
        )}

        {/* Step 5.13: Corporate Services & Process Timeline Page */}
        {activePage === 'services' && (
          <div className="reveal-slide-up">
            <ServicesPage 
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
        )}

        {/* Step 5.14: Case Studies & Projects Page */}
        {activePage === 'projects' && (
          <div className="reveal-slide-up">
            <ProjectsPage 
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Footer Component matching Nexora poster bottom */}
      <Footer 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Feature Specification Modal */}
      {selectedFeature && (
        <FeatureDetailModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      )}

      {/* Contact & Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}

export default App;
