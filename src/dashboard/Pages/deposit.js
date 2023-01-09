import React, { useRef, useState, useEffect } from "react";
import Coins from "../components/Coins";
import Plans from "../components/Plans";
import { addDeposit } from "../../firebaseLog";

import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { appFirebase as app } from "../../firebaseLog";

export default function Deposit() {
  const db = getFirestore(app());
  const [data, setData] = useState(false);
  async function getUserData() {
    const docRef = doc(db, "deposit", "data");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setData(docSnap.data().regions);
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

  const [coins, setCoins] = useState(true);
  const [plans, setPlans] = useState(true);
  const [qrCode, setqrCode] = useState(false);
  const coin = useRef("");
  const amount = useRef("");
  const qrIndex = useRef(null);
  const wallet = [
    //wallets address
    "wallet btc",
    "wallet dogecoin",
    "wallet tron",
    "wallet eth",
  ];
  const qrImgs = [
    // QR code of all available payment method
  ];

  function handleCoinClick(e) {
    qrIndex.current = e.currentTarget.getAttribute("data-index");
    setCoins(!coins);
    coin.current = e.currentTarget.getAttribute("data-name");
  }
  function handlePlanClick(e) {
    setPlans(!plans);
    setqrCode(true);
    amount.current = e.currentTarget.getAttribute("data-amount");
    addDeposit(coin.current, amount.current);
  }

  return (
    <div className="one">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          Follow this steps to make deposit
          <ul>
            <li>
              {" "}
              choose the cryoto you wish to pay withdrawable
              <p>note: only use the coins listed below</p>
            </li>
            <li>pick from the listed Cryptogram package</li>
            <li>wallet address would be provided</li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "wheat",
            color: "white",
            width: "80%",
            borderRadius: "20px",
            paddingTop: "10px",
            color: "black",
          }}
        >
          {coins ? (
            <Coins handleClick={handleCoinClick} />
          ) : plans ? (
            <Plans handleClick={handlePlanClick} />
          ) : (
            <div>
              <p
                style={{
                  float: "right",
                  width: "fit-content",
                  background: "orange",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                copy
              </p>
              <h4 style={{ textAlign: "center" }}>{coin.current}</h4>
              <p>
                {amount.current} to {wallet[qrIndex.current]}
              </p>
            </div>
          )}
        </div>
        <div>
          {qrCode ? (
            <img
              src={qrImgs[qrIndex.current]}
              alt=""
              title="scan code for easy payment"
            />
          ) : (
            " "
          )}
        </div>
      </div>
      <div
        style={{
          height: "500px",
          backgroundColor: "wheat",
          width: 'fit-content',
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <table style={{ width: "100%", color: "black" }}>
          <caption>Deposit Log</caption>
          <thead>
            <tr>
              
              <th>Coin </th>
              <th>Amount</th>
              <th>Proof</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.length > 0 ? (
                <>
                  {data.map((e, i) => {
                
                    return (
                      <>
                        <tr>
                          
                          <th> {e.coin}</th>
                          <th>{e.amount}</th>
                          <th><input type="file" accept="image/*" multiple /></th>
                          <th>pending</th>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )
            ) : (
              "Loading"
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
