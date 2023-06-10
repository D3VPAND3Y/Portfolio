//import TagCanvas from 'jquery-tagcanvas';
//require('jquery-tagcanvas');
// import TagCloud from 'react-tag-cloud';
import "./Skills.scss";

import { TagCloud } from "@frank-mayer/react-tag-cloud";
//import randomColor from 'randomcolor';
import Dev1 from "../assets/Dev-1.jpeg";

const Skills = () => {

  const sentence = "About Me".split("");
        return(
          <>
          <div className="a">
          <div className="a-left">
            {/* <div className="a-card bg"></div> */}
            <div className="a-card">
              <img
                src={Dev1}
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">
            About Me
            </h1>
            <p className="a-sub">
            Hello, I'm Dev Pandey, an undergraduate student currently pursuing my B.Tech degree at the prestigious Netaji Subhas University of Technology. I am a full stack web developer with a strong passion for creating exceptional user experiences.
            </p>
            <p className="a-desc">
            I am also skilled in UI/UX design. By combining my technical knowledge with my creative mindset, I strive to produce the best possible designs.
            Apart from this, I am also a competitive programmer and have a knack for problem solving which helps me come up with creative solutions to problems.
            </p>
            <div className="Skills">
              <div className="skills-title">
                <h1 className="a-title">Skills.</h1>
              </div>
              <div className="skills-list">
                <div className="company">
                  <ul className="tasks">
                    <li>C</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BootStrap</li>
                    <li>React JS</li>
                  </ul>
                </div>
                <div className="company">
                  <ul className="tasks">
                    <li>Canva</li>
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>UI/UX</li>
                  </ul>
                </div>
                <div className="company">
                  <ul className="tasks">
                    <li>FireBase</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Node JS</li>
                  </ul>
                </div>
                </div>
              </div>
          </div>
        </div>

            </>
        );
    }



export default Skills;