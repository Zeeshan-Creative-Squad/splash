import "./Testimonials.css"
import React,{useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard"

const testimonialData = [
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Jyoti, Vaughan, Ontario",
    rank:"",
    clientReview:"I have been going to Christine for years and can honestly say she is the best at what she does. She is so intuitive and does the reading in such a positive way. I always leave feeling excited about what’s to come. She has amazing energy and has helped me so much in my healing journey."
  },
  {
    clientImg:"/images/testimonialImages/male-icon.png",
    clientName:"Elani, Vaughan, Ontario",
    rank:"",
    clientReview:"Christine has been a guiding light ! Her readings are so healing and always give me a sense of calm after . She has helped me time and time again find clarity.Her energy is intoxicating and always lifts my spirit she will forever be someone I recommend and forever my favourite person to call!"
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Kaye, Vaughan, Ontario",
    rank:"",
    clientReview:"Christine is the real-deal, a natural intuitive who can help guide you through life’s dilemmas and pathways. Your only regret will be that you did not contact her sooner! "
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Nicole - Milton, Ontario",
    rank:"",
    clientReview:"Christine has been my guide throughout the years with life’s ups and downs. Every time I needed clarity on a situation in my life or needed guidance on a path to take she always helped me see the different paths and directions and where they would and could lead me. Whenever something happens to me and I need guidance she’s my go to! Love her❤️"
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Jamie, Mississauga",
    rank:"",
    clientReview:"I have been getting cup readings with Christine for over 6 years. I have been to other readers in the past that haven’t compared to the accuracy and clarity that Christine brings.Christine has a very warm and welcoming presence, it’s clear that she loves what she does and has a passion for it. She will always tell you exactly what she sees, no sugar coating. Christine has become a good friend and not only is she an extremely gifted energy reader, she is someone who you will naturally feel comfortable talking about anything with and I will be forever and always be seeing her for cup readings."
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Sonam, Toronto, Ont",
    rank:"",
    clientReview:"I started my journey with Christine two years ago. I was so broken and anxious as my long term relationship at the time was broken up and I was ghosted by a person I spent 7 years of my life with. I went to Christine seeking answers on how to save that relationship and instead she gave me hope... Hope on moving forward, hope on accepting life with what it's bringing for me and hope on finding true love again. I didn't want to believe it at first but I found comfort in her words at all times and how to keep on going when you think life is bringing you to your rock bottom.\n Moving forward to two years, I'm married to the love of my life by God's grace who I met after working with Christine for a year and learning how to heal from my previous relationship while truly looking forward to the future and welcoming new love when I knew it was the right time to do so. I still rely on Christine so much for her comforting words at times when I really need it, her encouragement to heal from the past and embrace the future as well as her teachings through her readings. \n I have not only built a strong client relationship with her but I also have built a friendship with her and it's one I pray will always grow stronger over the years. She's a blessing in my life and I know she will be bringing the same joy into anyone who ever has the pleasure of speaking with her. 🤍🧿"
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Steph, Toronto, Ontario",
    rank:"",
    clientReview:"I remember reconnecting with Christine through a friend years ago during a time I was looking for many answers and direction, and trying a few readers before. Since then, I’ve been going to Christine when times I need more  guidance and answers. Her calm nature and delivery is just so welcoming and I resonate with it so much! She is amazing! at her practice and accurate at what energy she picks up in your cup. I am definitely a life time client! Thank you Christine!! "
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Rachel, Mississauga, Ontario",
    rank:"",
    clientReview:"Where do I even begin? Christine always is providing the best service  and always leaves me with a feeling of relief after our sessions. I have been going to her for quite some time and recommend her to all my friends&family. If you are looking for a perspective or clarity about your life, she is definitely going to provide that. The amount of detail and accuracy she speaks is something that you need to see because I remember my first time my jaw dropped! She will always make you feel comfortable and is very down to earth. Thank you Christine!"
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Aneta, Toronto, Ontario",
    rank:"",
    clientReview:"Christine is the real deal! I see Christine twice a year for my readings and have been going to her for about 4 years now and have referred so many her way! She has helped me get clear on many aspects of my life and big decisions that I needed to make. Of course we all have free will and we ultimately are in control of our path however, guidance from Christine has helped me see both sides of my decision making. I like that I can ask my questions for specific guidance. If you’re looking for clarity, Christine is your person! "
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Mia Martina, Tampa, Florida",
    rank:"",
    clientReview:"Christine’s is like my angel  Her readings are always so accurate with a delivery so genuine that it’s exactly what I need to hear when I need to make some important guided decisions on business or personal matters, her ability to tap in with my spirit guides is a gift and I’m so very grateful to have her as my reader. "
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Ashley, Boston, Massachusetts",
    rank:"",
    clientReview:"Christine is one of the biggest blessings to come into my life. After my first session where she was able to pinpoint exactly what was going on in my life, I referred some of my closest friends and family members to her which over the past 3 years has turned into dozens of people all of which have continued to work with her. It’s unbelievable how she is able to read the energy of the people she is speaking to and through photos. There’s a reason everyone I’ve sent to her has told me that the things she has picked up on have all come to fruition. Once you speak to her you’ll notice how much lighter you feel energetically. She is so dedicated to this and truly cares about every single person she speaks to. I highly recommend her and am so grateful I found her.   "
  },
  {
    clientImg:"/images/testimonialImages/female-icon.png",
    clientName:"Pina, Toronto, Ontario",
    rank:"",
    clientReview:"I met Christine a few years ago, and I’m so glad I did! Since we’ve met, she’s been a source of light in my life. Her readings are so accurate and so insightful. I’ve lost count at how many times she has told me something in a reading, and I later find myself saying, “Yup, Christine was right …again!” Her delivery is always sweet, supportive and non-judgemental; I always leave feeling comforted and optimistic. Christine has an incredible gift! I feel so lucky to be able to call her my friend."
  },
  {
    clientImg:"/images/testimonialImages/male-icon.png",
    clientName:"Anshul, Burlington, ON",
    rank:"",
    clientReview:"Cup reading with Christine has been an incredible experience, exceeding all my expectations. The reading was honest, detailed, and paced perfectly to suit my preference. I was pleasantly surprised by Christine's ability to answer any question and provide clarity on various topics. Just two weeks after the reading, I already see many predictions coming true, which is amazing! I can confidently trust Christine for any guidance or critical decisions I need to make. I would highly recommend experiencing it for yourself and be ready for some honest reading."
  },
] 

