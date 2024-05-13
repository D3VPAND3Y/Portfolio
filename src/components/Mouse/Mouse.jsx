import { useEffect, useRef } from 'react';
import './Mouse.scss';

const Mouse = () => {
    let cursorRef = useRef();
  let cursorRef2 = useRef();

  useEffect(() => {
    // custom cursor
    const cursorList = document.addEventListener("mousemove", (e) => {
      cursorRef.current.setAttribute(
        "style",
        `transform: translate3d(${e.pageX }px, ${e.pageY }px, 0px)`
      );
      cursorRef2.current.setAttribute(
        "style",
        `transform: translate3d(${e.pageX + 10}px, ${e.pageY + 10}px, 0px)`
      );
    });

    // return () => {
    //   document.removeEventListener("mousemove", cursorList);
    // };
  }, []);
      return (
        <div className="Mouse" >
        <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorRef2} className="cursor cursor2"></div>
        </div>
      );
}

export default Mouse;
