import React, { useState } from "react";
import AppHeader from "./AppHeader";
import MainPage from "./MainPage";
import AppPagesEnum from "./AppPagesEnum.ts";

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
      return (
        <div className="App">
          {" "}
          {this.appHeader} <MainPage />
        </div>
      );
    } else if (this.state.currentPage === AppPagesEnum.About) {
      return (
        <div className="App">
          {this.appHeader}
          <p>About</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          {this.appHeader}
          <p>Default</p>
        </div>
      );
    }
  }

  renderHomePage() {}

  renderHistoryPage() {}

  renderMembersPage() {}

  renderGalleryPage() {}
}

export default App;
