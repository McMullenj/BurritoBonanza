import React, { useState, useEffect } from "react";
import "./Stories.css";

const imagesBig = ["/12GiveBurrito.png", "/12OtherBurrito.png"];
const imagesSmall = ["/12GiveBurrito-Small.png", "/12OtherBurrito-Small.png"];
let images = imagesBig;

const Story9 = ({ makeDecision, makeDecision2, summary }) => {
  const { person, meal, size, toasted, bean, rice, protein, salad, sauce } =
    summary;

  const handleSubmit1 = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setCurrentText(texts[nextIndex]);

    setTimeout(() => {
      makeDecision();
    }, 7000);
  };

  const handleSubmit2 = () => {
    makeDecision2();
  };

  const danaSpeech = () => {
    return (
      <div>
        <div className="typing-animation-long">
          Wow that's so nice of you! I actually already got you and I a Burrito
        </div>
        <div className="typing-animation">You can keep that one you made</div>
      </div>
    );
  };

  const danSpeech = () => {
    return (
      <div>
        <div className="dan-thinking">
          Hi Dana, I heard you wanted a burrito so I went and got you one with:
        </div>
        <div className="dan-thinking2">
          <div>
            Name:{person} {meal} Size: {size} | Beans: {bean} | Rice: {rice}
          </div>
          <div>
            {protein} Toasted: {toasted}
          </div>
          <div>
            Salads: {salad} | Sauce: {sauce}
          </div>
          Is this right?
          <button onClick={handleSubmit1} style={{ alignItems: "center" }}>
            Yes
          </button>
          <button onClick={handleSubmit2} style={{ alignItems: "center" }}>
            No
          </button>
        </div>
      </div>
    );
  };

  const texts = [danSpeech, danaSpeech];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      images = imagesSmall;
    } else {
      images = imagesBig;
    }
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  }, [currentIndex]);

  return <div className="background-switcher">{currentText}</div>;
};

export default Story9;
