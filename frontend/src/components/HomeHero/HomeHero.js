import React from 'react';
import './HomeHero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { Navigate, useNavigate } from 'react-router-dom';

const Homehero = () => {
  const navigate = useNavigate();

  return (
    <div className='home-hero'>
      <div className="containe">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination]}
          observer={true}
          observeParents={true}
          parallax={true}
          className="testimonials-list "
          id="articles-cards-slider"
        >
          <SwiperSlide className='w-100'
            style={{
              background: "url('/images/creatives/Expert-Home-Staging.jpg') center center / cover no-repeat"
            }}
          >
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>Expert Home Staging </h1>
                  <p className='para_main'>Enhance your property’s appeal and maximize its market potential with our professional home staging solutions.</p>
                  <p onClick={() => {
                    navigate("/contact");
                  }} style={{ textDecoration: "none" }}><button className="connect-button">BOOK YOUR CONSULTATION</button></p>
                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide
            style={{
              background: "url('/images/creatives/Customized-Home.jpg') center center / cover no-repeat"
            }}>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>Customized Home Décor For Your Space</h1>
                  <p className='para_main'>We offer personalized home décor services that reflect your unique style </p>
                  <p onClick={() => {
                    navigate("/contact");
                  }} style={{ textDecoration: "none" }}><button className="connect-button">BOOK YOUR CONSULTATION</button></p>
                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide
            style={{
              background: "url('/images/creatives/Your-Trusted-Staging.jpg') center center / cover no-repeat"
            }}>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>Your Trusted Staging Partner</h1>
                  <p className='para_main'>Trust us to provide comprehensive staging services that highlight your home’s best features.</p>
                  <p onClick={() => {
                    navigate("/contact");
                  }} style={{ textDecoration: "none" }}><button className="connect-button">BOOK YOUR CONSULTATION</button></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Homehero;
