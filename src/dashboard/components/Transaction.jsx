import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { transactions as trans } from "../../firebaseLog";
import OverallPortfolio from "./overallPortfolio";

export default function Transaction() {
  const uid = JSON.parse(localStorage.getItem("userID"));
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions when the component mounts
    const fetchTransactions = async () => {
      const data = await trans(uid);

      setTransactions(data);
    };

    fetchTransactions();
  }, [uid]); // Run effect only when uid changes
  function deleteItem() {
    const ask = prompt(
      "Are you sure about this ? type Yes to continue, click cancel to exit"
    );
    console.log(ask);
  }
  return (
    <div>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <div key={index}>
            <h3>Type: {transaction.type}</h3>
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Coin</th>
                  <th>Status</th>
                  <th>Wallet</th>
                  <th>Time</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {transaction.regions.map((region, regionIndex) => (
                  <tr key={regionIndex} className="transaction-row">
                    <td>{region.amount}</td>
                    <td>{region.description}</td>
                    <td>{region.coin}</td>
                    <td>{region.status}</td>
                    <td>{region.wallet}</td>
                    <td style={{ color: "blue" }}>
                      {region.time
                        ? new Date(region.time.seconds * 1000).toLocaleString()
                        : "N/A"}
                    </td>
                    <td>
                      {region.status === "pending" ? (
                        <button
                          style={{ color: "red", padding: "5px" }}
                          onClick={deleteItem}
                        >
                          {" "}
                          Delete
                        </button>
                      ) : (
                        <button
                          style={{ color: "greeen", padding: "5px" }}
                          disabled
                        >
                          {" "}
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <OverallPortfolio />
      )}
    </div>
  );
}
