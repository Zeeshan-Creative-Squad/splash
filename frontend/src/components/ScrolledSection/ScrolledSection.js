import React, { useEffect, useState } from 'react';
import './ScrolledSection.css';

const ScrolledSection = () => {
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container' >
            <div className="scrolled-container">
                {/* Overlay Text */}
                <div className="text-overlay align-items-center">
                    <h1 className="head-h1">SPLASH</h1>
                    <h2 className="head-h2">SPORTS EVENTS</h2>
                </div>
                {/* Boy Image with parallax scrolling effect */}

                <img
                    className="boy-image"
                    src="/images/creatives/overlay-image.png"
                    alt="Boy"
                    style={{ transform: `translateY(${scrollY * 0.4}px)` }} // Parallax effect
                />


            </div>
        </div>
    );
};

export default ScrolledSection;
