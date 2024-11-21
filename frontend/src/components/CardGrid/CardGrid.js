import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardGrid.css';
import { useNavigate } from 'react-router-dom';

function CardGrid(props) {
  const navigate = useNavigate();

  const cards = [
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Single Athlete -",
      paraOne: "School Events",
      link: "#",
      date: "Nov 9, 2024",
      details: "Some extra information about the event."
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Single Athlete -",
      paraOne: "School Events",
      link: "/ads",
      date: "Nov 9, 2024",
      details: "Additional details about this event."
    },
    // More card objects...
  ];

  return (
    <div className='outside'>
      <Container className='main-cardgrid'>
        <Row>
          {cards.map((blog, index) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={index}>
              <Card style={{ border: 'none', position: 'relative' }}>
                <div className="date-badge">{blog.date}</div>
                <div className="image-container">
                  <Card.Img variant="top" src={blog.image} />
                </div>

                {/* Card body with the toggle button */}
                <Card.Body className="card-body">
                  <div className="card-header">
                    <Card.Text>{blog.para} <span className="spanHead">100m Race</span></Card.Text>
                    <Card.Text>{blog.paraOne}
                      <button onClick={() => navigate('/events-inner')} className="connect-button">
                        Classic Events
                      </button>
                    </Card.Text>
                  </div>

                  {/* Arrow Button to Toggle Side Panel */}
                  <ArrowTogglePanel details={blog.details} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

// ArrowTogglePanel Component for inside the card
function ArrowTogglePanel({ details }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(prevState => !prevState);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      {/* Arrow Button */}
      <button
        onClick={togglePanel}
        className={`toggle-btn ${isPanelOpen ? 'open' : ''}`}
      >
        {isPanelOpen ? '←' : '→'} {/* Arrow changes depending on the state */}
      </button>

      {/* Left Panel Inside the Card */}
      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <div className="flex-column">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
