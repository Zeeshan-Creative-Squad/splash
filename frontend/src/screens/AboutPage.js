import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import BgTextContent from '../components/BgTextContent/BgTextContent';
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel';
import ContactForm from '../components/ContactForm/ContactForm';

const AboutPage = () => {
  return (
    <div>
      <CommonHeroComponent title="" Heading="ABOUT ETB HOME STAGING" Para="Know more about how we’ve been perfecting the art of home staging for over 15 years." backgroundImg="/images/creatives/about-home.jpg" />

      <VisionAndMission flexdirection="row-reverse" Para="At ETB-Home Staging, we are a passionate team of home staging professionals dedicated to transforming properties into captivating spaces that attract buyers and drive sales. With over 15 years of experience and more than 1500 successful projects, our expertise and commitment to excellence are unparalleled. We view our clients as family, tailoring our services to meet their unique needs and exceed their expectations. Our mission is to highlight each home’s true potential and make the selling process as smooth and successful as possible."
        image="/images/creatives/about-section-one.png"
        afterShadeHeading="RE"
        shadeHeading="WHO WE A"
        background="#F5F5F5" />

      <VisionAndMission Para="ETB-Home Staging stands out for its creativity, expertise, and unwavering dedication to client satisfaction. Our innovative designs and strategic staging solutions ensure that each property showcases its best features and appeals to potential buyers. With a proven track record of success and a personalized approach, we make every home look its best and help achieve the quickest, most profitable sale."
        image="/images/creatives/about-section-two.png"
        shadeHeading="WHY "
        afterShadeHeading="ETB"
        background="#FFF" />

      <VisionAndMission flexdirection="row-reverse" Para="Choosing ETB-Home Staging means partnering with a team that delivers exceptional value and results. Our expert staging enhances your property’s appeal, leading to faster sales and higher offers. Benefit from our tailored approach, creative designs, and proven success to ensure your home stands out in a competitive market and attracts the right buyers."
        image="/images/creatives/about-section-three.png"
        shadeHeading="ETB BEN"
        afterShadeHeading="EFITS"
        background="#F5F5F5" />

      <BgTextContent />
      <ServicesCarousel heading="OUR" shadeHeading="PROCESS" />
      <ContactForm />
    </div>
  );
};

export default AboutPage;