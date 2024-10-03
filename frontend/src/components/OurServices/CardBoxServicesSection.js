import React,{useState,useEffect} from 'react';
import "./CardBoxServicesSection.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import CardBox from "./CardBox";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



function CardTestimonial({
  subHeading,
  heading,
  content,
  shadeHeading,
  button
}) {

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

  const blogData = [
    {
      cardImg: "./images/creatives/news-update-one.jpg",
      title: "ALIQUAM LECTUS SEM, ULLAMCORPER",
      anchor:"/immigrate",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttons: "Book an appointment"
    
    },
    {
      cardImg: "./images/creatives/news-update-two.jpg",
      title: "ALIQUAM LECTUS SEM, ULLAMCORPER",
      anchor:"/work-permit-in-canada",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttons: "Book an appointment"
    },
    {
      cardImg: "./images/creatives/news-update-three.jpg",
      title: "ALIQUAM LECTUS SEM, ULLAMCORPER",
      anchor:"/study-permit-for-canada",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttons: "Book an appointment"
    },
    {
      cardImg: "./images/creatives/news-update-three.jpg",
      title: "ALIQUAM LECTUS SEM, ULLAMCORPER",
      anchor:"/study-permit-for-canada",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttons: "Book an appointment"
    },
    {
      cardImg: "./images/creatives/news-update-three.jpg",
      title: "ALIQUAM LECTUS SEM, ULLAMCORPER",
      anchor:"/study-permit-for-canada",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttons: "Book an appointment"
    },
  ];

  return (
    <div className='cards-container standard-padding-space'>
      <div className="blog-upper-content">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-end">
            <div className="col-md-12">
              <div className="blog-text-content text-center">
                <h3 className="head-h2 mb-0">{heading}<span className="head-bg">{shadeHeading}</span></h3>   
                {content && <p className="para_main">{content}</p>}
                
              </div>
            </div>
          </div>

          {
        loading?
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
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          observer={true}
          observeParents={true}
          parallax={true}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3,
            }
          }}
          className="card-list px-3 text-center"
          id="articles-cards-slider"
        >
          {recentBlogs.map((blogData, ind) => (
            <SwiperSlide key={ind}>
              <CardBox cardImg={blogData.logo} title={blogData.blog_description} content={blogData.content} slug_url={blogData.slug_url} buttons={blogData.buttons} />
            </SwiperSlide>
          ))}
        </Swiper>
}
        
    </div>
    </div>
      </div>
  )
}

export default CardTestimonial