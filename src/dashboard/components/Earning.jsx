import React from "react";
import earning from "../../media/earning.png";

export default function Earning({ amount, topStat, color, state }) {
  const styled = {
    width: "100%",
    backgroundColor: color,
    color: "wheat",
  };
  return (
    <div style={styled}>
      <p className="homepageTag">{topStat}</p>
      <div>
        <img src={earning} alt="earning" style={{ width: "50px" }} />
        <span>
          USD: ${amount}
          <p>{state}</p>
        </span>
      </div>
    </div>
  );
}
