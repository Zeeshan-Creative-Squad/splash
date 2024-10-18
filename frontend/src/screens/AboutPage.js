import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import TextContent from '../components/TextContent/TextContent'
import BrandGrow from '../components/BrandsGrow_/BrandGrow';
import MyServices from '../components/MyServices/MyServices';
import Contactform from '../components/Contact Form/Contactform'

const AboutPage = () => {
  return (
    <div>
      <CommonHeroComponent title="" Heading="ABOUT US" Para="Convallis vivamus at cras porta nibh velit Convallis vivamus at cras porta nibh velit" backgroundImg="/images/creatives/AboutHero-Banner.jpg" />

      <VisionAndMission Para="At Splash Sports Events, we are committed to creating an exceptional experience by paying attention to every detail. Our dedication to state-of-the-art technology, including top-notch timing, scoring systems, equipment, and visually stunning aesthetics, ensures that our events offer a unique and unforgettable experience. At Splash Sports Events, we are committed to creating an exceptional experience by paying attention to every detail. Our dedication to state-of-the-art technology, including top-notch timing, scoring systems, equipment, and visually stunning aesthetics, ensures that our events offer a unique and unforgettable experience."
        image="/images/creatives/about-section-one.png"
        shadeHeading=" "
        afterShadeHeading="ABOUT US"
        background="#FFF"
        button="Learn More" />

      <TextContent
        img="/images/creatives/about-section-two.png"
        subHeading=""
        heading="SIMPLY TUNED TO PERFECTION"
        paragraph=""
        btn={false}
        stat={true}
        reviewContent={false}
        shiftRow={true}
      />
      <BrandGrow />
      <MyServices />
      <Contactform />
    </div>
  );
};

export default AboutPage;