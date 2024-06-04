
import "./Reasons.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Tick from "../../assets/tick.png";
import Nike from "../../assets/nike.png";
import Adidas from "../../assets/adidas.png";
import Nb from "../../assets/nb.png";
const Reasons = () => {
  return (
    <div className="content">
      <div className="photos">
        <img src={Image1} alt="" />
        <div>
        <img src={Image2} alt="" />
        <div style={{display: "flex"}}>
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
        </div>
        </div>

      </div>
      <div className="reasons">
        <h2>Some Reasons</h2>
        <h1><span className="stroke-text">Why</span> Choose Us?</h1>
        <div>
            <div>
                <img src={Tick}alt="" />
                <p>over 140+ Expert Coaches</p>
            </div>
            <div>
                <img src={Tick}alt="" />
                <p>Train Smart and faster than before</p>
            </div>
            <div>
                <img src={Tick}alt="" />
                <p>1 free program for new member</p>
            </div>
            <div>
                <img src={Tick}alt="" />
                <p>Reliable Partners</p>
            </div>
        </div>
        <p>our partners</p>
        <div className="partners">
            <img src={Nb} alt="" />
            <img src={Adidas} alt="" />
            <img src={Nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
