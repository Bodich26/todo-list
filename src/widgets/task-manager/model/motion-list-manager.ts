import { easeInOut } from "motion";

const animManagerBlock = {
  initial: {
    scale: 0.8,
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  animate: {
    scale: 1,
    opacity: 1,
    backdropFilter: "blur(16px)",
  },
  transition: { duration: 1, ease: easeInOut },
};

const animManagerTitle = {
  initial: {
    scale: 0.9,
    opacity: 0,
    y: -10,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
  transition: { duration: 2, ease: easeInOut },
};

export { animManagerBlock, animManagerTitle };
