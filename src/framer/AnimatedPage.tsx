import { motion } from "framer-motion";
import { pageAnimation } from "./animations"; // Import your animation settings

type AnimatedPageProps = {
  children: React.ReactNode;
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => (
  <motion.div
    // initial="initial"
    // animate="in"
    // exit="out"
    // variants={pageAnimation.variants}
    // transition={pageAnimation.transition}
    transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
  >
    {children}
  </motion.div>
);

export default AnimatedPage;
