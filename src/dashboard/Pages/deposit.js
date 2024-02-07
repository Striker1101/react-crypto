import React, { useRef, useState, useEffect } from "react";
import Coins from "../components/Coins";
import Plans from "../components/Plans";
import close from "../../media/close.svg";
import Button from "@mui/material/Button";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { appFirebase as app, addDeposit, removeField } from "../../firebaseLog";
import bitcoin from "../../media/bitcoin.jpeg";
import dogecoin from "../../media/dogecoin.jpeg";
import eth from "../../media/eth.jpeg";
import trnx from "../../media/trnx.jpeg";
import pending from "../../media/pending.svg";
import success from "../../media/sucess.svg";
import copy from "../../media/copy.svg";
import empthy from "../../media/empthy.svg";
import { Helmet } from "react-helmet";

export default function Deposit() {
  const userID = JSON.parse(localStorage.getItem("userID"));
  const db = getFirestore(app());
  const [info, setInfo] = useState(false);
  const [data, setData] = useState(false);
  // get table data from data base
  async function getUserData() {
    onSnapshot(doc(db, "deposits", userID), (doc) => {
      setData(doc.data().regions);
    });
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
    "bc1q26zexey8443srz2c0rg7qp2dskjsree7zxmvty",
    "DDzW69AmjbVDTjHzbvvxovKQYQyXrZtxPn",
    "TAUqn6FovtNYcXSqrozpgyq1Xv6nieYAF3",
    "0x8f3aBDA88C22Bd3330c89D3cF2fd5C8B49c34109",
  ];
  const qrImgs = [
    // QR code of all available payment method
    bitcoin,
    dogecoin,
    trnx,
    eth,
  ];
  function handleDelete(e) {
    let index =
      e.currentTarget.parentElement.parentElement.getAttribute("data-index");
    // index in array
    let point = data[index];

    removeField("deposits", userID, point);
  }

  function handleCoinClick(e) {
    qrIndex.current = e.currentTarget.getAttribute("data-index");
    setCoins(!coins);
    coin.current = e.currentTarget.getAttribute("data-name");
  }

  function handlePlanClick(e) {
    setPlans(!plans);
    setqrCode(true);
    amount.current = e.currentTarget.getAttribute("data-amount");
    addDeposit(userID, coin.current, amount.current);
  }

  function copied() {
    var range = document.createRange();
    range.selectNode(document.querySelector(".walletAdrress"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
  }
  return (
    <div className="one">
      <Helmet>
        <title>Deposit</title>
        <meta name="description" content="Deposit Page" />
        {/* Add other meta tags as needed */}
      </Helmet>
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
              choose the crypto you wish to make payment
              <p>note: only use the coins listed below</p>
            </li>
            <li>pick from the listed Cryptogram package</li>
            <li>wallet address would be provided</li>
            <li>click copy, go over to your wallet paste and deposit</li>
            <li>after payment submit receipt in logs proof</li>
            <li>credit would reflect in your account as USD max of 2hours</li>
          </ul>
        </div>
        <div>{info ? <h3>wallet address copied, go make payment</h3> : ""}</div>
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
            <div style={{ padding: "10px" }}>
              <p
                style={{
                  float: "right",
                  width: "fit-content",
                  background: "orange",
                  cursor: "pointer",
                }}
              >
                <div
                  onClick={() => {
                    copied();
                  }}
                  style={{ width: "50px", height: "50px" }}
                >
                  <img
                    style={{
                      width: "100%",
                      padding: "5px",
                    }}
                    src={copy}
                    alt="copy"
                    title="copy"
                  />
                </div>
              </p>
              <h4 style={{ textAlign: "center" }}>{coin.current}</h4>
              <p>
                {amount.current} to{" "}
                <span className="walletAdrress">
                  {" "}
                  {wallet[qrIndex.current]}
                </span>
              </p>
            </div>
          )}
        </div>
        <div>
          {qrCode ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <p>Scan QR Code for easy payment</p>
              <img
                src={qrImgs[qrIndex.current]}
                alt=""
                title="scan code for easy payment"
              />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
      <div
        style={{
          minHeight: "300px",
          backgroundColor: "wheat",
          width: "min-content",
          borderRadius: "20px",
          marginTop: "20px",
        }}
        className="depositTable"
      >
        <table style={{ width: "100%", color: "black" }}>
          <caption>Deposit Log</caption>
          <thead>
            <tr>
              <th>Coin </th>
              <th>Amount</th>
              <th>Proof</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.length > 0 ? (
                <>
                  {data.map((e, i) => {
                    return (
                      <>
                        <tr data-index={i}>
                          <th> {e.coin}</th>
                          <th>{e.amount}</th>
                          <th>
                            <Button variant="contained" component="label">
                              Upload
                              <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                              />
                            </Button>
                          </th>
                          <th>
                            {e.status === "pending" ? (
                              <img
                                src={pending}
                                alt="pending"
                                title="pending"
                              />
                            ) : (
                              <img
                                src={success}
                                alt="success"
                                title="success"
                              />
                            )}
                          </th>
                          <th style={{ cursor: "pointer" }}>
                            {e.status === "pending" ? (
                              <img
                                onClick={handleDelete}
                                src={close}
                                alt="close"
                                title="Delete"
                              />
                            ) : (
                              "completed"
                            )}
                          </th>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )
            ) : (
              <div style={{ width: "100%" }}>
                <img style={{ width: "500%" }} src={empthy} alt="empthy" />
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
