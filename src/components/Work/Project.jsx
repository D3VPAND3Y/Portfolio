import "./Project.scss";
// import { boxHover, boxExit } from "../../animations";
import Card from "./Card";
import { useEffect } from "react";
import gsap from "gsap";
import  websites  from "./DataFile";
const Work = () => {

  // animation for the boxes on the work page
  useEffect(() => {
    gsap.from(".boxes", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="work-section">
      <div className="boxes">
        {websites.map((website, index) => (
          <Card className="box"
            key={index}
            hexa={website.hexa}
            title={website.title}
            description={website.description}
            image={website.image}
          />
        ))}

      </div>
    </div>
  );
};

export default Work;
