import React, { useState } from "react";
import Ask from "../components/Ask";
import Crypto from "../components/Crypto";
import Bank from "../components/Bank";
import Calculator from "../components/Calculator";
import Earning from "../components/Earning";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getUserDetails, saveTrans } from "../../firebaseLog";

export default function Withdraw({ data }) {
  const [ask, setAsk] = useState(true);
  const [toggle, setToggle] = useState(null);
  const [reply, setReply] = useState(false);
  const [country, setCountry] = useState(false);
  const uid = JSON.parse(localStorage.getItem("userID"));
  const [bank, setBank] = useState({
    amount: 0,
    name: "",
    user: "",
    accountNum: "",
    zip: "",
    postalCode: "",
  });

  const [bankSubmit, setBankSubmit] = useState({
    id: uuidv4(),
    amount: "",
    coin: "direct money transfer",
    wallet: "",
    status: "pending",
    img: "",
    description: "",
  });

  const [crypto, setCrypto] = useState({
    id: uuidv4(),
    amount: "",
    coin: "bitcoin",
    wallet: "",
    status: "pending",
    img: "",
    description: "direct withdraw",
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

  async function handleBankSubmit(e) {
    e.preventDefault();
    const user = await getUserDetails(uid);
    console.log(bankSubmit);
    if (
      bank.amount &&
      bank.name &&
      bank.user &&
      bank.amount > 100 &&
      bank.amount > bankSubmit.deposit + user.earning
    ) {
      window.scrollTo(0, 0);
      setReply(!reply);
    } else {
      try {
        saveTrans("withdraw", uid, bankSubmit).then((res) => {
          alert(`withdraw ${bankSubmit.id} is sucessfull`);
        });
      } catch (error) {
        alert(
          "possible error on withdraw, please contact support on crytogram-universal.hotmail.com"
        );
      }
    }
  }

  async function handleCryptoSubmit(e) {
    e.preventDefault();

    const user = await getUserDetails(uid);
    if (
      crypto.wallet &&
      crypto.coin &&
      crypto.amount > user.deposit + user.earning
    ) {
      window.scrollTo(0, 0);
      setReply(!reply);
    } else {
      //save withdraw details
      try {
        saveTrans("withdraw", uid, crypto).then((res) => {
          alert(`withdraw ${crypto.id} is sucessfull`);
        });
      } catch (error) {
        alert(
          "possible error on withdraw, please contact support on crytogram-universal.hotmail.com"
        );
      }
    }
  }

  function handleBankClick(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // Update the bank state
    setBank({
      ...bank,
      [name]: value,
    });

    // Update the bankSubmit state with the updated bank details
    setBankSubmit((prevState) => ({
      ...prevState,
      wallet: bank.accountNum,
      amount: bank.amount,
      description: `{
        name: ${bank.name},
        user: ${bank.user},
        accountNum: ${bank.accountNum},
        zip: ${bank.zip},
        postalCode: ${bank.postalCode}
      }`,
    }));
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
