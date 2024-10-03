import React, { useState } from 'react'
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap"
import './ContactForm.css';
import axios from "axios"

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/send-contact-form-main", {
        email: email,
        name: name,
        phone: phone,
        message: message,
        formType: "Contactform",
      })
      .then((response) => {
        if (response.data.msg === "success") {
          setError(false);
          setSuccess("Form Submit Successfully!");
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

  return (
    <div className="contact-form-container ">
      <div className='container'>
        <div className='row align-items-lg-end'>

          <div className="col-lg-6 contact-inf d-lg-block d-none">
            <h1 className="head-h2">LET'S CONNECT</h1>
            <p className="contact-detail">
              <strong>ADDRESS</strong><br />
              991 White St . Dawsonville GA 30534 , New York
            </p>
            <p className="contact-detail">
              <strong>PHONE NUMBER</strong><br />
              + 1 (123) 456-7890
            </p>
            <p className="contact-detail">
              <strong>EMAIL</strong><br />
              gmail@etbhomestaging.com
            </p>
          </div>

          <div className="col-lg-6 contact-for d-flex flex-md-row flex-column">

            <div className="col-lg-6 d-lg-none contact-inf">
              <h1 className="head-h2">LET'S CONNECT</h1>
              <p className="contact-detail">
                <strong>ADDRESS</strong><br />
                991 White St . Dawsonville GA 30534 , New York
              </p>
              <p className="contact-detail">
                <strong>PHONE NUMBER</strong><br />
                + 1 (123) 456-7890
              </p>
              <p className="contact-detail">
                <strong>EMAIL</strong><br />
                gmail@etbhomestaging.com
              </p>
            </div>

            <form onSubmit={formSubmitHandler} className='d-flex flex-md-row flex-column'>
              <div className="input-column">
                <input type="text" placeholder="Name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="Phone" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="textarea-portion">
                <textarea type="textarea" placeholder="Message*" className="form-textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button className='connect-button w-100' type="submit">SUBMIT
                  {loading ? (
                    <Spinner
                      animation="border"
                      role="status"
                      style={{ color: "white", width: "15px", height: "15px", marginLeft: "10px" }}
                    />
                  ) : (
                    success ? (
                      <div >
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
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
