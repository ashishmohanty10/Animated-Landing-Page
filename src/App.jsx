import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlights";
import Model from "./components/Model";

const App = () => {
  return (
    <main className=" ">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </main>
  );
};

export default App;
