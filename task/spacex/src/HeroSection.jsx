

import React from 'react';

function HeroSection(props) {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="section-content">
        <h4 className="section-subtitle">{props.subtitle}</h4>
        <h2 className="section-title">{props.title}</h2>
        <button className="spacex-btn">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default HeroSection;