import React, { useState, useEffect } from 'react';
import SensorCard from './SensorCard';
import { sensorConfig, generateSensorValue } from '../../utils/simulationData';

const Dashboard = ({ phase }) => {
  const [sensorData, setSensorData] = useState({});
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    // Initialize sensor data
    const initData = {};
    Object.keys(sensorConfig).forEach(unit => {
      initData[unit] = {};
      Object.keys(sensorConfig[unit].sensors).forEach(sensor => {
        const sensorInfo = sensorConfig[unit].sensors[sensor];
        initData[unit][sensor] = generateSensorValue(sensorInfo, false);
      });
    });
    setSensorData(initData);
  }, []);

  useEffect(() => {
    // Update sensor data every second
    const interval = setInterval(() => {
      const newData = {};
      Object.keys(sensorConfig).forEach(unit => {
        newData[unit] = {};
        Object.keys(sensorConfig[unit].sensors).forEach(sensor => {
          const sensorInfo = sensorConfig[unit].sensors[sensor];
          const isAnomaly = phase === 'anomaly' && Math.random() > 0.7;
          newData[unit][sensor] = generateSensorValue(sensorInfo, isAnomaly);
        });
      });
      setSensorData(newData);
      setTimestamp(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h3>Real-Time Process Monitoring</h3>
        <div className="timestamp">
          Last Update: {timestamp.toLocaleTimeString()}
        </div>
      </div>
      
      <div className="process-flow">
        <div className="flow-diagram">
          <div className="flow-unit pre-cal">
            <div className="unit-icon">{sensorConfig.preCal.icon}</div>
            <div className="unit-name">Pre-Calciner</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-unit kiln">
            <div className="unit-icon">{sensorConfig.kiln.icon}</div>
            <div className="unit-name">Rotary Kiln</div>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-unit cooler">
            <div className="unit-icon">{sensorConfig.cooler.icon}</div>
            <div className="unit-name">Clinker Cooler</div>
          </div>
        </div>
      </div>

      <div className="units-grid">
        {Object.keys(sensorConfig).map(unitKey => (
          <SensorCard
            key={unitKey}
            unit={sensorConfig[unitKey]}
            data={sensorData[unitKey] || {}}
            phase={phase}
          />
        ))}
      </div>

      {phase === 'anomaly' && (
        <div className="alert-banner">
          ⚠️ Anomaly Detected - AI Agents Analyzing Situation
        </div>
      )}

      {phase === 'optimized' && (
        <div className="success-banner">
          ✅ System Optimized - All Parameters in Optimal Range
        </div>
      )}
      
      <style jsx>{`
        .dashboard {
          padding: 20px;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .dashboard-header h3 {
          font-size: 24px;
          color: var(--text-dark);
        }
        .timestamp {
          color: var(--text-light);
          font-size: 14px;
          padding: 8px 16px;
          background: var(--gray-light);
          border-radius: 20px;
        }
        .process-flow {
          background: var(--white);
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .flow-diagram {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }
        .flow-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
          transition: all 0.3s;
        }
        .flow-unit:hover {
          transform: scale(1.05);
        }
        .flow-unit.pre-cal {
          background: linear-gradient(135deg, 
            rgba(255, 0, 0, 0.1) 0%, 
            rgba(255, 165, 0, 0.1) 100%);
        }
        .flow-unit.kiln {
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.1) 0%, 
            rgba(0, 102, 204, 0.1) 100%);
        }
        .flow-unit.cooler {
          background: linear-gradient(135deg, 
            rgba(0, 102, 204, 0.1) 0%, 
            rgba(0, 191, 255, 0.1) 100%);
        }
        .unit-icon {
          font-size: 40px;
          margin-bottom: 10px;
        }
        .unit-name {
          font-size: 14px;
          font-weight: bold;
          color: var(--text-dark);
        }
        .flow-arrow {
          font-size: 30px;
          color: var(--jk-green);
          animation: pulse 2s infinite;
        }
        .units-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        .alert-banner {
          position: fixed;
          bottom: 20px;
          left: 280px;
          right: 20px;
          background: linear-gradient(135deg, #ff6b6b, #ff0000);
          color: var(--white);
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          animation: slideUp 0.5s ease;
          box-shadow: 0 10px 30px rgba(255, 0, 0, 0.3);
        }
        .success-banner {
          position: fixed;
          bottom: 20px;
          left: 280px;
          right: 20px;
          background: linear-gradient(135deg, var(--jk-green), var(--jk-blue));
          color: var(--white);
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          animation: slideUp 0.5s ease;
          box-shadow: 0 10px 30px rgba(0, 165, 80, 0.3);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;