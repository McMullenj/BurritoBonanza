import React, { useState } from "react";
import axios from "axios";
import ItemList from "./ItemList.js";
import ItemListMultiple from "./ItemListMultiple.js";

const people = [
  "Dana",
  "Dan",
  "Alisha",
  "Olivia",
  "Harriet",
  "Charlotte",
  "Fiona",
  "David",
  "Richard",
  "Amanda",
  "Matt",
  "Jack",
  "Jess",
  "Emma",
  "Grace",
  "James",
  "Bjorn",
  "Corey",
  "Sophie",
  "Noah",
  'Other (Add to the "Anything else" section later on)',
];

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

function BurritoForm() {
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
      alert(
        `Successfully Submitted your order\n${person} ${meal} Size: ${size}\nBeans: ${bean} | Rice: ${rice} | ${protein} | Toasted: ${toasted}\nSalads:${salad}\nSauce: ${sauce} Other: ${anything}`
      );
    } catch (error) {
      alert("Something went wrong, please contact James: ", error);
    }
  };

  const handleAnythingChange = (event) => {
    setAnything(event.target.value); // Update the "anything" state with the input value
  };

  return (
    <div>
      <div style={{ paddingBottom: "20px", paddingTop: "50px" }}>
        <div>
          <label>What's your name?:</label>
          <input type="text" placeholder="Name:" onChange={setPerson} />
        </div>
        <div>
          <label>Zambreros Meal</label>
          <ItemList items={meals} onSelectItem={setMeal} />
        </div>
        <div>
          <label>Size (For Burrito, Bowls and Nachos)</label>
          <ItemList items={sizes} onSelectItem={setSize} />
        </div>
        <div>
          <label>Do you want it toasted +$0.5? (burritos only)</label>
          <ItemList items={yesno} onSelectItem={setToasted} />
        </div>
        <div>
          <label>Rice?</label>
          <ItemList items={rices} onSelectItem={setRice} />
        </div>
        <div>
          <label>Beans?</label>
          <ItemList items={yesno} onSelectItem={setBean} />
        </div>
        <div>
          <label>Salads</label>
          <ItemListMultiple items={salads} onSelectItem={setSalad} />
        </div>
        <div>
          <label>Protein</label>
          <ItemList items={proteins} onSelectItem={setProtein} />
        </div>
        <div>
          <label>Sauce</label>
          <ItemListMultiple items={sauces} onSelectItem={setSauce} />
        </div>
        <label>Anything you want to add?</label>
        <input
          type="text"
          placeholder="Add anything"
          value={anything}
          onChange={handleAnythingChange}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ alignItems: "center" }}
      >
        Next
      </button>
    </div>
  );
}

export default BurritoForm;