function Testimonials() {

  const handlePrevButtonClickInd = () => {
    const swiperInstance = document.querySelector('#test-cards-slider').swiper;
    swiperInstance.slidePrev();
  };
  
  const handleNextButtonClickInd = () => {
    const swiperInstance = document.querySelector('#test-cards-slider').swiper;
    swiperInstance.slideNext();
  };

  return (
    <div className="Testimonials-container py-5">
      <div className=" w-100 container-fluid py-4">
    <div className=" d-flex align-items-center w-100">
      <div className="col-12 text-center px-0">
        
        <h3 className='my-5 font-Aervish stylish-font-text' style={{color:"#E0C7C0"}}>Testimonials</h3>
        <h3 className="body-heading color-dark mt-4 main-heading mx-auto mb-3">Read The Experience Of My Past Clients</h3>
        

        <div className="card-list" style={{position:"relative"}}>

        <Swiper
        spaceBetween={0}
        navigation={{
          nextEl: '.swiper-button-next-test',
          prevEl: '.swiper-button-prev-test',
        }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        observer ={true}
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
          style={{position:"relative"}}
          id="test-cards-slider"
            >
               {/* <div className="swiper-button-prev-test" onClick={handlePrevButtonClickInd}>
                    <img src="/images/icons/left-arrow-icon.svg" className="arrow-img" alt="arrow icon"/>
                </div> */}
                {
                testimonialData.map((clientData,ind)=>{
                  return(<>
                    <SwiperSlide key={ind} className="pt-5 px-3 px-sm-0">
                      <TestimonialCard clientImg={clientData.clientImg} clientName={clientData.clientName} clientReview={clientData.clientReview}/>
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