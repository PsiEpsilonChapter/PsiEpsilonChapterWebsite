import React from "react";
import theta_tau_logo from "./theta-tau.png";
import instagram_logo from "./icons/instagram-logo.png";
import facebook_logo from "./icons/facebook-logo.png";
import discord_logo from "./icons/discord-logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {" "}
        <img className="theta-tau-logo" src={theta_tau_logo} />{" "}
        <div>
          <div>
            <div>
              <div className="big">Contact</div>
              <p> psiepsilonchapter@gmail.com </p>
            </div>
            <div>
              <div className="big">Address</div>
              <p> 1010 W. Green St. Urbana, IL 61801 </p>
            </div>
            <div>
              <div className="big">Socials</div>
              <div className="social-icons">
                <img
                  src={instagram_logo}
                  onClick={() => {
                    // direct to instagram page
                    window.open(
                      "https://www.instagram.com/thetataufloridatech/"
                    );
                  }}
                />
                <img
                  src={facebook_logo}
                  onClick={() => {
                    window.open("https://www.facebook.com/FloridaTechThetaTau");
                  }}
                />
                <img src={discord_logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
