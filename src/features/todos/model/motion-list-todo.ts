import { easeInOut } from "motion";

const animEmptyBlock = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "easeIn" },
};

const animTaskDelete = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1, y: -30 },
  transition: {
    duration: 0.3,
    ease: easeInOut,
  },
};

export { animEmptyBlock, animTaskDelete };
