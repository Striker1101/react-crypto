import React from "react";

export default function Plans({ handleClick }) {
  const data = [
    {
      name: "bronze",
      per: "30%",
      amount: "$5000",
    },
    {
      name: "silver",
      per: "60%",
      amount: "$15000",
    },
    {
      name: "gold",
      per: "100%",
      amount: "$50000",
    },
    {
      name: "premium",
      per: "200%",
      amount: "unlimited",
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "0", padding: "10px" }}>
        Package
      </h2>
      <div
        style={{
          display: "flex",
          gap: "6px",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "10px 2px",
        }}
      >
        {data.map((e, i) => {
          return (
            <div
              key={i}
              data-amount={e.amount}
              style={{
                width: "100px",
                border: "2px dashed gold",
                borderRadius: "20px 20px",
                overflowX: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightblue",
                cursor: "pointer",
              }}
              className="coins"
              onClick={handleClick}
            >
              <h3 style={{ color: "goldenrod" }}>{e.name}</h3>
              <p>{e.amount}</p>
              <p>{e.per}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
