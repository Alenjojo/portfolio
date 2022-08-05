import React, { useState, useEffect } from "react";
import "./styles/LoadingBar.css";

function LoadingBar() {
  const [isAnimate, setanimate] = useState(true);
  const [counter, setCounter] = useState(3);
  //Timer for loading bar
  useEffect(() => {
    if (counter <= 0) {
      setanimate(false);
      return;
    }
    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter]);
  return (
    <>
      {isAnimate && (
        <div class="wrapper">
          <div class="progressbar">
            <div class="stylization"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoadingBar;
