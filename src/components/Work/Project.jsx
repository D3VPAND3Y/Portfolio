import "./Project.scss"
import { projects } from "./DataFile";
import Double from "./Double";
import { useEffect } from "react";
import { gsap } from "gsap";

const ProductList = () => {

  // useEffect(() => {
  //   gsap.from(".pl-texts", {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1,
  //     delay: 1.2,
  //     ease: "easeInOut",
  //   });

  // }, []);

  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
        IDEATE. DESIGN. CODE. REPEAT.
        <br />
        Look at some of my recent projects. Feedback is always appreciated :)
        </p>
      </div>
        <Double projects={[projects[0], projects[1]]} reversed={true}/>
        <Double projects={[projects[2], projects[3]]}/>
    </div>
  );
};

export default ProductList;

