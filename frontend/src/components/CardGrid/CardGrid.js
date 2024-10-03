import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardGrid.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function CardGrid(props) {
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()


  let blogAPICalledId = false;
  let allBlogsCalled = false;

  const getAllBlogs = async () => {
    if (allBlogsCalled) return;
    allBlogsCalled = true;

    setLoading(true);

    axios
      .get(`/blogs`, {})
      .then((res) => {
        if (res.data.status === "success") {
          let Updated_recent_blogs = [];

          res.data.data.forEach((item) => {
            Updated_recent_blogs.push({
              id: item.blog_id,
              slug_url: item.slug_url,
              logo: item.blog_image,
              content: item.brief_paragraph,
              blog_description: item.title,
              date: item.published_date,
            });
          });

          setRecentBlogs(Updated_recent_blogs);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const convertToSlug = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const redirectUserToBlog = (slug_url) => {
    if (!slug_url) return;
    navigate(`/blogs/${slug_url}`);
  };


  const cards = [
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/blogs-one.jpg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/blogs-two.jpg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/ads"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/blogs-one.jpg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "/ads"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/blogs-two.jpg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.t",
      link: "ads"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/blogs-one.jpg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "ads"
    },
    {
      title: "ALCUIM LACTUS SEM,ULLAMCORPOR",
      text: "Education",
      image: "/images/creatives/blogs-two.jpg",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "ads"
    },
  ];

  return (
    <div className='outside'>
      {
        loading ?
          <div
            style={{ width: "100%", height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner
              style={{ color: "#3F1626", width: "120px", height: "120px" }}
            />
          </div>
          :

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay, Pagination]}
            observer={true}
            observeParents={true}
            parallax={true}
            className="testimonials-list"
            id="articles-cards-slider"
          >
            <SwiperSlide>
              <Container className='main-cardgrid'>
                <Row>
                  {recentBlogs.map((card, index) => (
                    <Col sm={12} md={6} lg={6} key={index} className="mb-4 card-grid-box">
                      <Card style={{ border: 'none' }} onClick={() => { redirectUserToBlog(card.slug_url) }}>
                        <Card.Img variant="top" src={card.logo} />
                        <Card.Body className='card-body'>
                          <div className='card-icon-text d-flex'>
                            <img src='./images/icons/schedule-icon.svg' alt='icon' className='cards-some-icon img-fluid' />
                            <p className='text-for-box'>By Etb home staging</p>

                            <img src='./images/icons/profile-icon.svg' alt='icon' className='cards-some-icon img-fluid' />
                            <p className='text-for-box'>By Etb home staging</p>
                          </div>
                          <h2 className='head-h2'>{props.blog_description}</h2>
                          <div className="card-content">
                            <p className='para_main mb-2'>{props.content}</p>
                            {/* <button>{props.button}</button> */}
                          </div>
                          <Card.Title className='card-title'>{card.blog_description}</Card.Title>
                          <p className='para-for-card-content'>{card.content}</p>

                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <button className='connect-button w-100'>LEARN MORE</button>
              </Container>
            </SwiperSlide>


          </Swiper>
      }
    </div>
  );
}

export default CardGrid;
