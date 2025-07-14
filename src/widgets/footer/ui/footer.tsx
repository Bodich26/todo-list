import { motion } from "motion/react";
import { animFooterBlock } from "../model/motion-list-footer";

export const Footer = () => {
  return (
    <footer className="text-neutral-200 text-center p-3">
      <motion.div {...animFooterBlock}>©Copyright Bodich 2025</motion.div>
    </footer>
  );
};
