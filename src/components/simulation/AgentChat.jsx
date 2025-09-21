import React, { useState, useEffect, useRef } from 'react';
import { agentConversations } from '../../utils/simulationData';

const AgentChat = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages appear
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (currentIndex < agentConversations.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, agentConversations[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const getAgentColor = (agent) => {
    switch(agent) {
      case 'Pre-Calciner': return '#ff6b6b';
      case 'Rotary Kiln': return '#00a550';
      case 'Clinker Cooler': return '#0066cc';
      case 'System Optimizer': return '#ff8c00';
      default: return '#666';
    }
  };

  return (
    <div className="agent-chat">
      <div className="chat-header">
        <h3>🤖 AI Agent Communication Channel</h3>
        <div className="chat-status">
          <span className="status-dot"></span>
          <span>Agents Online: 4</span>
        </div>
      </div>
      
      <div className="chat-container">
        <div className="chat-info">
          <p>AI agents are analyzing the anomaly and coordinating response...</p>
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className="message" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="message-header">
                <span className="agent-name" style={{ color: getAgentColor(msg.agent) }}>
                  {msg.agent}
                </span>
                <span className="message-time">{msg.time}</span>
              </div>
              <div className="message-content">
                {msg.message}
              </div>
            </div>
          ))}
          
          {currentIndex < agentConversations.length && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="chat-footer">
        <div className="agent-list">
          <div className="agent-item">
            <span className="agent-indicator" style={{ background: '#ff6b6b' }}></span>
            Pre-Calciner Agent
          </div>
          <div className="agent-item">
            <span className="agent-indicator" style={{ background: '#00a550' }}></span>
            Rotary Kiln Agent
          </div>
          <div className="agent-item">
            <span className="agent-indicator" style={{ background: '#0066cc' }}></span>
            Clinker Cooler Agent
          </div>
          <div className="agent-item">
            <span className="agent-indicator" style={{ background: '#ff8c00' }}></span>
            System Optimizer
          </div>
        </div>
      </div>
      
      <style>{`
        .agent-chat {
          background: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .chat-header {
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .chat-header h3 {
          font-size: 20px;
        }
        .chat-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        .chat-container {
          padding: 20px;
          min-height: 500px;
          max-height: 600px;
          overflow-y: auto;
        }
        .chat-info {
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.05) 0%, 
            rgba(0, 102, 204, 0.05) 100%);
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .chat-info p {
          color: var(--text-light);
          font-style: italic;
        }
        .chat-messages {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .message {
          background: var(--gray-light);
          padding: 15px;
          border-radius: 10px;
          animation: slideIn 0.5s ease;
        }
        .message-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .agent-name {
          font-weight: bold;
          font-size: 14px;
        }
        .message-time {
          color: var(--text-light);
          font-size: 12px;
        }
        .message-content {
          color: var(--text-dark);
          line-height: 1.6;
        }
        .typing-indicator {
          display: flex;
          gap: 5px;
          padding: 15px;
        }
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: var(--text-light);
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        .chat-footer {
          background: var(--gray-light);
          padding: 20px;
        }
        .agent-list {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .agent-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        .agent-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typing {
          0%, 60%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          30% {
            transform: scale(1.3);
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default AgentChat;