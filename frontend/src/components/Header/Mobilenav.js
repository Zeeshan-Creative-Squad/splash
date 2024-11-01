import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Links1, Links2, Links3, Links4 } from "../Navigationlinks";
import './Mobilenav.css'

const Mobilenav = (props) => {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginpressed, setLoginpressed] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [isDropdownOpenDesk, setIsDropdownOpenDesk] = useState(false);
  const [isDropdownOpenTopical, setIsDropdownOpenTopical] = useState(false);
  const [isDropdownOpenMore, setIsDropdownOpenMore] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const dropdownRef = useRef();
  const dropdownTopical = useRef();
  const dropdownMore = useRef();

  let transfer = props.transfer;
  const mobiledropdown = (state) => {
    setSelected(!state);
  };
  const mobiledropdown2 = (state) => {
    setSelected2(!state);
    setSelected3(false);
    setSelected4(false);
    setSelected5(false);
  };
  const mobiledropdown3 = (state) => {
    setSelected3(!state);
    setSelected2(false);
    setSelected4(false);
    setSelected5(false);
  };
  const mobiledropdown4 = (state) => {
    setSelected4(!state);
    setSelected5(false);
    setSelected3(false);
    setSelected2(false);
  };

  const mobiledropdown5 = (state) => {
    setSelected5(!state);
    setSelected4(false);
    setSelected3(false);
    setSelected2(false);
  };

  const services = [
    { name: "O Level ", link: "/notes/o-level" },
    { name: "AS Level", link: "/notes/as-level" },
    { name: "A Level", link: "/notes/a-level" },

  ];

  const topicals = [
    { name: "O Level ", link: "/topical-past-papers/o-level" },
    { name: "AS Level", link: "/topical-past-papers/as-level" },
    { name: "A Level", link: "/topical-past-papers/a-level" },
  ];

  const mores = [
    { name: "Link 1", link: "/" },
    { name: "Link 2", link: "/" },
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

  const handleLinkClick = () => {
    setSelected(false);
    setMenuState(false);
    props.hamburgerdropdown(transfer);
  };

  return (
    <>
      <div
        style={{ top: props.linear && "71px", zIndex: "9999999999" }}
        className={
          transfer === true ? "  mobilenav_cs1" : "  mobilenavclicked_cs1"
        }
      >
        <ul>
          <div className={props.landingPage && 'd-none'}>
            <div className="d-flex justify-content-between align-content center navitems_cs1">
              <li style={{ color: "white" }}>
                <Link onClick={() => props.hamburgerdropdown(transfer)} to="/"> HOME </Link>
              </li>


              {/* <i
                onClick={() => mobiledropdown(selected)}
                class="fa-solid fa-chevron-up"
                style={{
                  transform:
                    selected === true ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "0.3s",
                  color: selected === true ? "#CB1212" : "white",
                }}
              ></i> */}
            </div>
            <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
              <li>
                <Link onClick={() => props.hamburgerdropdown(transfer)} to="/about">ABOUT</Link>
              </li>
            </div>
            <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
              <li>
                <Link onClick={() => props.hamburgerdropdown(transfer)} to="/services">SERVICES</Link>
              </li>
            </div>

            {/* <div className="d-flex justify-content-between align-content center navitems_cs1">
              <li style={{ color: "white" }}>
                <Link onClick={() => props.hamburgerdropdown(transfer)} to="/services"> Services </Link>
              </li>


              <i
                onClick={() => mobiledropdown(selected)}
                class="fa-solid fa-chevron-up"
                style={{
                  transform:
                    selected === true ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "0.3s",
                  color: selected === true ? "#A5CD37" : "white",
                }}
              ></i>
            </div> */}

            <div
              className={
                selected === true ? "mobsubmenu_cs1 show" : "mobsubmenu_cs1"
              }
            >

              <div onClick={() => mobiledropdown2(selected2)}>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li
                    style={{ color: selected2 === true ? "#A5CD37" : "white" }}
                  >
                    {" "}
                    Zakat{" "}
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected2 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected2 === true ? "#A5CD37" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected2 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1" onClick={handleLinkClick}>
                    {Links1.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              <div onClick={() => mobiledropdown3(selected3)}>
                {" "}
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li
                    style={{ color: selected3 === true ? "#A5CD37" : "white" }}
                  >
                    {" "}
                    Fitrah{" "}
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected3 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected3 === true ? "#A5CD37" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected3 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1" onClick={handleLinkClick}>
                    {Links2.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div onClick={() => mobiledropdown5(selected5)}>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li
                    style={{ color: selected5 === true ? "#A5CD37" : "white" }}
                  >
                    {" "}
                    Nafil{" "}
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected5 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected5 === true ? "#A5CD37" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected5 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1" onClick={handleLinkClick}>
                    {Links4.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/nafil" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Hajj
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/qurbani" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Qurbani
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/education" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Education
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/global-relief" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Global-Relief
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/construction-of-mosque" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Mosque Const...
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/mehfil" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Mehfil
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div onClick={() => mobiledropdown4(selected4)}>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li
                    style={{ color: selected4 === true ? "#A5CD37" : "white" }}
                  >
                    {" "}
                    Khidmat-e-Khalq{" "}
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#A5CD37" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1" onClick={handleLinkClick}>
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div >
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/sadaqa" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      Sadaqa
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h6 className="d-flex justify-content-between align-content-center">
                  {" "}
                  <li style={{ color: "white" }}>
                    <Link to="/cos" style={{ color: "inherit", textDecoration: "none" }} onClick={handleLinkClick}>
                      COS
                    </Link>
                  </li>
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      transform:
                        selected4 === true ? "rotate(90deg)" : "rotate(45deg)",
                      transition: "0.3s",
                      color: selected4 === true ? "#CB1212" : "white",
                    }}
                  ></i>
                </h6>
                <div
                  className={
                    selected4 === true
                      ? "mobsubmenu_cs1 show"
                      : "mobsubmenu_cs1"
                  }
                >
                  <ul id="ul2_cs1">
                    {Links3.map((e) => (
                      <li>
                        <Link to={e.path}>{e.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>




          {/* <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
          <div className="navigation-dropdown" ref={dropdownMore}>
                  <div className="dropdown-mobile-trigger d-flex align-items-center" onClick={() => setIsDropdownOpenMore(!isDropdownOpenMore)}>
                    <span className="nav-links font-play"> Services </span>
                  </div>
                  <div className={`dropdown-mobile-topical-content  ${isDropdownOpenMore ? 'open' : 'd-none'}`}>
                    <div className="d-flex align-item-center gap-5">
                      <div>
                        {mores.map((more, index) => (
                          <div key={index}>
                            <Link
                              to={more.link}
                              className="nav-links font-play dropdown-item text-start"


                              onClick={() => { setIsDropdownOpenMore(false); setMenuState(false); props.hamburgerdropdown(transfer)} }
                            >
                              <p className="itemsof-dropdown mb-0">{more.name}</p>

                            </Link>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
                </div> */}
          {/* 
          <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
              <li>
                <Link onClick={() => props.hamburgerdropdown(transfer)} to="/services">Services</Link>
              </li>
            </div> */}

          <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
            <li>
              <Link onClick={() => props.hamburgerdropdown(transfer)} to="/blogs">BLOGS</Link>
            </li>
          </div>

          <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
            <li>
              <Link onClick={() => props.hamburgerdropdown(transfer)} to="/contact">CONTACT</Link>
            </li>
          </div>


          {/* <div className={`d-flex justify-content-between align-content center navitems_cs1 ${props.landingPage && 'd-none'}`}>
          <div className="navigation-dropdown" ref={dropdownMore}>
                  <div className="dropdown-mobile-trigger d-flex align-items-center" onClick={() => setIsDropdownOpenMore(!isDropdownOpenMore)}>
                    <span className="nav-links font-play"> More </span>
                  </div>
                  <div className={`dropdown-mobile-topical-content  ${isDropdownOpenMore ? 'open' : 'd-none'}`}>
                    <div className="d-flex align-item-center gap-5">
                      <div>
                        {mores.map((more, index) => (
                          <div key={index}>
                            <Link
                              to={more.link}
                              className="nav-links font-play dropdown-item text-start"


                              onClick={() => { setIsDropdownOpenMore(false); setMenuState(false); props.hamburgerdropdown(transfer)} }
                            >
                              <p className="itemsof-dropdown mb-0">{more.name}</p>

                            </Link>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
                </div> */}



          <div className={`d-flex justify-content-start mobilebtn_cs1 ${props.landingPage && 'd-none'}`}>
            <a
              style={{ width: "70%" }}
              className="button2_cs_1"

            >
              {/* <button
                style={{ width: "100%", borderRadius: "4px" }}
                className="button2_cs_1"
                href=""
                onClick={() => {
                  setLoginpressed(true);
                  openModal();
                }}>LOGIN</button>
              <button
                style={{ width: "100%", borderRadius: "4px" }}
                className="button2_cs_1"
                href=""
                onClick={() => {
                  setLoginpressed(false);
                  openModal();
                }}>SIGNUP</button> */}
              {/* <Modal status={isModalOpen} closeModal={closeModal}> {loginpressed ? <LoginSignup closeModal={closeModal} /> : <Signup closeModal={closeModal} />} </Modal> */}

            </a>
          </div>
          {props.landingPage &&
            <div className={`d-flex justify-content-start mobilebtn_cs1`}>
              <a
                style={{ width: "70%" }}
                className="button2_cs_1"
              >
                <button
                  style={{ width: "100%", borderRadius: "4px" }}
                  className="button2_cs_1"
                  href=""
                >
                  Chat With Us
                </button>
              </a>
            </div>
          }
          {props.landingPage &&
            <div className={`d-flex justify-content-start mobilebtn_cs1`}>
              <a
                style={{ width: "70%" }}
                className="button2_cs_1"
                href="tel: +1-647-860-5083"
              >
                <button
                  style={{ width: "100%", borderRadius: "4px" }}
                  className="button2_cs_1"
                  href=""
                >
                  Get Started
                </button>
              </a>
            </div>
          }
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;
