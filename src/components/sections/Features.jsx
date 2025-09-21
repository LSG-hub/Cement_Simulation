import React from 'react';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Unit Agents",
      desc: "Transform Pre-Calciner, Rotary Kiln, and Clinker Cooler into intelligent agents",
      icon: "🤖"
    },
    {
      title: "Real-time Communication",
      desc: "Seamless inter-unit dialogue for instant optimization decisions",
      icon: "⚡"
    },
    {
      title: "Alternative Fuel Optimization",
      desc: "Maximize thermal substitution rates with intelligent fuel combination modeling",
      icon: "♻️"
    },
    {
      title: "Quality Assurance",
      desc: "Proactive quality corrections through predictive analytics",
      icon: "✓"
    },
    {
      title: "Energy Efficiency",
      desc: "Reduce consumption across grinding, clinkerization, and utilities",
      icon: "⚡"
    },
    {
      title: "Sustainability Focus",
      desc: "Lower environmental impact through intelligent process control",
      icon: "🌱"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Intelligent Features for Modern Cement Plants</h2>
        <p className="section-subtitle">
          Leveraging Google AI technologies including Gemini, Vertex AI, and BigQuery
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .features {
          padding: 80px 0;
          background: var(--white);
        }
        h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 15px;
          color: var(--text-dark);
        }
        .section-subtitle {
          text-align: center;
          color: var(--text-light);
          font-size: 18px;
          margin-bottom: 50px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        .feature-card {
          background: linear-gradient(135deg, 
            rgba(0, 165, 80, 0.03) 0%, 
            rgba(0, 102, 204, 0.03) 100%);
          padding: 30px;
          border-radius: 10px;
          border: 1px solid rgba(0, 165, 80, 0.1);
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 165, 80, 0.15);
        }
        .feature-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        .feature-card h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: var(--jk-green);
        }
        .feature-card p {
          color: var(--text-light);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Features;