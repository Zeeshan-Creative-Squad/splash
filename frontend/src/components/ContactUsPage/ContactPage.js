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
        <>
            <div className="important-section">
                <div className='container contact-container'>
                    <div className="contact-info">

                        <h1 className='head-h1'>GET IN TOUCH</h1>
                        <p className='para_main'>Reach out to us for personalized home staging solutions and expert advice and let’s turn your space into a master piece together!  </p>

                        <div className="contact-details gap-3">
                            <img src="/images/icons/tel-icon.svg" alt="Phone" />
                            <p className="body-paragraph">+1 (123) 456-7890</p>

                        </div>
                        <div className="contact-details gap-3">
                            <img src="/images/icons/email-icon.svg" alt="Email" />
                            <p className="body-paragraph">hello@etbhomestaging.com</p>
                        </div>
                        <div className="contact-details gap-3">
                            <img src="/images/icons/location-icon.svg" alt="Location" />
                            <p className="body-paragraph">Milton, Ontario, Canada</p>
                        </div>

                    </div>
                    <div className="contact-form">

                        <Col lg={12}>
                            <Form onSubmit={formSubmitHandler}>
                                <Row className='gy-3'>
                                    <Col lg={12}>
                                        <Form.Group controlId="formName">
                                            <Form.Control type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group controlId="formPhoneNumber">
                                            <Form.Control type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formEmail" className='mt-4'>
                                    <Form.Control type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formMessage" className='mt-5'>
                                    <Form.Control type="text" placeholder='Write Your Message Here..' rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
                                </Form.Group>
                                <Button variant="dark" type="submit" className="mt-5 connect-button w-100">
                                    SUBMIT
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
                                </Button>
                            </Form>
                        </Col>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactPage;
