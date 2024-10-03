import React from "react";
import "./footerHero.css";
import { Link } from "react-router-dom";
const footerHero = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="upper-section">
          <div className="footer-sect">
            <ul className="ul-segment">
              <h2 className="head-h3">QuickLinks</h2>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/barber-razors"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/news"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-second-section">
            <ul className="ul-segment-second">
              <h2 className="head-h3">Legal</h2>
              <li>
                <a href="#">Terms of use </a>
              </li>
              <li>
                <a href="#">License agreement</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-second-section">
            <ul className="ul-segment-second">
              <h2 className="head-h3">Legal</h2>
              <li>
                <a href="#">Terms of use </a>
              </li>
              <li>
                <a href="#">License agreement</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section-right">
            <h2 className="head-h3">Contact Us</h2>
            <p className="specific-paragraph">
              <img
                src="/images/icons/location-icon.svg"
                alt="Envelope"
                className="contact-icon"
              />
              <a href="mailto:sales@hbcarecanada.com" className="contact-link">
                sales@hbcarecanada.com
              </a>
            </p>
            <p className="specific-paragraph">
              <img
                src="/images/icons/location-icon.svg"
                alt="Phone"
                className="contact-icon"
              />
              <a href="tel:+16478366940, +12892755050" className="contact-link">
                647-836-6940, 289-275-5050
              </a>
            </p>
            <p className="specific-paragraph">
              <img
                src="/images/icons/location-icon.svg"
                alt="Map Marker"
                className="contact-icon"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=50+Steeles+Ave+E,+Unit+218,+Milton,+ON+L9T+4W9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                50 Steeles Ave E, Unit 218,
                <br /> Milton ON L9T 4W9
              </a>
            </p>
          </div>

          <div className="footer-section">

            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna
              porttitor neque elementum cursus. Bibendum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.{" "}
            </p>

            <div className="social-icons">
              <img
                src="/images/icons/Facebook-icon.svg"
                alt="Facebook"
                className="logo-left"
              />
              <img
                src="/images/icons/Instagram-icon.svg"
                alt="Facebook"
                className="logo-left"
              />
              <img
                src="/images/icons/twitter-icon.svg"
                alt="Facebook"
                className="logo-left"
              />
              <img
                src="/images/icons/Linkedln-icon.svg"
                alt="Facebook"
                className="logo-left"
              />
            </div>
          </div>
        </div>

        <div className="blog-subfooter justify-content-center text-center">
          <img src="/images/creatives/logo.png" alt="logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default footerHero;
