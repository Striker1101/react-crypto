import React from "react";
import WithdrawalFee from "../components/WithdrawalFee";
import AccountUpgrade from "../components/AccountUpgrade";
import { Logout } from "../../firebaseLog";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";

export default function ProfileTag({ data }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        color: "black",
      }}
    >
      <h2
        style={{
          borderRadius: "20px",
          background: "lightblue",
          color: "black",
          textAlign: "center",
          width: "100%",
        }}
      >
        USER PROFILE
      </h2>
      <Profile user={data} />
      <AccountUpgrade type={data.accountType} />
      <WithdrawalFee />
      <button
        style={{
          background: "red",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => {
          Logout();
          navigate("/");
          localStorage.setItem("key", false);
        }}
      >
        logout
      </button>
    </div>
  );
}
