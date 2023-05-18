import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import thetatau from "./theta-tau.png";
import MemberProfile from "./MemberProfile.js";
import MainCarousel from "./MainCarousel";
import Orientation from "./Orientation";
import Contact from "./Contact";
import AppHeader from "./AppHeader";

// import "./App.css";
//

class App extends React.Component {
  render() {
    var memberProf = new MemberProfile();
    return (
      <div className="App">
        <AppHeader />

        <MainCarousel />

        <Orientation />
        <Contact />
      </div>
    );
  }
}

export default App;
