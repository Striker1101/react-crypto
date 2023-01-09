import React, { useState } from "react";
import Ask from "../components/Ask";
import Crypto from "../components/Crypto";
import Bank from "../components/Bank";
import Calculator from "../components/Calculator";
import Earning from "../components/Earning";
export default function Withdraw() {
  const [ask, setAsk] = useState(true);
  const [toggle, setToggle] = useState(null);

  function handleProcess() {
    const bank = document.getElementById("bank").checked;
    const crypto = document.getElementById("crypto").checked;
    if (bank) {
      setToggle(true);  
      setAsk(!ask);
    }
    if (crypto) {
      setToggle(false);
      setAsk(!ask);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap:'10px',
        alignItems: "center",
      }}
    >
      <div className="one">
        <div>
          <Earning
            amount={"0.00"}
            topStat={"Earning"}
            color={"blue"}
            state={"withdrawable"}
          />
          <Earning
            amount={"0.00"}
            topStat={"saving"}
            color={"green"}
            state={"current"}
          />
        </div>
        <Calculator />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "wheat",
          color: "black",
          paddingBottom: "10px ",
          borderRadius: "20px",
          width: "70%",
        }}
      >
        {ask ? (
          <Ask handleClick={handleProcess} />
        ) : toggle ? (
          <Bank />
        ) : (
          <Crypto />
        )}
      </div>
    </div>
  );
}
