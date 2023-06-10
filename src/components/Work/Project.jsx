import "./Project.scss"
import { products } from "./DataFile";
import Card from "./Card";
import { useEffect } from "react";
import { gsap } from "gsap";

const ProductList = () => {

  //animation for project
  useEffect(() => {
    gsap.from(".pl-texts", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "easeInOut",
    });

    // gsap.from(".pl-list", {
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.8,
    //   delay: 1.2,
    //   ease: "easeInOut",
    // });


  }, []);

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
      <div className="pl-list">
        {products.map((item) => (
          <Card key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

