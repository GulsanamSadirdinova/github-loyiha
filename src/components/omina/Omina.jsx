import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Omina.css";

const taskData = [
    { name: "Mon", done: 65, target: 35 },
    { name: "Tue", done: 42, target: 60 },
    { name: "Wed", done: 45, target: 85 },
    { name: "Thu", done: 40, target: 60 },
    { name: "Fri", done: 42, target: 20 },
    { name: "Sat", done: 60, target: 30 },
    { name: "Sun", done: 45, target: 55 },
    
  ];

function Omina() {
    return(
<div className="dashboard">
    {/* Left Card */}
    <div className="card">
      <div className="card-header">
        <div>
          <h2 className="title">Track Daily Task Progress</h2>
          <p className="subtitle">Overview of Daily Task Achievements</p>
        </div>
        <select className="dropdown">
          <option>Daily</option>
          <option>Weekly</option>
        </select>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={taskData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="done" fill="#3b82f6" name="Task Done" />
            <Bar dataKey="target" fill="#d1d5db" name="Task Target" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Right Card - Custom Bubble Chart */}
    <div className="card">
      <div className="card-header">
        <h2 className="title2">Employee Mood Insights</h2>
      </div>

      <div className="bubble-container">
        {/* Large Bubble - Happy */}
        <div className="bubble bubble-large">62%</div>

        {/* Medium Bubble - Neutral */}
        <div className="bubble bubble-medium">28%</div>

        {/* Small Bubble - Other */}
        <div className="bubble bubble-small">10%</div>
      </div>

      {/* Legend */}
      <div className="legend">
        <div className="legend-item">
          <span className="dot happy"></span> Happy 62%
        </div>
        <div className="legend-item">
          <span className="dot neutral"></span> Neutral 28%
        </div>
        <div className="legend-item">
          <span className="dot other"></span> Other 10%
        </div>
      </div>
    </div>
  </div>


       
    )
}

export default Omina