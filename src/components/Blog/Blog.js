import { useNavigate } from "react-router"
import "./Blog.css"
import { useContext } from "react"
import { ApplicationContext } from "../../App"
export const Blog = (props) =>{
    const {blogData, blogImage} = useContext(ApplicationContext)
    const navigate = useNavigate()  

    return(
        <div className="blog-div">
            <div className="Blog-title"> {blogData.title} </div>
            <img className = "Blog-img"src={blogImage} alt="image"/>
            <p className="para"> {blogData.content} </p>
            <button type="button" class="btn btn-success" onClick={()=>navigate("/")}>Back</button>
        </div>

       
    );
    
}
