import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import { useEffect } from "react";
import "./About.scss";
import Skills from "../../sub-components/Skills";

// const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  // animation for the about page
  useEffect(() => {
    gsap.from(".about__inner", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "easeInOut",
    });
  }, []);

  

  return (
    <>
         <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Dev <br /> Pandey.
            </div>
            <div className="desc">
              <p>
              Hello, I am an undergraduate student currently pursuing my B.Tech degree at the prestigious Netaji Subhas University of Technology. I am passionate about learning new technologies and applying them to solve real world problems.
              </p>
              <br />
              <p>
              I love designing and coding and am a self taught developer with a positive attitude and a growth mindset. I am a quick learner and a team player who is always ready to take on new challenges.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1vWaEK622XXJKiRaZns8GGH0rtxKpNL7d/view?usp=sharing"
              download
            >Download Resume
            </a>

          </div>
            <Skills/>
          </div>
    </>
  );
};

export default About;

