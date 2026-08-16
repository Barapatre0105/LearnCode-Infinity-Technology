import React from 'react';
import './GlowingBrainCanvas.css';

const GlowingBrainCanvas = () => {
  return (
    <div className="canvas-wrapper">
      
      {/* Background Ambient Red Glow Halo */}
      <div className="brain-ambient-glow" />

      {/* Main AI Brain & Hand Poster Graphic */}
      <div className="brain-image-container">
        <img 
          src="/glowing_ai_brain.png" 
          alt="Glowing AI Circuit Brain and Hand" 
          className="glowing-ai-brain-img"
        />
      </div>

    </div>
  );
};

export default GlowingBrainCanvas;
