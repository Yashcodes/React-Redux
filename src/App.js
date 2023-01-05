import "./App.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Shop />
        </div>
      </div>
    </Router>
  );
}

export default App;
