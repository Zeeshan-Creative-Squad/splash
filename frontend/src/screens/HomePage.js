import React from 'react';
import Homehero from '../components/HomeHero/HomeHero';
import DesignGrid from '../components/DesignGrids/DesignGrids';
import SectionComponent from '../components/SectionComponent/SectionComponent';
import ServiceCards from '../components/ServiceCard/ServiceCard';
import Contactform from '../components/Contact Form/Contactform'
import OurProcess from '../components/OurProcess/OurProcess';
import Testimonials from '../components/Testimonials/Testimonials';
import ScrolledSection from '../components/ScrolledSection/ScrolledSection';

const HomePage = () => {
  return (
    <div>
      <Homehero />
      <ScrolledSection />
      <DesignGrid />
      <OurProcess />
      <SectionComponent
        flexdirection="row-reverse"
        heading="Our Team"
        spanHead=""
        Para="Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived not only ive finance software has love the financial haveing on centuries" homeTitle=""
        button="ABOUT US"
        image="/images/creatives/SectionComp-img.jpg" />
      <ServiceCards />
      <Testimonials />
      <Contactform />
    </div>
  );
};

export default HomePage;