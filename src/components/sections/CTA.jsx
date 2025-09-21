import React from 'react';

const CTA = ({ onGetStarted }) => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Cement Operations?</h2>
          <p>
            Join the revolution in cement manufacturing with AI-driven optimization. 
            Experience the power of intelligent agent communication for unprecedented 
            efficiency and sustainability.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={onGetStarted}>Get Started Now</button>
            <button className="btn-outline" onClick={onGetStarted}>Schedule Demo</button>
          </div>
          <div className="tech-stack">
            <span>Powered by:</span>
            <div className="tech-logos">
              <span className="tech-item">Google Gemini</span>
              <span className="tech-item">Vertex AI</span>
              <span className="tech-item">BigQuery</span>
              <span className="tech-item">Cloud Vision</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .cta {
          padding: 80px 0;
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.95) 0%, 
            rgba(0, 102, 204, 0.95) 100%);
          color: var(--white);
        }
        .cta-content {
          text-align: center;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }
        h2 {
          font-size: 40px;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 40px;
          opacity: 0.95;
        }
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 50px;
        }
        .btn-outline {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
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
        .btn-outline:hover {
          background: var(--white);
          color: var(--jk-green);
        }
        .tech-stack {
          margin-top: 40px;
        }
        .tech-stack > span {
          display: block;
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 15px;
        }
        .tech-logos {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .tech-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 5px;
          font-size: 14px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default CTA;