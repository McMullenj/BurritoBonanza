import React, { useState, useEffect } from "react";
import "./Stories.css";

const imagesBig = ["/11AnythingElse.png"];
const imagesSmall = ["/11AnythingElse-Small.png"];
let images = imagesBig


const Story8 = ({ makeDecision, back }) => {
  const [anything, setAnything] = useState("");

  const handleSubmit = () => {
    makeDecision(anything);
  };

  const handleAnythingChange = (event) => {
    setAnything(event.target.value);
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
          I think that's everything for Dana's Burrito order
        </div>
        <div className="dan-thinking2">
          Is there anything else I might have missed or you want included?
        </div>
        <div className="typing-animation" style={{ marginTop: "100px" }}>
          <div style={{ paddingBottom: "20px" }}>
            <input
              type="text"
              placeholder="Add anything"
              value={anything}
              onChange={handleAnythingChange}
            />
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

export default Story8;
