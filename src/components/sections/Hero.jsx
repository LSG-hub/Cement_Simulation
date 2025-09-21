import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transform Cement Operations with AI-Driven Intelligence</h1>
          <p className="hero-subtitle">
            JKC AION revolutionizes cement plant optimization by creating intelligent AI agents 
            for Pre-Calciner, Rotary Kiln, and Clinker Cooler units that communicate seamlessly 
            to maximize efficiency, quality, and sustainability.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">30%</span>
              <span className="stat-label">Energy Reduction</span>
            </div>
            <div className="stat">
              <span className="stat-value">25%</span>
              <span className="stat-label">Quality Improvement</span>
            </div>
            <div className="stat">
              <span className="stat-value">40%</span>
              <span className="stat-label">CO₂ Reduction</span>
            </div>
          </div>
          <div className="hero-cta">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.05) 0%, 
            rgba(0, 102, 204, 0.05) 100%);
          position: relative;
        }
        .hero-content {
          text-align: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 20px;
          color: var(--text-light);
          margin-bottom: 40px;
          line-height: 1.8;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin: 50px 0;
        }
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-value {
          font-size: 42px;
          font-weight: bold;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 14px;
          color: var(--text-light);
          margin-top: 5px;
        }
        .hero-cta {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 40px;
        }
        .btn-secondary {
          background: transparent;
          color: var(--jk-green);
          border: 2px solid var(--jk-green);
          padding: 12px 30px;
          font-size: 16px;
          font-family: 'Times New Roman', Times, serif;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-secondary:hover {
          background: var(--jk-green);
          color: var(--white);
        }
      `}</style>
    </section>
  );
};

export default Hero;