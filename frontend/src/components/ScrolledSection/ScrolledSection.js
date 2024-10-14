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
        <div className="scrolled-container">
            <div className='container ' >
                {/* Overlay Text */}
                <div className="text-overlay align-items-center" style={{ transform: `translateY(${scrollY * 0.3}px)` }} >
                    <h1 className="head-h1">SPLASH</h1>
                    <h2 className="head-h2">SPORTS EVENTS</h2>
                </div>
                {/* Boy Image with reversed parallax scrolling effect */}
                <img
                    className="boy-image"
                    src="/images/creatives/overlay-image.png"
                    alt="Boy"
                    // Reverse scroll direction by negating scrollY value
                    style={{ transform: `translateY(${-scrollY * 0.64}px)` }}
                />
            </div>
        </div>
    );
};

export default ScrolledSection;
