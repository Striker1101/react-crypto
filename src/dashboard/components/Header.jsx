import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";
export default function Header() {
  return (
    <div style={{ background: "black",}}>
      <div className="log">
        <Link to={"/"}>
          <img src={logo} alt="logo" style={{ width: "50px" }} />
        </Link>
      </div>
      <div className="hamburger">
        <nav role="navigation">
          <div id="menuToggle">
            <input id="checkbox" type="checkbox" />

            <span className="box"></span>
            <span className="box"></span>
            <span className="box"></span>

            <ul id="menu">
              <li>
                <Link to={"/dashboard/"}>Home</Link>
                <br />
              </li>
              <li>
                <Link to={"/dashboard/mywallet"}>My Account</Link>
                <br />
              </li>
              <li>
                <Link to={"/dashboard/upgrade"}>Account Upgrade</Link>
                <br />
              </li>
              <li>
                {" "}
                <Link to={"/dashboard/deposit"}>Deposit</Link>
                <br />
              </li>
              <li>
                {" "}
                <Link to={"/dashboard/withdraw"}>Withdraw</Link>
                <br />
              </li>
              <li>
                <Link to={"/dashboard/profile"}>Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
