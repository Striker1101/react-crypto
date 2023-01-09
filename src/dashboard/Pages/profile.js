import React, { useEffect, useRef, useState } from "react";
import WithdrawalFee from "../components/WithdrawalFee";
import AccountUpgrade from "../components/AccountUpgrade";
import { Logout } from "../../firebaseLog";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import {
  doc,
  getDoc,
  getFirestore,
} from"firebase/firestore";
import { appFirebase as app } from "../../firebaseLog";
const db = getFirestore(app());

export default function ProfileTag() {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  async function getUserData() {
    const docRef = doc(db, "accounts", "log");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setData(docSnap.data().log);
    } else {
    }
  }
  useEffect(() => {
    let check = true;
    if (check) {
      getUserData();
      check = false;
    }
  }, []);
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
      <AccountUpgrade />
      <WithdrawalFee />
      <button
        style={{
          background: "red",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          Logout();
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
}
