import "./Double.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Index({ projects, reversed }) {
    const firstImage = useRef(null);
    const secondImage = useRef(null);
    const doubleRef = useRef(null);

    useEffect(() => {
        gsap.from(doubleRef.current.querySelectorAll(".imageContainer"), {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: doubleRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(doubleRef.current.querySelectorAll(".body h3"), {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.3,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: doubleRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(doubleRef.current.querySelectorAll(".body p"), {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5,
            ease: "easeInOut",
            scrollTrigger: {
                trigger: doubleRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    const handleMouseEnter = (e) => {
        const { clientX } = e;
        const xPercent = (clientX / window.innerWidth) * 100;
        
        if(window.innerWidth < 1025){
            return;
        }
        else{
            const firstImagePercent = 66.66 - (xPercent*0.11);
            const secondImagePercent = 33.33 + (xPercent*0.33);
            
            // Use GSAP for smooth transitions
            gsap.to(firstImage.current, {
                width: `${firstImagePercent}%`,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(secondImage.current, {
                width: `${secondImagePercent}%`,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    }

    const handleMouseLeave = () => {
        if(window.innerWidth >= 1025){
            // Reset to default widths smoothly
            gsap.to(firstImage.current, {
                width: "66.66%",
                duration: 0.4,
                ease: "power2.out"
            });
            
            gsap.to(secondImage.current, {
                width: "33.33%",
                duration: 0.4,
                ease: "power2.out"
            });
        }
    }


    return (
        <div ref={doubleRef} onMouseMove={(e) => {handleMouseEnter(e)}} onMouseLeave={handleMouseLeave} className="double">
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