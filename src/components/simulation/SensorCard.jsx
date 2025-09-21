import React from 'react';
import GaugeChart from '../charts/GaugeChart';

const SensorCard = ({ unit, data, phase }) => {
  return (
    <div className={`sensor-card ${phase}`}>
      <div className="card-header">
        <span className="unit-icon">{unit.icon}</span>
        <h4>{unit.name}</h4>
        <span className={`status-indicator ${phase}`}>
          {phase === 'normal' && '●'}
          {phase === 'anomaly' && '⚠️'}
          {phase === 'optimized' && '✓'}
        </span>
      </div>
      <div className="sensors-grid">
        {Object.keys(unit.sensors).map(sensorKey => {
          const sensor = unit.sensors[sensorKey];
          const value = data[sensorKey] || sensor.optimal[0];
          
          return (
            <GaugeChart
              key={sensorKey}
              value={value}
              min={sensor.min}
              max={sensor.max}
              optimal={sensor.optimal}
              danger={sensor.danger}
              label={sensor.name}
              unit={sensor.unit}
            />
          );
        })}
      </div>
      
      <style>{`
        .sensor-card {
          background: var(--white);
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        .sensor-card:hover {
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }
        .sensor-card.anomaly {
          border: 2px solid rgba(255, 0, 0, 0.3);
          animation: alertPulse 2s infinite;
        }
        .sensor-card.optimized {
          border: 2px solid rgba(0, 165, 80, 0.3);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid var(--gray-light);
        }
        .unit-icon {
          font-size: 24px;
        }
        .card-header h4 {
          flex: 1;
          font-size: 18px;
          color: var(--text-dark);
        }
        .status-indicator {
          font-size: 20px;
        }
        .status-indicator.normal {
          color: #00ff00;
        }
        .status-indicator.anomaly {
          animation: blink 1s infinite;
        }
        .status-indicator.optimized {
          color: var(--jk-green);
        }
        .sensors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
        }
        @keyframes alertPulse {
          0%, 100% {
            box-shadow: 0 2px 10px rgba(255, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 5px 20px rgba(255, 0, 0, 0.4);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default SensorCard;