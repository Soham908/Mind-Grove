import "./Counsellor.css"
import maleDoc1 from "../images/doc1.jpg"
import maleDoc2 from "../images/doc5.jpg"
import femaleDoc1 from "../images/doc3.png"
import femaleDoc2 from "../images/doc4.png"
import docInfo from "../data/doctorInfo.json"

export const Counsellor = () => {

    const docList = docInfo.listDocs
    
        return(
            <div style={{ display:"flex", justifyContent:"center" }}  >
                {
                    docList.map((data, index) => {
                        return(
                            <div>
                                <CounsellorCard  docGender={data.gender} docName={data.name} docContact={data.contact} docEmail={data.email} docDescription={data.description} />
                                {console.log(data.gender)}
                            </div>
                        )
                        })
                }
            </div>
        )

}

const CounsellorCard = (data) => {
    var docImage = null
    switch(data.docGender){
        case "male1": docImage = maleDoc1; break;
        case "male2": docImage = maleDoc2; break;
        case "female1": docImage = femaleDoc1; break;
        case "female2": docImage = femaleDoc2; break;
    }
    console.log(data.gender)
    return (
        <div className="Counsel">
            <div className="Counsel-card">
            <img src={docImage} class="cardimg" alt="..." />
                <p className="txt" > {data.docName} </p>
                <p className="txt"> {data.docContact} </p>
                <p className="txt"> {data.docEmail} </p>
                <p className="txt"> {data.docDescription} </p>
            </div>
        </div>
    )
}
