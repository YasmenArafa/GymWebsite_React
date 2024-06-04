import "./Programs.css";
import { programsData } from '../../data/programsData';
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className="program" style={{background: "#222", paddingBottom: "1.5rem"}} id="programs">
      <div className="program-header" style={{paddingTop: "7rem", display: "flex", justifyContent: "space-around", textTransform: "uppercase", fontSize: "3.5rem", fontStyle: "italic", fontWeight: "bold", paddingBottom: "10px", paddingLeft: "1rem", paddingRight: "1rem"
      }}>
        <span className="stroke-text">Explore our</span><span>programs</span><span className="stroke-text">To shape You</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => (
            <div className="category" key={program.heading}>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-btn"><span>Join Now</span><img src={RightArrow} alt="" /></div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Programs

