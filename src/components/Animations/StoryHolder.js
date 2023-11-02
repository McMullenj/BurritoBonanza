import React, { useState, useEffect } from "react";
import "./StoryHolder.css";
import axios from "axios";
import Story1 from "./Story1.js";
import Story2 from "./Story2.js";
import Story3 from "./Story3.js";
import Story4 from "./Story4.js";
import Story5 from "./Story5.js";
import Story6 from "./Story6.js";
import Story7 from "./Story7.js";
import Story8 from "./Story8.js";
import Story9 from "./Story9.js";
import Story10 from "./Story10.js";
import StoryStart from "./StoryStart.js";

function StoryHolder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [person, setPerson] = useState("");
  const [meal, setMeal] = useState("");
  const [rice, setRice] = useState("");
  const [salad, setSalad] = useState("");
  const [protein, setProtein] = useState("");
  const [sauce, setSauce] = useState("");
  const [toasted, setToasted] = useState("");
  const [bean, setBean] = useState("");
  const [size, setSize] = useState("");
  const [anything, setAnything] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://j2t0zhcnhd.execute-api.ap-southeast-2.amazonaws.com/default/MakeBurritoOrder",
        {
          person: `${person}`,
          meal: `${meal}`,
          size: `${size}`,
          rice: `${rice}`,
          bean: `${bean}`,
          protein: `${protein}`,
          salad: `${salad}`,
          sauce: `${sauce}`,
          toasted: `${toasted}`,
          other: `${anything}`,
        }
      );
      //   alert(
      //     `Successfully Submitted your order\n${person} ${meal} Size: ${size}\nBeans: ${bean} | Rice: ${rice} | ${protein} | Toasted: ${toasted}\nSalads:${salad}\nSauce: ${sauce}`
      //   );
    } catch (error) {
      alert("Something went wrong, please contact James: ", error);
    }
  };

  useEffect(() => {
    // Trigger the fade-in effect after a delay (e.g., 1 second)
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleStory1Click = (chosenPerson) => {
    console.log("person: " + chosenPerson);

    setPerson(chosenPerson);
    setCurrentStep(currentStep + 1);
  };

  const handleStory2Click = (chosenMeal, chosenSize) => {
    setMeal(chosenMeal);
    setSize(chosenSize);
    setCurrentStep(currentStep + 1);
  };

  const handleStory3Click = (chosenToasted) => {
    setToasted(chosenToasted);
    setCurrentStep(currentStep + 1);
  };

  const handleStory4Click = (chosenBean, chosenRice) => {
    setBean(chosenBean);
    setRice(chosenRice);
    setCurrentStep(currentStep + 1);
  };

  const handleStory5Click = (chosenProtein) => {
    setProtein(chosenProtein);
    setCurrentStep(currentStep + 1);
  };

  const handleStory6Click = (chosenSalad) => {
    setSalad(chosenSalad);
    setCurrentStep(currentStep + 1);
  };

  const handleStory7Click = (chosenSauce) => {
    setSauce(chosenSauce);
    setCurrentStep(currentStep + 1);
  };

  const handleStory8Click = (chosenAnything) => {
    setAnything(chosenAnything);
    setCurrentStep(currentStep + 1);
  };

  const handleStory9ClickYes = () => {
    handleSubmit();
    setCurrentStep(currentStep + 1);
  };
  const handleStory9ClickNo = () => {
    setCurrentStep(2);
  };

  const goBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <StoryStart goToStory={handleStory9ClickNo} />
        </div>
      )}
      {currentStep === 2 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story1 makeDecision={handleStory1Click} />
        </div>
      )}
      {currentStep === 3 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story2 makeDecision={handleStory2Click} back={goBack} />
        </div>
      )}
      {currentStep === 4 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story3 makeDecision={handleStory3Click} back={goBack} />
        </div>
      )}
      {currentStep === 5 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story4 makeDecision={handleStory4Click} back={goBack} />
        </div>
      )}
      {currentStep === 6 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story5 makeDecision={handleStory5Click} back={goBack} />
        </div>
      )}
      {currentStep === 7 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story6 makeDecision={handleStory6Click} back={goBack} />
        </div>
      )}
      {currentStep === 8 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story7 makeDecision={handleStory7Click} back={goBack} />
        </div>
      )}
      {currentStep === 9 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story8 makeDecision={handleStory8Click} back={goBack} />
        </div>
      )}
      {currentStep === 10 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story9
            makeDecision={handleStory9ClickYes}
            makeDecision2={handleStory9ClickNo}
            summary={{
              person,
              meal,
              size,
              toasted,
              bean,
              rice,
              protein,
              salad,
              sauce,
            }}
          />
        </div>
      )}
      {currentStep === 11 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story10 />
        </div>
      )}
    </div>
  );
}

export default StoryHolder;
