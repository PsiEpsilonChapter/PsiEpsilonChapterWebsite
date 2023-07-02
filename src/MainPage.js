import React from "react";
import MainCarousel from "./MainCarousel";
import Orientation from "./Orientation";
import Contact from "./Contact";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.header}
        <MainCarousel />
        <Orientation />
        <Contact />
      </div>
    );
  }
}

export default MainPage;
