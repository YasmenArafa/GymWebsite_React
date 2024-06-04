
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";


const footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
        
        <Link 
              to="header" 
              smooth={true} 
              duration={500} 
              className="link"
              
            >
              <img src={Logo} alt="" style={{cursor: "pointer"}}/>
              
            </Link>
           
        </div>

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default footer
