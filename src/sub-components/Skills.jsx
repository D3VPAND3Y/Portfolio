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
          </div>
        </div>
                {/* <div className="tag-cloud-div">
                <TagCloud
        className="tag-cloud"
        // should not move according to the mouse
        disableRandomColor={true}
        options={() => ({
            radius: 300,
            maxSpeed: "fast",
            // should not follow the mouse
            freeDirection: false,
            shuffleTags: true,
            // shape: "sphere",
            shape: "spiral",

        })}
        onClickOptions={{ passive: true }}
    >
        {[
            "VSCode",
            "TypeScript",
            "React",
            "Preact",
            "Parcel",
            "Jest",
            "Next",
            "ESLint",
            "Framer Motion",
            "Three.js",
        ]}
    </TagCloud>



                        </div> */}
            </>
        );
    }



export default Skills;