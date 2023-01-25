import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";

import NoteState from "./context/notes/NoteState";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
