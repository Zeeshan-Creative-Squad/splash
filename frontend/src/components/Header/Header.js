import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import $ from "jquery";

const Header = ({ contact, landingPage = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDropdownHome, setShowDropdownHome] = useState(false);
  const [showDropdownMembers, setShowDropdownMembers] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownLearn, setShowDropdownLearn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const clickCountRef = useRef(0);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsExpanded(prevState => !prevState);
  };

  const handleNavigation = (path) => {
    setIsExpanded(false);
    navigate(path);
  };

  const handleClickPrograms = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 991) {
      clickCountRef.current++;
      if (clickCountRef.current === 1) {
        setActiveDropdown('programs');
      } else if (clickCountRef.current === 2) {
        handleNavigation('/programs');
        clickCountRef.current = 0;
      }
    } else {
      handleNavigation('/programs');
    }
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    handleNavigation('/');
  };

  const handleClickLearn = () => {
    setActiveDropdown(activeDropdown === 'learn' ? null : 'learn'); // Toggle learn dropdown
  };

  useEffect(() => {
    // Scroll effect for header
    $(window).scroll(() => {
      if ($(document).scrollTop() > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    // Handle active state of navbar links
    $(function () {
      $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
        setActiveDropdown(null); // Close dropdowns when a link is clicked
      });
    });
  }, []);

  // Determine active section based on the exact pathname
  const isActive = (path) => {
    return window.location.pathname === path ? 'active' : '';
  };

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`header ${isScrolled && isHovered
        ? ""
        : isScrolled
          ? " scroll-hovered"
          : isHovered
            ? ""
            : ""
        }`}
    >
      <div className="container">
        <div className="top-nav-image d-lg-block d-none">
          <img src="/images/icons/Splash-Logo.svg" alt="Quest Sports" className="img-fluid top-logo" />
        </div>

        <nav className="navbar navbar-expand-lg">
          <Link
            to={landingPage ? "/become-an-olympian" : "/"}
            className="navbar-brand d-lg-none d-md-block"
          >
            <img src="/images/icons/Splash-Logo.svg" alt="Quest Sports" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: isScrolled
                  ? `url('/images/icons/hamburger.svg')`
                  : `url('/images/icons/hamburger.svg')`,
              }}
            ></span>
          </button>
          <div className={`d-flex collapse navbar-collapse ${isExpanded ? 'show' : 'justify-content-around'}`}>
            <div className={`menu-container ${isExpanded ? 'expanded' : ''}`}>
              <ul className="navbar-nav">
                {/* Home Link */}
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link ${isActive('/')}`}
                        onClick={handleClickHome}
                      >
                        Home
                      </Link>
                    </Fragment>
                  )}
                </li>

                {/* About Link */}
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link ${isActive('/about')}`}
                        to="/about"
                        onClick={() => setIsExpanded(false)}
                      >
                        About
                      </Link>
                    </Fragment>
                  )}
                </li>

                {/* Events Dropdown */}
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link dropdown-toggle ${isActive('/our-events')}`}
                        onMouseEnter={() => setActiveDropdown('events')}
                        to="/our-events"
                        onClick={() => setIsExpanded(false)}
                      >
                        Events
                      </Link>
                      {activeDropdown === 'events' && (
                        <div
                          className="dropdown-menu-programs show"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <Link
                            onClick={() => handleNavigation('#')}
                            className={`dropdown-item ${isActive('/event-1')}`}
                          >
                            Event 1
                          </Link>
                          <Link
                            onClick={() => handleNavigation('/speed-training-program')}
                            className={`dropdown-item ${isActive('/speed-training-program')}`}
                          >
                            Event 2
                          </Link>
                          <Link
                            onClick={() => handleNavigation('/strength-conditioning-gym')}
                            className={`dropdown-item ${isActive('/strength-conditioning-gym')}`}
                          >
                            Event 3
                          </Link>
                          <Link
                            onClick={() => handleNavigation('/application-for-registration')}
                            className={`dropdown-item ${isActive('/application-for-registration')}`}
                          >
                            Event 4
                          </Link>
                        </div>
                      )}
                    </Fragment>
                  )}
                </li>

                {/* Blog Link */}
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link ${isActive('/blogs')}`}
                        to="/blogs"
                        onClick={() => setIsExpanded(false)}
                      >
                        Blog
                      </Link>
                    </Fragment>
                  )}
                </li>

                {/* Contact Us */}
                <li className="nav-item">
                  {!landingPage && (
                    <Link
                      onClick={() => setIsExpanded(false)}
                      to="/contact"
                      className={`nav-link ${isActive('/contact')}`}
                    >
                      Contact Us
                    </Link>
                  )}
                </li>
                <div className={`navbar-actions d-lg-none`}>
                </div>
              </ul>
            </div>
            {isExpanded && (
              <button
                className="close-button"
                onClick={() => setIsExpanded(false)}
              >
                <img src="/images/icons/close.svg" className="img-fluid" />
              </button>
            )}
          </div>
          <div className={`navbar-actions d-none d-lg-block`}>
            {/* {landingPage ? (
              <button className={`skew-btn ul-btn`}>
                <a href="tel: +1-647-557-9880">Inquire Now</a>
              </button>
            ) : (
              <button onClick={EnquerySlide} className={`skew-btn ul-btn`}>
                Inquire Now
              </button>
            )} */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 