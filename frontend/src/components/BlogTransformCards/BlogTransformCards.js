import React from 'react';
import './BlogTransformCards.css';

const BlogTransformCards = () => {
    return (
        <div className="container mt-5 Blogs-Transform-container">
            <div className="row all-cards">
                <div className="col-md-4 col-sm-12">
                    <div className="card custom-card"
                        style={{
                            background: "url('/images/creatives/blog-one.jpg') center center / cover no-repeat", opacity: 1,
                            zIndex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 1)',
                            zIndex: -1,
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
                            zIndex: -1,
                        }} />
                        <div className="card-body text-center">
                            <h5 className="para_main">19TH JULY</h5>
                            <p className="para_main">
                                FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card custom-card"
                        style={{
                            background: "url('/images/creatives/blog-two.jpg') center center / cover no-repeat", opacity: 1,
                            zIndex: 1,
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
                            zIndex: -1,
                        }} />
                        <div className="card-body text-center">

                            <h5 className="para_main">19TH JULY</h5>
                            <p className="para_main">
                                FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card custom-card"
                        style={{
                            background: "url('/images/creatives/blog-three.jpg') center center / cover no-repeat", opacity: 1,
                            zIndex: 1,
                        }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
                            zIndex: -1,
                        }} />
                        <div className="card-body text-center">
                            <h5 className="para_main">19TH JULY</h5>
                            <p className="para_main">
                                FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTransformCards;