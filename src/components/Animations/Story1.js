import ItemList from "../ItemList.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const people = [
  "Dana",
  "Dan",
  "Alisha",
  "Olivia",
  "Harriet",
  "Charlotte",
  "Fiona",
  "David",
  "Richard",
  "Amanda",
  "Matt",
  "Jack",
  "Jess",
  "Emma",
  "Grace",
  "James",
  "Bjorn",
  "Corey",
  "Sophie",
  "Noah",
  "Just testing the app",
  'Other (Add to the "Anything else" section later on)',
];
const images = [
  "/2DanaWantsBurrito.png",
  "/3DanThinksBurrito.png",
  "/4DanChoosesBurrito.png",
];

//16000,9000,5000
const timers = [16000, 9000, 7000];

const Story1 = ({ makeDecision }) => {
  const decision = () => {
    return (
      <div>
        <div className="dan-thinking" style={{ marginTop: "200px" }}>
          You! You must help me get the burrito. What was your name again?
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Select your name:</label>
            <ItemList items={people} onSelectItem={makeDecision}></ItemList>
          </div>
        </div>
        <div></div>
      </div>
    );
  };

  const danaSpeech = (
    <div>
      <div className="typing-animation-long">
        Hi there I'm Dana and I'm a really good engineer.
      </div>
      <div className="typing-animation-long">
        But with all this engineering, I really feel like eating a Burrito.
      </div>
      <div className="dan-talking">
        Do you hear that? That really pretty woman named "Dana" wants a
        burrito...
      </div>
      <div className="dan-talking2">
        Maybe I can win her heart by getting her one
      </div>
      <div className="dan-talking2">
        since she's so busy with her engineering
      </div>
      <img
        className="daniel-hearing"
        src="/2DanHearsBurrito.png"
        alt="Dan listening"
      />
    </div>
  );

  const danSpeech = (
    <div>
      <div className="dan-thinking">
        I need to get the best burrito possible but I'm terrible at making
        decisions
      </div>
      <div className="dan-thinking2">
        I'll need to get help to be more organised just like Dana
      </div>
    </div>
  );

  const texts = [danaSpeech, danSpeech, decision];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    // Function to switch background and text
    const switchBackground = () => {
      if (currentIndex === 2) {
      } else {
        const nextIndex = (currentIndex + 1) % images.length;
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

  useEffect(() => {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  }, [currentIndex]);

  return <div className="background-switcher">{currentText}</div>;
};

export default Story1;
