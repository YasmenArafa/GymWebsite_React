import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='header'>
      <img className='logo' src={logo} alt="" />
    
      {(menuOpened === false && isMobile) ? (
        <div
          style={{
            background: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => { setMenuOpened(true) }}
        >
          <img src={Bars} alt="" style={{ width: "1.5rem", height: "2rem" }} />
        </div>
      ) : (
        <ul className='uls'>
          <li>
            <Link 
              to="header" 
              smooth={true} 
              duration={500} 
              className="link"
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="programs" 
              smooth={true} 
              duration={500} 
              className="link"
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link 
              to="reasons" 
              smooth={true} 
              duration={500} 
              className="link"
              onClick={() => setMenuOpened(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link 
              to="plans" 
              smooth={true} 
              duration={500} 
              className="link"
              onClick={() => setMenuOpened(false)}
            >
              Plan
            </Link>
          </li>
          <li>
            <Link 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="link"
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
