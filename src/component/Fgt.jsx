import React from "react";
import logo from "../media/logo (1).svg";
import media from "../media/rl.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Fgt() {
  return (
    <div id="container">
      <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Retrive Your Password" />
        {/* Add other meta tags as needed */}
      </Helmet>

      <header id="header">
        <div className="headerContainer">
          <div>
            <Link to={"/"}>
              <img className="home" src={logo} alt="logo" />
            </Link>
          </div>
          <h1 className="reg">RETRIVE PASSWORD</h1>
        </div>
      </header>
      <main id="mainContent">
        <img className="mainImage" src={media} alt="logo" />
        <div className="mainContainer">
          <form action="" id="mainForm">
            <label id="motivation">
              {" "}
              please use easy to remember password or backup password with email
              account{" "}
            </label>

            <label htmlFor="email">
              EMAIL
              <input
                required
                type="text"
                name="email"
                id="email"
                placeholder="Johnsmith"
                title="your username goes here"
              />
            </label>
            <input
              type="submit"
              className="submit"
              value="submit"
              title="click to submit your details"
            />
          </form>
          <p>
            back to <Link to={"/login"}>Login</Link>
          </p>
          <p>
            click here to <Link to={"/register"}>Register</Link> a new account
          </p>
        </div>
      </main>
    </div>
  );
}
