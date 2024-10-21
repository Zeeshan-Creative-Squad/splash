import React from 'react';
import './DesignGrids.css';
import { useNavigate } from 'react-router-dom';

const DesignGrids = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5 Design-container">
            <div className="row all-cards">
                {/* Card 1 */}
                {/* <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card"
                        style={{
                            background: "url('/images/creatives/GridCards-picture.jpg') center center / cover no-repeat", opacity: 0.7,
                            zIndex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            zIndex: -1,
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                            zIndex: -1,
                        }} />

                        <div className="card-body text-center">
                            <h5 className="head-h1">IT'S ALL ABOUT <br /> THE ATHLETE EXPERIENCE</h5>
                            <p className="para_main">
                                Splash Sports Events unites athletes from diverse sports nationwide, providing a platform to showcase and challenge their athletic abilities. We are dedicated to fostering the growth of young athletes, nurturing their skills at all levels, and celebrating excellence across every sport we host.
                            </p>
                            <button onClick={() => { navigate('/about') }} className='about-button'>ABOUT US</button>
                        </div>
                    </div>
                </div> */}
                {/* Card 2 */}
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card"
                        style={{
                            background: "url('/images/creatives/GridCards-picture.jpg') center center / cover no-repeat", opacity: 0.7,
                            zIndex: 1,
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                            zIndex: -1,
                        }} />
                        <div className="card-body text-center">
                            <h5 className="head-h1">IT'S ALL ABOUT <br /> THE ATHLETE EXPERIENCE</h5>
                            <p className="para_main">
                                Splash Sports Events unites athletes from diverse sports nationwide, providing a platform to showcase and challenge their athletic abilities. We are dedicated to fostering the growth of young athletes, nurturing their skills at all levels, and celebrating excellence across every sport we host.
                            </p>
                            <button onClick={() => { navigate('/about') }} className='about-button'>ABOUT US</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card"
                        style={{
                            background: "url('/images/creatives/GridCard-picture-two.jpg') center center / cover no-repeat", opacity: 0.7,
                            zIndex: 1,
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
                            zIndex: -1,
                        }} />
                        <div className="card-body text-center">
                            <h5 className="head-h1">IT'S ALL ABOUT <br /> THE ATHLETE EXPERIENCE</h5>
                            <p className="para_main">
                                Splash Sports Events unites athletes from diverse sports nationwide, providing a platform to showcase and challenge their athletic abilities. We are dedicated to fostering the growth of young athletes, nurturing their skills at all levels, and celebrating excellence across every sport we host.
                            </p>
                            <button onClick={() => { navigate('/about') }} className='about-button'>ABOUT US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignGrids;