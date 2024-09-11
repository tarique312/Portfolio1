// ProgressBarComponent.js
import React, { useEffect, useRef } from "react";
import ProgressBar from "progressbar.js";

const ProgressBarComponent = ({ progress, shape = "line" }) => {
  const progressRef = useRef(null);
  let progressBar = null;

  useEffect(() => {
    // Initialize the progress bar based on the selected shape
    progressBar = new ProgressBar.Line(progressRef.current, {
      strokeWidth: 2,
      color: "#76c7c0",
      trailColor: "#eee",
      trailWidth: 1,
      easing: "easeInOut",
      duration: 1400,
      text: {
        value: "0%",
        style: {
          color: "#ada6a6",
          position: "absolute",
          right: "0",
          top: "10px",
          padding: 0,
          margin: 0,
          transform: null,
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + "%");
      },
    });

    // Animate to the current progress value
    progressBar.animate(progress);

    return () => {
      progressBar.destroy(); // Cleanup when component unmounts
    };
  }, [progress, shape]);

  return (
    <div ref={progressRef} style={{ position: "relative", height: "40px" }} />
  );
};

export default ProgressBarComponent;
