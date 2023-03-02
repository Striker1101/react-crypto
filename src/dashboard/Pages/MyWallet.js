import React from "react";
import Earning from "../components/Earning";
import OverallPortfolio from "../components/overallPortfolio";
export default function Homepage({ data }) {
  return (
    <div className="container">
      <div className="one">
        <Earning
          amount={data.earning}
          topStat={"Earning"}
          color={"blue"}
          state={"withdrawable"}
        />
        <Earning
          amount={data.deposit}
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
