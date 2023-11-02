import ItemListMultiple from "../ItemListMultiple.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const images = ["/10ChooseSauce.png"];
const sauces = [
  "Basilo",
  "Chipotle",
  "Garlic",
  "Red Chilli",
  "Secret BBQ",
  "Trezigo",
  "Verde",
];

const Story7 = ({ makeDecision, back }) => {
  const [sauce, setSauce] = useState("");

  const handleSubmit = () => {
    makeDecision(sauce);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${images[0]})`;
  });

  return (
    <div className="background-switcher">
      <div>
        <div className="dan-thinking">
          I'm really dissapointed there's no tomato sauce. But I doubt Dana
          would want that.
        </div>
        <div className="dan-thinking2">Which sauces should we include?</div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Select Sauces </label>
            <ItemListMultiple
              items={sauces}
              onSelectItem={setSauce}
            ></ItemListMultiple>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={back}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default Story7;
