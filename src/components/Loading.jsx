import React from "react";
import "./Loading.css"; // We'll create this CSS file

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
        <div className="spinner-inner"></div>
      </div>

      <div className="loading-content">
        <h2 className="loading-title">Loading Your Digital Experience</h2>
        <p className="loading-subtitle">
          CS5 Team - Excellence in Digital Solutions
        </p>

        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>

        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="loading-cards">
          <div className="loading-card"></div>
          <div className="loading-card"></div>
          <div className="loading-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
