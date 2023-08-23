import AppPagesEnum from "./AppPagesEnum.ts";
import React from "react";
import history_icon from "./icons/history.png";
import gallery_icon from "./icons/gallery.png";
import home_icon from "./icons/home.png";
import mission_icon from "./icons/mission.png";
import members_icon from "./icons/members.png";
import silly_icon from "./icons/silly.png";

class HeaderCollection extends React.Component {
  render() {
    return (
      <div id="header-collection" className="header-bar">
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Home);
            this.toggleModal();
          }}
        >
          <img src={home_icon} />
          Home
        </div>

        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Mission);
            this.toggleModal();
          }}
        >
          <img src={mission_icon} />
          What We Do
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.History);
            this.toggleModal();
          }}
        >
          <img src={history_icon} /> History{" "}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Members);
            this.toggleModal();
          }}
        >
          <img id="members-icon" src={members_icon} /> Members{" "}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Gallery);
            this.toggleModal();
          }}
        >
          <img src={gallery_icon} /> Gallery{" "}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Silly);
            this.toggleModal();
          }}
        >
          <img src={silly_icon} style={{ height: "4vh", width: "auto" }} />{" "}
          Silly{" "}
        </div>
        <div>🇺🇸 EN</div>
      </div>
    );
  }
}

export default HeaderCollection;
