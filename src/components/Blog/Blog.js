import img from "../../images/op.jpg"
import { useNavigate } from "react-router"
import "./Blog.css"
export const Blog =() =>{

    const navigate = useNavigate()

    return(
        <div className="blog-div">
            <div className="Blog-title">Yo Fone Linging !!</div>
            <img className = "Blog-img"src={img} alt="image"/>
            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien. Imperdiet dui accumsan sit amet nulla. Et malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Nascetur ridiculus mus mauris vitae ultricies. Imperdiet nulla malesuada pellentesque elit. Nunc consequat interdum varius sit amet mattis vulputate. Dignissim suspendisse in est ante. Pharetra et ultrices neque ornare aenean euismod elementum. Duis ultricies lacus sed turpis tincidunt. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Netus et malesuada fames ac turpis egestas integer. Tincidunt dui ut ornare lectus sit amet est. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Diam in arcu cursus euismod quis viverra nibh. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Et egestas quis ipsum suspendisse ultrices gravida dictum. Pulvinar proin gravida hendrerit lectus. Integer malesuada nunc vel risus commodo viverra. Vivamus arcu felis bibendum ut tristique. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mauris commodo quis imperdiet. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Ipsum consequat nisl vel pretium lectus quam id. Semper auctor neque vitae tempus quam.</p>
            <button type="button" class="btn btn-success" onClick={()=>navigate("/Home")}>Back</button>
        </div>

       
    );
    
}
