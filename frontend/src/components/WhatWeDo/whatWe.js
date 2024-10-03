import React from 'react';
import { Link } from 'react-router-dom';
import './whatWe.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const WhatWe = (props) => {
  let linkTo = '#';

  switch (props.button) {
    case 'About Us':
      linkTo = '/about';
      break;
    case 'Contact Us':
      linkTo = '/contact';
      break;
    case 'Services':
      linkTo = '/services';
      break;
    case 'READ MORE':
      linkTo = '/services';
      break;
    case '':
      linkTo = '/donations';
      break;
    case 'Blog':
      linkTo = '/blog';
      break;
    default:
      linkTo = '#';
  }
  return (
    <div className="what-we-container">
      <div className='container'>
        <div className='what-we-main text-center'>
          <h1 className='head-h2'>{props.Heading}
            <span className='head-bg'>{props.shadeHeading}</span>
          </h1>
          <p className="para_main">We specialize in transforming properties to enhance their market appeal and achieve the best possible outcomes for our clients.</p>
        </div>

        <Swiper
          loop={true}
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            }
          }}
          modules={[Autoplay, Pagination]}
          className="swiper-container py-5 mx-0 w-100 px-2"
        >
          <SwiperSlide>
            <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>

              <div className="col-lg-6 right-section">
                <img src="/images/creatives/Home-Owners-Home-Staging.png" className='large-img' alt='banner-img' />
              </div>
              <div className="col-lg-6 left-section">
                <div className='d-flex align-items-center text-and-button'>
                  <button className='counting-btn'>01/03</button>
                  <h1 className='head-h3'>Homeowner Home Staging</h1>
                </div>

                <div className="d-flex flex-container">
                  <div className="text-container">
                    <div>
                      <p className='para_main'>We work closely with homeowners to highlight unique features, creating a welcoming environment that resonates with buyers. Our expert team ensures every room is showcased in its best light, helping you achieve a quicker sale at a higher price.</p>
                      <br />
                      <p className='bluepara'>{props.bluepara}</p>
                      {props.button && (
                        <div className="button-container">
                          <Link to={linkTo} className='button_secondary'>
                            {props.button}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>
              <div className="col-lg-6 right-section">
                <img src="/images/creatives/Realtor-Home-Staging.png" className='large-img' alt='banner-img' />
              </div>
              <div className="col-lg-6 left-section">
                <div className='d-flex align-items-center text-and-button'>
                  <button className='counting-btn'>02/03</button>
                  <h1 className='head-h3'>Realtor Home Staging</h1>
                </div>
                <div className="d-flex flex-container">
                  <div className="text-container">
                    <div>
                      <p className='para_main'>ETB-Home Staging partners with realtors to provide exceptional staging services that elevate the marketability of listings. Our professional stagers create inviting atmospheres that highlight each property’s strengths, ensuring it stands out in a competitive market.</p>
                      <br />
                      <p className='bluepara'>{props.bluepara}</p>
                      {props.button && (
                        <div className="button-container">
                          <Link to={linkTo} className='button_secondary'>
                            {props.button}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>
              <div className="col-lg-6 right-section">
                <img src="/images/creatives/Builder-Home-Staging.png" className='large-img' alt='banner-img' />
              </div>
              <div className="col-lg-6 left-section">
                <div className='d-flex align-items-center text-and-button'>
                  <button className='counting-btn'>03/03</button>
                  <h1 className='head-h3'>Builder Home Staging</h1>
                </div>
                <div className="d-flex flex-container">
                  <div className="text-container">
                    <div>
                      <p className='para_main'>We specialize in staging new construction homes to showcase their full potential. We design and stage model homes with carefully selected furnishings and layouts, creating a cohesive and inviting look that drives sales and builds lasting client relationships.</p>
                      <br />
                      <p className='bluepara'>{props.bluepara}</p>
                      {props.button && (
                        <div className="button-container">
                          <Link to={linkTo} className='button_secondary'>
                            {props.button}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlides if you have more sections */}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatWe;
