import React from 'react';
import './App.css';
import './styles/globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Solutions from './components/sections/Solutions';
import CTA from './components/sections/CTA';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Features />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;