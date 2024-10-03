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
                    <h3 className='body-heading'>Our <span className='color-yellow'>Process</span></h3>
                    <p className='body-paragraph'>We pride ourselves on having a transparent process. We make sure that the process is smooth and straightforward for you.</p>
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
