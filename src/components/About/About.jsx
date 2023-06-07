import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import { useEffect } from "react";
import "./About.scss";
import Skills from "../../sub-components/Skills";

// const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
    
    // animation for the about page
    useEffect(() => {
        gsap.from(".about__inner__left__title h2", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.2,
            ease: "easeInOut",
        });
        gsap.from(".about__inner__left__content p", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.4,
            ease: "easeInOut",
        });
        gsap.from(".about__inner__left__content__buttons", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.6,
            ease: "easeInOut",
        });
        gsap.from(".about__inner__right__img", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1.8,
            ease: "easeInOut",
        });
    }, []);

  return (
    <>
         <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Dev <br /> Pandey.
            </div>
            <div className="desc">
              <p>
                I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a strong background in web development and design, and I am always looking to expand my knowledge and stay up to date with the latest technologies. I am a quick learner and a team player who is always ready to take on new challenges.
              </p>
              <br />
              <p>
                I have always supported the idea of a minimalistic and
                user-focused approach to design and development, which I indeed
                imbibe when building scalable and fully responsive web
                applications.
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1FjgKfpRUxuswo2pMx10xboXDrb0RMrKR"
              download
            >Download Resume
            </a>

          </div>
            <Skills/>
          </div>
    </>
  );
};

export default About;


// import  { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { Link } from "react-router-dom";
// const AboutPage = () => {
//   const [Loading, setLoading] = useState(true);
//   const controls = useAnimation();
//   const variants = {
//     hidden: { opacity: 0 },
//     enter: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         staggerChildren: 0.5,
//         ease: "easeInOut",
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: 0,
//       y: -100,
//       transition: {
//         staggerChildren: 0.5,
//       },
//     },
//   };
//   useEffect(() => {
//     if (!Loading) {
//       setTimeout(() => {
//         controls.start("enter");
//       }, 1000);
//     } else {
//       controls.start("hidden");
//       setTimeout(() => setLoading(false), 2000);
//     }
//   }, [Loading, controls]);

//   return (
//     <>

//       <motion.section
//         variants={variants}
//         initial="hidden"
//         animate={controls}
//         exit="exit"
//         data-scroll-section
//         className="w-full h-screen grid place-content-center"
//       >
//         <div className="inline-flex flex-col items-center md:items-start space-y-6">
//           <div className="inline-flex space-x-2 items-center">
//             <div className="w-16 hidden md:flex h-0.5 bg-light"></div>
//             <p className="text-sm font-medium tracking-widest leading-snug uppercase">
//               Developer
//             </p>
//           </div>
//           <div className="inline-flex items-center md:items-start flex-col text-4xl md:text-7xl font-bold tracking-widest leading-10 uppercase">
//             <div>
//               <span className="text-stroke">Tech</span>Akhil
//             </div>
//             <div className="text-2xl md:text-7xl">Padmanabhan</div>
//           </div>
//           <div className="max-w-3xl text-center md:text-left">
//             I’m Akhil aka “TechAkhil”, a developer and designer. I can speak
//             multiple languages:, experienced in writing efficient PYTHON
//             scripts, DJANGO and REACT apps on all platforms and browsers. I deeply care about building interfaces that are usable and pleasant for
//             the user and indeed, COFFEE !
//           </div>
//         </div>
//       </motion.section>
//       <section
//         data-scroll-section
//         className="pb-12 flex items-center justify-center md:justify-end text-2xl font-medium tracking-widest leading-tight text-light uppercase antialiased"
//       >
//         what drives me
//       </section>
//       <section
//         data-scroll-section
//         className="w-full  text-light flex flex-col space-y-12 lg:flex-row lg:space-x-24 items-center justify-center"
//       >
//         <div>
//           <div className="drive_card relative w-72 h-96 bg-gray-700">
//             <div
//               data-scroll
//               data-scroll-speed="1.6"
//               className="absolute -left-8 top-8 flex flex-col uppercase"
//             >
//               <div className="text-xl font-bold text-stroke-sm tracking-widest">
//                 desire to
//               </div>
//               <div className="text-4xl font-bold tracking-wider">Innovate</div>
//             </div>
//             <img
//               // onLoad={() => setTimeout(() => setLoading(false), 1000)}
//               className="object-cover w-full h-full object-center"
//               src="https://i0.wp.com/trippy.me/wp-content/uploads/in-your-hands.gif"
//               alt=""
//               draggable={false}
//             />
//           </div>
//           <div className="w-64 text-sm">
//             I always try my hardest to stand out from the crowd and spend a lot
//             of time coming up with satisfying and unique designs and solutions.
//           </div>
//         </div>
//         <div>
//           <div className="drive_card relative w-72 h-96 bg-gray-700">
//             <div
//               data-scroll
//               data-scroll-speed="1.6"
//               className="absolute -left-8 top-8 flex flex-col uppercase"
//             >
//               <div className="text-xl font-bold text-stroke-sm tracking-widest">
//                 desire to
//               </div>
//               <div className="text-4xl font-bold tracking-wider">learn</div>
//             </div>
//             <img
//               className="object-cover w-full h-full object-center"
//               src="https://i2.wp.com/trippy.me/wp-content/uploads/soul-window.gif?resize=450%2C450&ssl=1"
//               alt=""
//               draggable={false}
//             />
//           </div>
//           <div className="w-64 text-sm">
//             It feels euphoric when you step into the unknown and discover
//             something new and valuable. I try to learn something from everything
//             I do.
//           </div>
//         </div>
//         <div>
//           <div className="drive_card relative w-72 h-96 bg-gray-700">
//             <div
//               data-scroll
//               data-scroll-speed="1.6"
//               className="absolute -left-8 top-8 flex flex-col uppercase"
//             >
//               <div className="text-xl font-bold text-stroke-sm tracking-widest">
//                 desire to
//               </div>
//               <div className="text-4xl font-bold tracking-wider">support</div>
//             </div>
//             <img
//               className="object-cover w-full h-full object-center"
//               src="https://i1.wp.com/trippy.me/wp-content/uploads/cosmic.gif"
//               alt=""
//               draggable={false}
//             />
//           </div>
//           <div className="w-64 text-sm">
//           Its the support that kept me going on the journey I've begun. It is always a joy to give back to the community that shaped me to who I am today.
//           </div>
//         </div>
//       </section>
//       <section
//         data-scroll-section
//         className="flex flex-col  items-center justify-evenly h-screen"
//       >
//         <div className="uppercase text-9xl font-bold text-center">
//           Lets
//           <Link href="/contact">
//             <a className="fx-underline text-stroke">Talk</a>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutPage;