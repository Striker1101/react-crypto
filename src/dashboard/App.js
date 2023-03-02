import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Deposit from "./Pages/deposit";
import MyWallet from "./Pages/MyWallet";
import { Helmet } from "react-helmet";
import Homepage from "./Pages/Homepage";
import Header from "./components/Header";
import TopMarket from "./components/TopMarket";
import Withdraw from "./Pages/withdraw";
import Profile from "./Pages/profile";
import Upgrade from "./Pages/Upgrade";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { appFirebase as app } from "../firebaseLog";

const db = getFirestore(app());

export default function App() {
  const userID = JSON.parse(localStorage.getItem("userID"));
  const [data, setData] = useState(false);
  async function getUserData() {
    const docRef = doc(db, "accounts", userID);
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
    <div style={{ width: "100vw" }}>
      <TopMarket />
      <Header />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/mywallet" element={<MyWallet data={data} />} />
        <Route path="/deposit" element={<Deposit data={data} />} />
        <Route path="/withdraw" element={<Withdraw data={data} />} />
        <Route path="/profile" element={<Profile data={data} />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
      <Helmet>
        <script
          src="//code.tidio.co/zfviibc688bcgafib3xzgdmtp5lbdkub.js"
          async
        ></script>
      </Helmet>
    </div>
  );
}
