import React from 'react';
import './BlogInner.css';



function BlogInner({text, blogContent, date, Heading}) {
 

  return (
    <>
    <div className="box multi-gradient blog-inner">
   
        
    <div className='container'>
    
      <div className="main-heading">
      <div className='card-icon-text d-flex'>
          <img src='/images/icons/schedule-icon.svg' alt='icon' className='cards-some-icon img-fluid'/>
          <p className='text-for-box'>{date}</p>

          <img src='/images/icons/profile-icon.svg' alt='icon' className='cards-some-icon img-fluid'/>
          <p className='text-for-box'>{Heading}</p>
        </div>
        {/* <h1 className='head-h2'>INTERIOR DESIGN TRENDS IN 2016</h1> */}
      </div>
  
    
      <div className="subheading-container">
      <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}

<div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}


<div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
      {blogContent.map((item) => (
        <>
          <h2 className="head-h2" style={{textTransform:"capatalize"}}>{item.heading}</h2>
          <div className={`para_main my-3`} dangerouslySetInnerHTML={{ __html: item.paragraph }}></div>
        </>
      ))}
     
        
     
      
        <hr className="divider" />
        <div className="blog-content">
          {/* <p className="footer-text">Share:</p> */}
          <img src='' />
          <div className="social-icons">
           
          </div>
        </div>
        <hr className="divider" />
      </div>
      </div>
      </div>
      <div>
      </div>
      
     
     
    
    </>

  );
}

export default BlogInner;
