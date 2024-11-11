import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission';
import ContactForm from '../components/ContactForm/ContactForm';

const Services = () => {
  return (
    <div>
      <CommonHeroComponent
        Heading="Our Services"
        Para="Explore the wide range of expert staging solutions we offer to make your property stand out and sell quickly."
        backgroundImg="/images/creatives/services-hero.jpg" />

      <VisionAndMission flexdirection="row-reverse" heading="Homeowner Home Staging" Para="Transform your home into a buyer's dream with our tailored staging solutions designed specifically for homeowners. We enhance your property's unique features to create a welcoming and attractive environment. Our expert team handles every detail, from furniture arrangement to décor, ensuring a captivating presentation that leads to a quicker sale. Experience the difference of a professionally staged home and watch your property stand out in the market."
        image="/images/creatives/services-section-two.png"
        background="#FFF"
        bgText="01"
      />

      <VisionAndMission heading="Realtor Home Staging" Para="Elevate your property listings with our top-notch staging services tailored for realtors. We partner with you to create stunning presentations that attract serious buyers and close deals faster. Our staging solutions are designed to highlight each property's strengths and appeal to a broad audience. Trust us to provide a competitive edge that enhances your listings and impresses clients."
        image="/images/creatives/services-section-one.png"
        background="#F5F5F5"
        bgText="02"
      />

      <VisionAndMission flexdirection="row-reverse" heading="Builder Home Staging" Para="Showcase your new construction homes with our expert staging services designed for builders. We create model homes that captivate and inspire potential buyers, highlighting the full potential of your designs. Our team ensures each space is styled to reflect current trends and appeal to target demographics. Partner with us to make your model homes unforgettable and drive successful sales."
        background="#FFF"
        image="/images/creatives/services-section-three.png"
        bgText="03"
      />
      <ContactForm />
    </div>
  );
};

export default Services;