// import { Fragment } from "react";
import "./Home.scss"
import TextSpan from "../TextSpan";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "../Preloader/Preloader";
import AboutMeSection from "../../sub-components/AboutSection";

import { Link, NavLink } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const hasShownPreloader = sessionStorage.getItem('preloaderShown');
        const baseDelay = hasShownPreloader ? 0.8 : 3.6; 
        
        // Main text containers (hero titles)
        gsap.from(".text-container", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: baseDelay + 0.2,
            ease: "easeInOut",
        });
        
        // Subtitle appears after titles
        gsap.from(".sub", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: baseDelay,
            ease: "easeInOut",
        });
        
        // Navigation links appear last
        gsap.from(".links .item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: baseDelay + 0.4,
            stagger: 0.2,
            ease: "easeInOut",
        });

        // Find Me section
        gsap.from(".find-me .title", {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".find-me",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".find-me .topic", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            // delay: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".find-me",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".social-boxes .box", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".social-boxes",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Contact section
        gsap.from(".contact .topic", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".contact",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".contact .title", {
            y: 60,
            opacity: 0,
            duration: 1,
            // delay: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".contact",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
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