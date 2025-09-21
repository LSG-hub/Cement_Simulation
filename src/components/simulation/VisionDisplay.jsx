import React, { useState } from 'react';

const VisionDisplay = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const visionSections = [
    {
      id: 'plant',
      title: 'Complete Plant Agentification',
      icon: '🏭',
      description: 'Every unit in the cement plant becomes an intelligent AI agent',
      details: [
        'Raw Mill Agent for material preparation',
        'Coal Mill Agent for fuel optimization',
        'Packing Plant Agent for distribution',
        'Quality Control Agent for testing'
      ]
    },
    {
      id: 'supply',
      title: 'Supply Chain Integration',
      icon: '🚚',
      description: 'Extend AI agents throughout the supply chain network',
      details: [
        'Logistics optimization with transport agents',
        'Supplier coordination through API integration',
        'Inventory management with predictive ordering',
        'Customer demand forecasting'
      ]
    },
    {
      id: 'network',
      title: 'Multi-Plant Network',
      icon: '🌐',
      description: 'Connect all JK Cement plants in an intelligent network',
      details: [
        'Cross-plant resource optimization',
        'Best practice sharing between facilities',
        'Centralized AI command center',
        'Global efficiency benchmarking'
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainability Excellence',
      icon: '🌱',
      description: 'Achieve net-zero emissions through AI optimization',
      details: [
        'Carbon footprint real-time tracking',
        'Alternative fuel maximization',
        'Energy recovery optimization',
        'Waste heat utilization'
      ]
    }
  ];

  return (
    <div className="vision-display">
      <div className="vision-header">
        <h2>Introducing JKC AION</h2>
        <p className="vision-tagline">The Future of Cement Manufacturing</p>
      </div>

      <div className="vision-hero">
        <div className="hero-content">
          <h3>From Three Units to Complete Ecosystem</h3>
          <p>
            What starts with Pre-Calciner, Rotary Kiln, and Clinker Cooler agents 
            evolves into a comprehensive AI-driven cement manufacturing ecosystem.
          </p>
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">AI Agents</span>
            </div>
            <div className="stat">
              <span className="stat-value">40%</span>
              <span className="stat-label">Cost Reduction</span>
            </div>
            <div className="stat">
              <span className="stat-value">60%</span>
              <span className="stat-label">Less Emissions</span>
            </div>
            <div className="stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Optimization</span>
            </div>
          </div>
        </div>
        <div className="network-visualization">
          <div className="network-center">AION</div>
          <div className="network-node node-1">Pre-Calciner</div>
          <div className="network-node node-2">Rotary Kiln</div>
          <div className="network-node node-3">Clinker Cooler</div>
          <div className="network-node node-4">Raw Mill</div>
          <div className="network-node node-5">Coal Mill</div>
          <div className="network-node node-6">Packing</div>
          <div className="network-node node-7">Logistics</div>
          <div className="network-node node-8">Quality</div>
        </div>
      </div>

      <div className="vision-sections">
        {visionSections.map(section => (
          <div 
            key={section.id} 
            className={`vision-card ${expandedSection === section.id ? 'expanded' : ''}`}
            onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
          >
            <div className="card-header">
              <span className="section-icon">{section.icon}</span>
              <div className="section-info">
                <h4>{section.title}</h4>
                <p>{section.description}</p>
              </div>
              <span className="expand-icon">
                {expandedSection === section.id ? '−' : '+'}
              </span>
            </div>
            {expandedSection === section.id && (
              <div className="card-details">
                {section.details.map((detail, index) => (
                  <div key={index} className="detail-item">
                    <span className="detail-check">✓</span>
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="vision-footer">
        <h3>JKC AION - AI Operations Nexus</h3>
        <p>Transforming Cement Manufacturing Through Intelligent Automation</p>
        <button className="cta-button">
          Learn More About Full Implementation
        </button>
      </div>
      
      <style>{`
        .vision-display {
          padding: 20px;
        }
        .vision-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .vision-header h2 {
          font-size: 36px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }
        .vision-tagline {
          font-size: 18px;
          color: var(--text-light);
          font-style: italic;
        }
        .vision-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          background: var(--white);
          padding: 40px;
          border-radius: 15px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .hero-content h3 {
          font-size: 28px;
          color: var(--text-dark);
          margin-bottom: 15px;
        }
        .hero-content p {
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.05) 0%, 
            rgba(0, 102, 204, 0.05) 100%);
          border-radius: 10px;
        }
        .stat-value {
          font-size: 32px;
          font-weight: bold;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-light);
          margin-top: 5px;
        }
        .network-visualization {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .network-center {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          position: relative;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 165, 80, 0.3);
        }
        .network-node {
          position: absolute;
          padding: 8px 12px;
          background: var(--white);
          border: 2px solid var(--jk-green);
          border-radius: 20px;
          font-size: 12px;
          white-space: nowrap;
          animation: float 3s ease-in-out infinite;
        }
        .network-node::before {
          content: '';
          position: absolute;
          width: 1px;
          background: rgba(0, 165, 80, 0.3);
          z-index: -1;
        }
        .node-1 { top: 0; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
        .node-2 { top: 25%; right: 0; animation-delay: 0.3s; }
        .node-3 { bottom: 25%; right: 0; animation-delay: 0.6s; }
        .node-4 { bottom: 0; left: 50%; transform: translateX(-50%); animation-delay: 0.9s; }
        .node-5 { bottom: 25%; left: 0; animation-delay: 1.2s; }
        .node-6 { top: 25%; left: 0; animation-delay: 1.5s; }
        .node-7 { top: 15%; left: 15%; animation-delay: 1.8s; }
        .node-8 { bottom: 15%; right: 15%; animation-delay: 2.1s; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .vision-sections {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 40px;
        }
        .vision-card {
          background: var(--white);
          border-radius: 10px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .vision-card:hover {
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }
        .vision-card.expanded {
          box-shadow: 0 10px 30px rgba(0, 165, 80, 0.2);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .section-icon {
          font-size: 40px;
        }
        .section-info {
          flex: 1;
        }
        .section-info h4 {
          font-size: 18px;
          color: var(--text-dark);
          margin-bottom: 5px;
        }
        .section-info p {
          font-size: 14px;
          color: var(--text-light);
        }
        .expand-icon {
          font-size: 24px;
          color: var(--jk-green);
        }
        .card-details {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--gray-light);
          animation: slideDown 0.3s ease;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          color: var(--text-light);
        }
        .detail-check {
          color: var(--jk-green);
          font-weight: bold;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }
        .vision-footer {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.05) 0%, 
            rgba(0, 102, 204, 0.05) 100%);
          border-radius: 15px;
        }
        .vision-footer h3 {
          font-size: 28px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }
        .vision-footer p {
          color: var(--text-light);
          margin-bottom: 20px;
        }
        .cta-button {
          padding: 15px 40px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-family: 'Times New Roman', Times, serif;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 165, 80, 0.3);
        }
      `}</style>
    </div>
  );
};

export default VisionDisplay;