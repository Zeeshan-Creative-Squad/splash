import React from 'react';
import CardGrid from '../components/CardGrid/CardGrid';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import CardTestimonial from '../components/OurServices/CardBoxServicesSection';

const Blogs = () => {
  return (
    <div>
      <CommonHeroComponent
        Heading="OUR BLOGS"
        Para="Explore our expert tips and latest trends in home staging and design."
        backgroundImg="/images/creatives/blogs-hero.jpg" />

      <CardGrid />

      <CardTestimonial
        heading="MOST POPULAR "
        shadeHeading="News"
        spanHeading=""
        content="Stay informed with the latest trends, tips, and success stories from ETB-Home Staging."
        button="Learn more" />
    </div>
  );
};

export default Blogs;