import React from 'react';
import './ServiceCard.css';

function ServiceCard() {
    // List of images with meta info
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

                    {/* Map over the image list */}
                    {images.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            {/* Render image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`img-fluid ${index === 2 ? 'third-image' : ''}`}
                            />

                            {/* Render date if present */}
                            {image.date && <p className="text-danger mt-3">{image.date}</p>}
                            {/* Render title if present */}
                            {image.title && <h4 className='head-h3'>{image.title}</h4>}
                            {image.date && <p className="text-danger mt-3">{image.dated}</p>}
                            {image.title && <h4 className='head-h3'>{image.titled}</h4>}

                            {/* Render an additional image beside the third one if it's index 0 or 2 */}
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

                {/* Center large image */}
                <div className="row text-center mt-5">
                    {/* You can map similarly here for the second row of images */}
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
