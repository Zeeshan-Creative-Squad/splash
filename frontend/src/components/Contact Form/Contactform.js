import React, { useState } from "react";
import "./Contactform.css";
import axios from "axios"
import { Spinner } from "react-bootstrap";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/send-quote", {
        email: email,
        name: name,
        message: message,
        phone: phone,
        formType: "Get in Touch",
      })
      .then((response) => {
        if (response.data.msg === "success") {
          setError(false);
          setSuccess("Request for quotation sended Successfully!");
          setLoading(false);
          setEmail("");
        } else if (response.data.msg === "fail") {
          setSuccess(false);
          setError("Failed to send, try again by reloading the page.");
          setLoading(false);
          setEmail("");
        }
      });
  };

  const handlePhoneChange = (e) => {
    // Allow only numeric values and limit the length
    const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    const maxLength = 20; // Adjust as needed

    // Update state only if the value is within the specified range
    if (numericValue.length <= maxLength) {
      setPhone(numericValue);
    }
  };


  return (
    <div
      className="contact_section my-5 standard-padding-space"
    >
      <div className=" pb-5">
        <div className="container ">
          <div className="row gy-4 gx-lg-5 d-flex align-items-center flex-row-reverse">
            <div className="col-md-6 m-0 left-section-col" >
              <img src="/images/creatives/ContactForm-image.png" className="img-fluid" alt="sport-boy " />
            </div>
            <div className="col-md-6  ">

              <div className="row gy-4">

                <div className="col-12">
                  <h3 className="head-h1">JOIN SPLASH SPORTS</h3>
                  <p className="para_main mt-0">Splash Sports Events is powered by a small but influential team dedicated</p>
                  <form className="contact_form_form_container" onSubmit={formSubmitHandler}>
                    <div className="row gy-4 placeholders-col">
                      <div className="col-md-6 col-12">
                        <input
                          required
                          type="text"
                          value={name}
                          maxLength="40"
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div className="col-md-6 col-12">
                        <input
                          required
                          type="email"
                          value={email}
                          maxLength="36"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email Address"
                        />
                      </div>
                      <div className="col-md-12 col-12">
                        <input
                          required
                          type="tel"
                          value={phone}
                          maxLength="22"
                          onChange={handlePhoneChange}
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-12 col-12">
                        <textarea
                          required
                          type="text"
                          value={message}
                          maxLength="70"
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write Your Message"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12 button_col d-flex align-items-center justify-content-start">
                        <button type="submit" className="connect-button mt-1">SUBMIT
                        </button>
                        {loading ? (
                          <Spinner
                            animation="border"
                            role="status"
                            style={{ color: "white", marginLeft: "10px" }}
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

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
