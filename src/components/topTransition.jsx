import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: "-50vh" },
  in: { opacity: 1, y: "0" },
  out: { opacity: 0, y: "50vh" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.3,
};

const withTransition = (WrappedComponent) => {
  return (props) => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );
};

export default withTransition;
