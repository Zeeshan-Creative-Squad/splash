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
                                    'Payment must be received before the payment deadline in order to secure the current price point. For example payment for registration at the Early Bird Rate must be received in our office before the Early Bird deadline.   .',
                                    'Registration is not considered complete until payment, rosters and waivers have been received in our office.',
                                    'All paperwork must be received by the deadline in order to be eligible.',
                                    'Athletes need only submit one waiver for the entire competitive season',
                                    'Each athlete must complete a waiver. Siblings must complete separate waivers.',
                                    'One coach per program must complete a Coaches Honour Code. It is not necessary for every coach to complete a form.',
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
                                'Each athlete must complete a waiver. Siblings must complete separate waivers.',
                                'One coach per program must complete a Coaches Honour Code. It is not necessary for every coach to complete a form.',
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





                        {/* <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}


<div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}
      */}



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
