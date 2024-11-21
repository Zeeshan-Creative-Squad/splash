import React, { useState } from 'react';
import './AthleteServices.css';

const AthleteServices = () => {
  const [activeTab, setActiveTab] = useState('service1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <h1 className="main-heading">IT'S ALL ABOUT THE ATHLETE EXPERIENCE</h1>

      <div className="row">
        {/* Left Column: Image Section */}
        <div className="col-lg-6 image-section">
          <img src="/images/creatives/Athlete-Image.jpg" alt="Athlete" />
        </div>

        {/* Right Column: Tabs and Content Section */}
        <div className="col-lg-6 Services-section">
          {/* Service Tabs */}
          <div className="tabs">
            <button
              className={activeTab === 'service1' ? 'active' : ''}
              onClick={() => handleTabClick('service1')}
            >
              Service 1
            </button>
            <button
              className={activeTab === 'service2' ? 'active' : ''}
              onClick={() => handleTabClick('service2')}
            >
              Service 2
            </button>
            <button
              className={activeTab === 'service3' ? 'active' : ''}
              onClick={() => handleTabClick('service3')}
            >
              Service 3
            </button>
          </div>

          {/* Text Content */}
          <div className="text-section">
            <h2>
              {activeTab === 'service1'
                ? "It's All About the Athlete Experience"
                : 'Service Details'}
            </h2>
            <p>
              At Splash Sports Events, we are committed to creating an
              exceptional experience by paying attention to the needs and goals
              of each athlete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteServices;
