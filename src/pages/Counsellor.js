import "./Counsellor.css"
import Doctor from "../images/doc3.png"

export const Counsellor = () => {
    return (
        <div className="Counsel">
            <div className="Counsel-card">
            <img src={Doctor} class="card-img-top" alt="..." />
                <p className="txt" > Dr. Emily Thompson</p>
                <p className="txt">Details</p>
            </div>
        </div>
    )
}
