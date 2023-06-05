import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import { useEffect } from "react";
import "./About.scss";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {

    // when the link is clicked, the page will scroll to the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // animation for the about page
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

        <motion.div
            className="about__inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
        >
            <div className="about__inner__left">
                <div className="about__inner__left__title">
                    <h2>Hi, I am Dev Pandey</h2>
                </div>
                <div className="about__inner__left__content">
                    <p>
                        I am a Full Stack Developer based in India. I have a passion for
                        web design and love to create for web and mobile devices.
                    </p>
                    <p>
                        I have a passion for web design and love to create for web and
                        mobile devices.
                    </p>
                    <div className="about__inner__left__content__buttons">
                        <a
                            href="/"
                            className="button button--flex button--small about__inner__left__content__button"
                        >
                            Download CV
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="about__inner__right">
                <div className="about__inner__right__img">
                    {/* <img src="assets/img/about.jpg" alt="" /> */}
                </div>
            </div>
        </motion.div>
    </>
  );
};

export default About;