// import { Fragment } from "react";
import "./Home.scss"
import TextSpan from "../TextSpan";
import { useEffect } from "react";
import gsap from "gsap";
import Preloader from "../Preloader/Preloader";
import AboutMeSection from "../../sub-components/AboutSection";

import { Link, NavLink } from "react-router-dom";


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        gsap.from(".text-container", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.2,
            ease: "easeInOut",
        });
    }, []);



    const sentence = "Hii, I'm Dev Pandey".split("");
    const sentence2 = "Crafting Code with <Vision> ".split("");
    const sentence3 = "Shaping Web with <Precision>".split("");
    return (
        <div>
        <Preloader />
        <section className="hero-section">
        <div className="sub">Full-Stack Developer</div>
        <div className="title">
        <div className="text-container">
        {sentence.map((letter, index) => {
            return <TextSpan  key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
        })}
        </div>
        <div className="text-container">
        {sentence2.map((letter, index) => {
            return <TextSpan  key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
        })}
        </div>
        <div className="text-container">
        {sentence3.map((letter, index) => {
            return <TextSpan  key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
        })}
        </div>
        </div>
        {/* <div className="image-container">
        <img className="image" src={Dev1} alt="Dev-Pandey" border="0" />
        </div> */}
        </section>
        <div className="links">
            <span className="item">
            <NavLink to="/about">
            About Me
            </NavLink>
            </span>
            <span className="item">—</span>
            <span className="item"><NavLink to="/work">
            My Projects
            </NavLink>
            </span>
          </div>
        <AboutMeSection/>
        <section className="find-me">
          <div className="title">
            Find <br /> Me{" "}
            <span role="img" aria-label="find-emoji">
              🔎
            </span>
          </div>
          <div className="topic">
          Got any questions? Feel free to reach out.
          </div>

          <div className="social-boxes">
            <a
              href="https://github.com/D3VPAND3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="box github"
            >
              <div className="content">
                <i className="fab fa-github-alt"></i>
                <div className="items">
                  <div className="name">Github</div>
                  <div className="user">/D3VPAND3Y</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-pandey-b1862422a/"
              target="_blank"
              rel="noopener noreferrer"
              className="box linkedin"
            >
              <div className="content">
                <i className="fab fa-linkedin-in"></i>
                <div className="items">
                  <div className="name">Linkedin</div>
                  <div className="user">/Dev Pandey</div>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/d3v_pand3y/"
              target="_blank"
              rel="noopener noreferrer"
              className="box instagram"
            >
              <div className="content">
                <i className="fab fa-instagram"></i>
                <div className="items">
                  <div className="name">Instagram</div>
                  <div className="user">/d3v_pand3y</div>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="contact">
          <div className="topic">Need a developer ?</div>
          <Link to="/contact">
            <div className="title">Let's Collaborate &#8594;</div>
          </Link>
        </section>



        </div>
    );
    }

export default Home;