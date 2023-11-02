import ItemListMultiple from "../ItemListMultiple.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const images = ["/9ChooseSalad.png"];
const salads = [
  "Cheese",
  "Sour Cream",
  "Vegan Cheese",
  "Vegan Sour Cream",
  "Guacamole (+$2)",
  "Lettuce",
  "Tomato Salsa",
  "Corn",
  "Onion",
  "Jalapenos",
  "lime",
];
const Story6 = ({ makeDecision }) => {
  const [salad, setSalad] = useState("");

  const handleSubmit = () => {
    makeDecision(salad);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${images[0]})`;
  });

  return (
    <div className="background-switcher">
      <div>
        <div className="dan-thinking">
          I've been growing this vege garden just to impress Dana
        </div>
        <div className="dan-thinking2">
          What do you think she would want in her meal?
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Select Salads </label>
            <ItemListMultiple
              items={salads}
              onSelectItem={setSalad}
            ></ItemListMultiple>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Story6;
