import React from 'react';
import './PopularSection.css';
import { useNavigate } from 'react-router-dom';

function PopularSection() {
    const navigate = useNavigate();
    const popularPosts = [
        {
            id: 1,
            src: '/images/creatives/football-team.jpg',
            alt: 'Football Team',
            date: '19TH JULY',
            title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER',
        },
        {
            id: 2,
            src: '/images/creatives/team.jpg',
            alt: 'Football Player',
            date: '19TH JULY',
            title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER',
        }
    ];

    const rightSidePosts = [
        {
            id: 1,
            src: '/images/creatives/side-teams.jpg',
            alt: 'Football Player Vertical',
            date: '19TH, JULY, 2024',
            title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER',
        },
        {
            id: 2,
            src: '/images/creatives/side-teams.jpg',
            alt: 'Football Player Vertical',
            date: '19TH, JULY, 2024',
            title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER'
        },
        {
            id: 3,
            src: '/images/creatives/side-teams.jpg',
            alt: 'Football Player Vertical',
            date: '19TH, JULY, 2024',
            title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER'
        },
        {
            id: 4,
            src: '/images/creatives/side-teams.jpg',
            alt: 'Football Player Vertical',
            date: '19TH, JULY, 2024',
            title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER'
        }
    ];

    return (
        <div className="container main-cont">
            <div className="popular-section">
                <div className="row">
                    <h2 className="head-h1">|  POPULAR</h2>
                    <div className="col-lg-8 left-section">
                        {popularPosts.map((post) => (
                            <div className="post-horizontal mb-4" key={post.id}>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <img src={post.src} alt={post.alt} className=" horizontal-img" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-meta">
                                            <span className="popular-tag">POPULAR</span>
                                            <h5 className="post-title">{post.title}</h5>
                                            <p className="post-date">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-4">
                        {rightSidePosts.map((post) => (
                            <div className="post-vertical mb-4" key={post.id}>
                                <div className="row right-sidebar-section">
                                    <div className="col-4 p-0 m-0 mb-0 pb-0">
                                        <img src={post.src} alt={post.alt} className=" vertical-img" />
                                    </div>
                                    <div className="col-8">
                                        <div className="post-meta">
                                            <h6 className="post-title">{post.title}</h6>
                                            <p className="post-date">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => navigate('/bloginner')} className='connect-button'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularSection;
