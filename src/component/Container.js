import React from "react";
import Home from "./Home";
import Hts from "./Hts";
import Meaning from "./Meaning";
import Footer from "./footer";
import News from "./News";
import Proofs from "./Proofs";
export default function Container() {
  return (
    <div id="container">
      <Home />
      <Meaning />
      <Hts />
      <Proofs />
      <News />
      <Footer />
    </div>
  );
}
