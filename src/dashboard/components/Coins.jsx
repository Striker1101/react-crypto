import React from "react";
import bitcoin from "../../media/bitcoin.svg";
import tron from "../../media/tron.svg";
import dogcoin from "../../media/dogecoin.svg";
import eth from "../../media/eth.svg";
export default function Coins({ handleClick }) {
  const data = [
    {
      svg: bitcoin,
      name: "Bitcoin",
    },
    {
      svg: dogcoin,
      name: "Dogecoin",
    },
    {
      svg: tron,
      name: "Tron",
    },
    {
      svg: eth,
      name: "Ethereum",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "10px",
      }}
    >
      {data.map((element, i) => {
        return (
          <div
            className="coins"
            data-index={i}
            data-name={element.name}
            key={i}
            style={{
              width: "100px",
              border: "2px dashed gold",
              borderRadius: "20px 20px",
              overflowX: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <img src={element.svg} alt={element.name} />
            <p>{element.name}</p>
          </div>
        );
      })}
    </div>
  );
}
