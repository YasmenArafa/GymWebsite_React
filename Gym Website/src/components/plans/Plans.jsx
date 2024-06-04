import "./Plans.css";
import { plansData } from '../../data/plansData';
import WhiteTick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png"

const Plans = () => {
  return (
    <div className="plan-content" id="plans">
        <div><span className="stroke-text">ready to start </span><span> your journey </span><span className="stroke-text">now with us</span></div>
       <div className="plans-categories">
        {plansData.map((plan, index) => (
            <div className="cate" key={index}>
                {plan.icon}
            
                <div>
                    <span>{plan.name}</span>
                    </div>
                <div>
                    <span>$ {plan.price}</span></div>
                <div className="feature">
                    <img src={WhiteTick} alt="" />
                    <span>{plan.features[0]}</span></div>
                    <div  className="feature" >
                    <img src={WhiteTick} alt="" />
                    <span>{plan.features[1]}</span></div>
                    <div   className="feature">
                    <img src={WhiteTick} alt="" />
                    <span>{plan.features[2]}</span></div>

                    <div className="btnn">
                        <span>see more benefits</span>
                        <img src={RightArrow} alt="" />
                    </div>
                    <button>Join Now</button>
            </div>
        ))}

      </div>


    </div>
  )
}

export default Plans

