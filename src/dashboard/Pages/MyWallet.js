import React from "react";
import Earning from "../components/Earning";
import OverallPortfolio from "../components/overallPortfolio";
export default function Homepage() {
  return (
    <div className="container">
      <div className="one">
        <Earning
          amount={"0.00"}
          topStat={"Earning"}
          color={"blue"}
          state={"withdrawable"}
        />
        <Earning
          amount={"0.00"}
          topStat={"Active deposit"}
          color={"green"}
          state={"locked"}
        />
      </div>
      <div className="step two">
        <OverallPortfolio />
      </div>
    </div>
  );
}
