import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dev1 from "../assets/Dev.png";
import "./styled.scss"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const hasShownPreloader = sessionStorage.getItem('preloaderShown');
    const baseDelay = hasShownPreloader ? 1.0 : 3.8; 
    console.log("Preloader shown before:", hasShownPreloader);
    console.log("Base delay:", baseDelay);
    
    // Animate title
    gsap.from(".about-section__container__text__title", {
      y: 80,
      opacity: 0,
      duration: 1,
      delay: baseDelay,
      ease: "easeInOut",
    });
    
    // Animate description paragraphs with stagger
    gsap.from(".about-section__container__text__description", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: baseDelay + 0.3,
      stagger: 0.2,
      ease: "easeInOut",
    });
    
    // Animate image
    gsap.from(".about-section__container__image", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: baseDelay + 0.6,
      ease: "easeInOut",
    });

    gsap.to(".about-section", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "easeInOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-section",
        start: "bottom 50%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (

    <div className="about-section">
    <h1 className="about-section__container__text__title">
    Me, Myself<br /> & I {" "}
            <span role="img" aria-label="find-emoji">
            👨‍💻
            </span></h1>
    <div className="about-section__container">
    <div className="about-section__container__text">

    <p className="about-section__container__text__description">
    Hii I'm Dev, passionate is the word that describes me the best. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
    </p>
    <p className="about-section__container__text__description">
      My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I'm a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
    </p>
    </div>
    <img className='about-section__container__image' src={Dev1} alt="Dev-Pandey" border="0" />
    <div></div>
    </div>
    </div>

  )
}

export default AboutSection;
