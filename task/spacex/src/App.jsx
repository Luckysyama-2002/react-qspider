import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

function App() {
  return (
    <div>
      {/* 1. Add the top navbar */}
      <Navbar />

      {/* 2. First Section (Starship) */}
      <HeroSection 
        subtitle="Recent Mission"
        title="Starship Flight Test"
        buttonText="Watch Replay"
        backgroundImage="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070"
      />

      {/* 3. Second Section (Falcon 9) */}
      <HeroSection 
        subtitle="Upcoming Launch"
        title="Starlink Mission"
        buttonText="Learn More"
        backgroundImage="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070"
      />

      {/* 4. Third Section (Dragon Capsule) */}
      <HeroSection 
        subtitle="Human Spaceflight"
        title="Crew-8 Mission"
        buttonText="Explore"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
      />
    </div>
  );
}

export default App;