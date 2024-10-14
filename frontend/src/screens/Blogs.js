import React from 'react';
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import BlogTransformCards from '../components/BlogTransformCards/BlogTransformCards';
import PopularSection from '../components/PopularSection/PopularSection';

const Blogs = () => {
  return (
    <div>
      <CommonHeroComponent
        Heading="LATEST NEWS"
        Para="Convallis vivamus at cras porta nibh velit Convallis vivamus at cras porta nibh velit"
        backgroundImg="/images/creatives/Blog-Banner-Image.jpg" />
      <BlogTransformCards />
      <PopularSection />
    </div>
  );
};

export default Blogs;