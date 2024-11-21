import React, {useState} from 'react';
import './Service.css';

const Service = ({paragraph, heading, imageHovered, imageDefault}) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
      setHovered(true);
    };
  
    const handleLeave = () => {
      setHovered(false);
    };

    const serviceClassName = `service pe-3 ps-3 pt-4 pb-2 ${hovered ? 'service-hovered' : ''}`
  return (
    <div className={serviceClassName} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <img className='img-fluid service-image mb-3' src={hovered ? imageHovered: imageDefault} />
      <h3 className={`${!hovered ? 'service-heading' : 'service-heading-hover'} mb-3`}>{heading}</h3>
      <p className="service-paragraph mb-3">{paragraph}</p>
    </div>
  )
}

export default Service;