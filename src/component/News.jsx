import React from 'react'

export default function News() {
    const pStyle = {
        color: "gold"
    }
  return (
<>
<section id="news">
            <div className="newsDiv">
                <h1 className="test animation" style={pStyle}>NEWS</h1>
                <a className= "newsFeed test animation" href="https://meta-force.space/academy/post/42">
                    <div className="newImage">
                    <img src="https://metaforce-hub.fra1.digitaloceanspaces.com/academy/Preview/transformation-eng.jpg" alt="preview" />
                    </div><div id="newsText"><h3>Transformation</h3>
                    <h3 className="date">24 August 2022</h3>
                    <p> The modernized Gram Force system - it is a real 
                        revolution! In the development of the product
                         concept, we are now focusing on the Metaverse,
                          since it is in the closest stage of completion. 
                          And besides, we are already formalizing the 
                          products of the Metave...</p>
                    <p className="reading" style={pStyle}>Read more...</p></div></a>
                <a className= "newsFeed test animation" href="https://meta-force.space/academy/post/41"><div className="newImage">
                    <img src="https://metaforce-hub.fra1.digitaloceanspaces.com/academy/Preview/login_by_forceid-eng.jpg" alt="preview" />
                    </div><div id="newsText"> <h3>Login by ForceID</h3>
                      <h3 className="date">24 August 2022</h3>
                      <p>  The website has now an entrance by ID / wallet
                         number.This is a demo entry to the back office of 
                         any participant. Thus, you can see the cabinets 
                         of your partners. This will help improve your team's
                         communications and build a work strategy.The...</p>
                         <p className="reading" style={pStyle}>Read more...</p>
                      </div></a>
                <a className= "newsFeed test animation" href="https://meta-force.space/academy/post/40"><div className="newImage">
                    <img src="https://metaforce-hub.fra1.digitaloceanspaces.com/academy/News/sfc_update_eng.jpg" alt="preview"/>
                   </div> <div id="newsText"><h3>Update about SFC</h3>
                   <h3 className="date">16 August 2022</h3>
                   <p>  Update about SFC
                    Thanks to a hint from one of our
                     participants, we were able to avoid 
                     a vulnerability in the SFC economy.
                     The risks are associated with
                      possible schemes that would 
                      devalue both the SFC itself and the
                       Royalty NFT pumped by it.
                    nbs...</p>
                    <p className="reading" style={pStyle}>Read more...</p></div></a>
                <div className="newsFeed1 test animation"><p>Time is limited for the first round. Join the Meta Force now and spread the word on your team to be the first in time..</p>
                    <button type="button"><a id="loginPage" href="login.html"> join</a></button></div>
            </div>
        </section>
</>
  )
}
