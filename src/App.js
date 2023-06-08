import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Alert from "./components/Alert.js";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";


import NoteState from "./context/notes/NoteState";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {

    setAlert({

      message: message,
      type:type

    });
    setTimeout(() => {
      setAlert(null);

    },1500);
  }
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="good" />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
