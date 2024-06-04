import "./Testimonials.css";
import { testimonialsData } from "../../data/testomonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const Testimonials = () => {

  const [selected, setSelected]= useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
        <div className="left">
          <span>Testimonials</span>
          <span className="stroke-text">What They</span>
          <span>say about us</span>
          <span>
            {testimonialsData[selected].review}
          </span>
          <span>
            <span>
              {testimonialsData[selected].name}
            </span>
            <span> - </span>
            <span>{testimonialsData[selected].status}</span>
          </span>
        </div>

        <div className="right">
          <div style={{animation: "rightToLeft_2 1s ease-in-out"}}></div>
          <div style={{animation: "leftToRight_2  1s ease-in-out"}}></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
              <img
              onClick={() => {
                selected===0?setSelected(tLength - 1): setSelected((prev) => prev - 1)
              }}
              src={rightArrow} alt="" />
              <img
              onClick={() => {
                selected===tLength - 1?setSelected(0): setSelected((prev) => prev + 1)
              }}
               src={leftArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
