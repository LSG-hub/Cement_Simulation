import React, { useState, useEffect } from 'react';

const NotificationPopup = ({ onClose }) => {
  const [countdown, setCountdown] = useState(7);
  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onClose();
    }
  }, [countdown, onClose]);

  return (
    <>
      <div className="notification-overlay" />
      <div className="notification-popup">
        <div className="popup-header">
          <h2>JKC AION - Demo Simulation</h2>
        </div>
        <div className="popup-content">
          <div className="icon-container">
            <div className="rotating-gear">⚙️</div>
          </div>
          <h3>Welcome to the Simulation Environment</h3>
          <p>
            Due to time and data constraints in this hackathon demonstration, 
            we will be simulating the core concept of AI-driven cement plant optimization.
          </p>
          <p>
            This simulation showcases how AI agents representing Pre-Calciner, 
            Rotary Kiln, and Clinker Cooler units communicate and collaborate 
            to optimize operations in real-time.
          </p>
          <div className="features-preview">
            <div className="feature">✓ Real-time sensor monitoring</div>
            <div className="feature">✓ AI agent communication</div>
            <div className="feature">✓ Autonomous optimization</div>
          </div>
        </div>
        <div className="popup-footer">
          <div className="countdown">
            Starting in <span>{countdown}</span> seconds...
          </div>
          <button onClick={onClose}>Start Now</button>
        </div>
      </div>
      
      <style jsx>{`
        .notification-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 10001;
        }
        .notification-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          background: var(--white);
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: 10002;
          overflow: hidden;
          animation: slideIn 0.5s ease;
        }
        .popup-header {
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          padding: 20px;
          text-align: center;
        }
        .popup-header h2 {
          color: var(--white);
          margin: 0;
          font-size: 24px;
        }
        .popup-content {
          padding: 30px;
          text-align: center;
        }
        .icon-container {
          margin-bottom: 20px;
        }
        .rotating-gear {
          font-size: 60px;
          display: inline-block;
          animation: rotate 3s linear infinite;
        }
        .popup-content h3 {
          font-size: 22px;
          color: var(--jk-green);
          margin-bottom: 15px;
        }
        .popup-content p {
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 15px;
        }
        .features-preview {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          padding: 20px;
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.05) 0%, 
            rgba(0, 102, 204, 0.05) 100%);
          border-radius: 10px;
        }
        .feature {
          color: var(--jk-green);
          font-weight: bold;
          font-size: 14px;
        }
        .popup-footer {
          padding: 20px;
          background: var(--gray-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .countdown {
          font-size: 16px;
          color: var(--text-light);
        }
        .countdown span {
          font-size: 24px;
          font-weight: bold;
          color: var(--jk-blue);
        }
        .popup-footer button {
          padding: 10px 30px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-family: 'Times New Roman', Times, serif;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }
        .popup-footer button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 165, 80, 0.3);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default NotificationPopup;