import "./CardBoxAboutSection.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";

// const handlePrevButtonClick = () => {
//   const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
//   swiperInstance.slidePrev();
// };

// const handleNextButtonClick = () => {
//   const swiperInstance = document.querySelector('#articles-cards-slider').swiper;
//   swiperInstance.slideNext();
// };

function CardTestimonial({
  subHeading,
  heading,
  content,
  spanHeading
}) {

  const blogData = [
    {
      cardImg: "/images/creatives/cardbox-banner.svg",
      title: "BECOME A MONTHLY DONOR",
      anchor:"/immigrate",
      content:
        "Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique",
    },
    {
      cardImg: "/images/creatives/cardbox-banner.svg",
      title: "CORPORATE PARTNERSHIPS",
      anchor:"/work-permit-in-canada",
      content:
        "Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique",
    },
    {
      cardImg: "/images/creatives/cardbox-banner.svg",
      title: "VOLUNTEER YOUR TIME",
      anchor:"/study-permit-for-canada",
      content:
        "Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique",
    },
    // {
    //   cardImg: "./images/creatives/Sponsor_to_Canada.png",
    //   title: "Sponsor to Canada",
    //   anchor:"/spousal-sponsorship-canada",
    //   content:
    //     "Do you miss the comfort of being around your loved ones? Sponsor your family to Canada with our help.",
    // },
    // {
    //   cardImg: "./images/creatives/Invest_In_Canda.png",
    //   title: "Invest In Canada",
    //   anchor:"/business-immigration-in-canada",
    //   content:
    //     "Are you interested in the financial growth and security of Canada? Explore various business and investment opportunities with our business immigration expertise in Canada.",
    // },
    // {
    //   cardImg: "./images/creatives/Not_Sure.png",
    //   title: "Not Sure",
    //   anchor:"/start-your-free-initial-assessment",
    //   content:
    //     "After you finish our assessment, we will determine your eligibility for all immigration programmes.",
    // },
  ];

  return (
    <div className='blog-container standard-padding-space'>
      <div className="blog-upper-content mb-4">
        <div className="container"> 
          <div className="row d-flex justify-content-between align-items-end">
            <div className="col-md-6">
              <div className="blog-text-content">
                <p className="secondary-h1">{subHeading}</p>
                <h3 className="head-h2 mb-0">{heading}<span className="color-yellow">{spanHeading}</span></h3>   
                {content && <p className="body-paragraph">{content}</p>}
              </div>
            </div>
            
            <div className="col-md-6">
              <p className="para_main">Charity 128 recognizes the importance of collective action in creating lasting change. We invite individuals, corporations, and communities to join us in our mission. Charity 128 recognizes the importance of collective action in creating lasting change.</p>
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
                delay:1500,
                disableOnInteraction:false
              }
            }
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            observer ={true}
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
            className="card-list py-5 mt-4 px-3"
            id="articles-cards-slider"
            >
            {blogData.map((blogData,ind)=>{
              return (<>
                <SwiperSlide key={ind}>
                  <CardBox cardImg={blogData.cardImg} title={blogData.title} content={blogData.content} anchor={blogData.anchor}/>
                </SwiperSlide>
              </>)
            })}
            
        </Swiper>
        
    </div>
    </div>
    </div>
  )
}

export default CardTestimonial