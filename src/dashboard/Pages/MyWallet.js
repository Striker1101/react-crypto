import React from "react";
import Earning from "../components/Earning";
import { Helmet } from "react-helmet";

import Transaction from "../components/Transaction";
export default function Homepage({ data }) {
  return (
    <div className="container">
      <Helmet>
        <title>Account</title>
        <meta name="description" content="User Account and Earnings " />
        {/* Add other meta tags as needed */}
      </Helmet>
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
        <Transaction />
      </div>
    </div>
  );
}
