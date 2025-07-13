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

export { animManagerBlock };
