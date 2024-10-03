import React from 'react';
import { Link } from 'react-router-dom';
import './VisionAndMission.css';


const VisionAndMission = (props) => {
  let linkTo = '#'; 

  switch (props.button) {
    case 'ABOUT US':
      linkTo = '/about';
      break;
    case 'Contact Us':
      linkTo = '/contact';
      break;
    case 'Services':
      linkTo = '/services';
      break;
    case 'Donate Now':
      linkTo = '/donations';
      break;
    case 'Blog':
      linkTo = '/blog';
      break;
    default:
      linkTo = '#'; // Default case
  }

  return (
    <div className="ourservices-container" style={{background: props.background}}>
      <div className='container'>
        <div className={`row ${props.flexdirection === 'row-reverse' ? 'flex-lg-row-reverse' : 'flex-lg-row'} flex-column`}>
          <div className="col-lg-6 right-section">
            <img src={props.image} className='large-img' alt='banner-img'/>
          
          </div>
          <div className="col-lg-6 left-section">
            <h2 className='secondary-h1'>{props.title}{props.aboutTitle}</h2>

            <h1 className='head-h2'
              data-background-text={props.bgText ?? ""}
            >
 {props.heading}
               <span className='head-bg'>{props.shadeHeading}</span>
             
              <span className='head-h2'>{props.afterShadeHeading}</span></h1>
            <div className="d-flex flex-container">
              <div className="text-container">
                <div>
                  <p className='para_main'>{props.Para}</p>
                  <br />
                  <p className='bluepara'>{props.bluepara}</p>
                  {props.button && (
                    <div className="button-container">
                      <Link to={linkTo} className='button_secondary'>
                        {props.button}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
