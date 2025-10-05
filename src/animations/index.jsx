import gsap from "gsap";


const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    //
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: () => {
          mobileLanding();
          sessionStorage.setItem('preloaderShown', 'true');
        },
      },
      "-=2"
    );
};

export const openMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.out",
  })
    .to(".hamburger-menu", {
      duration: 0.1,
      css: { display: "block" },
    })
    .to(".header-item", {
      duration: 0.1,
      css: { background: "none" },
    })
    .to(".cls-1", {
      duration: 0.1,
      delay: 0.3,
      css: { fill: "#ffffff" },
    })
    .to(
      [".nav-secondary", ".nav-primary"],
      {
        duration: 0.8,
        height: "100%",
        transformOrigin: "right top",
        stagger: {
          amount: 0.1,
        },
        ease: "power3.inOut",
      },
      "-=.5"
    )
    .from(
      ".nav-link",
      {
        duration: 0.5,
        x: -80,
        opacity: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "Power3.in",
      },
      "-=.3"
    );
};

export const closeMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.05,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.8,
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.1,
      },
      ease: "power3.inOut",
    })
    .to(".cls-1", {
      duration: 0.1,
      delay: -0.3,
      css: { fill: "#08e7f3" },
    })
    .to(".header-item", {
      duration: 0.5,
      css: { background: "rgba(11,11,15,.8)" },
    })
    .to(".hamburger-menu", {
      duration: 0.05,
      css: { display: "none" },
    });


};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};