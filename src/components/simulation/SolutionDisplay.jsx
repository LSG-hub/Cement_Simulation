import React, { useState, useEffect } from 'react';
import { solutions } from '../../utils/simulationData';

const SolutionDisplay = () => {
  const [solutionList, setSolutionList] = useState(solutions);
  const [showOptimizationPopup, setShowOptimizationPopup] = useState(false);
  const [countdown, setCountdown] = useState(7);
  
  useEffect(() => {
    // Simulate implementing solutions
    const timer = setInterval(() => {
      setSolutionList(prev => {
        const pending = prev.filter(s => s.status === 'pending');
        if (pending.length > 0) {
          const updated = [...prev];
          const index = updated.findIndex(s => s.status === 'pending');
          if (index !== -1) {
            updated[index].status = 'completed';
          }
          return updated;
        }
        return prev;
      });
    }, 1500);

    // Show optimization popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowOptimizationPopup(true);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(popupTimer);
    };
  }, []);

  useEffect(() => {
    if (showOptimizationPopup && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowOptimizationPopup(false);
    }
  }, [showOptimizationPopup, countdown]);

  return (
    <div className="solution-display">
      <div className="solution-header">
        <h3>🎯 AI-Generated Solutions</h3>
        <div className="solution-status">
          <span>Human-in-the-Loop Mode</span>
        </div>
      </div>

      <div className="solution-content">
        <div className="notification-box">
          <h4>📢 Optimization Actions Required</h4>
          <p>The following adjustments have been identified by the AI agents to restore optimal operation:</p>
        </div>

        <div className="solutions-grid">
          {solutionList.map((solution) => (
            <div key={solution.id} className={`solution-card ${solution.status}`}>
              <div className="solution-unit">
                <span className="unit-badge">{solution.unit}</span>
              </div>
              <div className="solution-action">
                {solution.action}
              </div>
              <div className="solution-status">
                {solution.status === 'pending' && (
                  <span className="status-pending">⏳ Pending</span>
                )}
                {solution.status === 'completed' && (
                  <span className="status-completed">✅ Implemented</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="supervisor-notification">
          <h4>👷 Supervisor Notification Sent</h4>
          <p>All plant supervisors have been notified via:</p>
          <div className="notification-channels">
            <span className="channel">📱 Mobile App</span>
            <span className="channel">📧 Email</span>
            <span className="channel">🖥️ Control Room Display</span>
          </div>
        </div>
      </div>

      {showOptimizationPopup && (
        <>
          <div className="popup-overlay" />
          <div className="optimization-popup">
            <h3>🚀 Advanced Optimization Available</h3>
            <p>
              This system can be further optimized to enable autonomous adjustments 
              without human intervention after reliability checks are completed.
            </p>
            <div className="features">
              <div className="feature">✓ Autonomous parameter adjustment</div>
              <div className="feature">✓ Real-time optimization</div>
              <div className="feature">✓ Predictive maintenance</div>
            </div>
            <div className="popup-countdown">
              Auto-closing in {countdown} seconds...
            </div>
          </div>
        </>
      )}
      
      <style jsx>{`
        .solution-display {
          padding: 20px;
        }
        .solution-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .solution-header h3 {
          font-size: 24px;
          color: var(--text-dark);
        }
        .solution-status {
          padding: 8px 20px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }
        .solution-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .notification-box {
          background: linear-gradient(135deg, 
            rgba(255, 165, 0, 0.1) 0%, 
            rgba(255, 0, 0, 0.1) 100%);
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #ff8c00;
        }
        .notification-box h4 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #ff6b6b;
        }
        .notification-box p {
          color: var(--text-light);
          line-height: 1.6;
        }
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
        }
        .solution-card {
          background: var(--white);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.5s ease;
        }
        .solution-card.completed {
          background: linear-gradient(135deg, 
            rgba(0, 255, 0, 0.05) 0%, 
            rgba(0, 165, 80, 0.05) 100%);
          border: 2px solid var(--jk-green);
        }
        .solution-unit {
          margin-bottom: 10px;
        }
        .unit-badge {
          padding: 5px 12px;
          background: var(--jk-blue);
          color: var(--white);
          border-radius: 15px;
          font-size: 12px;
          font-weight: bold;
        }
        .solution-action {
          font-size: 16px;
          color: var(--text-dark);
          margin-bottom: 15px;
          line-height: 1.6;
        }
        .solution-status {
          display: flex;
          justify-content: flex-end;
        }
        .status-pending {
          color: #ff8c00;
          font-weight: bold;
        }
        .status-completed {
          color: var(--jk-green);
          font-weight: bold;
        }
        .supervisor-notification {
          background: var(--gray-light);
          padding: 20px;
          border-radius: 10px;
        }
        .supervisor-notification h4 {
          font-size: 18px;
          margin-bottom: 10px;
          color: var(--text-dark);
        }
        .notification-channels {
          display: flex;
          gap: 20px;
          margin-top: 15px;
        }
        .channel {
          padding: 8px 15px;
          background: var(--white);
          border-radius: 20px;
          font-size: 14px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 1000;
        }
        .optimization-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--white);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          z-index: 1001;
          max-width: 500px;
          animation: popIn 0.5s ease;
        }
        .optimization-popup h3 {
          font-size: 24px;
          color: var(--jk-green);
          margin-bottom: 15px;
        }
        .optimization-popup p {
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .feature {
          color: var(--text-dark);
          font-size: 14px;
        }
        .popup-countdown {
          text-align: center;
          color: var(--text-light);
          font-style: italic;
        }
        @keyframes popIn {
          from {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionDisplay;