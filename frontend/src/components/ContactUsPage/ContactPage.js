import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import './ContactPage.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from "axios"

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
        <>
            <div className="important-section">
                <div className='container contact-container'>
                    <div className="contact-info">
                        <h1 className='head-h1'>JOIN SPLASH SPORTS</h1>
                        <p className='para_main'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <div className="contact-details gap-3">
                            <img src="/images/icons/5.svg" alt="Phone" />
                            <p className="para_main p-0">123-456-7890</p>
                        </div>
                        <div className="contact-details gap-3">
                            <img src="/images/icons/6.svg" alt="Email" />
                            <p className="para_main p-0">hello@splashsportsagency.ca</p>
                        </div>
                        <div className="contact-details gap-3">
                            <img src="/images/icons/7.svg" alt="Location" />
                            <p className="para_main p-0">4961 Pine Tree Lane, Maryland.</p>
                        </div>
                        <div className="social-icons">
                            <img
                                src="/images/icons/2.svg"
                                alt="Facebook"
                                className="logo-left"
                            />
                            <img
                                src="/images/icons/4.svg"
                                alt="LinkedIn"
                                className="logo-left"
                            />
                            <img
                                src="/images/icons/Twitter-icon.svg"
                                alt="Twitter"
                                className="logo-left"
                            />
                            <img
                                src="/images/icons/3.svg"
                                alt="Instagram"
                                className="logo-left"
                            />
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="row gy-4">
                            <div className="col-12">
                                <form className="contact_form_form_containers" onSubmit={formSubmitHandler}>
                                    <div className="row gy-4">
                                        <div className="col-md-6 col-12">
                                            <input
                                                required
                                                type="text"
                                                value={name}
                                                maxLength="40"
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <input
                                                required
                                                type="email"
                                                value={email}
                                                maxLength="36"
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <input
                                                required
                                                type="tel"
                                                value={phone}
                                                maxLength="22"
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <textarea
                                                required
                                                rows={5}
                                                value={message}
                                                maxLength="70"
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Write Your Message Here"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-12 button_col d-flex align-items-center justify-content-start">
                                            <button type="submit" className="connect-button w-100">
                                                Submit
                                            </button>
                                            {loading ? (
                                                <Spinner
                                                    animation="border"
                                                    role="status"
                                                    style={{ color: 'white', marginLeft: '10px' }}
                                                />
                                            ) : success ? (
                                                <div>
                                                    {setLoading(false)}
                                                    {alert('Form submitted successfully!')}
                                                    {setSuccess(false)}
                                                </div>
                                            ) : error && (
                                                <div>
                                                    {setLoading(false)}
                                                    {alert('There was an error submitting the form!')}
                                                    {setError(false)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
