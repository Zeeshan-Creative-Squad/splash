import React from 'react';
import { Link } from 'react-router-dom';
import './LatestNews.css';

const LatestNews = () => {
  return (
    <div className='latest-container'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-lg-block d-none">
            <img src="/images/creatives/blog-banner.jpg" alt="Haircut" className="img-responsive" />
          </div>
          <div className="col-lg-6 under-container">
            <h4 className='h2_main'>Most Popular</h4>
            <h2 className='h1_main'>HealthCare Access Initiative</h2>
            <div className="col-lg-6 d-lg-none d-block mt-4 mb-4">
              <img src="/images/creatives/blog-banner.jpg" alt="Haircut" className="img-responsive" />
            </div>
            <p className='para_main'>Convallis vivamus at cras   porta nibh velit aliquam  vivamus at cras porta nibh velit aliquam, Convallis   porta nibh velit aliquam vivamus  porta nibh velit aliquam at cras porta nibh velit aliquam Convallis vivamus at cras portaibh velit aliquam a nibh velit aliquam  Convallis vivamus at cras porta nibh velit aliquam,mus at cras porta nibh velit aliquam  a nibh velit aliquam  Convallis vivamus at cras porta nibh velit aliquam</p>
            
            <Link to="/ads">
            <button className='connect-button'>Read More</button>
            </Link>


          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews