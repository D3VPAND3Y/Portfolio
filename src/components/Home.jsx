import { Fragment } from "react";
import "./Home.scss"
import TextSpan from "./TextSpan";
const Home = () => {
    const sentence = "Hi, I'm DEVPANDEY".split("");
    const sentence3 = " I love designing and coding".split("");

    const sentence2 = "I'm a Full Stack Developer".split("");

    return (
        <div>
        <div className="text-container">
        {sentence.map((letter, index) => {
            return <TextSpan  key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
        })}
        </div>
        <div className="text-container">
        {sentence2.map((letter, index) => {
            return <TextSpan  key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
        })}
        </div>
        <div className="text-container">
        {sentence3.map((letter, index) => {
            return <TextSpan  key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>;
        })}
        </div>

        </div>
    );
    }

export default Home;