import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap"
import "./NewsLetter.css"
import axios from "axios"

function NewsLetter({ background }) {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

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
    return (
        <div className='NewsLetter-container standard-padding-space' style={{ background: background }}>
            <div className="container ">
                <div className="form-container m-auto px-2">
                    <div className="text-container text-center">
                        <h3 className="head-h2">DON'T FORGET TO SIGN UP!</h3>
                        <p className='body-paragraph mt-2'>Join our mailing list for exclusive updates, home staging tips, and special offers from ETB-Home Staging.</p>
                    </div>
                    <form className='inp-container d-md-flex d-none align-items-center justify-content-between' onSubmit={formSubmitHandler}>
                        <input
                            required
                            type="email"
                            value={email}
                            maxLength="56"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email@example.com'
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
                    </form>
                    <form className=' d-md-none d-flex flex-column align-items-center justify-content-between' onSubmit={formSubmitHandler}>
                        <input
                            required
                            type="email"
                            value={email}
                            maxLength="56"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email@example.com'
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;