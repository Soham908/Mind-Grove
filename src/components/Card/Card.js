import op from "../../images/op.jpg";
import "./Card.css"
const Card = (props) => {
  console.log(props)
    return (
      <div class="card">
  <img src={op} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
  }

  
  export default Card