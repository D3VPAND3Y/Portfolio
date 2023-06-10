import React from 'react'
import Dev1 from "../assets/Dev.png";
import "./styled.scss"

const AboutSection = () => {
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
    {/* <div className="about-section__container__image"> */}
    <img className='about-section__container__image' src={Dev1} alt="Dev-Pandey" border="0" />
    {/* </div> */}
    <div></div>
    </div>
    </div>

  )
}

export default AboutSection;
