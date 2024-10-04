import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
    </main>
  );
};

export default App;
