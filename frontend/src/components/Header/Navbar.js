import React from "react";
import { Links1, Links2, Links3 } from "../Navigationlinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarCS.css";
import "./Mobilenav.css";
import Mobilenav from "./Mobilenav";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { Col, Container, Row } from "react-bootstrap";


const Navbar = ({ noLinearBackground, landingPage = false, noLinearBackgroundVideo }) => {
  const [menuState, setMenuState] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const [isNotesSubMenuOpen, setIsNotesSubMenuOpen] = useState(false);
  const [isDropdownOpenSubServices, setIsDropdownOpenSubServices] = useState(false);
  const [isDropdownOpenZakatServices, setIsDropdownOpenZakatServices] = useState(false);
  const [isDropdownOpenNafilServices, setIsDropdownOpenNafilServices] = useState(false);
  const [isDropdownOpenFitrahServices, setIsDropdownOpenFitrahServices] = useState(false);
  const [isDropdownOpenMore, setIsDropdownOpenMore] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navitate = useNavigate();
  const [selected5, setSelected5] = useState(false);
  const [style, setStyle] = useState({ display: "none" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginpressed, setLoginpressed] = useState(false);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    if (item === 'notes') {
      setIsDropdownOpenDesk(true);
      setIsNotesSubMenuOpen(true); // Open submenu under 'Notes'
    } else {
      setIsDropdownOpenDesk(false);
      setIsNotesSubMenuOpen(false); // Close submenu under 'Notes'
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setIsDropdownOpenDesk(false);
    setIsNotesSubMenuOpen(false); // Close submenu under 'Notes'
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();
  const dropdownRef = useRef();
  const dropdownSubServices = useRef();
  const dropdownMore = useRef();

  const hamburgerdropdown = (state) => {
    setSelected5(!state);
  };

  const mouseEnterHandler = () => {
    setStyle({ display: "block" });
  };
  const mouseLeaveHandler = () => {
    setStyle({ display: "none" });
  };


  const handleMenuItemClick = () => {
    setIsDropdownOpenDesk(false);
    setIsNotesSubMenuOpen(false);
    setIsDropdownOpenZakatServices(false);
    setIsDropdownOpenSubServices(false);
  };

 
   
  

  const services = [
    { name: "O Level ", link: "/notes/o-level" },
    { name: "AS Level", link: "/notes/as-level" },
    { name: "A2 Level", link: "/notes/a-level" },

  ];

  const topicals = [
    { name: "O Level ", link: "/topical-past-papers/o-level" },
    { name: "AS Level", link: "/topical-past-papers/as-level" },
    { name: "A2 Level", link: "/topical-past-papers/a-level" },
  ];

  const mores = [
    { name: "Insights ", link: "/news" },
    { name: "Contact", link: "/contact" },

  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isDropdownOpenDesk) {
        setIsDropdownOpenDesk(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpenDesk]);

  const menuClick = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <>
      <>
        <header
          style={{
            position: noLinearBackground && "absolute",
            zIndex: !noLinearBackground && 99,
            backgroundImage:
              noLinearBackgroundVideo || noLinearBackground
                ? "none"
                : "linear-gradient(to right, #1b1b1b , rgb(69, 69, 69))",
          }}
          className={styles.desktopHeader}
        >
          <Container>
            <div className={styles.nav}>
              <h1 onMouseEnter={mouseLeaveHandler}>
                <Link to="/">
                  <img
                    src="/images/icons/ETB-Logo.png"
                    className={styles.logo}
                    alt="moosa-khan-logo"
                  />
                </Link>
              </h1>
              <div className={!landingPage ? styles.navList : 'd-none'}>
                {/* <NavLink

                  to="/portal"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                >
                  Services
                </NavLink> */}
                {/* <NavLink

                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                >
                  Blogs
                </NavLink> */}

                <div className="navigation-dropdown">
                  <div className="dropdown-trigger d-flex align-items-center"
                    onMouseEnter={() => handleMouseEnter('notes')}
                    onMouseLeave={handleMouseLeave}>
                   <Link to="/"><span className="nav-links font-play">HOME</span></Link> 
                  </div>
                  <div className={`dropdown-content ${isDropdownOpenDesk ? 'd-none' : 'd-none'}`}
                    onMouseEnter={() => handleMouseEnter('notes')}
                    onMouseLeave={handleMouseLeave}>
                    <div className="d-flex align-item-center gap-1 flex-column">
                      

                      {/* <div className="navigation-dropdown">
        <div className="dropdown-trigger d-flex align-items-center"
          onMouseEnter={() => { setIsDropdownOpenZakatServices(true) }}
        >
          <span className="nav-links font-play" style={{ padding: "12px 16px"}}>Zakat </span>
        </div>
        <div className={`dropdown-content ${isDropdownOpenZakatServices ? 'open' : 'd-none'}`}
          onMouseEnter={() => { setIsDropdownOpenZakatServices(true) }}
          onMouseLeave={() => { setIsDropdownOpenZakatServices(false) }}
          style={{ left: "170px", top: "0px" }}
        >
          <div className="d-flex align-item-center gap-5">
            <div>
              {['medical', 'utilities', 'grocery', 'education-fees', 'wedding', 'business'].map((item) => (
                <Link
                  to={`/${item}`}
                  className="nav-links font-play dropdown-item text-start"
                  onClick={handleMenuItemClick}
                  onMouseEnter={() => setIsDropdownOpenZakatServices(true)}
                  key={item}
                >
                  <p className="itemsof-dropdown mb-0">{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div> */}


<div className="navigation-dropdown">
  <div className="dropdown-trigger d-flex align-items-center"
    onMouseEnter={() => {setIsDropdownOpenNafilServices(false); setIsDropdownOpenZakatServices(true);
      setIsDropdownOpenNafilServices(false);
      setIsDropdownOpenSubServices(false);
      setIsDropdownOpenFitrahServices(false)
      
    }}
  >
   <Link to="/zakat"><span className="nav-links font-play" style={{ padding: "12px 16px", textDecoration: "none", paddingLeft: "0px" }}
    onClick={handleMenuItemClick}>Zakat</span></Link> 
  </div>
  <div className={`dropdown-content ${isDropdownOpenZakatServices ? 'open' : 'd-none'}`}
    onMouseEnter={() => setIsDropdownOpenZakatServices(true)}
    onMouseLeave={() => setIsDropdownOpenZakatServices(false)}
    style={{ left: "120px", top: "0px" }}
  >
    <div className="d-flex align-items-center gap-5">
      <div>
        {['medical', 'utilities', 'grocery', 'education-fees', 'wedding', 'global-relief'].map((item) => (
          <Link
            to={`/${item}`}
            className="nav-links font-play dropdown-item text-start"
            onClick={handleMenuItemClick}
            onMouseEnter={() => setIsDropdownOpenZakatServices(true)}
            key={item}
          >
            <p className="itemsof-dropdown mb-0">{item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>


<div className="navigation-dropdown">
  <div className="dropdown-trigger d-flex align-items-center"
    onMouseEnter={() => {setIsDropdownOpenNafilServices(false); setIsDropdownOpenZakatServices(false); 
      setIsDropdownOpenSubServices(false);
      setIsDropdownOpenFitrahServices(true)
      
    }}
  >
    <Link to="/fitrah"><span className="nav-links font-play" style={{ padding: "12px 16px", textDecoration: "none", paddingLeft: "0px" }}
    onClick={handleMenuItemClick}>Fitrah</span></Link> 
  </div>
  <div className={`dropdown-content ${isDropdownOpenFitrahServices ? 'open' : 'd-none'}`}
    onMouseEnter={() => setIsDropdownOpenFitrahServices(true)}
    onMouseLeave={() => setIsDropdownOpenFitrahServices(false)}
    style={{ left: "120px", top: "0px" }}
  >
    <div className="d-flex align-items-center gap-5">
      <div>
        {['medical', 'utilities', 'grocery', 'education-fees', 'wedding', 'global-relief'].map((item) => (
          <Link
            to={`/${item}`}
            className="nav-links font-play dropdown-item text-start"
            onClick={handleMenuItemClick}
            onMouseEnter={() => setIsDropdownOpenFitrahServices(true)}
            key={item}
          >
            <p className="itemsof-dropdown mb-0">{item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>


<div className="navigation-dropdown">
  <div className="dropdown-trigger d-flex align-items-center"
    onMouseEnter={() => {setIsDropdownOpenNafilServices(true); setIsDropdownOpenZakatServices(false); 
      setIsDropdownOpenSubServices(false);
      setIsDropdownOpenFitrahServices(false)
      
    }}
  >
    <Link to="/nafil"><span className="nav-links font-play" style={{ padding: "12px 16px", textDecoration: "none", paddingLeft: "0px" }}
    onClick={handleMenuItemClick}>Nafil</span></Link> 
  </div>
  <div className={`dropdown-content ${isDropdownOpenNafilServices ? 'open' : 'd-none'}`}
    onMouseEnter={() => setIsDropdownOpenNafilServices(true)}
    onMouseLeave={() => setIsDropdownOpenNafilServices(false)}
    style={{ left: "170px", top: "0px" }}
  >
    <div className="d-flex align-items-center gap-5">
      <div>
        {['Sadaqa', 'Rashan', 'Medical', 'Education', 'Utilities', 'Global Relief', 'construction-of-mosque', 'Qurbani', 'Box', 'Mehfil', 'Sadat', 'trust-expenses', 'Others'].map((item) => (
          <Link
            to={`/${item}`}
            className="nav-links font-play dropdown-item text-start"
            onClick={handleMenuItemClick}
            onMouseEnter={() => setIsDropdownOpenNafilServices(true)}
            key={item}
          >
            <p className="itemsof-dropdown mb-0">{item.charAt(0).toUpperCase() + item.slice(1)}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

                        {['hajj', 'qurbani', 'education', 'global-relief', 'construction-of-mosque', 'mehfil'].map((item) => (
                          <Link
                            to={`/${item}`}
                            className="nav-links font-play dropdown-item text-start"
                            onClick={handleMenuItemClick}
                            onMouseEnter={() => 
                            {setIsDropdownOpenSubServices(false)
                            setIsDropdownOpenZakatServices(false)
                            setIsDropdownOpenNafilServices(false)
                            setIsDropdownOpenFitrahServices(false)}}
                            key={item}
                          >
                            <p className="itemsof-dropdown mb-0">{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                          </Link>
                        ))}





     

      {/* Khidmat-e-Khalq Dropdown */}
      <div className="navigation-dropdown">
        <div className="dropdown-trigger d-flex align-items-center"
          onMouseEnter={() => {setIsDropdownOpenNafilServices(false); setIsDropdownOpenZakatServices(false); setIsDropdownOpenNafilServices(false);
            setIsDropdownOpenSubServices(true);
            setIsDropdownOpenFitrahServices(false)
            
          }}
        >
          <span className="nav-links font-play" style={{ padding: "12px 16px" }}>Khidmat-e-Khalq </span>
        </div>
        <div className={`dropdown-content ${isDropdownOpenSubServices ? 'open' : 'd-none'}`}
          onMouseEnter={() => { setIsDropdownOpenSubServices(true) }}
          onMouseLeave={() => { setIsDropdownOpenSubServices(false) }}
          style={{ left: "170px", top: "0px" }}
        >
          <div className="d-flex align-item-center gap-5">
            <div>
              {['medical', 'utilities', 'grocery', 'education-fees', 'wedding', 'business'].map((item) => (
                <Link
                  to={`/${item}`}
                  className="nav-links font-play dropdown-item text-start"
                  onClick={handleMenuItemClick}
                  onMouseEnter={() => setIsDropdownOpenSubServices(true)}
                  key={item}
                >
                  <p className="itemsof-dropdown mb-0">{item.charAt(0).toUpperCase() + item.slice(1)}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
                        <Link
                          to='/sadaqa'
                          className="nav-links font-play dropdown-item text-start"
                          // onClick={() => setIsNotesSubMenuOpen(false)} 
                          onClick={handleMenuItemClick}
                          onMouseEnter={() => { setIsDropdownOpenSubServices(false) }}
                        >
                          <p className="itemsof-dropdown mb-0">Sadaqa</p>
                        </Link>

                        <Link
                          to='/cos'
                          className="nav-links font-play dropdown-item text-start"
                          // onClick={() => setIsNotesSubMenuOpen(false)} 
                          onClick={handleMenuItemClick}
                          onMouseEnter={() => { setIsDropdownOpenSubServices(false) }}
                        >
                          <p className="itemsof-dropdown mb-0">COS</p>
                        </Link>


                      
                    </div>
                  </div>
                </div>


                {/* <div className="navigation-dropdown">
                  <div className="dropdown-trigger d-flex align-items-center"
                    onMouseEnter={() => handleMouseEnter('topicals')}
                    onMouseLeave={handleMouseLeave}>
                    <span className="nav-links font-play">Topical Past Papers</span>
                  </div>
                  <div className={`dropdown-topical-content ${hoveredItem === 'topicals' ? 'open' : 'd-none'}`}
                    onMouseEnter={() => handleMouseEnter('topicals')}
                    onMouseLeave={handleMouseLeave}>
                    <div className="d-flex align-item-center gap-5">
                      <div>
                        {topicals.map((topical, index) => (
                          <div key={index}>
                            <Link
                              to={topical.link}
                              className="nav-links font-play dropdown-item text-start"
                              onClick={() => setHoveredItem(null)}
                            >
                              <p className="itemsof-dropdown mb-0">{topical.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/about"
                >
                  ABOUT
                </NavLink>

                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/services"
                >
                  SERVICES
                </NavLink>

                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/blogs"
                >
                  BLOGS
                </NavLink>

                
                <NavLink
                  onMouseEnter={mouseLeaveHandler}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLink} ${styles.link}`
                      : styles.link
                  }
                  to="/contact"
                >
                  CONTACT US
                </NavLink>
                {/* <div className="navigation-dropdown">
                  <div className="dropdown-trigger d-flex align-items-center"
                    onMouseEnter={() => handleMouseEnter('more')}
                    onMouseLeave={handleMouseLeave}>
                    <span className="nav-links font-play">More</span>
                  </div>
                  <div className={`dropdown-topical-content ${hoveredItem === 'more' ? 'open' : 'd-none'}`}
                    onMouseEnter={() => handleMouseEnter('more')}
                    onMouseLeave={handleMouseLeave}>
                    <div className="d-flex align-item-center gap-5">
                      <div>
                        {mores.map((more, index) => (
                          <div key={index}>
                            <Link
                              to={more.link}
                              className="nav-links font-play dropdown-item text-start"
                              onClick={() => setHoveredItem(null)}
                            >
                              <p className="itemsof-dropdown mb-0">{more.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>

                    </div>


                  </div>
                </div> */}
              </div>
              <div className={styles.buttonCont}>

                {/* <img onClick={() => {
                  setLoginpressed(false);
                  openModal()
                }}
                  style={{ cursor: "pointer" }}
                  src="/images/icons/header-signup-icon.svg" alt="icon" />

                <img onClick={() => {
                  setLoginpressed(true);
                  openModal()
                }}
                  style={{ cursor: "pointer" }}
                  src="/images/icons/header-login-icon.svg" alt="icon" />
                {landingPage &&
                  <a onMouseEnter={mouseLeaveHandler}>
                    <button className={styles.button1}>Chat With Us</button>
                  </a> */}
                
                {/* onClick={() => {
                    setLoginpressed(false);
                    openModal(); */}
                <Link onMouseEnter={mouseLeaveHandler} to="/contact">
                  <button className="connect-button">GET CONSULTATION</button>
                </Link>
                {/* <Modal status={isModalOpen} closeModal={closeModal}> {loginpressed ? <LoginSignup /> : <Signup />} </Modal> */}
              </div>
            </div>
          </Container>
        </header>
      </>

      <div className={styles.mobileHeader}>
        <header
          style={{
            width: "100%",
            position: noLinearBackground && "absolute",
            zIndex: 99,
            backgroundImage:
              noLinearBackground || noLinearBackgroundVideo
                ? "none"
                : "linear-gradient(to right, #1b1b1b , rgb(69, 69, 69))",
          }}
          className="header_cs_1"
        >
          <div className="container menu_cs_1 px-sm-3 px-4  d-flex justify-content-space-between align-content-center ">
            <h1
              className="img_h1_cs1 text-center"
              onClick={() => navitate("/")}
            >
              <img src="/images/icons/ETB-mob-logo.png" className="img-fluid" alt=""/>
            </h1>
            <div
              className="bars_cs1"
              onClick={() => hamburgerdropdown(selected5)}
            >
              <img
                src={`${selected5 ? `/images/icons/cross-icon.png` : `/images/icons/hamburger-icon.png`}`}
                className="bars"
              />
            </div>
          </div>
        </header>
        <Mobilenav linear={noLinearBackground} landingPage={landingPage} transfer={selected5} hamburgerdropdown={hamburgerdropdown}></Mobilenav>
      </div>
    </>
  );
};
export default Navbar;
