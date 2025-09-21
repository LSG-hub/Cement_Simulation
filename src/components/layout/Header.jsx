import React from 'react';

const Header = ({ onGetStarted }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">JKC AION</span>
            <span className="logo-subtitle">AI Operations Nexus</span>
            <span className="demo-badge">DEMO</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#contact">Contact</a>
            <button className="btn-primary" onClick={onGetStarted}>Get Started</button>
          </nav>
        </div>
      </div>
      <style>{`
        .header {
          background: var(--white);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo-text {
          font-size: 28px;
          font-weight: bold;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .logo-subtitle {
          font-size: 14px;
          color: var(--text-light);
          margin-left: 5px;
        }
        .demo-badge {
          background: var(--jk-green);
          color: var(--white);
          padding: 2px 8px;
          border-radius: 3px;
          font-size: 10px;
          font-weight: bold;
          margin-left: 10px;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav a {
          color: var(--text-dark);
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s;
        }
        .nav a:hover {
          color: var(--jk-green);
        }
      `}</style>
    </header>
  );
};

export default Header;