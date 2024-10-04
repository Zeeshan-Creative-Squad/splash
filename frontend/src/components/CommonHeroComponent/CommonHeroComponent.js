import React from 'react';
import './CommonHeroComponent.css';

const CommonHeroComponent = (props) => {
  return (
    <div className="common-hero" style={{ backgroundImage: `url(${props.backgroundImg})`}}>
      <div className='container'>
        <div className="Common-Hero-content-overlay">
        {/* <div className='ads-hero-content'>
          <h3 className='para_main'>{props.adsTitle}</h3>
            <h1 className='ads-title'>{props.adsHeading}</h1>
            </div> */}
          <div className="Common-Hero-content text-center">
          

            {/* <h4 className='head-h1'>{props.title}</h4> */}
            <h1 className='head-h1'>{props.Heading}</h1>
            <p className='para_main'>{props.date}</p>
            <p className='para_main text-lg-center'>{props.Para}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonHeroComponent;