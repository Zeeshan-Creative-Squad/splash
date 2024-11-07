import React from "react";
import { useState } from "react";
import "./ToggleCards.css";
// import { Links1, Links2, Links3 } from "../Navigationlinks";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./right-arrow.png";
import img5 from "./img4.svg";
import img6 from "./img6.svg";
import img7 from "./img7.svg";
import img8 from "./img8.svg";
import img9 from "./img9.svg";
import img10 from "./img10.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

const ToggleCards = ({ paddingTop, paddingBottom }) => (
  <div
    style={{
      paddingTop: paddingTop && paddingTop,
      paddingBottom: paddingBottom && paddingBottom,
    }}
    className="Services"
  >
    <Container  >
      <h1 className="head-h1 text-center mb-5">
        Up coming Splash Events  <br />
        <span className="head-h3">Checkout the full Line up!</span>
      </h1>
      <div className="row text-center justify-content-center row gx-lg-4 g-3 pt-2 mb-0 gy-4">
        <ServiceItem
          // navlink={Links1}
          hoveredimage={img5}
          overlayImage={img9}
          image={img1}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="From intuitive navigation to seamless responsiveness across devices, we prioritize every aspect to deliver an exceptional user experience through exceptional web design & development services."
          link="/search-engine-optimization-service-in-canada/"
        />
        <ServiceItem
          // navlink={Links2}
          hoveredimage={img6}
          overlayImage={img8}
          image={img2}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="Make the world talk about you with Creative Squad, the leading digital marketing powerhouse in Canada. Our marketing solutions cover everything from strategic ad campaigns to management."
          link="/search-engine-marketing-service-in-toronto/"
        />
        <ServiceItem
          // navlink={Links3}
          hoveredimage={img7}
          overlayImage={img8}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="Leverage the potential of automation and scalability with Creative Squad, the premier digital marketing agency in Canada. Enhance your brand's online impact through our wide-ranging services."
          link="/ecommerce-development-service-in-canada/"
        />
        <ServiceItem
          // navlink={Links1}
          hoveredimage={img5}
          overlayImage={img8}
          image={img1}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="From intuitive navigation to seamless responsiveness across devices, we prioritize every aspect to deliver an exceptional user experience through exceptional web design & development services."
          link="/search-engine-optimization-service-in-canada/"
        />
        <ServiceItem
          // navlink={Links2}
          hoveredimage={img6}
          overlayImage={img8}
          image={img2}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="Make the world talk about you with Creative Squad, the leading digital marketing powerhouse in Canada. Our marketing solutions cover everything from strategic ad campaigns to management."
          link="/search-engine-marketing-service-in-toronto/"
        />
        <ServiceItem
          // navlink={Links3}
          hoveredimage={img7}
          overlayImage={img8}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="Leverage the potential of automation and scalability with Creative Squad, the premier digital marketing agency in Canada. Enhance your brand's online impact through our wide-ranging services."
          link="/ecommerce-development-service-in-canada/"
        />
        <ServiceItem
          // navlink={Links1}
          hoveredimage={img5}
          overlayImage={img8}
          image={img1}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="From intuitive navigation to seamless responsiveness across devices, we prioritize every aspect to deliver an exceptional user experience through exceptional web design & development services."
          link="/search-engine-optimization-service-in-canada/"
        />
        <ServiceItem
          // navlink={Links2}
          hoveredimage={img6}
          overlayImage={img8}
          image={img2}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="Make the world talk about you with Creative Squad, the leading digital marketing powerhouse in Canada. Our marketing solutions cover everything from strategic ad campaigns to management."
          link="/search-engine-marketing-service-in-toronto/"
        />
        <ServiceItem
          // navlink={Links3}
          hoveredimage={img7}
          overlayImage={img8}
          title="Classic Events"
          para="Single Athlete -"
          spanHead="100m race"
          subTitle="School Events"
          description="Leverage the potential of automation and scalability with Creative Squad, the premier digital marketing agency in Canada. Enhance your brand's online impact through our wide-ranging services."
          link="/ecommerce-development-service-in-canada/"
        />
      </div>
    </Container>
  </div>
);

const ServiceItem = ({ image, title, description, navlink, hoveredimage, para, spanHead, subTitle, overlayImage }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="col-lg-4 px-xl-2 Toggle-Cards">
      <div>

        <div onMouseLeave={handleMouseLeave} className="boxes" style={{ background: "url('/images/creatives/events-demo.jpg') center center / cover no-repeat" }}>
          <div className="overlay"></div>
          <div className="centered-image">
            <img src={img8} alt="Center Image" className="team-icon" />
          </div>

          {!isHovering && (
            <div className="d-flex justify-content-start  pt-5  mb-5 pb-3 ">
              <div className="px-3 mx-4 m-2">
              </div>
            </div>
          )}
          {isHovering && (
            <div className="d-flex justify-content-start  pt-5 overlay-services  mb-3 pb-3 ">
              <div>
                <div className=" d-flex justify-content-start px-3 mx-4 m-2 ">
                  <h2
                    style={{ color: "black" }}
                    className="ServicesTitle text-center"
                  >
                    {title}
                  </h2>
                </div>
                <p className="para_main text-center">{para}</p>
                <p className="spanHead">{spanHead}</p>
                <p className="para_main text-center">{subTitle}</p>
              </div>
            </div>
          )}
          {isHovering && (
            <div className="hoveredbox ">

              <ul>

                {/* {navlink.map((e) => (
                  <li>
                    <Link
                      to={e.path}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {e.title}
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </li>
                ))} */}
              </ul>
            </div>
          )}

          {!isHovering && (

            <div className="originalbox ">

              {/* <h2 className="ServicesTitle px-3 mx-4 text-start"> {title} </h2> */}
              <div className="text-start mx-3 pe-2 mt-4 pt-1">

                {/* <p className="ServicesPara "> {description} </p> */}
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="ServicesBtn "
                >
                  <img className="d-none d-lg-block arrow-icon" src={img4} alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ToggleCards;
