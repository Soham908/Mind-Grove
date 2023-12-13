import op from "../../images/op.jpg";
import "./Card.css";
const Card = (props) => {
  return (
    <div class="card">
      <img src={op} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> {props.data.title} </h5>
        <p class="card-text">
          
        </p>
        <a href="" class="btn btn-primary ">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
