import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div className="content">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Products />
      </div>
    </Router>

  );
}

export default App;
