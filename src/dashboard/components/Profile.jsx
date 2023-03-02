import React from "react";
import dummy from "../../media/dummy.png";
export default function Profile({ user }) {
  console.log(user);
  if (user) {
   var date = new Date(parseInt(user.created)).toDateString();
    console.log(date);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100%",
      }}
    >
      <img
        style={{
          borderRadius: "20px",
        }}
        src={user ? (user.photo == null ? dummy : user.photo) : dummy}
        alt="profile "
      />
      <div
        style={{
          background: "lightblue",
          color: "black",
          width: "80%",
          borderRadius: "20px",
          paddingLeft: "20px",
        }}
      >
        {user ? (
          <>
            <p>Email: {user.email}</p>
            <p>Country: {user.country} </p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Trading Plan: {"none"}</p>
            <p>
              Account Status: {user.verified ? "verified" : "not verified"}{" "}
            </p>
            <p>Date Created: {date}</p>
          </>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}
