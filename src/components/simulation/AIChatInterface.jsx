import React, { useState, useEffect } from 'react';

const AIChatInterface = () => {
  const [selectedAgent, setSelectedAgent] = useState('kiln');
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hello! I am the Rotary Kiln AI Agent. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isSimulating, setIsSimulating] = useState(true);

  const agents = {
    preCal: { name: 'Pre-Calciner Agent', icon: '🔥' },
    kiln: { name: 'Rotary Kiln Agent', icon: '⚙️' },
    cooler: { name: 'Clinker Cooler Agent', icon: '❄️' },
    optimizer: { name: 'System Optimizer', icon: '🎯' }
  };

  // Simulated conversation sequence
  const simulatedConversation = [
    { user: "What's the current temperature in the burning zone?", agent: "kiln", 
      response: "Current burning zone temperature is 1450°C, which is within optimal range. Back-end temperature at 1050°C. All parameters stable.", 
      showChart: false },
    { user: "Show me the temperature trend for the last 24 hours", agent: "kiln",
      response: "Here's the temperature trend analysis for the last 24 hours. Notice the stable operation with minor fluctuations within acceptable limits.",
      showChart: true, chartType: 'temperature' },
    { user: "What's our energy efficiency compared to last month?", agent: "optimizer",
      response: "Excellent question! Our current thermal efficiency is at 92%, which is a 12% improvement from last month's average of 82%. Here's the comparative analysis:",
      showChart: true, chartType: 'efficiency' },
    { user: "Any predictions for quality issues in the next shift?", agent: "kiln",
      response: "Based on current trends and predictive models, I'm detecting a potential free lime increase in 3-4 hours if current feed rate continues. Recommend reducing feed rate by 5% preventively.",
      showChart: true, chartType: 'prediction' }
  ];

  // Auto-simulate conversation during sequence
  useEffect(() => {
    if (!isSimulating) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < simulatedConversation.length) {
        const conv = simulatedConversation[index];
        
        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: conv.user }]);
        
        // Switch agent if needed
        if (conv.agent !== selectedAgent) {
          setSelectedAgent(conv.agent);
        }
        
        // Add agent response after delay
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'agent', 
            content: conv.response,
            showChart: conv.showChart,
            chartType: conv.chartType
          }]);
        }, 1500);
        
        index++;
      } else {
        setIsSimulating(false);
        clearInterval(interval);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = { role: 'user', content: inputText };
    setMessages(prev => [...prev, newMessage]);

    // Intelligent response based on keywords
    const response = generateResponse(inputText.toLowerCase(), selectedAgent);
    
    setTimeout(() => {
      setMessages(prev => [...prev, response]);
    }, 800);

    setInputText('');
  };

  const generateResponse = (input, agent) => {
    // Analytics keywords
    if (input.includes('trend') || input.includes('graph') || input.includes('chart') || input.includes('show')) {
      return {
        role: 'agent',
        content: `I've analyzed the data and generated the requested visualization. The trends show optimal performance with minor variations within acceptable limits.`,
        showChart: true,
        chartType: 'general'
      };
    }
    
    if (input.includes('efficiency') || input.includes('energy')) {
      return {
        role: 'agent',
        content: `Current energy efficiency metrics: Thermal efficiency at 92%, Electrical consumption reduced by 8%, Fuel consumption optimized at 12% below target. Here's the detailed breakdown:`,
        showChart: true,
        chartType: 'efficiency'
      };
    }
    
    if (input.includes('quality') || input.includes('free lime') || input.includes('clinker')) {
      return {
        role: 'agent',
        content: `Quality parameters are excellent. Free lime: 1.0%, C3S: 65%, C2S: 15%, Clinker reactivity: High. Quality trend analysis:`,
        showChart: true,
        chartType: 'quality'
      };
    }
    
    if (input.includes('predict') || input.includes('forecast') || input.includes('future')) {
      return {
        role: 'agent',
        content: `Based on machine learning models analyzing current patterns, I predict stable operations for the next 8 hours with 95% confidence. Potential optimization opportunity identified at hour 5.`,
        showChart: true,
        chartType: 'prediction'
      };
    }
    
    if (input.includes('temperature') || input.includes('temp')) {
      return {
        role: 'agent',
        content: `Temperature readings across all zones are optimal. Burning zone: 1450°C, Transition zone: 1200°C, Calcination zone: 900°C. All within target ranges.`,
        showChart: false
      };
    }
    
    // Default response
    return {
      role: 'agent',
      content: `I understand your query. Based on current operational data, all systems are functioning within optimal parameters. Would you like to see specific analytics or trends?`,
      showChart: false
    };
  };

  const renderChart = (type) => {
    switch(type) {
      case 'temperature':
        return (
          <div className="chart-display">
            <h5>Temperature Trend (24 Hours)</h5>
            <svg viewBox="0 0 400 200">
              <line x1="0" y1="180" x2="400" y2="180" stroke="#ddd" strokeWidth="1"/>
              <line x1="0" y1="140" x2="400" y2="140" stroke="#ddd" strokeWidth="1"/>
              <line x1="0" y1="100" x2="400" y2="100" stroke="#ddd" strokeWidth="1"/>
              <line x1="0" y1="60" x2="400" y2="60" stroke="#ddd" strokeWidth="1"/>
              <line x1="0" y1="20" x2="400" y2="20" stroke="#ddd" strokeWidth="1"/>
              
              <polyline
                points="10,100 40,95 70,90 100,92 130,88 160,85 190,87 220,90 250,88 280,92 310,90 340,88 370,85"
                fill="none"
                stroke="#00a550"
                strokeWidth="3"
              />
              
              <line x1="0" y1="80" x2="400" y2="80" stroke="#ff0000" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
              <line x1="0" y1="110" x2="400" y2="110" stroke="#ff0000" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
              
              <text x="10" y="195" fontSize="10" fill="#666">0h</text>
              <text x="190" y="195" fontSize="10" fill="#666">12h</text>
              <text x="370" y="195" fontSize="10" fill="#666">24h</text>
              
              <text x="380" y="85" fontSize="10" fill="#ff0000">Max</text>
              <text x="380" y="115" fontSize="10" fill="#ff0000">Min</text>
            </svg>
            <div className="chart-legend">
              <span><span className="dot green"></span> Actual Temperature</span>
              <span><span className="dot red"></span> Limits</span>
            </div>
          </div>
        );
      
      case 'efficiency':
        return (
          <div className="chart-display">
            <h5>Energy Efficiency Comparison</h5>
            <div className="bar-chart">
              <div className="bar-group">
                <div className="bar last-month" style={{height: '82%'}}>
                  <span className="value">82%</span>
                </div>
                <span className="label">Last Month</span>
              </div>
              <div className="bar-group">
                <div className="bar current" style={{height: '92%'}}>
                  <span className="value">92%</span>
                </div>
                <span className="label">Current</span>
              </div>
              <div className="bar-group">
                <div className="bar target" style={{height: '95%'}}>
                  <span className="value">95%</span>
                </div>
                <span className="label">Target</span>
              </div>
            </div>
            <div className="efficiency-metrics">
              <div className="metric">
                <span className="metric-label">💡 Power Saved:</span>
                <span className="metric-value">245 MWh</span>
              </div>
              <div className="metric">
                <span className="metric-label">⛽ Fuel Saved:</span>
                <span className="metric-value">120 tons</span>
              </div>
              <div className="metric">
                <span className="metric-label">💰 Cost Saved:</span>
                <span className="metric-value">₹18.5L</span>
              </div>
            </div>
          </div>
        );
      
      case 'quality':
        return (
          <div className="chart-display">
            <h5>Quality Parameters Dashboard</h5>
            <div className="quality-grid">
              <div className="quality-item">
                <div className="circular-progress">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#00a550" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.95} ${2 * Math.PI * 40}`}
                      transform="rotate(-90 50 50)"/>
                  </svg>
                  <span className="progress-value">95%</span>
                </div>
                <span className="quality-label">C3S Content</span>
              </div>
              <div className="quality-item">
                <div className="circular-progress">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#0066cc" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.98} ${2 * Math.PI * 40}`}
                      transform="rotate(-90 50 50)"/>
                  </svg>
                  <span className="progress-value">98%</span>
                </div>
                <span className="quality-label">Fineness</span>
              </div>
              <div className="quality-item">
                <div className="circular-progress">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#ff8c00" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.01} ${2 * Math.PI * 40}`}
                      transform="rotate(-90 50 50)"/>
                  </svg>
                  <span className="progress-value">1.0%</span>
                </div>
                <span className="quality-label">Free Lime</span>
              </div>
            </div>
          </div>
        );
      
      case 'prediction':
        return (
          <div className="chart-display">
            <h5>8-Hour Predictive Analysis</h5>
            <svg viewBox="0 0 400 200">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00a550" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#00a550" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[1,2,3,4,5,6,7,8].map(i => (
                <line key={i} x1={i*50} y1="0" x2={i*50} y2="180" stroke="#eee" strokeWidth="1"/>
              ))}
              
              {/* Prediction area */}
              <polygon
                points="0,100 50,95 100,90 150,92 200,95 250,100 300,105 350,103 400,100 400,180 0,180"
                fill="url(#gradient)"
              />
              
              {/* Prediction line */}
              <polyline
                points="0,100 50,95 100,90 150,92 200,95 250,100 300,105 350,103 400,100"
                fill="none"
                stroke="#00a550"
                strokeWidth="2"
              />
              
              {/* Optimization point */}
              <circle cx="250" cy="100" r="5" fill="#ff8c00"/>
              <text x="235" y="85" fontSize="10" fill="#ff8c00">Optimization</text>
              
              {/* Labels */}
              <text x="10" y="195" fontSize="10" fill="#666">Now</text>
              <text x="190" y="195" fontSize="10" fill="#666">+4h</text>
              <text x="380" y="195" fontSize="10" fill="#666">+8h</text>
            </svg>
            <div className="prediction-insights">
              <p>✅ Stable operations predicted with 95% confidence</p>
              <p>⚡ Optimization opportunity at hour 5: Reduce feed by 3%</p>
              <p>📈 Expected efficiency gain: +2.5%</p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="chart-display">
            <h5>Real-Time Analytics Dashboard</h5>
            <div className="mini-charts">
              <div className="mini-chart">
                <svg viewBox="0 0 100 50">
                  <polyline points="0,40 20,30 40,35 60,20 80,25 100,15" 
                    fill="none" stroke="#00a550" strokeWidth="2"/>
                </svg>
                <span>Efficiency ↑</span>
              </div>
              <div className="mini-chart">
                <svg viewBox="0 0 100 50">
                  <polyline points="0,25 20,20 40,22 60,18 80,20 100,15" 
                    fill="none" stroke="#0066cc" strokeWidth="2"/>
                </svg>
                <span>Quality ↑</span>
              </div>
              <div className="mini-chart">
                <svg viewBox="0 0 100 50">
                  <polyline points="0,35 20,30 40,28 60,25 80,20 100,18" 
                    fill="none" stroke="#ff8c00" strokeWidth="2"/>
                </svg>
                <span>Energy ↓</span>
              </div>
            </div>
          </div>
        );
    }
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
                  <p>{msg.content}</p>
                  {msg.showChart && renderChart(msg.chartType)}
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
              placeholder="Ask about temperatures, efficiency, quality, trends..."
              disabled={isSimulating}
            />
            <button onClick={handleSend} className="send-btn" disabled={isSimulating}>
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="info-panel">
        <h3>💡 AI Assistant Capabilities</h3>
        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <div>
              <h4>Real-time Analytics</h4>
              <p>Get instant visualizations and insights</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔍</span>
            <div>
              <h4>Predictive Analysis</h4>
              <p>Forecast trends and optimize operations</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💬</span>
            <div>
              <h4>Natural Language</h4>
              <p>Ask questions in plain English</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <div>
              <h4>Instant Insights</h4>
              <p>Get recommendations based on live data</p>
            </div>
          </div>
        </div>
        
        <div className="sample-queries">
          <h4>Try asking:</h4>
          <ul>
            <li>"Show me temperature trends"</li>
            <li>"What's our energy efficiency?"</li>
            <li>"Predict quality for next shift"</li>
            <li>"Analyze clinker quality"</li>
          </ul>
        </div>
      </div>
      
      <style>{`
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
          height: 600px;
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
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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
        
        /* Charts Styling */
        .chart-display {
          margin-top: 15px;
          padding: 15px;
          background: var(--white);
          border-radius: 8px;
          border: 1px solid #eee;
        }
        .chart-display h5 {
          font-size: 14px;
          color: var(--text-dark);
          margin-bottom: 10px;
        }
        .chart-display svg {
          width: 100%;
          height: 150px;
        }
        .chart-legend {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 10px;
          font-size: 12px;
        }
        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .dot.green { background: #00a550; }
        .dot.red { background: #ff0000; }
        
        .bar-chart {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 150px;
          padding: 20px;
        }
        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .bar {
          width: 60px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          border-radius: 5px 5px 0 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 10px;
          transition: all 0.5s ease;
        }
        .bar.last-month {
          background: #ccc;
        }
        .bar.target {
          background: linear-gradient(135deg, #ff8c00, #ff6b6b);
        }
        .bar .value {
          color: white;
          font-weight: bold;
          font-size: 14px;
        }
        .bar-group .label {
          font-size: 12px;
          color: var(--text-light);
        }
        
        .efficiency-metrics {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
        .metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .metric-label {
          font-size: 12px;
          color: var(--text-light);
        }
        .metric-value {
          font-size: 18px;
          font-weight: bold;
          color: var(--jk-green);
        }
        
        .quality-grid {
          display: flex;
          justify-content: space-around;
          padding: 20px 0;
        }
        .quality-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .circular-progress {
          position: relative;
          width: 80px;
          height: 80px;
        }
        .circular-progress svg {
          width: 100%;
          height: 100%;
        }
        .progress-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          font-size: 16px;
        }
        .quality-label {
          font-size: 12px;
          color: var(--text-light);
        }
        
        .prediction-insights {
          margin-top: 15px;
          padding: 15px;
          background: rgba(0, 165, 80, 0.05);
          border-radius: 5px;
        }
        .prediction-insights p {
          margin: 5px 0;
          font-size: 13px;
          color: var(--text-dark);
        }
        
        .mini-charts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          padding: 10px;
        }
        .mini-chart {
          text-align: center;
        }
        .mini-chart svg {
          width: 100%;
          height: 50px;
          margin-bottom: 5px;
        }
        .mini-chart span {
          font-size: 12px;
          color: var(--text-light);
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
        .input-area input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
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
        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }
        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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
          margin-bottom: 30px;
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
        
        .sample-queries {
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        .sample-queries h4 {
          font-size: 14px;
          color: var(--text-dark);
          margin-bottom: 10px;
        }
        .sample-queries ul {
          list-style: none;
          padding-left: 10px;
        }
        .sample-queries li {
          font-size: 12px;
          color: var(--text-light);
          margin-bottom: 8px;
          padding-left: 15px;
          position: relative;
        }
        .sample-queries li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--jk-green);
        }
      `}</style>
    </div>
  );
};

export default AIChatInterface;