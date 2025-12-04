import React from 'react';
import { FaWhatsapp, FaUsers, FaBullhorn, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WhatsAppMarketing() {
  return (
    <div className="service-detail-page">
      <div className="service-detail-container">
        <div className="service-detail-header">
          <div className="service-icon-large">
            <FaWhatsapp />
          </div>
          <h1>WhatsApp Marketing</h1>
          <p className="service-subtitle">Engage customers directly through WhatsApp Business</p>
          <Link to="/services" className="back-link">← Back to All Services</Link>
        </div>
        
        <div className="service-detail-content">
          <div className="service-overview">
            <h2>Direct Customer Engagement</h2>
            <p>
              Leverage WhatsApp's massive user base to connect with customers 
              personally and drive conversions with targeted campaigns.
            </p>
          </div>
          
          <div className="service-cta">
            <h2>Start Engaging Your Customers</h2>
            <Link to="/get-quote" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}