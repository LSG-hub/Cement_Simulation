import React, { useState, useEffect } from 'react';
import NotificationPopup from './NotificationPopup';
import Dashboard from './Dashboard';
import AgentChat from './AgentChat';
import SolutionDisplay from './SolutionDisplay';
import AIChatInterface from './AIChatInterface';
import VisionDisplay from './VisionDisplay';
import Sidebar from '../layout/Sidebar';

const SimulationWrapper = ({ onExit }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [simulationPhase, setSimulationPhase] = useState('normal');
  const [isSequenceMode, setIsSequenceMode] = useState(true);
  
  useEffect(() => {
    if (!showNotification && isSequenceMode) {
      startSimulationSequence();
    }
  }, [showNotification]);

  const startSimulationSequence = async () => {
    // Normal operation for 5 seconds
    await delay(5000);
    
    // Trigger anomaly
    setSimulationPhase('anomaly');
    await delay(5000);
    
    // Navigate to agent chat
    setCurrentPage('agentChat');
    await delay(8000);
    
    // Navigate to solutions
    setCurrentPage('solutions');
    await delay(6000);
    
    // Navigate to AI chat interface
    setCurrentPage('aiChat');
    await delay(5000);
    
    // Show vision
    setCurrentPage('vision');
    await delay(5000);
    
    // End sequence mode - allow free navigation
    setIsSequenceMode(false);
    setCurrentPage('dashboard');
    setSimulationPhase('optimized');
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard phase={simulationPhase} />;
      case 'agentChat':
        return <AgentChat />;
      case 'solutions':
        return <SolutionDisplay />;
      case 'aiChat':
        return <AIChatInterface />;
      case 'vision':
        return <VisionDisplay />;
      default:
        return <Dashboard phase={simulationPhase} />;
    }
  };

  return (
    <div className="simulation-wrapper">
      {showNotification && (
        <NotificationPopup onClose={() => setShowNotification(false)} />
      )}
      
      {!showNotification && (
        <>
          <Sidebar 
            currentPage={currentPage} 
            onNavigate={setCurrentPage}
            disabled={isSequenceMode}
          />
          <div className="simulation-content">
            <div className="simulation-header">
              <h2>JKC AION - Live Simulation</h2>
              <div className="status-badges">
                <span className={`phase-badge ${simulationPhase}`}>
                  {simulationPhase === 'normal' && '🟢 Normal Operation'}
                  {simulationPhase === 'anomaly' && '🔴 Anomaly Detected'}
                  {simulationPhase === 'optimized' && '🔵 AI Optimized'}
                </span>
                {isSequenceMode && (
                  <span className="mode-badge">🎬 Sequence Mode</span>
                )}
              </div>
              <button className="exit-btn" onClick={onExit}>Exit Simulation</button>
            </div>
            {renderPage()}
          </div>
        </>
      )}
      
      <style>{`
        .simulation-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
          display: flex;
          z-index: 10000;
        }
        .simulation-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
          margin-left: 260px;
          overflow-y: auto;
        }
        .simulation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: var(--white);
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .simulation-header h2 {
          font-size: 28px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .status-badges {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .phase-badge {
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        .phase-badge.normal {
          background: rgba(0, 255, 0, 0.1);
          color: #00a550;
        }
        .phase-badge.anomaly {
          background: rgba(255, 0, 0, 0.1);
          color: #ff0000;
        }
        .phase-badge.optimized {
          background: rgba(0, 102, 204, 0.1);
          color: #0066cc;
        }
        .mode-badge {
          padding: 8px 16px;
          background: rgba(255, 165, 0, 0.1);
          color: #ff8c00;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }
        .exit-btn {
          padding: 10px 20px;
          background: var(--jk-green);
          color: var(--white);
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-family: 'Times New Roman', Times, serif;
          font-size: 16px;
          transition: all 0.3s;
        }
        .exit-btn:hover {
          background: var(--jk-dark-green);
          transform: translateY(-2px);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default SimulationWrapper;