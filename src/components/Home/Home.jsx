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
        
        // Main text containers (hero titles) - very specific selector
        gsap.from(".home-page-container .home-hero-section-main .home-title-section .home-text-container-element", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: baseDelay + 0.2,
            ease: "easeInOut",
        });
        
        // Subtitle appears after titles - very specific selector
        gsap.from(".home-page-container .home-hero-section-main .home-subtitle-element", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: baseDelay,
            ease: "easeInOut",
        });
        
        // Navigation links appear last - very specific selector
        gsap.from(".home-page-container .home-navigation-links-section .home-nav-item-element", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: baseDelay + 0.4,
            stagger: 0.2,
            ease: "easeInOut",
        });

        // ScrollTrigger for hero section fade out on scroll (only after initial animations complete)
        gsap.to(".home-page-container .home-hero-section-main", {
            opacity: 0,
            y: -50,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".home-page-container .home-about-section-wrapper",
                start: "top 40%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });

        gsap.to(".home-page-container .home-navigation-links-section", {
            opacity: 0,
            y: -20,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".home-page-container .home-about-section-wrapper",
                start: "top 40%",
                end: "top 20%",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });

        // Find Me section - very specific selectors
        gsap.from(".home-page-container .home-find-me-section-main .home-find-me-title-element", {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".home-page-container .home-find-me-section-main",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".home-page-container .home-find-me-section-main .home-find-me-topic-element", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            // delay: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".home-page-container .home-find-me-section-main",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".home-page-container .home-social-boxes-container .home-social-box-element", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".home-page-container .home-social-boxes-container",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Contact section - very specific selectors
        gsap.from(".home-page-container .home-contact-section-main .home-contact-topic-element", {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".home-page-container .home-contact-section-main",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".home-page-container .home-contact-section-main .home-contact-title-element", {
            y: 60,
            opacity: 0,
            duration: 1,
            // delay: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: ".home-page-container .home-contact-section-main",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    const sentence = "Hii, I'm Dev Pandey".split("");
    const sentence2 = "Crafting Code with <Vision> ".split("");
    const sentence3 = "Shaping Web with <Precision>".split("");
    
    return (
        <div className="home-page-container">
            <Preloader />
            <section className="home-hero-section-main hero-section">
                <div className="home-subtitle-element sub">Full-Stack Developer</div>
                <div className="home-title-section title">
                    <div className="home-text-container-element text-container">
                        {sentence.map((letter, index) => {
                            return <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
                        })}
                    </div>
                    <div className="home-text-container-element text-container">
                        {sentence2.map((letter, index) => {
                            return <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
                        })}
                    </div>
                    <div className="home-text-container-element text-container">
                        {sentence3.map((letter, index) => {
                            return <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
                        })}
                    </div>
                </div>
            </section>
            
            <div className="home-navigation-links-section links">
                <span className="home-nav-item-element item">
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </span>
                <span className="home-nav-item-element item">—</span>
                <span className="home-nav-item-element item">
                    <NavLink to="/work">
                        My Projects
                    </NavLink>
                </span>
            </div>
            
            <div className="home-about-section-wrapper">
                <AboutMeSection/>
            </div>
            
            <section className="home-find-me-section-main find-me">
                <div className="home-find-me-title-element title">
                    Find <br /> Me{" "}
                    <span role="img" aria-label="find-emoji">
                        🔎
                    </span>
                </div>
                <div className="home-find-me-topic-element topic">
                    Got any questions? Feel free to reach out.
                </div>

                <div className="home-social-boxes-container social-boxes">
                    <a
                        href="https://github.com/D3VPAND3Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-social-box-element box github"
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
                        className="home-social-box-element box linkedin"
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
                        className="home-social-box-element box instagram"
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

            <section className="home-contact-section-main contact">
                <div className="home-contact-topic-element topic">Need a developer ?</div>
                <Link to="/contact">
                    <div className="home-contact-title-element title">Let's Collaborate &#8594;</div>
                </Link>
            </section>
        </div>
    );
}

export default Home;