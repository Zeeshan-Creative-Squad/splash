import "./Testimonials.css"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialCard from "./TestimonialCard"

const testimonialData = [
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg: "/images/creatives/male-icon.jpg",
    clientName: "Jyoti, Vaughan, Ontario",
    rank: "",
    clientReview: "I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },

]

function Testimonials() {

  // const handlePrevButtonClickInd = () => {
  //   const swiperInstance = document.querySelector('#test-cards-slider').swiper;
  //   swiperInstance.slidePrev();
  // };

  // const handleNextButtonClickInd = () => {
  //   const swiperInstance = document.querySelector('#test-cards-slider').swiper;
  //   swiperInstance.slideNext();
  // };

  return (
    <div className="Testimonials-container py-5" >
      <div className=" w-100 container-fluid py-4" style={{ background: "url('/images/creatives/testimonial-bg.png') center center / cover no-repeat", }}>
        <div className=" d-flex align-items-center w-100">
          <div className="col-12 text-center px-0">

            {/* <h3 className='my-5 font-Aervish stylish-font-text' style={{color:"#E0C7C0"}}>Testimonials</h3> */}
            <h3 className="head-h1 ">WHAT OUR CLIENTS SAY</h3>
            <div className="card-list" style={{ position: "relative" }}>

              <Swiper
                spaceBetween={0}
                navigation={{
                  nextEl: '.swiper-button-next-test',
                  prevEl: '.swiper-button-prev-test',
                }}
                loop={true}
                autoplay={
                  {
                    delay: 1000,
                    disableOnInteraction: false
                  }
                }
                // modules={[Autoplay,Pagination]}
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                observer={true}
                observeParents={true}
                parallax={true}

                breakpoints={{
                  280: {
                    slidesPerView: 1,
                  },
                  993: {
                    slidesPerView: 3,
                  }
                }}
                className="testimonials-list py-5 mt-2"
                style={{ position: "relative" }}
                id="test-cards-slider"
              >
                {/* <div className="swiper-button-prev-test" onClick={handlePrevButtonClickInd}>
                    <img src="/images/icons/left-arrow-icon.svg" className="arrow-img" alt="arrow icon"/>
                </div> */}
                {
                  testimonialData.map((clientData, ind) => {
                    return (<>
                      <SwiperSlide key={ind} className="pt-5 px-3 px-sm-0">
                        <TestimonialCard clientImg={clientData.clientImg} clientName={clientData.clientName} clientReview={clientData.clientReview} />
                      </SwiperSlide>
                    </>)
                  })
                }
                {/* <div className="swiper-button-next-test" onClick={handleNextButtonClickInd}>
                   <img src="/images/icons/right-arrow-icon.svg" className="arrow-img" alt="arrow icon"/>
               </div> */}
              </Swiper>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials