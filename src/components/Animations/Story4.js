import ItemList from "../ItemList.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const imagesBig = ["/7ChooseBeansAndRice.png"];
const imagesSmall = ["/7ChooseBeansAndRice-Small.png"];
let images = imagesBig;

const yesno = ["Yes", "No"];
const rices = ["White Rice", "Black Rice", "None"];

const Story4 = ({ makeDecision, back }) => {
  const [rice, setRice] = useState("");
  const [bean, setBean] = useState("");

  const handleSubmit = () => {
    makeDecision(bean, rice);
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
          Little do most people know, I had a bean shop before I sold
        </div>
        <div className="dan-thinking">
          my life to being cool and playing music.
        </div>
        <div className="dan-thinking2">
          I'll bring back my bean making skills just for Dana
        </div>
        <div className="dan-thinking2">
          She might want to change the rice too
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Beans? </label>
            <ItemList items={yesno} onSelectItem={setBean}></ItemList>
          </div>
        </div>
        <div className="typing-animation" style={{ marginTop: "20px" }}>
          <label>Type of Rice: </label>
          <ItemList items={rices} onSelectItem={setRice} />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={back}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default Story4;
