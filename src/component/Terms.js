import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.svg";
export default function Term() {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <img style={{ width: "50px" }} src={logo} alt="" />
        </Link>
      </header>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>Terms of use of the site.</h2>
        <p style={{ color: "wheat", width: "100vw", margin:'5px' }}>
          The cryptogram.site website is only an interface for interacting with
          smart contracts on the blockchain, and you agree that you use the
          meta-force.site website(s) at your own risk and that the services are
          provided 'as is' and 'as available' without warranty of any kind,
          either express or implied, not expressly stated in the official
          documentation. In addition, no advice or information, oral or written,
          obtained by you from members of the Meta Force community creates any
          warranty that is not expressly stated in the official documentation.
          Under no circumstances will meta-force.site be liable to you or any
          third party for any damages, including but not limited to indirect,
          special, incidental or consequential damages or other damages
          (including damages from loss of business, lost profits, lost savings ,
          business interruption or the like) arising from the use of the
          website(s), customer products or external links and partner websites.
          You, your affiliates and any third parties agree to indemnify and hold
          harmless the Meta Force community from any and all damages claimed as
          a result of the use of services, products, information and resources
          obtained from meta force and/or in any way, including but not limited
          to , spam, account hijacking, identity theft, virus attack, fraudulent
          or criminal activity (including real, suspected, probable or suspected
          fraud/crime). Meta Force shall not be liable under any theory of
          liability, including breach of contract, breach of warranty, tort
          (including negligence), product liability or otherwise, even if
          members of the Meta Force community or its representatives have been
          advised of the possibility of such damages, and even if the remedy
          indicated by Meta Force failed to achieve its primary purpose
        </p>
      </main>
    </div>
  );
}
