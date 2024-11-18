import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Testimonial from "./Components/Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import ScrollToTopIcon from "./Components/ScrollToTopIcon";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollToTopIcon />
    </div>
  );
};

export default App;
