import React from 'react'
import Dev1 from "../assets/Dev.png";
import "./styled.scss"

const AboutSection = () => {
  return (

    <div className="about-section">
    <h1 className="about-section__container__text__title">
    About<br /> Me{" "}
            <span role="img" aria-label="find-emoji">
            👨‍💻
            </span></h1>
    <div className="about-section__container">
    <div className="about-section__container__text">

    <p className="about-section__container__text__description">
    I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a strong background in web development and design, and I am always looking to expand my knowledge and stay up to date with the latest technologies. I am a quick learner and a team player who is always ready to take on new challenges.
    </p>
    </div>
    {/* <div className="about-section__container__image"> */}
    <img className='about-section__container__image' src={Dev1} alt="Dev-Pandey" border="0" />
    {/* </div> */}
    <div></div>
    </div>
    </div>

  )
}

export default AboutSection;
