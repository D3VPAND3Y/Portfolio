import "./Double.scss";

import { useRef } from "react";

export default function Index({ projects, reversed }) {
    const firstImage = useRef(null);
    const secondImage = useRef(null);

    const handleMouseEnter = (e) => {
        const { clientX } = e;
        const xPercent = (clientX / window.innerWidth) * 100;
        console.log(window.innerWidth);
        if(window.innerWidth < 1025){
            // const firstImagePercent = 100;
            // const secondImagePercent = 100;
            // firstImage.current.style.width = `${firstImagePercent}%`;
            // secondImage.current.style.width = `${secondImagePercent}%`;
            return;
        }
        else{
            const firstImagePercent = 66.66 - (xPercent*0.11);
            const secondImagePercent = 33.33 + (xPercent*0.33);
            firstImage.current.style.width = `${firstImagePercent}%`;
            secondImage.current.style.width = `${secondImagePercent}%`;
        }

    }


    return (
        <div onMouseMove={(e) => {handleMouseEnter(e)}} className="double">
            <div ref={firstImage} className="imageContainer">
                <div className="stretchyWrapper">
                <a href={projects[0].link} target="_blank" rel="noreferrer">
                     <img src={projects[0].img} alt=""/>
                </a>
                </div>
                <div className="body">
                    <h3>{projects[0].name}</h3>
                    <p>{projects[0].description}</p>
                    <p>{projects[0].tech}</p>
                </div>
            </div>

            <div ref={secondImage} className="imageContainer">
                <div className="stretchyWrapper">
                <a href={projects[1].link} target="_blank" rel="noreferrer">
                    <img src={projects[1].img} alt={"image"}/>
                </a>
                </div>
                <div className="body">
                    <h3>{projects[1].name}</h3>
                    <p>{projects[1].description}</p>
                    <p>{projects[1].tech}</p>
                </div>
            </div>
        </div>
    );
}