import React, { useState } from 'react';
import './App.css';
import './styles/globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Solutions from './components/sections/Solutions';
import CTA from './components/sections/CTA';
import SimulationWrapper from './components/simulation/SimulationWrapper';

function App() {
  const [showSimulation, setShowSimulation] = useState(false);

  if (showSimulation) {
    return <SimulationWrapper onExit={() => setShowSimulation(false)} />;
  }

  return (
    <div className="App">
      <Header onGetStarted={() => setShowSimulation(true)} />
      <main className="main-content">
        <Hero onGetStarted={() => setShowSimulation(true)} />
        <Features />
        <Solutions />
        <CTA onGetStarted={() => setShowSimulation(true)} />
      </main>
      <Footer />
    </div>
  );
}

export default App;