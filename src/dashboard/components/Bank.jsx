import React from "react";
import CountryList from "./CountryList";
export default function Bank({ click, setCountry, country, submit, bank }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={submit}
        action="#"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "10px",
          gap: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Fill the form correctly</h3>
        <CountryList click={click} setCountry={setCountry} country={country} />
        <label htmlFor="amount">
          Amount{" "}
          <span style={{ background: "gold", borderRadius: "3px" }}>USD:</span>
          <input
            onChange={click}
            type="number"
            name="amount"
            id="amount"
            value={bank.amount}
            min={100}
          />
        </label>

        <label htmlFor="name">
          Bank Name
          <input
            value={bank.name}
            onChange={click}
            type="text"
            name="name"
            id="name"
          />
        </label>

        <label htmlFor="Bankuser">
          Account User
          <input
            vlue={bank.user}
            onChange={click}
            type="text"
            name="user"
            id="user"
          />
        </label>

        <label htmlFor="accountNum">
          Account Number
          <input
            onChange={click}
            type="number"
            value={bank.accountNum}
            name="accountNum"
            id="accountNum"
          />
        </label>

        <label htmlFor="zipCode">
          Zip Code
          <input
            value={bank.zip}
            onChange={click}
            type="number"
            name="zip"
            id="zip"
          />
        </label>

        <label htmlFor="postalCode">
          Postal Code
          <input
            onChange={click}
            type="number"
            name="postalCode"
            id="postalCode"
            value={bank.postalCode}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
