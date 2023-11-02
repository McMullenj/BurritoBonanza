import React, { useState, useEffect } from "react";
import "./Stories.css";

const timers = [8000, 5000, 5000];

const StoryStart = ({ goToStory }) => {
  function changeToBlack() {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "none";
  }

  function runStory() {
    setTimeout(() => {
      goToStory();
    }, 5000);
  }

  const text3 = () => {
    return (
      <div>
        <div className="typing-animation">In a world not unlike our own...</div>
        {runStory()}
      </div>
    );
  };

  const text2 = (
    <div>
      <div className="typing-animation">A long long time ago...</div>
    </div>
  );

  const text1 = (
    <div>
      {changeToBlack()}
      <div className="typing-animation">"The burrito you never order...</div>
      <div className="dan-thinking2">is the burrito you never eat"</div>
      <div className="dan-talking">-- Abraham Nachos </div>
    </div>
  );

  const texts = [text1, text2, text3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    // Function to switch background and text
    const switchBackground = () => {
      if (currentIndex === 2) {
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

export default StoryStart;
