import React from "react";
import { Link } from "react-router-dom";
import telegram from "../media/Telegram_logo.svg.png";
import video from "../media/bg-animation.mp4";
import logo from "../media/footer-logo.svg";
export default function footer() {
  return (
    <footer id="footer">
      <video playsInline autoPlay muted loop id="footerVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="closing" style={{ color: "white" }}>
        <img src={logo} alt="footer" />
        <a href="/#hts">
          <p>How to start</p>
        </a>
        <a href="https://meta-force.space/academy">
          <p>Academy</p>
        </a>
        <a href="/#news">
          <p>News</p>
        </a>
        <Link to={"/terms"}>Terms</Link>
      </div>

      <div className="end">
        <p>CryptoGram classNameic</p>
        <a
          href="https://t.me/+mTQlbqtYuv1iNDk0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram_logo" style={{ width: "50px" }} />
        </a>

        {/* <a href="https://t.me/+mTQlbqtYuv1iNDk0" target="_blank" rel="noreferrer" >
          <img src={telegram} alt="Telegram_logo" style={{ width: "50px" }} />
        </a> */}
        <p>@ 2023 all Reserved</p>
      </div>
    </footer>
  );
}
