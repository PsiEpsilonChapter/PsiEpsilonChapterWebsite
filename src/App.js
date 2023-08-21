import React, { useState } from "react";
import AppHeader from "./AppHeader";
import MainPage from "./MainPage";
import AppPagesEnum from "./AppPagesEnum.ts";
import Gallery from "./Gallery";
import FamilyTree from "./family_tree";
import Footer from "./Footer";
import Tree from "./tree.js";
import Members from "./members.js"
import History from "./history.js"

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
    } else if (this.state.currentPage === AppPagesEnum.Silly) {
      ret = this.renderSillySection();
    } else {
      ret = this.renderHomePage();
    }
    return ret;
  }

  renderHomePage() {
    return (
      <div className="App">
        <MainPage header={this.appHeader} />
        <Footer />
      </div>
    );
  }

  renderHistoryPage() {
    return (
      <div className="App">
        {this.appHeader}
        <History />
        <Footer />
      </div>
    );
  }

  renderMembersPage() {
	  return (
      <div className="App">
        {this.appHeader}
        <Members />
      </div>
	  );

  }

  renderGalleryPage() {
    return (
      <div className="App">
        {this.appHeader}
        <Gallery />
        <Footer />
      </div>
    );
  }

	renderSillySection() {
		return(
      <div className="App">
        {this.appHeader}
	      <div className="ver-flex">

			<h1>🤡Under Construction🤡</h1>
	      <h3> Come back later? </h3>
	      <img src="https://i.pinimg.com/originals/d9/1f/97/d91f97ff683eb493ed92f2350cb64579.png" />
	      </div>
        <Footer />
      </div>
		);

	}
}

export default App;
