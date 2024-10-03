import React from 'react';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Homehero from '../components/HomeHero/HomeHero';
import DesignGrid from '../components/DesignGrids/DesignGrids';
import TechMentorshipCards from '../components/TechMentorshipCards/TechMentorshipCards';
import SectionComponent from '../components/SectionComponent/SectionComponent';
import ServiceCards from '../components/ServiceCard/ServiceCard';
import Contactform from '../components/Contact Form/Contactform'
import OurProcess from '../components/OurProcess/OurProcess'

const HomePage = () => {
  return (
    <div>
      <Homehero />
      <DesignGrid />
      {/* <TechMentorshipCards /> */}
      <OurProcess />
      <SectionComponent
        flexdirection="row-reverse"
        heading="Our Team"
        spanHead=""
        Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries" homeTitle=""
        button="ABOUT US"
        image="/images/creatives/SectionComp-img.jpg" />
      <ServiceCards />
      <Contactform />
      <NewsLetter />
      {/* <VisionAndMission
        flexdirection="row-reverse"
        shadeHeading="ABOUT"
        afterShadeHeading=" US"
        Para="At ETB-Home Staging, we have been transforming homes for over 15 years, completing more than 1500 successful projects. Our commitment to excellence has earned us a reputation for 100% client satisfaction. We believe our clients are our family, and this ethos drives us to deliver outstanding results every time. Our experienced team takes pride in creating stunning spaces that not only attract buyers but also leave a lasting impression. Join the ETB-Home Staging family and let us help you showcase your home’s true potential." homeTitle=""
        button="ABOUT US"
        image="/images/creatives/about-banner.png"
      />

      <WhatWe Heading="WHAT " heading="HOME STAGING" Para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Pellentesque habitant morbi tristique senectus et netus et malesuada fames something turpis egestas making better molestie. Nunc egestas erat lacus, vitae eleifend nisi eleifend making something realy good" homeTitle="" button="READ MORE" image="/images/creatives/slider-home--staging.png"
        shadeHeading="WE DO"
        background="transparent linear-gradient(313deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat" />

      <OurProcess heading="WHY " shadeHeading="CHOOSE US" />

      <CardTestimonial
        heading="LATEST "
        shadeHeading="NEWS AND UPDATES"
        content="Stay informed with the latest trends, tips, and success stories from ETB-Home Staging."
        button="Learn more" />
      <Testimonials heading="WHAT OUR " shadeHeading="CLIENT SAYS" />
      <NewsLetter />
      <ContactForm /> */}

    </div>
  )
}

export default HomePage