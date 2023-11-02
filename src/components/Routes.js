import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

function RoutesBox() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "100vh",
        }}
      >
        {isVisible && (
          <div className="box">
            <Link to="/StoryHolder">
              <button onClick={handleClick}>Yes</button>
            </Link>
            <Link to="/BurritoForm">
              <button onClick={handleClick}>No</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoutesBox;
