import ItemList from "../ItemList.js";
import React, { useState, useEffect } from "react";
import "./Stories.css";

const meals = [
  "Burrito",
  "Bowl",
  "Signature Burrito",
  "Signature Bowl",
  "Quesadilla Stack",
  "Nachos",
];

const sizes = ["Big", "Medium", "Small", "NA"];

const imagesBig = ["/5ChooseMealAndSize.png"];
const imagesSmall = ["/5ChooseMealAndSize-Small.png"];
let images = imagesBig;

const timers = [8000];

const Story2 = ({ makeDecision, back }) => {
  const [meal, setMeal] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = () => {
    console.log("Helloo" + meal + size);

    makeDecision(meal, size);
  };

  useEffect(() => {
    // This will log the updated meal and size whenever they change
    console.log("Meal changed:", meal);
    console.log("Size changed:", size);
  }, [meal, size]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to switch background and text
    const switchBackground = () => {
      if (currentIndex === 0) {
      } else {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
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
    if (window.matchMedia("(max-width: 800px)").matches) {
      images = imagesSmall;
    } else {
      images = imagesBig;
    }
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  }, [currentIndex]);

  return (
    <div className="background-switcher">
      <div>
        <div className="dan-thinking">
          I just realised... she's gluten free so she may not want a burrito
        </div>
        <div className="dan-thinking2">
          There are a lot of options so what should we get?
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <label>Select a Meal</label>
            <ItemList items={meals} onSelectItem={setMeal}></ItemList>
          </div>
        </div>

        <div className="typing-animation" style={{ marginTop: "20px" }}>
          <label>Size (For Burrito, Bowls and Nachos)</label>
          <ItemList items={sizes} onSelectItem={setSize} />
        </div>

        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={back}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default Story2;
