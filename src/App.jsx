import Stars from "./sub-components/particles";
import Home from "./components/Home/Home";
import "./App.scss";
import Mouse from ".//components/Mouse/Mouse.jsx";
import Header from "./components/Header/Header";
import Navigation from "./components/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Project";


const App = () => {


  return (
    <>
      <Header />
      <Navigation />
      <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="footer">
      <Footer />
      </div>
      </div>
      <Mouse />
      <Stars />
    </>


  );
}

export default App;