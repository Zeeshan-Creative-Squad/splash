import React from 'react';
import { Container } from 'react-bootstrap';

const EventLocation = () => (
  <div>
    <Container className='py-5'>
      <h2 className="head-h1 text-center mb-4" style={{ color: "#272525" }}>EVENT LOCATION</h2>
      <div className="map-container" style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Toronto Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2616845150636!2d-79.38318648450356!3d43.65322527912101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34e7d8e9b1b7%3A0x27f237d0eae5f4e8!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1697466828359!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  </div>
);

export default EventLocation;
