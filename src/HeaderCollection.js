import AppPagesEnum from "./AppPagesEnum.ts";
import React from "react";
import history_icon from "./icons/history.png";
import gallery_icon from "./icons/gallery.png";
import home_icon from "./icons/home.png";
import mission_icon from "./icons/mission.png";
import members_icon from "./icons/members.png";
import silly_icon from "./icons/silly.png";
import i18next from "./i18n";

class HeaderCollection extends React.Component {
  render() {
    return (
      <div id="header-collection" className="header-bar">
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Home);
            this.props.toggleModal();
          }}
        >
          <img src={home_icon} />
          {i18next.t("home-title")}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Members);
            this.props.toggleModal();
          }}
        >
          <img id="members-icon" src={members_icon} />{" "}
          {i18next.t("members-title")}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.History);
            this.props.toggleModal();
          }}
        >
          <img src={history_icon} /> {i18next.t("history-title")}
        </div>

        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Gallery);
            this.props.toggleModal();
          }}
        >
          <img src={gallery_icon} /> {i18next.t("gallery-title")}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.JoinUs);
            this.props.toggleModal();
          }}
        >
          <img src={mission_icon} />
          {i18next.t("join-us-title")}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Events);
            this.props.toggleModal();
          }}
        >
          <img src={mission_icon} />
          {i18next.t("events-title")}
        </div>
        <div
          onClick={() => {
            this.props.setPage(AppPagesEnum.Silly);
            this.props.toggleModal();
          }}
        >
          <img src={silly_icon} style={{ height: "4vh", width: "auto" }} />{" "}
          {i18next.t("silly-title")}
        </div>
        <div>🇺🇸 EN</div>
      </div>
    );
  }
}

export default HeaderCollection;
