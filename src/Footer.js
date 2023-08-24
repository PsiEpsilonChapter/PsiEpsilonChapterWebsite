import React from "react";
import theta_tau_logo from "./theta-tau.png";
import instagram_logo from "./icons/instagram-logo.png";
import facebook_logo from "./icons/facebook-logo.png";
import discord_logo from "./icons/discord-logo.png";
import GearUtils from "./Gears.jsx";

class Footer extends React.Component {
  render() {
    var gears = GearUtils.getGearsFooter();
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
              <p>150W. University Boulevard, 32901 Melbourne, FL </p>
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
                <img id="discord_logo" src={discord_logo} />
              </div>
            </div>
          </div>
        </div>
        {gears}
      </div>
    );
  }
}

export default Footer;