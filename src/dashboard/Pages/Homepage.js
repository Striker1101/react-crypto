import React, { useRef } from "react";
import TechnocalChat from "../components/TechnocalChat";
import Preview from "../components/preview";
import Analysis from "../components/analysis";
import CoinWatch from "../components/coinWatch";
import { Helmet } from "react-helmet";
export default function Homepage() {
  const width = useRef(1000);

  return (
    <div className="container">
      <Helmet>
        <title>Dashboard HomePage</title>
        <meta
          name="description"
          content="Home page for Dashboard, static and dynamic trading signals"
        />
        {/* Add other meta tags as needed */}
      </Helmet>
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
