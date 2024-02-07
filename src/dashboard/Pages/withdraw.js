import React, { useState } from "react";
import Ask from "../components/Ask";
import Crypto from "../components/Crypto";
import Bank from "../components/Bank";
import Calculator from "../components/Calculator";
import Earning from "../components/Earning";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Withdraw({ data }) {
  const [ask, setAsk] = useState(true);
  const [toggle, setToggle] = useState(null);
  const [reply, setReply] = useState(false);
  const [country, setCountry] = useState(false);
  const [bank, setBank] = useState({
    id: uuidv4(),
    amount: 0,
    name: "",
    user: "",
    accountNum: "",
    zip: "",
    postaCode: "",
  });
  const [crypto, setCrypto] = useState({
    id: uuidv4(),
    amount: "",
    coin: "bitcoin",
    address: "",
  });

  function handleCryptoClick(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setCrypto({
      ...crypto,
      [name]: value,
    });
  }
  function handleBankSubmit(e) {
    e.preventDefault();
    if (bank.amount && bank.name && bank.user && bank.amount > 0) {
      window.scrollTo(0, 0);
      setReply(!reply);
    } else {
      //
      alert("please input details ");
    }
  }
  function handleCryptoSubmit(e) {
    e.preventDefault();
    if (crypto.address && crypto.coin) {
      window.scrollTo(0, 0);
      setReply(!reply);
    } else {
      alert("please enter your details");
    }
  }
  function handleBankClick(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setBank({
      ...bank,
      [name]: value,
    });
  }
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
        gap: "10px",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Helmet>
        <title>Withdraw</title>
        <meta
          name="description"
          content="easily take money from your account "
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <div className="one">
        <div>
          <Earning
            amount={data.earning}
            topStat={"Earning"}
            color={"blue"}
            state={"withdrawable"}
          />
          <Earning
            amount={data.deposit}
            topStat={"saving"}
            color={"green"}
            state={"current"}
          />
        </div>
        <Calculator />
      </div>
      <div>
        {reply && (
          <div className="replyA">
            {parseFloat(data.earning) !== 0 ? (
              <div style={{ width: "80%" }}>
                {toggle ? (
                  <p>
                    Your Transaction with {bank.id} of {bank.amount} has been
                    submitted and is been processed, please check {bank.name}{" "}
                    with account number of {bank.accountNum} for update on your
                    payment
                  </p>
                ) : (
                  <p>
                    {" "}
                    Your Transaction with {crypto.id} of {crypto.amount} is
                    being processed{" "}
                  </p>
                )}
                <h3> Note</h3>
                <h5>
                  {" "}
                  Maximum processing time is 24 hours, if you have any futher
                  issues please drop a message with our customer care
                </h5>
                <button onClick={() => setReply(!reply)}>Go Back</button>
              </div>
            ) : (
              <div>
                <h2 style={{ color: "red" }}>INSUFFICIENT FUNDS</h2>
                <p>
                  Click <Link to={"/dashboard/deposit"}>here</Link> to make
                  deposit
                </p>
                <button onClick={() => setReply(!reply)}>Go Back</button>
              </div>
            )}
          </div>
        )}
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
          <Bank
            submit={handleBankSubmit}
            click={handleBankClick}
            setCountry={setCountry}
            country={country}
            bank={bank}
          />
        ) : (
          <Crypto submit={handleCryptoSubmit} click={handleCryptoClick} />
        )}
      </div>
    </div>
  );
}
