import "./Footer.css"
import Youtube from "../../images/youtube.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/twitter.png"
import Instagram from "../../images/instagram.png"
import Pinterest from "../../images/pinterest.png"

export const Footer = () => {
    return (
        <div className="Footer-body">
        <div className="Ft-about">
            
                <div className="Ft-txt " >About</div>
            
            
               <div className="Ft-txt " > Contact us</div>
            
            
               <div className="Ft-txt " > Privacy Policy</div>
            
        </div>
        <div className="Ft-socialmedia d-flex">
        
            <a href="https://www.youtube.com/"><img className="social_logo "  src={Youtube} title="youtube icons" alt="youtube" /></a>
            
        
            <a href="https://www.facebook.com/"><img className="social_logo" src={Facebook} title="youtube icons" alt="Facebook" /></a>            
            
        
            <a href="https://twitter.com/"><img className="social_logo" src={Twitter} title="youtube icons" alt="Twitter" /></a>            
            
        
            <a href="https://www.instagram.com/"><img className="social_logo" src={Instagram} title="youtube icons" alt="Instagram" /></a>            
            
        
            <a href="https://www.pinterest.com/"><img className="social_logo" src={Pinterest} title="youtube icons" alt="Pinterest" /></a>
            
        </div>
        <div className="Ft-txt ">Copyright © 2023 mindgrove.com All rights reserved.</div>
        <div className="Ft-txt ">Disclaimer: Content Provided by MindGrove serves as information purpose only and cannot be directed as a substitute for any type of professional medical advice. Therefore, we encourage our readers to seek the guidance of qualified health professionals for further queries related to your health or mental health condition.</div>
        </div>
    );

}