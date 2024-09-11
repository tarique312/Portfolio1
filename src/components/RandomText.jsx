import React from "react";
import { motion } from "framer-motion";
import "./RandomText.css"; // Add basic styles

const RandomScrollText = ({ text }) => {
  const letters = text.split(""); // Split dynamic text into individual letters

  const letterVariants = {
    initial: { opacity: 0, y: 50, rotate: -180 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.1, // Staggered entrance for each letter
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <div className="random-scroll-container">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className="random-letter"
        >
          {letter === " " ? "\u00A0" : letter}{" "}
          {/* Ensure spaces are rendered */}
        </motion.span>
      ))}
    </div>
  );
};

export default RandomScrollText;
