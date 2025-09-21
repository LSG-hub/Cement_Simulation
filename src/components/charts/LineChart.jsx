import React from 'react';

const LineChart = ({ data, title, height = 200 }) => {
  return (
    <div className="line-chart">
      <h4>{title}</h4>
      <div className="chart-container" style={{ height }}>
        <svg viewBox="0 0 400 200" preserveAspectRatio="none">
          <polyline
            points="0,150 50,120 100,130 150,100 200,110 250,90 300,95 350,85 400,80"
            fill="none"
            stroke="#00a550"
            strokeWidth="2"
          />
          <line x1="0" y1="100" x2="400" y2="100" stroke="#ccc" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>
      <style>{`
        .line-chart {
          padding: 10px;
        }
        .line-chart h4 {
          font-size: 14px;
          margin-bottom: 10px;
          color: var(--text-dark);
        }
        .chart-container {
          width: 100%;
          background: rgba(0, 165, 80, 0.02);
          border-radius: 5px;
          padding: 10px;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default LineChart;