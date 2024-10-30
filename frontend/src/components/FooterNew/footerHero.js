import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./footerHero.css";

import { Spinner } from "react-bootstrap";
import axios from "axios";

const FooterHero = () => {
  const [email, setEmail] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/send-newsletter", {
        email: email,
        formType: "Newsletter",
      })
      .then((response) => {
        if (response.data.msg === "success") {
          setError(false);
          setSuccess("Newsletter Subscribed Successfully!");
          setLoading(false);
          setEmail("");
        } else if (response.data.msg === "fail") {
          setSuccess(false);
          setError("Email failed to send, try again by reloading the page.");
          setLoading(false);
          setEmail("");
        }
      });
  };

  const newsletterSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/send-newsletter", {
        email: newsletterEmail,
        formType: "Newsletter",
      })
      .then((response) => {
        if (response.data.msg === "success") {
          setError(false);
          setSuccess("Newsletter Subscribed Successfully!");
          setLoading(false);
          setNewsletterEmail("");
        } else if (response.data.msg === "fail") {
          setSuccess(false);
          setError("Email failed to send, try again by reloading the page.");
          setLoading(false);
          setNewsletterEmail("");
        }
      });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className='NewsLetter-container-footer standard-padding-space'>
          <div className="form-container m-auto px-2">
            <div className="text-container text-center">
              <h3 className="head-h1">SUBSCRIBER OUR NEWSLETTER</h3>
              {/* <p className='body-paragraph mt-2'>Join our mailing list for exclusive updates, home staging tips, and special offers from ETB-Home Staging.</p> */}
            </div>
            <form className='inp-container d-md-flex d-none align-items-center justify-content-between' onSubmit={newsletterSubmitHandler}>
              <input
                required
                type="email"
                value={newsletterEmail}
                maxLength="56"
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder='Enter Your Email'
              />
              <button className='genral-btn' type="submit">SUBSCRIBE
                {loading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    style={{ color: "white", width: "15px", height: "15px", marginLeft: "10px" }}
                  />
                ) : (
                  success ? (
                    <div>
                      {setLoading(false)}
                      {alert(success)}
                      {setSuccess(false)}
                    </div>
                  ) : (
                    error && (
                      <div>
                        {setLoading(false)}
                        {alert(error)}
                        {setError(false)}
                      </div>
                    )
                  )
                )}
              </button>
            </form>
            <form className='d-md-none d-flex flex-column align-items-center justify-content-between' onSubmit={newsletterSubmitHandler}>
              <input
                required
                type="email"
                value={newsletterEmail}
                maxLength="56"
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder='Enter Your Email'
                className='inp-container px-3 py-2'
              />
              <button className='genral-btn mt-3' type="submit">Subscribe
                {loading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    style={{ color: "white", width: "15px", height: "15px", marginLeft: "10px" }}
                  />
                ) : (
                  success ? (
                    <div>
                      {setLoading(false)}
                      {alert(success)}
                      {setSuccess(false)}
                    </div>
                  ) : (
                    error && (
                      <div>
                        {setLoading(false)}
                        {alert(error)}
                        {setError(false)}
                      </div>
                    )
                  )
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="upper-section">
          <div className="footer-sect">
            <ul className="ul-segment">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/our-events"}>Events</Link>
              </li>
            </ul>
          </div>
          <div className="footer-second-section">
            <ul className="ul-segment-second">
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
            </ul>
          </div>
          <div className="footer-second-section">
            <ul className="ul-segment-second">
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Cookies policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-section-right">
            <p className="specific-paragraph">
              <img
                src="/images/icons/5.svg"
                alt="Envelope"
                className="contact-icon"
              />
              <a href="mailto:sales@hbcarecanada.com" className="contact-link">
                123-456-7890
              </a>
            </p>
            <p className="specific-paragraph">
              <img
                src="/images/icons/6.svg"
                alt="Phone"
                className="contact-icon"
              />
              <a href="tel:+16478366940, +12892755050" className="contact-link">
                hello@splashsportsagency.ca
              </a>
            </p>
            <p className="specific-paragraph">
              <img
                src="/images/icons/7.svg"
                alt="Map Marker"
                className="contact-icon"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=50+Steeles+Ave+E,+Unit+218,+Milton,+ON+L9T+4W9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                4961 Pine Tree Lane, Maryland.
              </a>
            </p>
          </div>
          <div className="footer-section">
            <p className="footer-text">
              Convallis vivamus at cras porta nibh velit aliquam eget
            </p>
            <div className="social-icons">
              <img
                src="/images/icons/Twitter-icon.svg"
                alt="Twitter"
                className="logo-left"
              />
              <img
                src="/images/icons/2.svg"
                alt="Facebook"
                className="logo-left"
              />
              <img
                src="/images/icons/3.svg"
                alt="Instagram"
                className="logo-left"
              />
              <img
                src="/images/icons/4.svg"
                alt="LinkedIn"
                className="logo-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="blog-subfooter justify-content-center text-center w-100">
        <img src="/images/icons/footer-logo.svg" alt="logo" className="footer-logo" />
        <div className="footer-content text-center">
          <p className="p-text text-center">
            © 2024 Splash Sports | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterHero;