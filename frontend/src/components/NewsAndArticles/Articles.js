import "./Articles.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Articles({
  subHeading,
  heading,
  content,
  spanHeading,
  button
}) {

  const cards = [
    {
      title: "Healthcare Access initiative",
      text: "Education",
      image: "/images/creatives/blogs-one.jpg",
      para: "Convallis vivamus at cras porta nibh velit aliquam eget",
      link: "#"
    },
    {
      title: "Healthcare Access initiative",
      text: "Education",
      image: "/images/creatives/blogs-two.jpg",
      para: "Convallis vivamus at cras porta nibh velit aliquam eget",
      link: "#"
    },
    {
      title: "Healthcare Access initiative",
      text: "Education",
      image: "/images/creatives/blogs-one.jpg",
      para: "Convallis vivamus at cras porta nibh velit aliquam eget",
      link: "#"
    },

  ];



  return (
    <div className='Articles-container standard-padding-space'>
      <div className="Articles-content mb-4">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-12">
              <div className="Articles-text-content">
                <p className="secondary-h1 d-lg-block d-none">{subHeading}</p>
                <h3 className="head-h1">{heading}<span className="color-yellow">{spanHeading}</span></h3>
                {content && <p className="body-paragraph">{content}</p>}

              </div>
            </div>

            <div className="services-content-class text-center">
              <p className="secondary-h1 d-lg-none">{subHeading}</p>
              <p className="para_main text-center">Charity 128 recognizes the importance of collective action in creating lasting change. We invite individuals, corporations, and communities to join us in our mission. Charity 128 recognizes the importance of collective action in creating lasting change.</p>

            </div>
          </div>

          <div className='outside'>
            <Container className='main-cardgrid'>
              <Row>
                {cards.map((card, index) => (
                  <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                    <Card style={{ border: 'none' }}>
                      <Card.Img variant="top" src={card.image} />
                      <Card.Body className='card-body'>
                        <div className='card-icon-text d-flex'>
                          <img src='./images/icons/schedule-icon.svg' alt='icon' className='cards-some-icon img-fluid' />
                          <p className="para_main">By Etb home staging</p>

                          <img src='./images/icons/profile-icon.svg' alt='icon' className='cards-some-icon img-fluid' />
                          <p className="para_main">By Etb home staging</p>
                        </div>

                        <Card.Title className='card-title'>{card.title}</Card.Title>
                        <p className='para-for-card-content'>{card.para}</p>

                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Articles;