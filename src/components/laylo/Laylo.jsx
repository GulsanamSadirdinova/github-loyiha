import React from "react";
import "./Laylo.css";

function Laylo() {
  return (
    <div className="dashboard-container">
     
      <div className="dashboard-header">
        <div className="header-left">
          <p className="breadcrumb">Home / <span>Dashboard</span></p>
          <h1>Dashboard</h1>
        </div>

        <div className="header-right">
          <div className="bell-container">
            <span className="bell">🔔</span>
            <span className="dot"></span>
          </div>

          <div className="profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
            />
            <div className="profile-info">
              <p className="name">Moray Livon</p>
              <p className="role">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <p className="title">Task Done Today</p>
          <h2>233 <span>of 310</span></h2>
          <p className="progress">🔼 10% of yesterday</p>
        </div>

        <div className="card">
          <p className="title">Ongoing Project</p>
          <h2>124 <span>of 140</span></h2>
          <p className="progress">🔼 5% of last month</p>
        </div>

        <div className="card">
          <div className="card-header">
            <p className="title">Value Project</p>
            <span className="eye">👁️</span>
          </div>
          <h2>$53,111</h2>
          <a href="#" className="link">See analytics →</a>
        </div>

        <div className="card">
          <p className="title">Update</p>
          <h3>Project revenue increased <span className="blue">12%</span> in 1 week</h3>
          <a href="#" className="link">See analytics →</a>
        </div>
      </div>
    </div>
  );
}

export default Laylo;
