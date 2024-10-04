import React from 'react';
import "./TextContent.css";

const handleRedirect = (btnText) => {
  switch (btnText) {
    case 'Home':
      window.location.href = '/home';
      break;
    case 'Learn More':
      window.location.href = '/about';
      break;
    case 'Contact Us':
      window.location.href = '/contact';
      break;
    default:
      console.log('No matching case found');
  };
};

function TextContent({
  img = "",
  imgg = "",
  subHeading = "",
  heading = "",
  headingAfterBr = "",
  headingAfterBrmore = "",
  headingYellow,
  paragraph,
  btn = false,
  btnText,
  shiftRow = false,
  listData = null,
  reviewContent = false,
  stat = false,
  transparentBg = false,
  title = "",
  designation = ""
}) {

  return (
    <div className='TextContent-container'>
      <div className='container'
        style={transparentBg ? { backgroundColor: "transparent" } : { backgroundColor: "#FCFCFC" }}
      >
        <div className='my-4'>
          <div className={`row align-items-center gy-3 ${shiftRow && "flex-row-reverse"}`}>
            <div className='img-container col-lg-6 px-4'>
              <img src={img} className='img-fluid' alt='text content ' />
              {/* <img src={imgg} className='img-fluid imgg-style' alt='text content ' /> */}
            </div>
            <div className='text-content col-lg-6 text-center text-lg-start'>
              {subHeading && <h6 className='color-red sub-heading mb-3'>{subHeading} <span className='d-lg-inline d-none'>_____</span></h6>}
              <h3 className='head-h1'>
                {heading}<br className='d-none'></br>
                {headingAfterBr}{headingYellow && <span className='color-yellow'>{headingYellow}</span>}
                <br></br>
                {headingAfterBrmore}{headingYellow && <span className='color-yellow'>{headingYellow}</span>}
              </h3>
              <p
                className='body-paragraph'
                style={{ lineHeight: '2.1' }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
              {
                listData &&
                <div className='row'>
                  {listData.map((ele) => {
                    return (
                      <div className='col-lg-6 '>
                        <div class="d-flex align-items-center my-2 icon-list gap-2 " ><img src="/images/icons/list-card-bullets.png" alt="icon" class="list-bullet d-lg-block d-none" /><p class="body-paragraph my-0 list-para">{ele}</p></div>
                      </div>
                    )
                  })}
                </div>
              }
              {btn && (
                <button
                  className='genral-btn btn-red mt-2'
                  onClick={() => handleRedirect(btnText)}
                >
                  {btnText}
                </button>
              )}
              {
                reviewContent &&
                <div>
                  <div className='d-flex gap-3 align-items-center founder-div'>
                    {/* <img src='/images/creatives/Taha-Sheikh.jfif' alt='person' className='' /> */}
                    <img src={imgg} alt='person' className='' style={{ width: "100px" }} />
                    <div>
                      <p className='sub-heading color-red mb-0'>{title}</p>
                      <p className='body-paragraph mb-3'>{designation}</p>
                      <div className='d-flex gap-2 social-icons-founder'>
                        <img src='/images/icons/rc-x-icon.svg' alt='social icon' />
                        <img src='/images/icons/rc-insta-icon.svg' alt='social icon' />
                        <img src='/images/icons/rc-fb-icon.svg' alt='social icon' />
                      </div>
                    </div>
                  </div>
                </div>
              }
              {
                stat &&
                <img src="/images/creatives/about-text-2-stats.jpg" alt='stat ' className='img-fluid' />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;