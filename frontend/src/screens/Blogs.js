import React from 'react';
import CardGrid from '../components/CardGrid/CardGrid';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import CardTestimonial from '../components/OurServices/CardBoxServicesSection';
import BlogTransformCards from '../components/BlogTransformCards/BlogTransformCards';
import PopularSection from '../components/PopularSection/PopularSection';

const Blogs = () => {
  return (
    <div>
      <CommonHeroComponent
        Heading="LATEST NEWS"
        Para="Convallis vivamus at cras porta nibh velit Convallis vivamus at cras porta nibh velit"
        backgroundImg="/images/creatives/blogs-hero.jpg" />
      <BlogTransformCards />
      <PopularSection />

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