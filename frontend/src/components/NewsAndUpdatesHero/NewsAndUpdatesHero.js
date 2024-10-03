import React from 'react';
import './NewsAndUpdatesHero.css';

const NewsAndUpdatesHero = () => {
  return (
    <div className="newsupdates-hero">
    <div className="NewsAndUpdates-content-overlay">
      <div className="NewsAndUpdates-content text-center">
        <h1 className='h1_main'>Our Blogs</h1>
        <p className='para_main'>Keep up to date with the latest trends, tips, and industry news in barbering and grooming. From product launches to expert advice, we've got you covered.</p>
        {/* <button className="connect-button">Let's Connect</button> */}
      </div>
    </div>
  </div>
  )
}

export default NewsAndUpdatesHero;