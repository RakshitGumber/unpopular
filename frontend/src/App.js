import React from "react";
import Navbar from "./components/Navbar/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Signup from "./components/Signup/index.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Signup />} />
      </Routes>
    </Router>
  );
}
