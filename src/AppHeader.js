import React from "react";
import AppPagesEnum from "./AppPagesEnum.ts";

class AppHeader extends React.Component {
  render() {
    console.log("AppPagesEnum is ");
    console.log(AppPagesEnum);

    return (
      <header className="App-header">
        <div className="header-bar">
          <div onClick={() => this.props.setPage(AppPagesEnum.Home)}>Home</div>

          <div onClick={() => this.props.setPage(AppPagesEnum.Mission)}>
            Mission
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.History)}>
            {" "}
            History{" "}
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.Members)}>
            {" "}
            Members{" "}
          </div>
          <div onClick={() => this.props.setPage(AppPagesEnum.Gallery)}>
            {" "}
            Gallery{" "}
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
