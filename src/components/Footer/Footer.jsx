import "./Footer.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import {FaGithub, FaLinkedin, FaInstagram, FaBehance} from "react-icons/fa";

const Footer = () => {

    // animation for footer
    useEffect(() => {
        gsap.from(".main-footer", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.2,
            ease: "easeInOut",
        });
    }, []);


  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-top">
        <div className="message">Say Hello</div>
        <div className="links">
          <div className="link">
            <p>
              <a
                data-text="wa.me/D3VPAND3Y"
                href="https://wa.me/+918287581900"
                target="_blank"
                rel="noopener noreferrer"
              >
                wa.me/D3VPAND3Y
              </a>
            </p>
            <p>
              <a
                data-text="dev16pandey@gmail.com"
                href="mailto:dev16pandey@gmail.com"
              >
                dev16pandey@gmail.com
              </a>
            </p>
          {/* </div>
          <div className="link"> */}
          <div className="logo">
            <a
              href="https://github.com/D3VPAND3Y"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaGithub size={30}
               />
            </a>

            <a
              href="https://www.linkedin.com/in/dev-pandey-b1862422a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30}/>
            </a>
            <a
              href="https://www.behance.net/d3vpand3y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance size={30} />
            </a>
            <a
              href="https://www.instagram.com/d3v_pand3y/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30}/>
            </a>



          </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Dev Pandey </div>
    </footer>
  );
};

export default Footer;

