import React from 'react'
import telegram from "../media/Telegram_logo.svg.png"
import video from "../media/bg-animation.mp4"
import logo from "../media/footer-logo.svg" 
export default function footer() {
  return (
     <footer id="footer">
         <video playsInline autoPlay muted loop id="footerVideo">
           <source src={video} type="video/mp4" /> 
         </video>
         <div className="closing">
            <img src={logo} alt="footer" />
            <a href="#hts"><p>How to start</p></a>
           <a href="https://meta-force.space/academy"><p>Academy</p></a>
            <a href="#news"><p>News</p></a>
          </div>

        <div className="end">
          <p>CryptoGram classNameic</p> 
          <a href="@universal_cryptogram">
            <img src={telegram} alt="Telegram_logo" style={{ width:"50px"}} />
          </a>
        <p>@ 2022 all Reserved</p>
        </div>
    </footer>
  )
}
