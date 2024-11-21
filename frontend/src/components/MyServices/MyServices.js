import React from 'react';
import "./MyServices.css";
import { useNavigate } from 'react-router-dom';

const cardData = [
    {
        icon: "/images/icons/service-card-1.png",
        title: "Branding",
        content: "We create memorable brands that resonate with your audience. From logo design to complete brand identities.",
        link: "/design-and-branding",
    },
    {
        icon: "/images/icons/service-card-2.png",
        title: "Web Development",
        content: "Our websites are built to impress and perform. We design and develop fast, secure, and user-friendly websites.",
        link: "/web-development",
    },
    {
        icon: "/images/icons/service-card-3.png",
        title: "E-Commerce Development",
        content: "Our team helps you level up your E-commerce store just the way you like it.",
        link: "/ecommerce-development",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Application Development",
        content: "We provide best applications development services worldwide.",
        link: "/application-development",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Ui/Ux Development",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/uiux-development",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "SEO",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/search-engine-optimization",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Google Ads",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/google-ads",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Social Media Marketing",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/social-media-marketing",
    },
    {
        icon: "/images/icons/service-card-4.png",
        title: "Performance Marketing",
        content: "We create intuitive interfaces that ensure your digital products are a joy to use.",
        link: "/performance-marketing",
    },
];

function ServiceCard({
    icon,
    title,
    content,
    link = "#"
}) {
    const navigate = useNavigate();

    return (
        <div className='service-card-container p-4 mb-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9'>
                    </div>
                    <div className='col-lg-3 icon-container d-flex align-items-start'>
                        <img src='/images/creatives/image-two.png' className='services-image' />
                        <img src='/images/creatives/image-one.png' className='services-image' />
                    </div>
                </div>
            </div>
        </div>
    );
};

function MyServices() {
    return (
        <div className='MyServices-container py-5'>
            <div className='container my-5 py-2 pt-xxl-5'>
                <div className='row '>
                    <div className='text-content col-lg-6 text-center text-lg-start'>
                        <h3 className='head-h1'>
                            IT'S ALL ABOUT THE ATHLETE
                        </h3>
                        <p className='para_main my-5 mx-auto mx-lg-0 mb-3'>Splash Sports Events is powered by a small but influential team dedicated to promoting multi-sports for kids. Our team consists of professionals with backgrounds in event planning, including Professional Athletes, Educators, Family Counselors.</p>
                        <div className='row'>
                        </div>
                    </div>

                    <div className='sliding-card col-md-6'> 
                        <div className='card-sized-box'>
                            {cardData.map((ele, index) => ( 
                                <ServiceCard
                                    key={index} 
                                    icon={ele.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;