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
  return (
    <div className="Testimonials-container py-5" >
      <div className=" w-100 container-fluid py-4" style={{ background: "url('/images/creatives/testimonial-bg.png') center center / cover no-repeat", }}>
        <div className=" d-flex align-items-center w-100">
          <div className="col-12 text-center px-0">
            <h3 className="head-h1">WHAT OUR CLIENTS SAY</h3>
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
                {
                  testimonialData.map((clientData, ind) => {
                    return (<>
                      <SwiperSlide key={ind} className="pt-5 px-3 px-sm-0">
                        <TestimonialCard clientImg={clientData.clientImg} clientName={clientData.clientName} clientReview={clientData.clientReview} />
                      </SwiperSlide>
                    </>)
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;