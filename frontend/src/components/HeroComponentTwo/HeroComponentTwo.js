import React from 'react';
import './HeroComponentTwo.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HeroComponentTwo = (props) => {
    return (
        <div className="hero-component" style={{ backgroundImage: `url(${props.backgroundImg})` }}>
            <div className='container'>
                <div className="Common-Hero-content-overlay flex-column">
                    <img src='/images/creatives/fall-classic-logo.svg' alt='icon' className='mt-3'/>
                    <div className="Common-Hero-content text-center">
                        <Card.Body className='card-body'>
                            <Card.Text className='head-h3'>Signle Athlete - School Events <span><button className='connect-button'>Classic Events</button></span></Card.Text>
                            <Card.Text></Card.Text>
                        </Card.Body>
                        {/* <h4 className='head-h1'>{props.title}</h4> */}
                        <p className='para_main'>{props.date}</p>
                        <h1 className='head-h1'>{props.Heading}</h1>
                        <p className='para_main text-lg-center'>{props.Para}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponentTwo;