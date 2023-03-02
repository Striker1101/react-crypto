import React from "react";
import { Link } from "react-router-dom";
export default function AccountUpgrade({ type }) {
  return (
    <div
      style={{
        background: "white",
        width: "80%",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div>
        <img src="" alt="" />
        <span>
          <h3>Account upgrade</h3>
        </span>
        <p style={{ color: "green" }}>Package due : </p>
        <span>{type}</span>
      </div>
      <Link to={"/dashboard/upgrade"}>
        <button type="submit" style={{ float: "right" }}>
          Pay Invoice
        </button>
      </Link>
    </div>
  );
}
