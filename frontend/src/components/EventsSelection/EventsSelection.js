import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styles from "./EventsSelection.module.css";

const EventsSelection = () => {
  const [activeTab, setActiveTab] = useState('classic');

  const eventsData = {
    classic: [
      { title: "Winterfest", image: "/images/creatives/winterfest-logo.svg" },
      { title: "Montreal Mayhem", image: "/images/creatives/montreal-mayhem-logo.svg" },
      { title: "Fall Classic", image: "/images/creatives/fall-classic-logo.svg" },
    ],
    championship: [
      { title: "Fall Classic", image: "/images/creatives/fall-classic-logo.svg" },
      { title: "Montreal Mayhem", image: "/images/creatives/montreal-mayhem-logo.svg" },
      { title: "Winterfest", image: "/images/creatives/winterfest-logo.svg" },
    ],
    premier: [
      // Add premier events data here if available.
      { title: "Winterfest", image: "/images/creatives/winterfest-logo.svg" },
      { title: "Montreal Mayhem", image: "/images/creatives/montreal-mayhem-logo.svg" },
      { title: "Fall Classic", image: "/images/creatives/fall-classic-logo.svg" },
    ]
  };

  const renderEvents = () => {
    return eventsData[activeTab].map((event, index) => (
      <Col lg={4} md={6} sm={12} className={styles.contentCol} key={index}>
        <div className={styles.imgCol}>
          <img src={event.image} alt={event.title} className="img-fluid" />
          <h2>{event.title}</h2>
        </div>
      </Col>
    ));
  };

  return (
    <div className={styles.main}>
      <Container className='EventsSelection'>
        <h2 className='head-h2'>ABOUT OUR EVENTS</h2>
        <h1 className='head-h1 text-center'>AN ELEVATED EVENT EXPERIENCE</h1>
        <p className='para_main pt-0 pb-4'>Here’s what you can expect from our events this season!</p>

        <div className={styles.tab}>
          <ul className={styles.liCont}>
            <li
              className={activeTab === 'classic' ? styles.tabItemActive : styles.tabItem}
              onClick={() => setActiveTab('classic')}
            >
              <h6 className='head-h4'>Classic Events</h6>
            </li>
            <li
              className={activeTab === 'championship' ? styles.tabItemActive : styles.tabItem}
              onClick={() => setActiveTab('championship')}
            >
              <h6 className='head-h4'>Championship Events</h6>
            </li>
            <li
              className={activeTab === 'premier' ? styles.tabItemActive : styles.tabItem}
              onClick={() => setActiveTab('premier')}
            >
              <h6 className='head-h4'>Premier Events</h6>
            </li>
          </ul>
        </div>

        <Row className={styles.row}>
          {renderEvents()}
        </Row>

        <div className={styles.box}>
          <div className={styles.content_row}>

            <p className='para_main'>Competition sprung floor with surround, 9 mat practice floor, warm-up mats & 60' sprung tumble strip</p>
            <hr className={styles.bottomLine} />
          </div>
          <div className={styles.content_row}>

            <p className='para_main'>25-30 ft event backdrop</p>
            <hr className={styles.bottomLine} />
          </div>
          <div className={styles.content_row}>

            <p className='para_main'>House light, big sound & video on scoreboard</p>
            <hr className={styles.bottomLine} />
          </div>
          <div className={styles.content_row}>

            <p className='para_main'>Video review for teams after performance</p>
            <hr className={styles.bottomLine} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventsSelection;
