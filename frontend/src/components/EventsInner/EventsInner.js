import React from 'react';
import './EventsInner.css';



function EventsInner({ text, blogContent, date, Heading }) {

    return (
        <>
            <div className="box multi-gradient blog-inner">
                <div className='container'>
                    <div className="subheading-container mt-3">
                        <h1 className="head-h2 text-center">ONLINE REGISTRATION</h1>
                        <div className="col-md-8 mt-4">
                            {/* Title */}
                            <h2 className="head-h3">
                                NOTES:
                            </h2>
                            {/* Bullet Points List */}
                            <ul className="list-unstyled mt-4">
                                {[
                                    'Vestibulum ante ipsum primis in faucibus orci luctus',
                                    'et ultrices posuere cubilia Curae; Nulla vehicula imperdiet',
                                    'sapien, et vestibulum turpis elementum eu',
                                    'Quisque ac est id leo euismod lacinia at ut libero. Integer in',
                                    'magna sed augue congue elementum',
                                    'Proin bibendum nunc sed velit dictum',
                                    'at consectetur lorem congue'
                                ].map((item, index) => (
                                    <li key={index} className="d-flex align-items-center mb-2 px-2">
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                width: '10px',
                                                height: '10px',
                                                backgroundColor: '#F13742',
                                                borderRadius: '50%',
                                                marginRight: '10px'
                                            }}
                                        ></span>
                                        <span className="text-muted" style={{
                                            fontSize: '16px', textAlign: "left",
                                            font: "normal normal bold 18px/46px Century Gothic"
                                            , letterSpacing: "0px"
                                            , color: "#717C93"
                                            , opacity: "1"
                                        }}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <h3 className='head-h3'>Waiver, Coaches’ Honour Codes and Credit Card Authorization Forms are available on the Policies & Forms Page.</h3>
                        <ul className="list-unstyled mt-4">
                            {[
                                'Vestibulum ante ipsum primis in faucibus orci luctus',
                                'et ultrices posuere cubilia Curae; Nulla vehicula imperdiet',
                                'sapien, et vestibulum turpis elementum eu',
                                'Quisque ac est id leo euismod lacinia at ut libero. Integer in',
                                'magna sed augue congue elementum',
                                'Proin bibendum nunc sed velit dictum',
                                'at consectetur lorem congue'
                            ].map((item, index) => (
                                <li key={index} className="d-flex align-items-center mb-2 px-2">
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: '#F13742',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }}
                                    ></span>
                                    <span className="text-muted" style={{
                                        fontSize: '16px', textAlign: "left",
                                        font: "normal normal bold 18px/46px Century Gothic"
                                        , letterSpacing: "0px"
                                        , color: "#717C93"
                                        , opacity: "1"
                                    }}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <hr className="divider" />
                        <div className="blog-content">
                            {/* <p className="footer-text">Share:</p> */}
                            <img src='' />
                            <div className="social-icons">

                            </div>
                        </div>
                        <hr className="divider" />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}

export default EventsInner;
