import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardBox.css'; 

function CardBox(props) {
  const navigate = useNavigate();

  return (
    <div className="card-box">
      <img src={props.cardImg} alt={props.title} />
      <div className="card-body">
        <h2 className='head-h2'>{props.title}</h2>
        <div className="card-content">
          <p className='para_main'>{props.content}</p>
          <div>
          
          </div>
        </div>
        {/* <a onClick={() => navigate(props.anchor)} className="read-more-anchor color-yellow">
          Learn More <img src="/images/icons/carousel-btn-icon.svg" className="btn-icon" alt="btn-icon" />
        </a> */}
      </div>
    </div>
  );
}

export default CardBox;
