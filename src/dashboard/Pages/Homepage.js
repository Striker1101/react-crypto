import React, { useRef } from "react";
import TechnocalChat from "../components/TechnocalChat";
import Preview from "../components/preview";
import Analysis from "../components/analysis";
import CoinWatch from "../components/coinWatch";
export default function Homepage() {
  const width = useRef(0);

  return (
    <div className="container">
      <div className="step one">
        <Preview />
        <Analysis />
      </div>
      <TechnocalChat width={width.current} />
      <CoinWatch />
    </div>
  );
}
