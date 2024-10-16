import React from "react";
import { useState } from "react";
import "./DigitalServices.css";
import img4 from "./plus.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const cardData = [
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "$ 75",
    text: "PER ATHLETE",
    content: "HST per athlete + Coaches Fees will be added at checkout. Price includes a 3% discount for cash and cheque payments. All other forms of payment will incur additional fees ",
    button: "REGISTER NOW",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "$ 75",
    text: "PER ATHLETE",
    content: "HST per athlete + Coaches Fees will be added at checkout. Price includes a 3% discount for cash and cheque payments. All other forms of payment will incur additional fees ",
    button: "REGISTER NOW",
    link: "#",
  },
  {
    img: '/images/creatives/about-page-icons.svg',
    title: "$ 75",
    text: "PER ATHLETE",
    content: "HST per athlete + Coaches Fees will be added at checkout. Price includes a 3% discount for cash and cheque payments. All other forms of payment will incur additional fees",
    button: "REGISTER NOW",
    link: "#",
  },
]

const DigitalServices = ({ paddingTop, paddingBottom }) => (
  <div
    style={{
      paddingTop: paddingTop && paddingTop,
      paddingBottom: paddingBottom && paddingBottom,
    }}
    className="Services"
  >
    <Container>
      <h1 className='head-h1 text-center'>PRICING</h1>
      <div className="row text-center justify-content-center row gx-lg-4 g-3 pt-2 mb-0 gy-4 what-people-say-container">
        <Swiper
          slidesPerView={3}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          observer={true}
          observeParents={true}
          parallax={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1300: { slidesPerView: 3 },
          }}
        >
          {cardData.map((ele, index) => (
            <SwiperSlide key={index} className='services-card-content'>
              <ServiceCardBox
                img={ele.img}
                title={ele.title}
                text={ele.text}
                content={ele.content}
                button={ele.button}
                index={index}  
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  </div>
);

function ServiceCardBox({
  img = '/images/icons/card-icon.svg',
  title = "",
  text = "",
  content = "",
  button = "",
  index = 0   // Receive the index here
}) {
  const navigate = useNavigate();

  // Conditional styling for card background color
  const getCardStyle = () => {
    if (index === 1) {
      return { backgroundColor: '#F13742' };  // Set second card background to red
    }
    return { backgroundColor: '#272525' };  // Set default color for first and third cards
  };

  return (
    <div className='service-card text-center' style={getCardStyle()}>
      <img src={img} alt='card icon' className='img-fluid mb-4 mb-xxl-5 service-box-img' />
      <h5 className='head-h2'>{title}</h5>
      <p className='body-paragraph my-4'>{text}</p>
      <p className='para_main my-4'>{content}</p>
      <button className="connect-button">{button}</button>
    </div>
  );
}

export default DigitalServices;
