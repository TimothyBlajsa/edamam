import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/componentMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Recipes from "./pages/recipes";
import Upload from "./pages/upload";
import Favorites from "./pages/favorite";

function App() {
  return (
    <>
    <div className='banner'><img src='logo.png' alt='' ></img></div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/favorite' element={<Favorites />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;