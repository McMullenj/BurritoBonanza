import React, { useState, useEffect } from "react";
import "./StoryHolder.css";
import axios from "axios";
import Story1 from "./Story1.js";

const meals = [
  "Burrito",
  "Bowl",
  "Signature Burrito",
  "Signature Bowl",
  "Quesadilla Stack",
  "Nachos",
];

const yesno = ["Yes", "No"];
const rices = ["White Rice", "Black Rice"];
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
const sizes = ["Big", "Medium", "Small", "NA"];
const proteins = [
  "Barbacoa Beef",
  "Chicken",
  "Lamb",
  "Pulled Pork",
  "Spicy Cauliflower",
];
const sauces = [
  "Basilo",
  "Chipotle",
  "Garlic",
  "Red Chilli",
  "Secret BBQ",
  "Trezigo",
  "Verde",
];

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

  const handleSubmit = async () => {
    try {
      console.log(person);
      await axios.post(
        "https://j2t0zhcnhd.execute-api.ap-southeast-2.amazonaws.com/default/MakeBurritoOrder",
        {
          person: `${person}`,
          meal: `${meal}`,
          rice: `${rice}`,
          salad: `${salad}`,
          protein: `${protein}`,
          sauce: `${sauce}`,
          toasted: `${toasted}`,
          bean: `${bean}`,
          size: `${size}`,
        }
      );
      alert(
        `Successfully Submitted your order\n${person} ${meal} Size: ${size}\nBeans: ${bean} | Rice: ${rice} | ${protein} | Toasted: ${toasted}\nSalads:${salad}\nSauce: ${sauce}`
      );
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
    setPerson(chosenPerson);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <div className={`fade-in ${isFading ? "active" : ""}`}>
          <Story1 makeDecision={handleStory1Click} />
        </div>
      )}
    </div>
  );
}

export default StoryHolder;
