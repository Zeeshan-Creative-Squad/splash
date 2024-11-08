import React from 'react';
import './EventsInner.css';

function EventsInner({ text, blogContent, date, Heading }) {
    return (
        <>
            <div className="box multi-gradient">
                <div className='container'>
                    <div className="subheading-container mt-3">
                        <h1 className="head-h2 text-center">ONLINE REGISTRATION</h1>
                        <div className="col-lg-12 mt-4">
                            {/* Title */}
                            <h2 className="head-h3">
                                NOTES:
                            </h2>
                            {/* Bullet Points List */}
                            <ul className="list-unstyled mt-2">
                                {[
                                    'Payment must be received before the payment deadline in order to secure the current price point. For example payment for.',
                                    ' Registration is not considered complete until payment, rosters and waivers have been received in our office',
                                    'All paperwork must be received by the deadline in order to be eligible.',
                                    'Athletes need only submit one waiver for the entire competitive season.',

                                ].map((item, index) => (
                                    <li key={index} className="d-flex align-items-center px-2">
                                        <img src='/images/icons/red-bullet.png' alt="Bullet" style={{ width: '10px', height: '10px', marginRight: '10px' }} />
                                        <span className="para_main">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h3 className='head-h3'>Waiver, Coaches’ Honour Codes and Credit Card Authorization Forms are available on the Policies & Forms Page.</h3>
                        <ul className="list-unstyled mt-4">
                            {[
                                'Each athlete must complete a waiver. Siblings must complete separate waivers.',
                                'One coach per program must complete a Coaches Honour Code. It is not necessary for every coach to complete a form.',


                            ].map((item, index) => (
                                <li key={index} className="d-flex align-items-center px-2">
                                    <img src='/images/icons/red-bullet.png' alt="Bullet" style={{ width: '10px', height: '10px', marginRight: '10px' }} />
                                    <span className="para_main">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}

export default EventsInner;
