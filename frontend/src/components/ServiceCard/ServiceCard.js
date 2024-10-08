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
        <div className="ServiceCard-container container mt-5">
            <div className="row text-center">
                {/* Map over the image list */}
                {images.map((image, index) => (
                    <div className="col-md-4" key={index}>
                        {/* First image */}
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={`img-fluid ${index === 2 ? 'third-image' : ''}`}
                        />

                        {/* Always render the text for each image */}
                        <p className="text-danger mt-3">{image.date}</p>
                        <h5>{image.title}</h5>

                        {/* Render an additional image beside the third one if it's index 0 or 2 */}
                        {(index === 0 || index === 2) && (
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="img-fluid mt-5"
                            />
                        )}

                        <p className="text-danger mt-3">{image.date}</p>
                        <h5>{image.title}</h5>
                    </div>
                ))}



            </div>

            {/* Center large image */}


            {/* Second row of images */}
            <div className="row text-center mt-5">
                {/* Add a second row, and map similarly here if needed */}
            </div>
        </div>
    );
}

export default ServiceCard;
