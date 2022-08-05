import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AnimatedText({ text, time }) {
  const [isAnimate, setanimate] = useState(false);
  const [counter, setCounter] = useState(time);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  //Timer for text delay
  useEffect(() => {
    if (counter <= 0) {
      setanimate(true);
      return;
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 100);
  }, [counter]);
  return (
    <div>
      {/* Animate text according to the time */}
      {isAnimate && (
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li variants={item} transition={{ duration: 0.5 }}>
            {text}
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
}

export default AnimatedText;
