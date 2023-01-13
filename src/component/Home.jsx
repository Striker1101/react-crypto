import React from 'react'
import register from '../media/registerIcon.svg';
import video from '../media/bg-animation.mp4';
import post1 from "../media/hero-grid-1.png";
import post2 from "../media/hero-grid-2.png";
import post3 from "../media/hero-grid-3.png";
import {Link} from 'react-router-dom'
import context from '../media/animal.png'
export default function Home() {
  return (
    <section id="home">
    <video playsInline autoPlay muted loop id="homeVideo">
        <source src={video} type="video/mp4" width="100%" /> 
        Not supported
    </video>
    <div className="logo">

    <div id="logoText">
      <h4>CRYPTO<p>GRAM</p></h4>
      <img id="context" src={context} alt="" />
    </div> 
    
     </div>

       <div className="poster">
        <div className="regis"> <Link className='regisPic' to={'/register'}><img src={register} alt=" register" style={{ width:"250px", height:"100px"}} /></Link> </div>
        <div className="post img1"><img src={post1} alt=" hero1" /> <h5>Instant payments via smart contact to your wallet</h5></div>
        <div className="post img2"><img src={post2} alt="hero2" /> <h5> 100% of the turnover becomes the income of the participants</h5></div>
        <div className="post img3"><img src={post3} alt="hero3" /> <h5>A community where each other helps to make money, and the distribution of capital is clear and fair</h5></div>
       </div>
</section>
  )
}
