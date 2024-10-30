import React from 'react';
import './ServiceCard.css';

function ServiceCard() {
    const images = [
        { src: '/images/creatives/Section-Image.jpg', alt: 'Basketball Event', date: '19th July', title: 'From Amateur to Pro: The Journey of a Football Player' },
        { src: '/images/creatives/heighted-Image.jpg', alt: 'Football Event Center', date: '19th July', title: 'From Amateur to Pro: The Journey of a Football Player' },
        { src: '/images/creatives/Section-Image.jpg', alt: 'Basketball Event', date: '19th July', title: 'From Amateur to Pro: The Journey of a Football Player' },
    ];

    return (
        <div className='ServiceCard-container'>
            <div className="container mt-5">
                <div className="row text-center">
                    <h1 className='head-h1'>THE LATEST NEWS</h1>
                    <p className='para_main'>Splash Sports Events is powered by a small but influential team dedicated to promoting multi-sports for kids.</p>

                    {images.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`img-fluid ${index === 2 ? 'third-image' : ''}`}
                            />

                            {image.date && <p className="text-danger mt-3">{image.date}</p>}
                            {image.title && <h4 className='head-h3'>{image.title}</h4>}
                            {image.date && <p className="text-danger mt-3">{image.dated}</p>}
                            {image.title && <h4 className='head-h3'>{image.titled}</h4>}

                            {(index === 0 || index === 2) && (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid mt-5 d-none d-lg-block"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="row text-center mt-5">
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
