import React from "react";

export default function Crypto({ click, handle }) {
  function submit() {
    click(true);
  }
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
        <label htmlFor="amount">
          Amount{" "}
          <span style={{ background: "gold", borderRadius: "3px" }}>USD:</span>
          <input
            onChange={handle}
            type="number"
            name="amount"
            id="amount"
            min={100}
          />
        </label>
        <label htmlFor="crypto">
          CryptoCurrency
          <input onChange={handle} type="text" name="coin" id="coin" />
        </label>
        <label htmlFor="address">
          Address
          <input onChange={handle} type="text" name="address" id="address" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
