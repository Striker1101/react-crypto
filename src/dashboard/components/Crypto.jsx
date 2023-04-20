import React from "react";

export default function Crypto({ click, submit }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={submit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "10px",
          gap: "5px",
        }}
      >
        <label htmlFor="crypto">
          CryptoCurrency:{" "}
          <select onChange={click} name="coin" id="coin">
            <option selected value="bitcoin">
              Bitcoin
            </option>
            <option value="dogecoin">Dogecoin</option>
            <option value="Tron">Tron</option>
            <option value="ethereum">Ethereum</option>
          </select>
        </label>

        <label htmlFor="amount">
          Amount{" "}
          <span style={{ background: "gold", borderRadius: "3px" }}>USD:</span>
          <input
            onChange={click}
            type="number"
            name="amount"
            id="amount"
            min={100}
          />
        </label>

        <label htmlFor="address">
          Address
          <input onChange={click} type="text" name="address" id="address" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
