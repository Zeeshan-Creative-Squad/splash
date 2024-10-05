import React from 'react';
import './PopularSection.css';

function PopularSection() {
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
        // Duplicate posts for the right side as per your design
        { id: 2, src: '/images/creatives/side-teams.jpg', alt: 'Football Player Vertical', date: '19TH, JULY, 2024', title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER' },
        { id: 3, src: '/images/creatives/side-teams.jpg', alt: 'Football Player Vertical', date: '19TH, JULY, 2024', title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER' },
        { id: 4, src: '/images/creatives/side-teams.jpg', alt: 'Football Player Vertical', date: '19TH, JULY, 2024', title: 'FROM AMATEUR TO PRO: THE JOURNEY OF A FOOTBALL PLAYER' }
    ];

    return (
        <div className="popular-section container">
            <h2 className="popular-title">POPULAR</h2>
            <div className="row">
                <div className="col-lg-8 left-section">
                    {popularPosts.map((post) => (
                        <div className="post-horizontal mb-4" key={post.id}>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <img src={post.src} alt={post.alt} className="img-fluid horizontal-img" />
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

                {/* Right column: Vertical smaller posts */}
                <div className="col-lg-4">
                    {rightSidePosts.map((post) => (
                        <div className="post-vertical mb-4" key={post.id}>
                            <div className="row right-sidebar-section">
                                <div className="col-4">
                                    <img src={post.src} alt={post.alt} className="img-fluid vertical-img" />
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
            </div>
        </div>
    );
}

export default PopularSection;
