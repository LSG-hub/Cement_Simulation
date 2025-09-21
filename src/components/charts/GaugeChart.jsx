import React from 'react';

const GaugeChart = ({ value, min, max, optimal, danger, label, unit }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const rotation = -135 + (percentage * 270) / 100;
  
  const getColor = () => {
    if (value >= danger[0] && value <= danger[1]) return '#ff0000';
    if (value >= optimal[0] && value <= optimal[1]) return '#00a550';
    return '#ffa500';
  };

  return (
    <div className="gauge-container">
      <div className="gauge">
        <div className="gauge-background">
          <div className="danger-zone left"></div>
          <div className="optimal-zone"></div>
          <div className="danger-zone right"></div>
        </div>
        <div className="gauge-needle" style={{ transform: `rotate(${rotation}deg)` }}>
          <div className="needle"></div>
        </div>
        <div className="gauge-center"></div>
      </div>
      <div className="gauge-info">
        <div className="gauge-value" style={{ color: getColor() }}>
          {value.toFixed(1)} {unit}
        </div>
        <div className="gauge-label">{label}</div>
        <div className="gauge-range">
          <span>Min: {min}</span>
          <span>Optimal: {optimal[0]}-{optimal[1]}</span>
          <span>Max: {max}</span>
        </div>
      </div>
      
      <style jsx>{`
        .gauge-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
        }
        .gauge {
          position: relative;
          width: 120px;
          height: 80px;
          margin-bottom: 10px;
        }
        .gauge-background {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          overflow: hidden;
          border-radius: 120px 120px 0 0;
        }
        .danger-zone {
          flex: 1;
          background: rgba(255, 0, 0, 0.2);
        }
        .danger-zone.left {
          border-right: 2px solid rgba(255, 0, 0, 0.4);
        }
        .danger-zone.right {
          border-left: 2px solid rgba(255, 0, 0, 0.4);
        }
        .optimal-zone {
          flex: 2;
          background: rgba(0, 165, 80, 0.2);
        }
        .gauge-needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 2px;
          height: 70px;
          transform-origin: bottom;
          transition: transform 0.5s ease;
        }
        .needle {
          width: 100%;
          height: 100%;
          background: #333;
          box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }
        .gauge-center {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 15px;
          background: #333;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        .gauge-info {
          text-align: center;
        }
        .gauge-value {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .gauge-label {
          font-size: 12px;
          color: var(--text-light);
          margin-bottom: 5px;
        }
        .gauge-range {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: var(--text-light);
          width: 150px;
        }
      `}</style>
    </div>
  );
};

export default GaugeChart;