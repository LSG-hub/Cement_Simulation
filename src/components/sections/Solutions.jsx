import React from 'react';

const Solutions = () => {
  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <h2>Comprehensive AI Layer for Advanced Process Control</h2>
        <div className="solutions-content">
          <div className="solution-diagram">
            <div className="unit-card pre-calciner">
              <h3>Pre-Calciner Agent</h3>
              <ul>
                <li>Temperature Control</li>
                <li>Feed Rate Optimization</li>
                <li>Fuel Mix Management</li>
              </ul>
            </div>
            <div className="connection-line"></div>
            <div className="unit-card rotary-kiln">
              <h3>Rotary Kiln Agent</h3>
              <ul>
                <li>Clinkerization Control</li>
                <li>Thermal Efficiency</li>
                <li>NOx Reduction</li>
              </ul>
            </div>
            <div className="connection-line"></div>
            <div className="unit-card clinker-cooler">
              <h3>Clinker Cooler Agent</h3>
              <ul>
                <li>Heat Recovery</li>
                <li>Cooling Rate Control</li>
                <li>Energy Optimization</li>
              </ul>
            </div>
          </div>
          <div className="ai-layer">
            <h3>AI Operations Nexus</h3>
            <p>Unified Intelligence Layer</p>
          </div>
        </div>
        <div className="benefits-list">
          <div className="benefit">
            <h4>Cross-Process Optimization</h4>
            <p>Real-time coordination between units for holistic efficiency</p>
          </div>
          <div className="benefit">
            <h4>Predictive Maintenance</h4>
            <p>Anticipate equipment issues before they impact production</p>
          </div>
          <div className="benefit">
            <h4>Adaptive Control</h4>
            <p>Self-adjusting parameters based on material variability</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .solutions {
          padding: 80px 0;
          background: linear-gradient(180deg, 
            var(--gray-light) 0%, 
            var(--white) 100%);
        }
        h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
          color: var(--text-dark);
        }
        .solutions-content {
          position: relative;
          margin-bottom: 60px;
        }
        .solution-diagram {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        .unit-card {
          flex: 1;
          background: var(--white);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .unit-card:hover {
          transform: translateY(-5px);
        }
        .unit-card h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .pre-calciner h3 {
          color: var(--jk-green);
        }
        .rotary-kiln h3 {
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .clinker-cooler h3 {
          color: var(--jk-blue);
        }
        .unit-card ul {
          list-style: none;
        }
        .unit-card li {
          padding: 5px 0;
          color: var(--text-light);
          font-size: 14px;
        }
        .unit-card li::before {
          content: "→ ";
          color: var(--jk-green);
          font-weight: bold;
        }
        .connection-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, var(--jk-green), var(--jk-blue));
          position: relative;
        }
        .connection-line::after {
          content: "⟶";
          position: absolute;
          right: -10px;
          top: -12px;
          color: var(--jk-blue);
          font-size: 20px;
        }
        .ai-layer {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          border-radius: 10px;
          margin: 0 auto;
          max-width: 600px;
        }
        .ai-layer h3 {
          font-size: 28px;
          margin-bottom: 10px;
        }
        .ai-layer p {
          font-size: 16px;
          opacity: 0.9;
        }
        .benefits-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        .benefit {
          text-align: center;
        }
        .benefit h4 {
          font-size: 20px;
          color: var(--jk-green);
          margin-bottom: 10px;
        }
        .benefit p {
          color: var(--text-light);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Solutions;