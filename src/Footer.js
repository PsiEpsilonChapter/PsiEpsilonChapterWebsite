import React from "react";
import theta_tau_logo from "./theta-tau.png";
import instagram_logo from "./icons/instagram-logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {" "}
        <img className="theta-tau-logo" src={theta_tau_logo} />{" "}
        <div>
          <img src={instagram_logo} />
          <img src={instagram_logo} />
        </div>
        <div className="footer-text"></div>
      </div>
    );
  }
}

export default Footer;
