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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const clickCountRef = useRef(0);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const ClickPrograms = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 991) {
      clickCountRef.current++;
      if (clickCountRef.current === 1) {
        setShowDropdown(true);
        setShowDropdownLearn(false);
      } else if (clickCountRef.current === 2) {
        navigate("/programs");
        setIsExpanded(false);
        clickCountRef.current = 0;
      }
    } else {
      navigate("/programs");
    }
  };

  const onClickHome = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 991) {
      clickCountRef.current++;
      if (clickCountRef.current === 1) {
        setShowDropdownHome(true);
      } else if (clickCountRef.current === 2) {
        navigate("/home");
        setIsExpanded(false);
        clickCountRef.current = 0;
      }
    } else {
      navigate("/home");
    }
  };

  const EnquerySlide = (e) => {
    e.preventDefault();

    setIsExpanded(false);
    if (contact) {
      document.querySelector("#get_in_touch").scrollIntoView({
        behavior: "smooth",
      });
      return;
    }
    document.querySelector("#contact-form").scrollIntoView({
      behavior: "smooth",
    });
  };

  const ClickLearn = () => {
    setShowDropdownLearn((prevState) => !prevState);
    setShowDropdown(false);
  };

  const MouseEnterLearn = () => {
    if (window.innerWidth <= 991) return;

    setShowDropdownLearn(true);
    setShowDropdown(false);
  };

  useEffect(() => {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  $(function () {
    $(".navbar-nav .nav-link").on("click", function () {
      $(".navbar-nav .nav-link").removeClass("active");
      $(this).addClass("active");
      setShowDropdown(false);
    });
  });

  $(document).ready(function () {
    $(".nav-item.dropdown").hover(
      function () {
        $(this)
          .find(".dropdown-menu-programs")
          .stop(true, true)
          .delay(200)
          .fadeIn(0);
      },
      function () {
        if ($(this).find(".dropdown-menu-programs").is(":visible")) {
          $(this)
            .find(".dropdown-menu-programs")
            .stop(true, true)
            .delay(200)
            .fadeOut(200);
        }
      }
    );

    $(document).on("mousemove", function (e) {
      if ($(window).width() > 991) {
        var container = $(".nav-item.dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container
            .find(".dropdown-menu-programs")
            .stop(true, true)
            .delay(200)
            .fadeOut(200);
        }
      }
    });
  });

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`header fixed-top ${isScrolled && isHovered
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
          <img src="/images/icons/questSports.svg" alt="Quest Sports" className="img-fluid top-logo" />
        </div>

        <nav className="navbar navbar-expand-lg">
          <Link
            to={landingPage ? "/become-an-olympian" : "/home"}
            className="navbar-brand d-lg-none d-md-block"
          >
            <img src="/images/questSports.svg" alt="Quest Sports" />
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
                  ? `url('/images/icons/nav-hamburger.svg')`
                  : `url('/images/icons/nav-hamburger.svg')`,
              }}
            ></span>
          </button>
          <div
            className={`d-flex collapse navbar-collapse ${isExpanded ? "show" : "justify-content-around"
              } `}
          >
            <div className={`menu-container ${isExpanded ? "expanded" : ""}`}>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link dropdown-toggle ${window.location.href.includes("/home") ||
                          window.location.href.includes("/about")
                          ? "active"
                          : ""
                          }`}
                        onClick={onClickHome}
                        onMouseEnter={() => {
                          if (window.innerWidth <= 991) {
                            return;
                          }
                          setShowDropdownHome(true);
                        }}
                      >
                        HOME
                      </Link>
                      {showDropdownHome && (
                        <div
                          className={
                            "dropdown-menu-programs" +
                            (showDropdownHome ? " show" : "")
                          }
                          onMouseLeave={() => {
                            if (window.innerWidth <= 991) {
                              return;
                            }
                            setShowDropdownHome(false);
                          }}
                        >
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdownHome(false);
                            }}
                            to="/about"
                            className={`dropdown-item ${window.location.href.includes("/about")
                              ? "active"
                              : ""
                              }`}
                          >
                            ABOUT
                          </Link>
                        </div>
                      )}
                    </Fragment>
                  )}
                </li>
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link dropdown-toggle ${window.location.href.includes("/track-field-club") ||
                          window.location.href.includes(
                            "/speed-training-program"
                          ) ||
                          window.location.href.includes(
                            "/strength-conditioning-gym"
                          ) ||
                          window.location.href.includes(
                            "/application-for-registration"
                          ) ||
                          window.location.href.includes("/schedule") ||
                          window.location.href.includes("/programs") ||
                          window.location.href.includes("/programs")
                          ? "active"
                          : ""
                          }`}
                        onClick={ClickPrograms}
                        onMouseEnter={() => {
                          if (window.innerWidth <= 991) {
                            return;
                          }
                          setShowDropdown(true);
                          setShowDropdownLearn(false);
                        }}
                      >
                        PROGRAMS
                      </Link>
                      {showDropdown && (
                        <div
                          className={
                            "dropdown-menu-programs" +
                            (showDropdown ? " show" : "")
                          }
                          onMouseLeave={() => {
                            if (window.innerWidth <= 991) {
                              return;
                            }
                            setShowDropdown(false);
                          }}
                        >
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdown(false);
                            }}
                            to="/track-field-club"
                            className={`dropdown-item ${window.location.href.includes("/track-field-club")
                              ? "active"
                              : ""
                              }`}
                          >
                            TRACK & FIELD
                          </Link>
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdown(false);
                            }}
                            to="/speed-training-program"
                            className={`dropdown-item ${window.location.href.includes(
                              "/speed-training-program"
                            )
                              ? "active"
                              : ""
                              }`}
                          >
                            SPEED TRAINING
                          </Link>
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdown(false);
                            }}
                            to="/strength-conditioning-gym"
                            className={`dropdown-item ${window.location.href.includes(
                              "/strength-conditioning-gym"
                            )
                              ? "active"
                              : ""
                              }`}
                          >
                            STRENGTH & CONDITIONING
                          </Link>
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdown(false);
                            }}
                            to="/application-for-registration"
                            className={`dropdown-item ${window.location.href.includes(
                              "/application-for-registration"
                            )
                              ? "active"
                              : ""
                              }`}
                          >
                            APPLY HERE
                          </Link>
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdown(false);
                            }}
                            to="/schedule"
                            className={`dropdown-item ${window.location.href.includes("/schedule")
                              ? "active"
                              : ""
                              }`}
                          >
                            SCHEDULE
                          </Link>
                        </div>
                      )}
                    </Fragment>
                  )}
                </li>
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <Link
                        className={`nav-link dropdown-toggle ${window.location.href.includes("/news") ||
                          window.location.href.includes("/blogs")
                          ? "active"
                          : ""
                          }`}
                        onClick={ClickLearn}
                        onMouseEnter={MouseEnterLearn}
                      >
                        LEARN
                      </Link>
                      {showDropdownLearn == true && (
                        <div
                          className={
                            "dropdown-menu-programs" +
                            (showDropdownLearn ? " show" : "")
                          }
                          onMouseLeave={() => {
                            if (window.innerWidth <= 991) {
                              return;
                            }
                            setShowDropdownLearn(false);
                          }}
                        >
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdownLearn(false);
                            }}
                            to="/news"
                            className={`dropdown-item ${window.location.href.includes("/news")
                              ? "active"
                              : ""
                              }`}
                          >
                            NEWS
                          </Link>
                          <Link
                            onClick={() => {
                              setIsExpanded(false);
                              setShowDropdownLearn(false);
                            }}
                            to="/blogs"
                            className={`dropdown-item ${window.location.href.includes("blogs")
                              ? "active"
                              : ""
                              }`}
                          >
                            BLOGS
                          </Link>
                        </div>
                      )}
                    </Fragment>
                  )}
                </li>
                <li className="nav-item">
                  {!landingPage && (
                    <Link
                      onClick={() => setIsExpanded(false)}
                      to="/contact-us"
                      className={`nav-link ${window.location.href.includes("/contact-us")
                        ? "active"
                        : ""
                        }`}
                    >
                      CONTACT
                    </Link>
                  )}
                </li>
                <li className="nav-item dropdown">
                  {!landingPage && (
                    <Fragment>
                      <a
                        onMouseEnter={() => {
                          if (window.innerWidth <= 991) {
                            return;
                          }
                          setShowDropdownMembers(true);
                        }}
                        className={`nav-link dropdown-toggle`}
                        href="https://app.360player.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MEMBERS LOGIN
                      </a>

                      {showDropdownMembers && (
                        <div
                          className={
                            "dropdown-menu-programs" +
                            (showDropdownMembers ? " show" : "")
                          }
                          onMouseLeave={() => {
                            if (window.innerWidth <= 991) {
                              return;
                            }
                            setShowDropdownMembers(false);
                          }}
                        >
                          <a
                            className="nav-link dropdown-item"
                            href="https://app.360player.com/join/TKTTG4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            JOIN COMMUNITY
                          </a>
                        </div>
                      )}
                    </Fragment>
                  )}
                </li>
                <div className={`navbar-actions d-lg-none`}>
                  {/* {landingPage ? (
                    <button className={`skew-btn ul-btn`}>
                      <a href="tel: +1-647-557-9880">Inquire Now</a>
                    </button>
                  ) : (
                    <button
                      onClick={EnquerySlide}
                      className={`skew-btn ul-btn`}
                    >
                      Inquire Now
                    </button>
                  )} */}
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