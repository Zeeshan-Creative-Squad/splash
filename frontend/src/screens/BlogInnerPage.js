import React, { useState, useEffect } from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent';
import BlogInner from '../components/BlogInnerSection/BlogInner';

const BloginnerPage = () => {
  return (
    <div>

      <CommonHeroComponent Para=""
        backgroundImg="/images/creatives/Blog-Banner-Image.jpg" 
        Heading="FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER"
        date="19th JULY"
      />
      <BlogInner />
    </div>
  );
};

export default BloginnerPage;