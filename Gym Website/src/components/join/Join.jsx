
import { useRef } from "react";
import "./Join.css";


const Join = () => {
    const form = useRef()
return (
    <div>
        <div className="join-us" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">ready to </span><span> level up </span>
                </div>
                <div>
                    <span>your body </span>
                    <span className="stroke-text">with us?</span>
                </div>
                
                
            </div>
            <div className="right-j">    
            <form ref={form} className="email-container" >
            <input type="email" name="user_email" placeholder="Enter Your Email Address Here"/>
                <button>Join Now</button>
                </form>            

            </div>
        </div>
    </div>
)}

export default Join
