import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import Services from "./Routes/Services";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
