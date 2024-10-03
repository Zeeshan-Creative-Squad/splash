
function TestimonialCard(props) {

  const paragraphs = props.clientReview.split('\n').map((paragraph, index) => <p key={index} className={`review-text color-dark px-2`}>{paragraph}</p>);
 
  return (
    <div className="testimonial-card">
      <img src={props.clientImg} alt="user" className="user-img" />
      <div className="d-flex flex-column px-xl-4 px-2">

        {/* <img src="/images/icons/Saying-quotes.svg" className="mx-auto" style={{width:"35px"}} alt='icon'/> */}
        <div className="testimonial-card-info pb-2">
          <div className="profile-info px-2 w-100">
            <h5 className="name color-yellow font-mons">{props.clientName}</h5>
            <p className="review-text review-text-main mt-2 color-dark ">{paragraphs}</p>
            {/* <div className="testimonial-card-line-seprator mb-4"></div> */}
            {/* <img src="images/icons/stars-icon.svg" alt="rating icon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard