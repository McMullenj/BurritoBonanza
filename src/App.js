import "./App.css";
import RoutesBox from "./components/Routes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurritoForm from "./components/BurritoForm.js";
import StoryHolder from "./components/Animations/StoryHolder.js";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/BurritoForm" element={<BurritoForm />} />
          <Route path="/StoryHolder" element={<StoryHolder />} />
        </Routes>
        <RoutesBox />
      </div>
    </Router>
  );
}

export default App;
