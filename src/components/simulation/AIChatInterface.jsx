import React, { useState } from 'react';

const AIChatInterface = () => {
  const [selectedAgent, setSelectedAgent] = useState('kiln');
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hello! I am the Rotary Kiln AI Agent. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const agents = {
    preCal: { name: 'Pre-Calciner Agent', icon: '🔥' },
    kiln: { name: 'Rotary Kiln Agent', icon: '⚙️' },
    cooler: { name: 'Clinker Cooler Agent', icon: '❄️' },
    optimizer: { name: 'System Optimizer', icon: '🎯' }
  };

  const predefinedResponses = {
    kiln: {
      'temperature': 'Current burning zone temperature is 1450°C, which is within optimal range. Back-end temperature at 1050°C.',
      'efficiency': 'Operating at 92% thermal efficiency. Recent optimizations have reduced fuel consumption by 12%.',
      'quality': 'Free lime levels at 1.0%, indicating excellent clinker quality. All parameters optimal.',
      'default': 'I can provide information about kiln temperatures, efficiency metrics, and quality parameters. What would you like to know?'
    }
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = { role: 'user', content: inputText };
    
    // Generate AI response
    const keywords = ['temperature', 'efficiency', 'quality'];
    const matchedKeyword = keywords.find(k => inputText.toLowerCase().includes(k));
    const response = predefinedResponses[selectedAgent][matchedKeyword || 'default'];

    setMessages(prev => [
      ...prev,
      newMessage,
      { 
        role: 'agent', 
        content: response,
        chart: matchedKeyword === 'temperature' // Show chart for temperature queries
      }
    ]);

    setInputText('');
  };

  const handleAgentChange = (agent) => {
    setSelectedAgent(agent);
    setMessages([
      { 
        role: 'system', 
        content: `Hello! I am the ${agents[agent].name}. How can I help you today?` 
      }
    ]);
  };

  return (
    <div className="ai-chat-interface">
      <div className="chat-panel">
        <div className="agent-selector">
          {Object.keys(agents).map(key => (
            <button
              key={key}
              className={`agent-btn ${selectedAgent === key ? 'active' : ''}`}
              onClick={() => handleAgentChange(key)}
            >
              <span className="agent-icon">{agents[key].icon}</span>
              <span className="agent-name">{agents[key].name}</span>
            </button>
          ))}
        </div>

        <div className="chat-window">
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.role === 'agent' && (
                  <div className="agent-avatar">{agents[selectedAgent].icon}</div>
                )}
                <div className="message-bubble">
                  {msg.content}
                  {msg.chart && (
                    <div className="inline-chart">
                      <div className="chart-title">Temperature Trend (Last 24h)</div>
                      <div className="mini-chart">
                        <svg viewBox="0 0 300 100">
                          <polyline
                            points="0,50 50,45 100,40 150,42 200,38 250,35 300,40"
                            fill="none"
                            stroke="#00a550"
                            strokeWidth="2"
                          />
                          <line x1="0" y1="30" x2="300" y2="30" stroke="#ff0000" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                          <line x1="0" y1="60" x2="300" y2="60" stroke="#ff0000" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                        </svg>
                        <div className="chart-labels">
                          <span>1400°C</span>
                          <span>1450°C</span>
                          <span>1500°C</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about temperatures, efficiency, or quality..."
            />
            <button onClick={handleSend} className="send-btn">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="info-panel">
        <h3>💡 AI Assistant Features</h3>
        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <div>
              <h4>Real-time Analytics</h4>
              <p>Get instant insights and visualizations from any unit</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔍</span>
            <div>
              <h4>Predictive Analysis</h4>
              <p>Forecast trends and potential issues before they occur</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💬</span>
            <div>
              <h4>Natural Language</h4>
              <p>Ask questions in plain English, get expert responses</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <div>
              <h4>Instant Recommendations</h4>
              <p>Receive optimization suggestions based on current data</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .ai-chat-interface {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          padding: 20px;
        }
        .chat-panel {
          background: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .agent-selector {
          display: flex;
          background: var(--gray-light);
          padding: 10px;
          gap: 10px;
        }
        .agent-btn {
          flex: 1;
          padding: 10px;
          background: var(--white);
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .agent-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .agent-btn.active {
          border-color: var(--jk-green);
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.05) 0%, 
            rgba(0, 102, 204, 0.05) 100%);
        }
        .agent-icon {
          font-size: 24px;
        }
        .agent-name {
          font-size: 12px;
          color: var(--text-dark);
        }
        .chat-window {
          display: flex;
          flex-direction: column;
          height: 500px;
        }
        .messages-container {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .message {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .message.user {
          justify-content: flex-end;
        }
        .message.system {
          justify-content: center;
        }
        .agent-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .message-bubble {
          max-width: 70%;
          padding: 12px 16px;
          border-radius: 10px;
          line-height: 1.6;
        }
        .message.agent .message-bubble {
          background: var(--gray-light);
          color: var(--text-dark);
        }
        .message.user .message-bubble {
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
        }
        .message.system .message-bubble {
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.1) 0%, 
            rgba(0, 102, 204, 0.1) 100%);
          color: var(--text-dark);
          font-style: italic;
        }
        .inline-chart {
          margin-top: 15px;
          padding: 15px;
          background: var(--white);
          border-radius: 8px;
        }
        .chart-title {
          font-size: 12px;
          color: var(--text-light);
          margin-bottom: 10px;
        }
        .mini-chart {
          height: 80px;
          position: relative;
        }
        .mini-chart svg {
          width: 100%;
          height: 60px;
        }
        .chart-labels {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: var(--text-light);
          margin-top: 5px;
        }
        .input-area {
          display: flex;
          padding: 20px;
          border-top: 1px solid var(--gray-light);
          gap: 10px;
        }
        .input-area input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 25px;
          font-size: 14px;
          font-family: 'Times New Roman', Times, serif;
        }
        .send-btn {
          padding: 10px 25px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-family: 'Times New Roman', Times, serif;
          font-weight: bold;
          transition: all 0.3s;
        }
        .send-btn:hover {
          transform: scale(1.05);
        }
        .info-panel {
          background: var(--white);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .info-panel h3 {
          font-size: 20px;
          margin-bottom: 20px;
          color: var(--text-dark);
        }
        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .feature-item {
          display: flex;
          gap: 15px;
        }
        .feature-icon {
          font-size: 24px;
        }
        .feature-item h4 {
          font-size: 14px;
          color: var(--jk-green);
          margin-bottom: 5px;
        }
        .feature-item p {
          font-size: 12px;
          color: var(--text-light);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default AIChatInterface;