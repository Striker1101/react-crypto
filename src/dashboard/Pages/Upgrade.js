import React, { useRef, useState } from "react";
import Left from "../../media/left.svg";
import Upgrade_btc from "../../media/upgrade-btc.jpg";
import { Helmet } from 'react-helmet';


export default function Upgrade() {
  const [toggle, setToggle] = useState(false);
  const pack = useRef("");
  const index = useRef(0);
  const content = [
    {
      name: "Premium",
      write:
        "Upgrade to our Premium Package and unlock a world of possibilities in the crypto market. Enjoy Lower trading fees, higher withdrawal limits, and priority customer server for a seamless and stress-free investment experience.",
      list: [
        "Stay ahead of the curves in the ever-evolving world of crypto, our premium package gives you access to new cryptocurrencies, cutting edge technology, and exclusive investment opportunities.",
        "Take the guess work out of crypto investing and get exclusive insights and analytics with expect guidance from our top traders.",
        "Enjoy access to real time marketing data and personalized support to take your investment to the next level.",
      ],
      amount: 15000,
      per: 200,
    },
    {
      name: "Gold",
      write:
        "Upgrade to our gold plan and enjoy lower trading fees, hoger withdrawal limits, and priority customer service., as well as premium features like automated trading , advanced trading, advanced charting tools and much more",
      list: [
        "Invest like a pro with our gold plan, Benefiting from personalized portfolio management, in-depth market research, and customized investment strategies tailored to your unique goals and risk tolerance.",
        "Unlock the full potential of crypto market, get access to exclusive investment opportunities, early access to new cryptocurrencies, and expert analysis to help you make informed decisions.",
        "Enjoy advance trading tools, real-time market data, and personalized support to help you make the most of your investments.",
      ],
      amount: 5000,
      per: 100,
    },
    {
      name: "Silver",
      write:
        "Upgrade to our silver package and enjoy more advanced features than our Bronze package, including real-time price alerts, customizable watchlists, and accesss to a wider range of cryptocurriences.",
      list: [
        "Want to dip your toes into the exciting world of crypto without rsking too much? we have got you - our silver package offers a modest investment amount with potential for high returns, making it a great option for cautious investors.",
        "Get more bang for your buck, enjoy lower trading fees, higher withdraws limits, and priority customer service compared to out free package, without breaking the bank.",
        "Looking for an affordable way to start cypto, we got you covered, our silver plan is perfect for begineers and easy to use trading tools are provided by us with basic market data and helpful educational resources to get you started and moving.",
      ],
      amount: 1500,
      per: 60,
    },
    {
      name: "Bronze",
      write:
        "Upgrade to our Bronze plan and enjoy more features, including more detailed market data, and the ability to trade with higher limit.",
      list: [
        "Take your first step towards finicial freedom with our bronze package, with a modest investment amount and the potential for high returns, its a great way to get started in the exciting world of cryto, and we can show you all about it here.",
        "Invest in your future, and enjoy lower trading fees and benefits from our educational resources and support to help you build your knowledge and confidence in the crypto market.",
        "Enjoy basic trading tools, real time market data, and access to a limited range of cryptocurriences to help you start building yout portfolio.",
      ],
      amount: 500,
      per: 30,
    },
  ];
  return (
    <div>
        <Helmet>
        <title>Upgrade Plan</title>
        <meta name="description" content="Take your Trading to the next level with us " />
        {/* Add other meta tags as needed */}
      </Helmet>
      {toggle ? (
        <div className="updateCover">
          <div className="updateCard">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <button
                onClick={() => setToggle(!toggle)}
                style={{ borderRadius: "100px" }}
              >
                <img
                  style={{ width: "30px", height: "30px", color: "white" }}
                  src={Left}
                  alt="left"
                />
              </button>
              <h1 style={{ color: "gold" }}>
                {content[index.current].name} Package
              </h1>
            </div>

            <p>{content[index.current].write}</p>
            <ul>
              {content[index.current].list.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <h4>Join us today by</h4>
            <div>
              Crediting <strong>${content[index.current].amount}</strong> of
              BITCOIN into{" "}
              <strong> bc1qhdppxgxnpuktmkv3cwkk25zz8g9mxw43ryl28f</strong>
            </div>

            <img
              style={{ marginTop: "20px" }}
              src={Upgrade_btc}
              alt="btc qr-code"
            />
            <div>
              <h2> Note:</h2>
              <ul>
                <li>All payment are to be made in bitcoin</li>
                <li>
                  {" "}
                  After payment send receipt to your Group admin for
                  verification
                </li>
                <li>Payment would reflect in account maximum of a day</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            placeContent: "center",
            gap: "20px",
          }}
        >
          {content.map((list, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  pack.current = list;
                  index.current = i;
                  setToggle(!toggle);
                }}
                className="upgrade"
                style={{
                  width: "80%",
                  borderRadius: "20px",
                  backgroundColor: "whitesmoke",
                  textAlign: "center",
                }}
              >
                <h2 style={{ color: "gold" }}>{list.name}</h2>
                <p style={{ color: "green" }}> ${list.amount}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
