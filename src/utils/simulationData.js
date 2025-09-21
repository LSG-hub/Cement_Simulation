// Sensor configurations for all three units
export const sensorConfig = {
  preCal: {
    name: "Pre-Calciner",
    icon: "🔥",
    sensors: {
      temp: { name: "Temperature", unit: "°C", min: 700, max: 1000, optimal: [820, 900], danger: [950, 1000] },
      pressure: { name: "Tertiary Air Pressure", unit: "mbar", min: 0, max: 100, optimal: [40, 60], danger: [80, 100] },
      coalFeed: { name: "Coal Feed Rate", unit: "t/h", min: 0, max: 20, optimal: [8, 12], danger: [18, 20] },
      mealFeed: { name: "Raw Meal Feed", unit: "t/h", min: 100, max: 300, optimal: [180, 220], danger: [280, 300] },
      oxygen: { name: "O₂ Level", unit: "%", min: 0, max: 10, optimal: [2, 4], danger: [0, 1] },
      co: { name: "CO Level", unit: "ppm", min: 0, max: 1000, optimal: [0, 100], danger: [800, 1000] },
      calcDegree: { name: "Calcination Degree", unit: "%", min: 0, max: 100, optimal: [85, 95], danger: [0, 70] }
    }
  },
  kiln: {
    name: "Rotary Kiln",
    icon: "⚙️",
    sensors: {
      bzTemp: { name: "Burning Zone Temp", unit: "°C", min: 1200, max: 1600, optimal: [1400, 1500], danger: [1550, 1600] },
      beTemp: { name: "Back End Temp", unit: "°C", min: 800, max: 1200, optimal: [1000, 1100], danger: [1150, 1200] },
      shellTemp: { name: "Shell Temperature", unit: "°C", min: 100, max: 400, optimal: [200, 350], danger: [380, 400] },
      oxygen: { name: "O₂ Level", unit: "%", min: 0, max: 8, optimal: [1, 3], danger: [6, 8] },
      nox: { name: "NOx Level", unit: "mg/Nm³", min: 0, max: 1200, optimal: [400, 800], danger: [1000, 1200] },
      speed: { name: "Kiln Speed", unit: "rpm", min: 2, max: 5, optimal: [3, 4], danger: [4.5, 5] },
      freeLime: { name: "Free Lime", unit: "%", min: 0, max: 3, optimal: [0.8, 1.2], danger: [2, 3] }
    }
  },
  cooler: {
    name: "Clinker Cooler",
    icon: "❄️",
    sensors: {
      inletTemp: { name: "Clinker Inlet Temp", unit: "°C", min: 1000, max: 1400, optimal: [1200, 1300], danger: [1350, 1400] },
      outletTemp: { name: "Clinker Outlet Temp", unit: "°C", min: 50, max: 250, optimal: [100, 150], danger: [200, 250] },
      secAirTemp: { name: "Secondary Air Temp", unit: "°C", min: 600, max: 1000, optimal: [800, 900], danger: [950, 1000] },
      undergrate: { name: "Undergrate Pressure", unit: "mbar", min: 0, max: 150, optimal: [50, 100], danger: [130, 150] },
      grateSpeed: { name: "Grate Speed", unit: "m/min", min: 5, max: 30, optimal: [10, 20], danger: [25, 30] },
      airFlow: { name: "Cooling Air Flow", unit: "Nm³/kg", min: 1.5, max: 3.5, optimal: [2.0, 2.5], danger: [3.0, 3.5] },
      exhaustTemp: { name: "Exhaust Temp", unit: "°C", min: 150, max: 450, optimal: [250, 350], danger: [400, 450] }
    }
  }
};

// Generate random value with occasional spikes
export const generateSensorValue = (sensor, isAnomaly = false) => {
  const { min, max, optimal } = sensor;
  
  if (isAnomaly) {
    // Generate value outside optimal range
    return Math.random() > 0.5 
      ? optimal[1] + (max - optimal[1]) * Math.random() * 0.8
      : min + (optimal[0] - min) * Math.random() * 0.3;
  }
  
  // Normal operation - mostly in optimal range
  const optimalMid = (optimal[0] + optimal[1]) / 2;
  const optimalRange = optimal[1] - optimal[0];
  return optimalMid + (Math.random() - 0.5) * optimalRange * 0.6;
};

// Chat messages for AI agents
export const agentConversations = [
  { agent: "Pre-Calciner", message: "Detecting unusual spike in CO levels - currently at 850 ppm", time: "10:15:32" },
  { agent: "Rotary Kiln", message: "Confirmed - seeing increased back-end temperature. Possible incomplete combustion.", time: "10:15:45" },
  { agent: "Clinker Cooler", message: "Secondary air temperature rising. Adjusting cooling air flow to compensate.", time: "10:16:02" },
  { agent: "Pre-Calciner", message: "Analyzing alternative fuel injection rate... Current mix: 60% coal, 40% RDF", time: "10:16:15" },
  { agent: "Rotary Kiln", message: "Recommend reducing alternative fuel by 15% and increasing kiln speed to 3.8 rpm", time: "10:16:28" },
  { agent: "Pre-Calciner", message: "Adjusting fuel mix to 70% coal, 30% RDF. Increasing tertiary air pressure.", time: "10:16:42" },
  { agent: "Clinker Cooler", message: "Increasing undergrate pressure to 85 mbar to maintain clinker quality.", time: "10:17:01" },
  { agent: "System Optimizer", message: "Coordinated adjustment complete. All parameters returning to optimal range.", time: "10:17:20" }
];

// Solutions to be implemented
export const solutions = [
  { id: 1, unit: "Pre-Calciner", action: "Reduce alternative fuel injection by 15%", status: "pending" },
  { id: 2, unit: "Pre-Calciner", action: "Increase tertiary air pressure to 55 mbar", status: "pending" },
  { id: 3, unit: "Rotary Kiln", action: "Increase kiln speed to 3.8 rpm", status: "pending" },
  { id: 4, unit: "Rotary Kiln", action: "Adjust burner position by -5cm", status: "pending" },
  { id: 5, unit: "Clinker Cooler", action: "Increase cooling air flow to 2.3 Nm³/kg", status: "pending" },
  { id: 6, unit: "Clinker Cooler", action: "Reduce grate speed to 12 m/min", status: "pending" }
];