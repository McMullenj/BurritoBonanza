import ItemList from "../ItemList.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const imagesBig = ["/8ChooseProtein.png"];
const imagesSmall = ["/8ChooseProtein-Small.png"];
let images = imagesBig;

const proteins = [
  "Barbacoa Beef",
  "Chicken",
  "Lamb",
  "Pulled Pork",
  "Spicy Cauliflower",
];

const Story5 = ({ makeDecision, back }) => {
  const [protein, setProtein] = useState("");

  const handleSubmit = () => {
    makeDecision(protein);
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      images = imagesSmall;
    } else {
      images = imagesBig;
    }
    document.body.style.backgroundImage = `url(${images[0]})`;
  });

  return (
    <div className="background-switcher">
      <div>
        <div className="dan-thinking">
          Time to add some protein. What should we add?
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Select Protein </label>
            <ItemList items={proteins} onSelectItem={setProtein}></ItemList>
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

export default Story5;
