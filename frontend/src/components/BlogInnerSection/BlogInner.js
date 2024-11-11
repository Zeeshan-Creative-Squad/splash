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
              <p className='text-for-box'>|  CATEGORY : FOOTBALL NEWS</p>
            </div>
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
              <h2 className="head-h3">
                DOLOR SIT AMET
              </h2>
              <ul className="list-unstyled mt-2">
                                {[
                                    'Payment must be received before the payment deadline in order to secure the current price point. For example payment for.',
                                    ' Registration is not considered complete until payment, rosters and waivers have been received in our office',
                                    'All paperwork must be received by the deadline in order to be eligible.',
                                    'Athletes need only submit one waiver for the entire competitive season.',

                                ].map((item, index) => (
                                    <li key={index} className="d-flex align-items-center px-2">
                                        <img src='/images/icons/red-bullet.png' alt="Bullet" style={{ width: '10px', height: '10px', marginRight: '10px'}} />
                                        <span className="para_main">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
            </div>
            <h3 className='head-h3'>LOREM IPSUM DOLOR SIT AMET</h3>
            <div className="para_main my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</div>
            <hr className="divider" />
            <div className="blog-content">
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
