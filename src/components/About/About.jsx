import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import { useEffect } from "react";
import "./About.scss";
import Skills from "../../sub-components/Skills";

// const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
    useEffect(() => {
        gsap.from(".about__inner__left__title h2", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.2,
            ease: "easeInOut",
        });
        gsap.from(".about__inner__left__content p", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.4,
            ease: "easeInOut",
        });
        gsap.from(".about__inner__left__content__buttons", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.6,
            ease: "easeInOut",
        });
        gsap.from(".about__inner__right__img", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.8,
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
                I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a strong background in web development and design, and I am always looking to expand my knowledge and stay up to date with the latest technologies. I am a quick learner and a team player who is always ready to take on new challenges.
              </p>
              <br />
              <p>
                I have always supported the idea of a minimalistic and
                user-focused approach to design and development, which I indeed
                imbibe when building scalable and fully responsive web
                applications.
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1FjgKfpRUxuswo2pMx10xboXDrb0RMrKR"
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

