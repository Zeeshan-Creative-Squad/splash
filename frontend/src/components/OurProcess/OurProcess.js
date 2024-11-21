import React from 'react';
import "./OurProcess.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const processData = [
    { img: "/images/creatives/Events-banner-one.jpg", title: "FOR ATHLETES", content: "We provide athletic report cards, nutritious meals, hydration stations, first aid, access to therapists, and other thoughtful surprises. " },
    { img: "/images/creatives/Events-banner-two.jpg", title: "FOR COACHES, JUDGES & PARENTS", content: "We offer reports, video analysis, and reviews." },
    { img: "/images/creatives/Events-banner-three.jpg", title: "FOR ALL TEAMS", content: "We offer post-performance video reviews, awards for every participant, and top-quality equipment across all our venues. With our equipment, you can compete with confidence." },
    { img: "/images/creatives/Events-banner-four.jpg", title: "FOR PARENTS", content: "We offer reports, video analysis, and reviews." },
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
                    <Swiper
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                        observer={true}
                        observeParents={true}
                        parallax={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {processData.map((ele, index) => (
                            <SwiperSlide key={index}>
                                <div className='border-box'>
                                    <img className='banner-img' src={ele.img} alt={ele.title} />
                                    <h3 className='card-title'>{ele.title}</h3>
                                    <p className='para_main mt-3'>{ele.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
