import React, { useState, useEffect } from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import Articles from '../components/NewsAndArticles/Articles';
import BlogInner from '../components/BlogInnerSection/BlogInner';
import CardTestimonial from '../components/OurServices/CardBoxServicesSection';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const BloginnerPage = () => {

  return (
    <div>

      <CommonHeroComponent Para=""
        backgroundImg="/images/creatives/Blog-Banner-Image.jpg" 
        Heading="FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER"
        date="19th JULY"
      />


      <BlogInner />


      {/* <CardTestimonial
        heading="MOST POPULAR NEWS"
        spanHeading=""
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing"
        button="Learn more" /> */}
    </div>
  );
};

export default BloginnerPage;