//import TagCanvas from 'jquery-tagcanvas';
//require('jquery-tagcanvas');
// import TagCloud from 'react-tag-cloud';
import "./Skills.scss";

import { TagCloud } from "@frank-mayer/react-tag-cloud";
//import randomColor from 'randomcolor';
import Dev1 from "../assets/Dev-1.jpeg";

const Skills = () => {
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
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              It is a long established fact that a reader will be distracted by the
              readable content.
            </p>
            <p className="a-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
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