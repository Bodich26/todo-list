import { easeInOut } from "motion";

const animFooterBlock = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: -20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
  transition: { duration: 4, ease: easeInOut },
};

export { animFooterBlock };
