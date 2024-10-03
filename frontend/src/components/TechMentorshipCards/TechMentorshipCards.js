import React from 'react'
import "./TechMentorshipCards.css"
import { useNavigate } from 'react-router-dom'

const cardData = [
    {
        img: '/images/creatives/about-page-icons.svg',
        title: "Student Mentorship",
        content: "Lorem ipsum dolor sit amet elit met ",
        link: "#",
    },
    {
        img: '/images/creatives/about-page-icons.svg',
        title: "Student Mentorship",
        content: "Lorem ipsum dolor sit amet elit met ",
        link: "#",
    },
    {
        img: '/images/creatives/about-page-icons.svg',
        title: "Student Mentorship",
        content: "Lorem ipsum dolor sit amet elit met",
        link: "#",
    },
    {
        img: '/images/creatives/about-page-icons.svg',
        title: "Student Mentorship",
        content: "Lorem ipsum dolor sit amet elit met",
        link: "#",
    },
]

function ServiceCardBox({
    img = '/images/icons/card-icon.svg',
    title = "",
    content = "",
    link = ""

}) {
    const navigate = useNavigate()
    return (
        <div className='service-card text-center'>

            <img src={img} alt='card icon' className='img-fluid mb-4 mb-xxl-5 service-box-img' />
            <h5 className='head-h2' style={{ fontSize: "24px" }}>{title}</h5>
            <p className='body-paragraph my-4'>{content}</p>
            {/* <p 
            className='service-card-anchor color-yellow'
            onClick={()=>{navigate(link)}}
            >
                Read More 
                <img src='/images/icons/arrow-right-yellow.svg' alt='arrow right '/>
            </p> */}
        </div>
    )
}

function TechMentorshipCards() {
    return (
        <div className='ServiceCard-container py-5'>
            <div className='container my-3 my-xl-5'>
                <div className='text-content text-center'>
                    <h3 className='body-heading'>Our Events</h3>
                    <p className='body-paragraph my-4'>We follow an orderly full-cycle development process to ensure your online presence is both impactful and inspiring. full-cycle development process process to ensure your top noech persormance of the year</p>
                </div>

                <div className='row justify-content-center gy-2 cardbox-main'>
                    {/* <div className='col-lg-4 text-section'>
                        <h1 className='head-h1'>
                            The values behind my work
                        </h1>
                        <p className='para_main'>Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance softwareries</p>
                        <button className='connect-button mt-2'>Get Consultation</button>
                    </div> */}
                    {
                        cardData.map((ele) => {
                            return (

                                <div className='col-lg-3 services-card-content'>
                                    <ServiceCardBox
                                        img={ele.img}
                                        title={ele.title}
                                        content={ele.content}
                                        link={ele.link}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default TechMentorshipCards;