import "./Project.scss"
import { projects } from "./DataFile";
import Double from "./Double";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProductList = () => {

  useEffect(() => {
    const hasShownPreloader = sessionStorage.getItem('preloaderShown');
    const baseDelay = hasShownPreloader ? 0.5 : 3.0;

    // Initial entrance animations for the header section
    gsap.from(".work-page-container .work-header-section .work-title-element", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: baseDelay,
      ease: "easeInOut",
    });

    gsap.from(".work-page-container .work-header-section .work-description-element", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: baseDelay + 0.3,
      ease: "easeInOut",
    });

    // Animate project containers with ScrollTrigger
    gsap.from(".work-page-container .work-project-container", {
      y: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".work-page-container .work-projects-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div className="work-page-container pl">
      <div className="work-header-section pl-texts">
        <h1 className="work-title-element pl-title">Projects</h1>
        <p className="work-description-element pl-desc">
        IDEATE. DESIGN. CODE. REPEAT.
        <br />
        Look at some of my recent projects. Feedback is always appreciated :)
        </p>
      </div>
      <div className="work-projects-section">
        <div className="work-project-container">
          <Double projects={[projects[0], projects[1]]} reversed={true}/>
        </div>
        <div className="work-project-container">
          <Double projects={[projects[2], projects[3]]}/>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

