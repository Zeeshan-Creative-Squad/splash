import "./ServicesCarousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./ServicesBox";

const handlePrevButtonClick = () => {
  const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
  swiperInstance.slidePrev();
};

const handleNextButtonClick = () => {
  const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
  swiperInstance.slideNext();
};

function ServicesCarousel({
  subHeading,
  heading,
  content,
  shadeHeading
}) {

  const blogData = [
    {
      cardImg: "./images/creatives/proficiency-one.png",
      title: "PLANNING",
      anchor: "/express-entry",
      backgroundText: "01",
      content:
        "Discover how our expert team crafts a tailored staging strategy to highlight your home's unique features. We meticulously plan every detail to ensure a seamless transformation that maximizes your property's appeal.",
    },
    {
      cardImg: "./images/creatives/proficiency-two.png",
      title: "EXECUTION",
      anchor: "/immigration/pnp-program",
      backgroundText: "02",
      content:
        "Watch as our vision comes to life with precision and creativity. Our staging professionals handle all the details, from arranging furniture to adding finishing touches, making your home shine.",
    },
    {
      cardImg: "./images/creatives/proficiency-three.png",
      title: "FINAL LOOK",
      anchor: "/immigration/refugee-cases",
      backgroundText: "03",
      content:
        "Experience the wow factor with a final reveal that will leave a lasting impression. Our expertly staged homes are designed to captivate buyers and drive faster, higher offers.",
    },
  ];

  return (
    <div className='ServicesCarousel-container standard-padding-space container my-4'>
      <div className="container">
        <div className="blog-upper-content mb-4">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-end">
              <div className="col-12 ">
                <div className="blog-text-content text-center">
                  <p className="sub-heading">{subHeading}</p>
                  <h3 className="head-h2 mb-3">{heading} <span className="head-bg">{shadeHeading}</span></h3>
                  {content && <p className="body-paragraph">{content}</p>}
                </div>
              </div>

            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          autoplay={
            {
              delay: 1500,
              disableOnInteraction: false
            }
          }
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          observer={true}
          observeParents={true}
          parallax={true}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            }
          }}
          className="card-list py-4 px-3"
          id="articles-cards-slider"
        >
          {blogData.map((blogData, ind) => {
            return (<>
              <SwiperSlide key={ind}>
                <CardBox cardImg={blogData.cardImg} title={blogData.title} content={blogData.content} anchor={blogData.anchor} backgroundText={blogData?.backgroundText ?? "01"} />
              </SwiperSlide>
            </>)
          })}

        </Swiper>
      </div>
    </div>
  )
}

export default ServicesCarousel