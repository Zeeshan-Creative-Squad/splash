import React from 'react';
import "./OurProcess.css";

const processData = [
    {img:"/images/creatives/choose-us-one.png",title:"CREATIVE",content:"Innovative designs that transform spaces and captivate buyers."},
    {img:"/images/creatives/choose-us-two.png",title:"KNOW - HOW ",content:"Expertise and experience that ensure your home stands out in the market."},
    {img:"/images/creatives/choose-us-three.png",title:"DEVOTED",content:"A dedicated team committed to delivering exceptional results every time."},
    {img:"/images/creatives/choose-us-four.png",title:"Personalized Service",content:"Tailored staging solutions that meet your unique needs and preferences."},
    {img:"/images/creatives/choose-us-five.png",title:"Proven Success",content:"A track record of over 1500 successful projects and 100% client satisfaction."},
    // {img:"/images/creatives/process6.png",title:"COORDINATION WITH IRCC",content:"After submission, we will act as an authorized consultant between you and IRCC to coordinate any further document submissions or clarifications that may be needed by IRCC."},
    // {img:"/images/creatives/process7.png",title:"WELCOME TO CANADA",content:"If the process goes as expected and the results are in your favour, get ready to start a new life in Canada!"},
];

function OurProcess(props) {
    return (
        <div className='process-container standard-padding-space'>
        <div className='container'>
            <div className='text-container text-center'>
                <h3 className='head-h2'> {props.heading} 
                    <span className='head-bg'>{props.shadeHeading}</span>
                </h3>
                <p className='para_main'>Discover what sets ETB-Home Staging apart and why we are the preferred choice for home staging in Canada.</p>
            </div>
            <div className='process-list'>
                <div className='row gy-3 justify-content-center flex-column flex-md-row'>
                    {processData.map((ele, index) => (
                        <div key={index} className='col-lg-4 col-md-4 py-3'>
                            <div className='border-box justify-content-center'>
                                <h3 className='head-h3'>{ele.title}</h3>
                                <p className='para_main mt-3'>{ele.content}</p>
                                <img className='banner-img' src={ele.img} alt={ele.title} />
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
