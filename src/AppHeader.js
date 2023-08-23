import React from "react";
import AppPagesEnum from "./AppPagesEnum.ts";
import PsiEps from "./PsiEps.png";
import HeaderCollection from "./HeaderCollection.js";
// import members_icon from "./icons/members.png"

class AppHeader extends React.Component {
  constructor() {
    super();
    this.headerCollection = <HeaderCollection />;
  }
  render() {
    console.log("AppPagesEnum is ");
    console.log(AppPagesEnum);

    return (
      <div>
        <div className="under-construction">
          <b>!</b>

          <b>Website under construction</b>

          <b>!</b>
        </div>

        <head>
          <link rel="icon" href={PsiEps} />
          <title> Psi Epsilon Chapter </title>
        </head>
        <div className="App-header">{this.headerCollection}</div>
      </div>
    );
  }
}

export default AppHeader;
