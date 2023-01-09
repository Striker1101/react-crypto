import React from "react";
import Home from "./Home";
import Hts from "./Hts";
import Meaning from "./Meaning";
import Footer from "./footer";
import News from "./News";
export default function Container() {
  return (
    <div id="container">
      <Home />
      <Meaning />
      <Hts />
      <News />
      <Footer />
    </div>
  );
}
