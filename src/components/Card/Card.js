import { Link } from "react-router-dom";
import meditation from "../../images/meditation.png";
import anxiety from "../../images/anxiety.png";
import sleep from "../../images/sleepGood.png";
import "./Card.css";
import { useContext } from "react";
import { ApplicationContext } from "../../App";
const list = [1,2,3]

const Card = (props) => {

  const {setBlogData} = useContext(ApplicationContext)

  const handleReadMoreClick = () => {
    // Execute the function (setBlogData) before navigating
    setBlogData(props.data);
  };
  var imagePath = null

  switch(props.data.image){
    case "anxiety": imagePath = anxiety; break;
    case "meditation": imagePath = meditation; break;
    case "sleepGood": imagePath = sleep; break;

  }
  console.log("image url"  + imagePath)
  return (
    <div class="card">
      <img src={imagePath} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> "{props.data.title}" </h5>
        <p class="card-text">
          {props.data.subContent}

        </p>
        { setBlogData(props.data) }
        <Link to="/blog" onClick={handleReadMoreClick} >Read More</Link>
      </div>
    </div>
  );
};

export default Card;
