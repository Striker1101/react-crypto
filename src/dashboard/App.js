import React from "react";
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
export default function App() {
  return (
    <div style={{ width: "100vw" }}>
      <TopMarket />
      <Header />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/mywallet" element={<MyWallet />} />
        <Route path="/deposit" element={<Deposit  />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/profile" element={<Profile />} />
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
