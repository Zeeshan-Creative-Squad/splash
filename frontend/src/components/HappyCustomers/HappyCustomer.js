import React from 'react';
import './HappyCustomer.css'; 

const stats = [
  { icon: '/images/creatives/cardbox-banner.svg', value: "20,500,000", label: 'Lives Impacted' },
  { icon: '/images/creatives/cardbox-banner.svg', value: "20,500,000", label: 'Lives Impacted' },
  { icon: '/images/creatives/cardbox-banner.svg', value: "20,500,000", label: ' Lives Impacted' },
  { icon: '/images/creatives/cardbox-banner.svg', value: "20,500,000", label: 'Lives Impacted' },
  { icon: '/images/creatives/cardbox-banner.svg', value: "20,500,000", label: 'Lives Impacted' }
];

const HappyCustomer = () => {
  return (
    <div className='customer-container'>
    <div className="container text-center my-5">
      <h1 className='head-h1'>Raza Foundation Impact Report 2023</h1>
      <p className='body-paragraph'>Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur Convallis vivamus at Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices</p>
      <div className="row content-customers">
        {stats.map((stat, index) => (
          <div className="col-md mb-4" key={index}>
            <img src={stat.icon} className="mb-3 custom-icons" alt={stat.label} />
            <h3 className="display-4" style={{ color: '#1F2F54' }}>{stat.value}</h3>
            <p style={{ color: '#717C93' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HappyCustomer;
