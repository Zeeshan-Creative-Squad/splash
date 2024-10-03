import React from 'react'
import "./ServiceCard.css"
import { useNavigate } from 'react-router-dom'

function ServiceCard() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                {/* First row of images */}
                <div className="col-md-4">
                    <img src="basketball.png" className="img-fluid" alt="Basketball Event" />
                    <p className="text-danger mt-3">19th July</p>
                    <h5>From Amateur to Pro: The Journey of a Football Player</h5>
                </div>

                <div className="col-md-4">
                    <img src="football_center.png" className="img-fluid" alt="Football Event Center" />
                    <p className="text-danger mt-3">19th July</p>
                    <h5>From Amateur to Pro: The Journey of a Football Player</h5>
                </div>

                <div className="col-md-4">
                    <img src="basketball.png" className="img-fluid" alt="Basketball Event" />
                    <p className="text-danger mt-3">19th July</p>
                    <h5>From Amateur to Pro: The Journey of a Football Player</h5>
                </div>
            </div>

            {/* Center large image */}
            <div className="row text-center mt-5">
                <div className="col-md-12">
                    <img src="/images/creativ/asset-2.png" className="img-fluid" alt="Football Goalkeeper" />
                    <p className="text-danger mt-3">19th July</p>
                    <h3>From Amateur to Pro: The Journey of a Football Player</h3>
                    <p>By Splash Sports Events</p>
                </div>
            </div>

            {/* Second row of images */}
            <div className="row text-center mt-5">
                <div className="col-md-4">
                    <img src="team.png" className="img-fluid" alt="Football Team" />
                    <p className="text-danger mt-3">19th July</p>
                    <h5>From Amateur to Pro: The Journey of a Football Player</h5>
                </div>

                <div className="col-md-4">
                    <img src="goalkeeper.png" className="img-fluid" alt="Football Goalkeeper" />
                    <p className="text-danger mt-3">19th July</p>
                    <h5>From Amateur to Pro: The Journey of a Football Player</h5>
                </div>

                <div className="col-md-4">
                    <img src="team.png" className="img-fluid" alt="Football Team" />
                    <p className="text-danger mt-3">19th July</p>
                    <h5>From Amateur to Pro: The Journey of a Football Player</h5>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;