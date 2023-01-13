import React, { useRef } from "react";
import TechnocalChat from "../components/TechnocalChat";
import Preview from "../components/preview";
import Analysis from "../components/analysis";
import CoinWatch from "../components/coinWatch";
export default function Homepage() {
  const width = useRef(1000);

  return (
    <div className="container">
      <div className="step one">
        <Preview />
        <Analysis />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TechnocalChat width={width.current} />
        <CoinWatch />
      </div>
    </div>
  );
}
