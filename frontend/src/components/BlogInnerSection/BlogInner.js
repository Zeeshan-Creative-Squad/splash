import React from 'react';
import './BlogInner.css';



function BlogInner({ text, blogContent, date, Heading }) {


  return (
    <>
      <div className="box multi-gradient blog-inner">
        <div className='container'>
          <div className="main-heading">
            <div className='card-icon-text d-flex align-items-center'>
              <img src='/images/icons/icon-inner-blog.png' alt='icon' className='cards-some-icon' />
              <p className='text-for-box-red'>BY SPLASH SPORTS</p>

              {/* <img src='/images/icons/profile-icon.svg' alt='icon' className='cards-some-icon img-fluid' /> */}
              <p className='text-for-box'>|  CATEGORY : FOOTBALL NEWS</p>
            </div>
            {/* <h1 className='head-h2'>INTERIOR DESIGN TRENDS IN 2016</h1> */}
          </div>


          <div className="subheading-container">


            <h1 className="head-h2">MASTERING THE BASICS: ESSENTIAL FOOTBALL SKILLS FOR BEGINNERS</h1>
            <div className="para_main my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</div>

            <h3 className='head-h3'>LOREM IPSUM DOLOR SIT AMET</h3>
            <div className="para_main my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</div>

            <div className="subheading-content">
              <div className="head-h3 my-3 color-dark">A MAN’S HAIRCUT IS HIS STATEMENT TO THE WORLD. MAKE YOURS UNFORGETTABLE.</div>

              <h2 className="head-h2"></h2>
              <div className="para_main my-3"></div>

            </div>

            <div className="col-md-8 mt-4">
              {/* Title */}
              <h2 className="head-h3">
                DOLOR SIT AMET
              </h2>

              {/* Bullet Points List */}
              <ul className="list-unstyled mt-4">
                {[
                  'Vestibulum ante ipsum primis in faucibus orci luctus',
                  'et ultrices posuere cubilia Curae; Nulla vehicula imperdiet',
                  'sapien, et vestibulum turpis elementum eu',
                  'Quisque ac est id leo euismod lacinia at ut libero. Integer in',
                  'magna sed augue congue elementum',
                  'Proin bibendum nunc sed velit dictum',
                  'at consectetur lorem congue'
                ].map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-2 px-2">
                    <span
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#F13742',
                        borderRadius: '50%',
                        marginRight: '10px'
                      }}
                    ></span>
                    <span className="text-muted" style={{
                      fontSize: '16px', textAlign: "left",
                      font: "normal normal bold 18px/46px Century Gothic"
                      , letterSpacing: "0px"
                      , color: "#717C93"
                      , opacity: "1"
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className='head-h3'>LOREM IPSUM DOLOR SIT AMET</h3>
            <div className="para_main my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</div>





            {/* <div className={`body-paragraph my-3 color-dark`} dangerouslySetInnerHTML={{ __html: text }}></div>
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
      */}



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
