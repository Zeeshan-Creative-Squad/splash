import React from 'react';
import "./OurProcess.css";

const processData = [
    { img: "/images/creatives/Events-banner-one.jpg", title: "FOR ATHLETES", content: "Book a free call or start your free assessment to explore available pathways, determine the best immigration pathway and move forward with the process." },
    { img: "/images/creatives/Events-banner-two.jpg", title: "FOR COACHES, JUDGES & PARENTS", content: "We will send you a retainer agreement that clearly outlines the terms and conditions of our representation for your immigration application." },
    { img: "/images/creatives/Events-banner-three.jpg", title: "FOR ALL TEAMS", content: "Upon receiving the signed agreement, the process of collecting documents will begin." },
    { img: "/images/creatives/Events-banner-four.jpg", title: "FOR ATHLETES", content: "After initial documents are collected, we will start preparing your immigration application." },
];

function OurProcess() {
    return (
        <div className='process-container standard-padding-space'>
            <div className='container'>
                <div className='text-container text-center'>
                    <h3 className='head-h1'>OUR EVENTS</h3>
                    <p className='para_main'>At Splash Sports Events, we are committed to creating an exceptional experience by paying attention to every detail. Our dedication to state-of-the-art technology, including top-notch timing, scoring systems, equipment, and visually stunning aesthetics, ensures that our events offer a unique and unforgettable experience.</p>
                </div>
                <div className='process-list'>
                    <div className='row gy-3 justify-content-center'>
                        {processData.map((ele, index) => (
                            <div key={index} className='col-lg-3 col-md-6 py-3'>
                                <div className='border-box'>
                                    <img className='banner-img' src={ele.img} alt={ele.title} />
                                    <h3 className='card-title'>{ele.title}</h3>
                                    <p className='para_main mt-3'>{ele.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurProcess;
