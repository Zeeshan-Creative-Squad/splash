import {useNavigate} from "react-router-dom"

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}


function CardBox(props) {
  const navigate= useNavigate()
  const handleClick = ()=>{
    if(props.redirectionFunction)
    {
      props.redirectionFunction(props.anchor)
    }
    else
    {
      navigate(props.anchor)
    }
  }
  
  return (
    <div className="card-box">
      <div>
        <img src={props.cardImg} alt={props.title} />
        <div className="card-text-content">
          <h2 className="head-h3" data-background-text={props.backgroundText}>{props.title}</h2>
          <p className="para_main">{props.content}</p>
        </div>
      </div>
        {/* <a onClick={handleClick} className="read-more-anchor color-red">Learn More <img src="/images/icons/carousel-btn-icon.svg" className="btn-icon" alt="btn-icon"/></a> */}
    </div>
  )
}

export default CardBox