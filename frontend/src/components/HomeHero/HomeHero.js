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
              background: "url('/images/creatives/HomeHero-Banner.jpg') center center / cover no-repeat"
            }}
          >
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>WELCOME TO THE SPLASH SPORTS EVENTS </h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit</p>
                  <p onClick={() => {
                    navigate("/contact");
                  }} style={{ textDecoration: "none" }}></p>
                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide
            style={{
              background: "url('/images/creatives/HomeHero-Banner.jpg') center center / cover no-repeat"
            }}>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>WELCOME TO THE SPLASH SPORTS EVENTS </h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit</p>
                  <p onClick={() => {
                    navigate("/contact");
                  }} style={{ textDecoration: "none" }}></p>
                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide
            style={{
              background: "url('/images/creatives/HomeHero-Banner.jpg') center center / cover no-repeat"
            }}>
            <div className="row align-items-center home-hero">
              <div className="col-lg-12 text-center">
                <div className="Homehero-content text-center">
                  <h1 className='head-h1'>WELCOME TO THE SPLASH SPORTS EVENTS </h1>
                  <p className='para_main'>Convallis vivamus at cras porta nibh velit</p>
                  <p onClick={() => {
                    navigate("/contact");
                  }} style={{ textDecoration: "none" }}></p>
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
