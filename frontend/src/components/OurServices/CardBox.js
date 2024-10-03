// CardBox.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardBox.css'; 

function CardBox(props) {
  const navigate = useNavigate();


  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };
  

  return (
    <div className="services-card-box" onClick = { () => {redirectUserToBlog(props.slug_url)}}>
      <img src={props.cardImg} alt={props.title} className='img-fluid blogs-box-banner-img'/>
      <div className="card-body">
        <div className='card-icon-text d-flex justify-content-center'>
          <img src='./images/icons/schedule-icon.svg' alt='icon' className='cards-some-icon img-fluid'/>
          <p className='text-for-box'>By Etb home staging</p>

          <img src='./images/icons/profile-icon.svg' alt='icon' className='cards-some-icon img-fluid'/>
          <p className='text-for-box'>15, sept 2024</p>
        </div>
        <h2 className='head-h2'>{props.title}</h2>
        <div className="card-content">
          <p className='para_main mb-2'>{props.content}</p>
          {/* <button>{props.button}</button> */}
        </div>
      </div>
    </div>
  );
}

export default CardBox;
