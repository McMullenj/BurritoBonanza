import ItemList from ".././ItemList.js";
import React, { useState, useEffect } from "react";
import "./Story1.css";

const people = ["Dana", "Alisha", "Fiona", "Other"];

const Story1 = ({ makeDecision }) => {
  const [person, setPerson] = useState("");
  const [background, setBackground] = useState("#f0f0f0");

  () => {
    document.body.style.backgroundColor = background;
  },
    [background];

  const changeBackground = (newBackground) => {
    setBackground(newBackground);
  };

  const handleSubmit = () => {
    makeDecision(person);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  // Timer for background switching
  const timer = 5000; // Set the timer duration (in milliseconds)

  useEffect(() => {
    // Function to switch background and text
    const switchBackground = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      setCurrentText(texts[nextIndex]);
    };

    // Set up the timer to switch backgrounds
    const backgroundSwitchInterval = setInterval(switchBackground, timer);

    // Clean up the timer on unmount
    return () => clearInterval(backgroundSwitchInterval);
  }, [currentIndex]);

  return (
    <div className="background-switcher">
      <div className="typing-animation">
        <div style={{ paddingBottom: "20px" }}>
          <label>Who are you?</label>
          <ItemList items={people} onSelectItem={setPerson}></ItemList>
        </div>
        <button onClick={handleSubmit} style={{ alignItems: "center" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Story1;
