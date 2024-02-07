import React from "react";
import "../register.css";
import logo from "../media/logo (1).svg";
import img from "../media/rl2.svg";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

export default function registerJsx() {
  return (
    <div id="container">
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Join us today " />
        {/* Add other meta tags as needed */}
      </Helmet>
      <header id="header">
        <div className="headerContainer">
          <Link to={"/"}>
            <img className="home" src={logo} alt="logo" />
          </Link>
          <h1 className="reg">REGISTER WITH US </h1>
        </div>
      </header>
      <main id="mainContent">
        <img className="mainImage" src={img} alt="logo" />
        <div className="mainContainer">
          <p>
            You know you need something like this in your life to help you
            realize your deepest dreams.
          </p>
          <p>Sign up now, lets get you there</p>
          <p>You know you want to.</p>
          <form id="Form">
            <label htmlFor="motivation" id="motivation">
              Let's do this!
            </label>
            <label htmlFor="fName">
              FIRST NAME
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="John"
                required
                title="first name goes here"
              />
            </label>
            <label htmlFor="lName">
              LAST NAME
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="Smith"
                required
                title=" last name goes here name "
              />
            </label>
            <label htmlFor="email">
              EMAIL
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="Johnsmith@gmail.com"
                title="email address goes here"
              />
            </label>
            <label htmlFor="username">
              USERNAME
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="johnSmith"
                title="pick your username"
              />
            </label>

            <label htmlFor="country">
              COUNTRY
              <input
                name="country"
                id="country"
                placeholder="New York, US"
                title="country address goes here"
              />
            </label>

            <label htmlFor="phone-number">
              PHONE NUMBER
              <input
                type="tel"
                name="phone-number"
                required
                id="phone-number"
                placeholder="+1(860)46787"
                title="phone number goes here "
              />
            </label>

            <label htmlFor="PASSWORD">
              PASSWORD
              <input
                type="password"
                name="password"
                required
                id="password"
                title="password goes here"
              />
            </label>

            <label htmlFor="CONFIRM PASSWORD">
              CONFIRM PASSWORD
              <input
                type="password"
                name="cPassword"
                required
                id="cPassword"
                title="confirm your password"
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
            Already have an accout? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
