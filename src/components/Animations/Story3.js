import ItemList from "../ItemList.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const images = ["/6ChooseToasted.png"];
const yesno = ["Yes", "No"];

const Story3 = ({ makeDecision }) => {
  const [toasted, setToasted] = useState("");

  const handleSubmit = () => {
    makeDecision(toasted);
  };

  useEffect(() => {
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
        </div>
      </div>
    </div>
  );
};

export default Story3;
