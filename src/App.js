import "./App.css";
import RoutesBox from "./components/Routes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurritoForm from "./components/BurritoForm.js";
import StoryHolder from "./components/Animations/StoryHolder.js";

function changeBackground() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    document.body.style.backgroundImage = `url("/1FrontPage-Small.png")`;
  }
}
function App() {
  return (
    <Router>
      <div className="app-container">
        {changeBackground()}
        <Routes>
          <Route path="/BurritoForm" element={<BurritoForm />} />
          <Route path="/BurritoTale" element={<StoryHolder />} />
        </Routes>
        <RoutesBox />
      </div>
    </Router>
  );
}

export default App;
