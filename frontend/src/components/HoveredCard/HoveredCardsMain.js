import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HoverCard from './HoveredCard';

function HoveredCardMain() {
    const cardData = [
        { title: 'ADvantage', imageUrl: '/images/creatives/events-demo.jpg', overlayText: 'ADvantage unites a strategic and global network across sports, fitness and gaming' },
        { title: 'AFC Bournemouth', imageUrl: '/images/creatives/events-demo.jpg', overlayText: 'Football Club' },
        { title: 'BXXST', imageUrl: '/images/creatives/events-demo.jpg', overlayText: 'Gaming and Sports Network' },
        { title: 'FC Lorient', imageUrl: '/images/creatives/events-demo.jpg', overlayText: 'Football Club in France' },
        { title: 'Future', imageUrl: '/images/creatives/events-demo.jpg', overlayText: 'Empowering Future Athletes' },
        { title: 'Greenfly', imageUrl: '/images/creatives/events-demo.jpg', overlayText: 'Media Sharing Platform for Sports' },
    ];

    return (
        <div className="App container my-4">
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <HoverCard
                            title={card.title}
                            imageUrl={card.imageUrl}
                            overlayText={card.overlayText}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HoveredCardMain;
