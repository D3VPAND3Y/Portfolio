import Stars from "./sub-components/particles";
import Home from "./components/Home/Home";
// import Navigation from "./components/navigation/navigation.component";
import "./App.scss";
import Mouse from ".//components/Mouse/Mouse.jsx";
import Header from "./components/Header";
import Navigation from "./components/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";

// import React,{useEffect} from "react";



const App = () => {


  return (
    <>
      <Header />
      <Navigation />
      <div className="pages">
      <Routes>
        <Route path="/" element={ <Home />} />
      <Route path="/about" element={<About/>} />
      </Routes>
      </div>
      <Mouse />
      <Stars />
    </>


  );
}

export default App;