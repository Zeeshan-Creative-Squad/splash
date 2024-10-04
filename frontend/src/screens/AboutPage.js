import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import BgTextContent from '../components/BgTextContent/BgTextContent';
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel';
import ContactForm from '../components/ContactForm/ContactForm';
import TextContent from '../components/TextContent/TextContent'
import AthleteServices from '../components/AthleteServices/AthleteServices';

const AboutPage = () => {
  return (
    <div>
      <CommonHeroComponent title="" Heading="ABOUT US" Para="Convallis vivamus at cras porta nibh velit Convallis vivamus at cras porta nibh velit" backgroundImg="/images/creatives/AboutHero-Banner.jpg" />

      <VisionAndMission Para="At Splash Sports Events, we are committed to creating an exceptional experience by paying attention to every detail. Our dedication to state-of-the-art technology, including top-notch timing, scoring systems, equipment, and visually stunning aesthetics, ensures that our events offer a unique and unforgettable experience. At Splash Sports Events, we are committed to creating an exceptional experience by paying attention to every detail. Our dedication to state-of-the-art technology, including top-notch timing, scoring systems, equipment, and visually stunning aesthetics, ensures that our events offer a unique and unforgettable experience."
        image="/images/creatives/about-section-one.png"
        shadeHeading=" "
        afterShadeHeading="ABOUT US"
        background="#FFF" />

<TextContent
                img="/images/creatives/about-section-two.png"
                subHeading=""
                heading="SIMPLY TUNED TO PERFECTION"
                // paragraph="At Creative Fusion, we pride ourselves on our commitment to transparency and accountability. Our performance metrics reflect our dedication to delivering results-driven digital solutions customized to each client's unique goals. "
                btn={false}
                stat={true}
                reviewContent={false}
                shiftRow={true}

            />

<AthleteServices />
      {/* <VisionAndMission flexdirection="row-reverse" Para="At ETB-Home Staging, we are a passionate team of home staging professionals dedicated to transforming properties into captivating spaces that attract buyers and drive sales. With over 15 years of experience and more than 1500 successful projects, our expertise and commitment to excellence are unparalleled. We view our clients as family, tailoring our services to meet their unique needs and exceed their expectations. Our mission is to highlight each home’s true potential and make the selling process as smooth and successful as possible."
        image="/images/creatives/about-section.png"
        afterShadeHeading="RE"
        shadeHeading="WHO WE A"
        background="#F5F5F5"
        button="Learn More" />

      <VisionAndMission flexdirection="row-reverse" Para="Choosing ETB-Home Staging means partnering with a team that delivers exceptional value and results. Our expert staging enhances your property’s appeal, leading to faster sales and higher offers. Benefit from our tailored approach, creative designs, and proven success to ensure your home stands out in a competitive market and attracts the right buyers."
        image="/images/creatives/about-section-three.png"
        shadeHeading="ETB BEN"
        afterShadeHeading="EFITS"
        background="#F5F5F5" /> */}

      <BgTextContent />
      <ServicesCarousel heading="OUR" shadeHeading="PROCESS" />
      <ContactForm />
    </div>
  );
};

export default AboutPage;