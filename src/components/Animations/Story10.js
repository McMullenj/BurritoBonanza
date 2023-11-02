import React, { useState, useEffect } from "react";
import "./Stories.css";

const timers = [6000, 5000, 5000, 5000];

const Story10 = () => {
  function changeToBlack() {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "none";
  }

  const text5 = (
    <div>
      <div className="dan-thinking">Your order has been placed</div>;
    </div>
  );
  const text4 = (
    <div>
      <div className="dan-thinking">This is based roughly on a true story</div>
    </div>
  );
  const text3 = (
    <div className="typing-animation">
      <div>Given to you at 1:45pm on 04/11/2023</div>
    </div>
  );

  const text2 = (
    <div className="typing-animation">
      <div>You got to keep the burrito you made</div>
    </div>
  );

  const text1 = (
    <div>
      {changeToBlack()}
      <div className="typing-animation">Dan and Dana later got married</div>
    </div>
  );

  const texts = [text1, text2, text3, text4, text5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    // Function to switch background and text
    const switchBackground = () => {
      if (currentIndex === 4) {
      } else {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setCurrentText(texts[nextIndex]);
      }
    };

    // Set up the timer to switch backgrounds
    const backgroundSwitchInterval = setInterval(
      switchBackground,
      timers[currentIndex]
    );

    // Clean up the timer on unmount
    return () => clearInterval(backgroundSwitchInterval);
  }, [currentIndex]);

  return <div className="background-switcher">{currentText}</div>;
};

export default Story10;
