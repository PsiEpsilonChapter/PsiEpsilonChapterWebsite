import React, { useState } from "react";
import AppHeader from "./AppHeader";
import MainPage from "./MainPage";
import AppPagesEnum from "./AppPagesEnum.ts";
import Member from "./member";
import member_list from "./member_list";
import Gallery from "./Gallery";
import FamilyTree from "./family_tree";

// import "./App.css";

class App extends React.Component {
  state = {
    currentPage: AppPagesEnum.Home,
  };

  constuctor() {
    this.setState({
      currentPage: AppPagesEnum.Home,
    });

    this.setPage = this.setPage.bind(this);
  }

  setPage = (page) => {
    console.log(
      "setPage called with name " +
        AppPagesEnum[page] +
        " and type " +
        typeof page
    );
    console.log(String(page));
    this.setState({ currentPage: page });
  };

  appHeader = (<AppHeader setPage={this.setPage} />);
  render() {
    console.log("render called");
    // print currentPage
    console.log(this.state.currentPage);

    if (this.state.currentPage === AppPagesEnum.Home) {
      var ret = this.renderHomePage();
    } else if (this.state.currentPage === AppPagesEnum.History) {
      ret = this.renderHistoryPage();
    } else if (this.state.currentPage === AppPagesEnum.Members) {
      ret = this.renderMembersPage();
    } else if (this.state.currentPage === AppPagesEnum.Gallery) {
      ret = this.renderGalleryPage();
    } else {
      ret = this.renderHomePage();
    }
    return ret;
  }

  renderHomePage() {
    return (
      <div className="App">
        <MainPage header={this.appHeader} />
      </div>
    );
  }

  renderHistoryPage() {
    return (
      <div className="App">
        {this.appHeader}
        <MainPage />
      </div>
    );
  }

  renderMembersPage() {
    var retHTML = [];
    for (const [key, value] of Object.entries(member_list.members)) {
      retHTML.push(<Member member={value} />);
    }
    return (
      <div className="App">
        {this.appHeader}
        <div className="member-display">{retHTML}</div>
        <FamilyTree />
      </div>
    );
  }

  renderGalleryPage() {
    return (
      <div className="App">
        {this.appHeader}
        <Gallery />
      </div>
    );
  }
}

export default App;
