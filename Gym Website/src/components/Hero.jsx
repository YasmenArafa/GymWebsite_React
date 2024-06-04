import "./Hero.css";
import Headers from "./header/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import NumberCounter from "number-counter";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-h">
        <Headers/>
        <div className="the-best-ad">
            <div></div>
            <span>The Best Fitness Club In The Town</span>
        </div>

        <div className="hero-text">
            <div>
                <span><span className='stroke-text'>shape </span>your</span>
            </div>
            <div>
                ideal body
            </div>
            <div className='text'>
<span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
        </div>
   
   <div className="figures">
    <div>
        <span style={{fontWeight: 'bold', fontSize: "2rem"}}>
            <NumberCounter end={140} start={100} delay="3" preFix="+" />
        </span>
        <span style={{opacity: "0.5", textTransform: "uppercase"}}>experts coaches</span>
    </div>
    <div>
        <span style={{fontWeight: 'bold', fontSize: "2rem"}}>            <NumberCounter end={978} start={500} delay="3" preFix="+" /></span>
        <span style={{opacity: "0.5", textTransform: "uppercase"}}>members joined</span>
    </div>
    <div>
        <span style={{fontWeight: 'bold', fontSize: "2rem"}}>            <NumberCounter end={50} start={10} delay="3" preFix="+" /></span>
        <span style={{opacity: "0.5", textTransform: "uppercase"}}>fitness programs</span>
    </div>
   </div>
   
<div className="buttons">
    <button style={{marginRight: "20px", borderRadius: "1px", background: "orange", fontWeight: "bold", border: "4px solid orange", padding: "10px 30px", transition: "300ms all", fontSize: "18px"}}>Get Started</button>
    <button style={{marginRight: "20px", borderRadius: "1px", fontWeight: "bold", border: "4px solid orange", padding: "10px 30px", transition: "300ms all", fontSize: "18px"}}>Learn More</button>
</div>


</div>
    
    <div className="right-h">
        <button style={{ borderRadius: "1px", border: "4px solid transparent", padding: "10px 20px", transition: "300ms all", fontSize: "18px", background: "white", color: "black",position: "absolute", right: "3rem", top: "2.5rem"}}>Join Now</button>
        <div className="heart-rate">
            <img style={{width: "3rem", marginBottom: "-15px"}} src={Heart} alt="" />
            <h3 style={{opacity: "0.7"}}>Heart Rate</h3>
            <span style={{fontSize: "1.7rem", fontWeight: "bold"}}>116 bpm</span>
        </div>
        <img style={{width: "20rem", height: "30rem", position: "absolute", left: "-150px", bottom: "50px", transform: "translateY(-50px)", zIndex: "222"}} src={hero_image} alt="" />
    <img style={{width: "18rem", height: "30rem",position: "absolute", left: "-215px", bottom: "170px", zIndex:"1", animation: "move 2s ease-in-out"}} src={hero_image_back} alt="" />

    <div className="calories">
        <img style={{width: "3rem"}} src={Calories} alt="" />
        <div style={{display: "flex", flexDirection: "column", gap: "1.2rem"}}>
            <span style={{color: "#444"}}>Calories Burned</span><span style={{fontSize: "1.5rem"}}>220 Kcal</span>
        </div>
    </div>
    </div>


    </div>
  )
}

export default Hero
