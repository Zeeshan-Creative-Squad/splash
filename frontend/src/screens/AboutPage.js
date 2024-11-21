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
      <VisionAndMission Para="The Splash Sports Event Experience: Precision, Excitement, and Lifelong Memories
At Splash Sports Events, every moment is crafted with precision to deliver an unforgettable experience. Our events combine thrilling competition with exceptional organization, ensuring participants and spectators alike enjoy an awesome experience. More than just a competition, Splash Sports Events create cherished memories that last a lifetime. "

        ParaOne="Splash Sports Events: Inspiring Young Athletes to Excel
Splash Sports Events is dedicated to empowering young athletes who are focused, driven to improve, and eager to set new goals. Our events provide the perfect platform for participants to challenge themselves, grow their skills, and leave inspired to achieve even greater heights. With Splash, every event is a step forward on their journey to success."


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
        shiftRow={true} />
      <BrandGrow />
      <MyServices />
      <Contactform />
    </div>
  );
};

export default AboutPage;