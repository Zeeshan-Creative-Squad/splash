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
        Para="Splash Sports Events is powered by a small but influential team dedicated to promoting multi-sports for kids. Our team consists of professionals with backgrounds in event planning, including Professional Athletes, Educators, Family Counselors, and Business Strategists. We closely collaborate with sports clubs and coaches to ensure that every athlete and spectator enjoys the best possible experience at our events." homeTitle=""
        button="ABOUT US"
        image="/images/creatives/SectionComp-img.jpg" />
      <ServiceCards />
      <Testimonials />
      <Contactform />
    </div>
  );
};

export default HomePage;