import { motion } from "motion/react";
import { animEmptyBlock } from "../model/motion-list-todo";

export const TodoEmpty = () => {
  return (
    <motion.div
      {...animEmptyBlock}
      transition={{ duration: 1, ease: "easeIn" }}
      className="text-center font-medium text-md text-neutral-200 absolute left-[50%] -translate-x-1/2 z-10 pointer-events-none"
    >
      You have no tasks
    </motion.div>
  );
};
