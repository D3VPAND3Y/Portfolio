import Stars from "./sub-components/particles";
import Home from "./components/home";
// import Navigation from "./components/navigation/navigation.component";
import Preloader from "./components/Preloader";
const App = () => {
  return (
    <>
    <Preloader/>
    <div className="App">
    <Stars />
    {/* <Navigation /> */}
      <Home />
    </div>
    </>

  );
}

export default App;