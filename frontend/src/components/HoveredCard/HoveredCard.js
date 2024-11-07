import React from 'react';
import './HoveredCard.css';
import { Card } from 'react-bootstrap';


function HoverCard({ title, imageUrl, overlayText, overlayImage }) {
    return (
        <div className="hover-card" style={{ background: "url('/images/creatives/events-demo.jpg') center center / cover no-repeat" }}>

            <Card className="bg-dark text-white">
                <Card.Img src={imageUrl} alt="Card image" />
                <div className="overlay flex-column">
                    <Card.Title className="overlay-title">{title}</Card.Title>
                    <Card.Text className="overlay-text">{overlayText}</Card.Text>
                </div>
            </Card>
        </div>
    );
}

export default HoverCard;
