import React from 'react';
import { Container } from 'react-bootstrap';

const EventLocation = () => (
  <div>
    <Container className='py-5'>
      <h2 className="head-h1 text-center mb-4" style={{color: "#272525"}}>EVENT LOCATION</h2>
      <div className="map-container" style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Makkah Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.688711972785!2d39.81899022417536!3d21.422487702441274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c2049ef7ca081d%3A0x15d7a558e9fef87b!2sMasjid%20al-Haram%2C%20Makkah%2024220%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1697466828359!5m2!1sen!2sus"
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
