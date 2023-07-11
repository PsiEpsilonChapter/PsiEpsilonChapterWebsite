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
              <b>Contact:</b>
              <a> psiepsilonchapter@gmail.com </a>
            </div>
            <div>
              <b>Address:</b>
              <a> 1010 W. Green St. Urbana, IL 61801 </a>
            </div>
          </div>
          <b>Socials</b>
          <div className="social-icons">
            <img src={instagram_logo} />
            <img src={facebook_logo} />
            <img src={discord_logo} />
          </div>
        </div>
        <div className="footer-text"></div>
      </div>
    );
  }
}

export default Footer;
