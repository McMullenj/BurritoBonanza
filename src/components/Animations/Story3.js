import ItemList from "../ItemList.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const imagesBig = ["/6ChooseToasted.png"];
const imagesSmall = ["/6ChooseToasted-Small.png"];
let images = imagesBig;

const yesno = ["Yes", "No"];

const Story3 = ({ makeDecision, back }) => {
  const [toasted, setToasted] = useState("");

  const handleSubmit = () => {
    makeDecision(toasted);
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
          I found this fire while playing my guitars and practicing the keys
          with my toes
        </div>
        <div className="dan-thinking2">
          While we are here, shall we make Dana's meal toasted?
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Toasted +$0.5? (burritos only) </label>
            <ItemList items={yesno} onSelectItem={setToasted}></ItemList>
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

export default Story3;
