
import {motion,useAnimationControls} from "framer-motion";
import {useState} from "react";



const TextSpan = ({children}) => {
    const [isHovered, setIsHovered] = useState(false);

    const controls = useAnimationControls();
    const rubberBand = () => {
        controls.start({
        transform : [
            "scale3d(1,1,1)",
            "scale3d(1.5,0.55,1)",
            "scale3d(.75,1.25,1)",
            "scale3d(1.3,.8,1)",
            "scale3d(.9,1.1,1)",
            "scale3d(1,1,1)",

        ],
        // transition : {
        //     times : [0,.4,.6,.6,1]
        // },


        });
        setIsHovered(true);

    }



    return (
        <motion.span
            className="text-span"
            onHoverStart={
                () => {
                    setIsHovered(true);
                    rubberBand();
                }
            }
            onHoverEnd={
                () => {
                    setIsHovered(false);

                }
            }
            animate={controls}
        >
            {children}
        </motion.span>
    );
};


export default TextSpan;