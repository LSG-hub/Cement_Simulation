import React from 'react';

const Sidebar = ({ currentPage, onNavigate, disabled }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'agentChat', label: 'Agent Communication', icon: '💬' },
    { id: 'solutions', label: 'Solutions', icon: '⚡' },
    { id: 'aiChat', label: 'AI Assistant', icon: '🤖' },
    { id: 'vision', label: 'Vision', icon: '🔮' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>JKC AION</h3>
        <p>Control Panel</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={() => !disabled && onNavigate(item.id)}
            disabled={disabled}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>System Online</span>
        </div>
        <p className="demo-note">Demo Version</p>
      </div>
      
      <style jsx>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 260px;
          height: 100vh;
          background: linear-gradient(180deg, var(--jk-dark-green) 0%, var(--jk-dark-blue) 100%);
          display: flex;
          flex-direction: column;
          z-index: 100;
        }
        .sidebar-header {
          padding: 30px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .sidebar-header h3 {
          color: var(--white);
          font-size: 24px;
          margin-bottom: 5px;
        }
        .sidebar-header p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }
        .sidebar-nav {
          flex: 1;
          padding: 20px 0;
        }
        .nav-item {
          width: 100%;
          padding: 15px 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-family: 'Times New Roman', Times, serif;
          display: flex;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }
        .nav-item:hover:not(.disabled) {
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
        }
        .nav-item.active {
          background: rgba(255, 255, 255, 0.15);
          color: var(--white);
        }
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: var(--jk-light-green);
        }
        .nav-item.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .nav-icon {
          font-size: 20px;
        }
        .nav-label {
          text-align: left;
        }
        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--white);
          font-size: 14px;
          margin-bottom: 10px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          animation: blink 2s infinite;
        }
        .demo-note {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-style: italic;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;