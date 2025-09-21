import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JKC AION</h3>
            <p>AI Operations Nexus for Cement Industry</p>
            <p className="demo-note">Demo Version - Hackathon Project</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li>Google AI Platform</li>
              <li>Vertex AI</li>
              <li>BigQuery Integration</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>JK Cement Ltd.</p>
            <p>Innovation Division</p>
            <p>demo@jkcement.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 JK Cement Ltd. All rights reserved. | Hackathon Demo</p>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--text-dark);
          color: var(--white);
          padding: 50px 0 20px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 30px;
        }
        .footer-section h3 {
          font-size: 24px;
          margin-bottom: 15px;
          background: linear-gradient(135deg, var(--jk-light-green), var(--jk-light-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-section h4 {
          font-size: 18px;
          margin-bottom: 15px;
          color: var(--jk-light-green);
        }
        .footer-section p {
          line-height: 1.8;
          opacity: 0.8;
        }
        .demo-note {
          margin-top: 10px;
          font-size: 12px;
          color: var(--jk-light-blue);
          font-style: italic;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section li {
          margin-bottom: 10px;
          opacity: 0.8;
        }
        .footer-section a {
          color: var(--white);
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-section a:hover {
          color: var(--jk-light-green);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-bottom p {
          font-size: 14px;
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
};

export default Footer;