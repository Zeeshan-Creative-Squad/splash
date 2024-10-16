import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardGrid.css';
import { useNavigate } from 'react-router-dom';

function CardGrid(props) {
  const navigate = useNavigate()

  const cards = [
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Signle Athlete -",
      paraOne: "School Events",
      link: "#",
      date: "Nov 9, 2024" // Added date property
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Signle Athlete -",
      paraOne: "School Events",
      link: "/ads",
      date: "Nov 9, 2024"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Signle Athlete -",
      paraOne: "School Events",
      link: "#",
      date: "Nov 9, 2024" // Added date property
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Signle Athlete -",
      paraOne: "School Events",
      link: "/ads",
      date: "Nov 9, 2024"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Signle Athlete -",
      paraOne: "School Events",
      link: "#",
      date: "Nov 9, 2024" // Added date property
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/events-demo.jpg",
      para: "Signle Athlete -",
      paraOne: "School Events",
      link: "/ads",
      date: "Nov 9, 2024"
    },
    // Additional cards...
  ];

  return (
    <div className='outside'>
      <Container className='main-cardgrid'>
        <Row>
          {cards.map((blog, index) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={index}>
              <Card style={{ border: 'none', position: 'relative' }}>
                <div className="date-badge">{blog.date}</div> {/* Date section */}
                <Card.Img variant="top" src={blog.image} />
                <Card.Body className='card-body'>
                  <Card.Text>{blog.para} <span className='spanHead'>100m Race</span></Card.Text>
                  <Card.Text>{blog.paraOne}<button onClick={() => navigate('/events-inner')} className='connect-button'>
  Classic Events
</button>
</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CardGrid;
