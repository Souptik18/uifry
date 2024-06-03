import React from "react";
import Navbar from "./components/LandingPage/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <LandingPage />
      {/* <Features />
      <Advantages />
      <Testimonials />
      <Faq />
      <Footer /> */}
    </div>
  );
}

export default App;
