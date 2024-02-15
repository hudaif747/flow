/** This is the animation settings for framer to use scroll effect */
export const pageAnimation = {
  variants: {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-100vh",
    },
  },
  transition: {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  },
};
