import React from 'react'
import earn1 from '../media/earn-1.webp'
import earn2 from '../media/earn-2.webp'
import earn3 from '../media/earn-3.webp'
import video from '../media/what-effect.mp4'
import pointerY from "../media/pointerY.svg"
import pointerN from "../media/pointerN.svg"
import classic2 from '../media/classic-2.png'
import classic1 from '../media/classic-1.png'
export default function Hts() {
  const pStyle ={color: "gold"}
  return (
    <section id="hts">
            <div className="intro">
                <div className="earning">
                    <h1 className="test">How do i start earning with cryptogram</h1>
                   
                    <div className="earn test animation">
                    <p>01</p>
                      <img src={earn1} alt=" earn1" />
                      <p>Create a wallet and fund it with DAI and a little MATIC (to pay transaction fees).
                         cryptogram works with MetaMask and Trust Wallet.</p>
                    </div>
                    
                    <div className="earn test animation">
                    <p>02</p>
                      <img src={earn2} alt="earn2" />
                      <p>Register on the site.If someone invited you, use his referral link.
                         Check that your upline is correct.</p>
                    </div>

                   <div className="earn test animation">
                   <p>03</p>
                    <img src={earn3} alt="earn3" />
                    <p>Activate levels in Meta Force systems to increase your income. Each system has a different number of levels.</p>
                    </div>
                </div>
                <div className="working">
                    <video playsInline autoPlay muted loop id="workingVideo">
                        <source src={video} type="video/mp4" alt="Tutorial" /> </video>
                    
                    <div className="work">
                        <h1 className="test animation">How does it work ?</h1>
                        <div className="test animation">Gram is a platform that combines a referral
                             program and an automatic algorithm for distributing 
                             affiliate rewards. 
                             The affiliate links in META FORCE are transparent: 
                             they are tied and thanks to the referral link you
                              can see who invited whom, 
                            or who is a upline and who is a
                             downline partner.</div>

                        <div id="workNest test animation">The crypto Gram has three matrix
                             plans (classNameic, Boost and UniteVerse). 
                             All 3 plans have a different logic of the location 
                             of partners in the structure and the accrual of 
                             rewards. Each matrix consists of several levels,
                              to which you can move and get even more profits.
                               The levels are activated only one by one, one by
                             one, and the activation of each next
                             level will cost twice as much
                              as the previous one.</div>
                        <div id="workclassNameic">
                            
                            <h3 className="test animation" style={pStyle}>classNameic</h3>
                            <p className="test animation">The Force of the classNameic program is in its simplicity.
                                    The effectiveness
                                    of which has been tested over a 
                                    long distance.. </p>
                            <div className="workclassNameicMatrix">
                                <img className="test animation" src={classic2} alt="classNameic2" />
                                <div className="classNameicnest test2 animation" >
                                        <p>Matrix s6</p>
                                        <ul>
                                            <li>Two-level matrix</li>
                                            <li>income comes both from personal partners and from 
                                                the spillover of other.
                                            </li>
                                        </ul><p style={pStyle}>
                                            Profit 300% </p>
                                    </div>
                                </div>
                                  
                            <div className="workclassNameicMatrix">
                                <img className="test animation" src={classic1} alt="classNameic-1" />
                                <div className="classNameicnest test2 animation" >
                                    <p>Matrix s8</p>
                                    <ul>
                                        <li>Single level matrix</li>
                                        <li> The fastest profits for active participants.</li>
                                    </ul><p style={pStyle}>Profit 
                                        600%</p>
                                </div>
                            </div>
                        </div>
                        
                        <div><h3 className="test animation" style={pStyle}>UniteVerse</h3>
                        <p>An upgraded system that is suitable for beginners
                             and experienced participants alike
                        </p><h2 >COMMING SOON</h2></div>
                        <div><h3 className="test animation" style={pStyle}>Boost</h3>
                        <p>Boost is designed for those who want to make a
                             powerful leap in income growth and are ready for hard 
                            . Boost combines all the best of the best.
                        </p><h2>COMMING SOON</h2></div>
                    </div>
                </div>
               
                <div className="roadmap" >
                    <div className="stages test2 animation">
                        <div className="stage" data-title="
                       bought the best experts creating effective product " ><p className="letter">Development</p><img src={pointerY} alt="developtment" /></div>
                        <div className="stage" data-title="suitable for beginners, no extra skill required"><p className="letter">classNameic</p><img src={pointerN} alt="developtment"/></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">NFT</p><img src={pointerN} alt=""/></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">Metaverse Demo</p><img src={pointerN} alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">Tactile first produts</p><img src={pointerN}alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">IDO + Uniteverse</p><img src={pointerN} alt=""/></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">Boost</p><img src={pointerN} alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">Tactile-program & products</p><img src={pointerN} alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter">Marketplace</p><img src={pointerN}alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter"> NFT platform</p><img src={pointerN} alt=""/></div>
                        <div className="stage" data-title="Coming soon"><p className="letter"> Metaverse</p><img src={pointerN} alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter"> social network</p><img src={pointerN} alt="" /></div>
                        <div className="stage" data-title="Coming soon"><p className="letter"> X Lotto</p><img src={pointerN} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
  )
}
