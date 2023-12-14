import { Link } from "react-router-dom";
import op from "../../images/op.jpg";
import "./Card.css";
import { Blog } from "../Blog/Blog";
import { useContext } from "react";
import { ApplicationContext } from "../../App";
const Card = (props) => {

  const {setBlogData} = useContext(ApplicationContext)

  const handleReadMoreClick = () => {
    // Execute the function (setBlogData) before navigating
    setBlogData(props.data);
  };

  return (
    <div class="card">
      <img src={op} class="card-img-top" alt="..." />
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
