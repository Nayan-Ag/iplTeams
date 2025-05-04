import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}

export default App;
